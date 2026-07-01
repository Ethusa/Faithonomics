import type { Feedback, RubricCriterion } from "./types";

export interface AIFeedbackRequest {
  memberId: string;
  submissionId: string;
  responseText: string;
  modelAnswer: string;
  rubric: RubricCriterion[];
  gradeLevel: "Grade 12";
}

export interface AIFeedbackDraft {
  strengths: string[];
  missingIdeas: string[];
  revisionAdvice: string[];
  suggestedScore: number;
  maxScore: number;
  requiresHumanReview: boolean;
  comment: string;
}

export interface AIProvider {
  assess(request: AIFeedbackRequest): Promise<AIFeedbackDraft>;
}

export const buildAssessmentPrompt = (request: AIFeedbackRequest): string => {
  const rubricLines = request.rubric
    .map((criterion) => `- ${criterion.label} (${criterion.maxPoints}): ${criterion.description}`)
    .join("\n");

  return [
    "Assess this written classroom response using the lecturer rubric.",
    "Give constructive Grade 12-level feedback.",
    "Identify strengths, missing ideas, and what the learner should revise.",
    "Flag uncertainty for lecturer review.",
    "Never issue a final fail decision; lecturers approve final marks.",
    "",
    `Rubric:\n${rubricLines}`,
    "",
    `Model answer:\n${request.modelAnswer}`,
    "",
    `Learner response:\n${request.responseText}`,
  ].join("\n");
};

export const enforceAIGuardrails = (draft: AIFeedbackDraft): AIFeedbackDraft => {
  const comment = draft.comment.replace(/\b(final fail|failed permanently|cannot pass)\b/gi, "requires lecturer review");
  const maxScore = Math.max(0, draft.maxScore);
  const suggestedScore = Math.min(Math.max(0, draft.suggestedScore), maxScore);
  const uncertain =
    draft.requiresHumanReview ||
    suggestedScore === 0 ||
    draft.missingIdeas.length > draft.strengths.length + 2 ||
    /uncertain|unclear|not enough evidence/i.test(comment);

  return {
    ...draft,
    comment,
    suggestedScore,
    maxScore,
    requiresHumanReview: uncertain,
  };
};

export const draftToFeedback = (
  draft: AIFeedbackDraft,
  submissionId: string,
  memberId: string,
): Feedback => ({
  id: `feedback-ai-${submissionId}`,
  submissionId,
  memberId,
  authorId: "ai",
  authorRole: "ai",
  strengths: draft.strengths,
  missingIdeas: draft.missingIdeas,
  revisionAdvice: draft.revisionAdvice,
  comment: draft.comment,
  requiresHumanReview: draft.requiresHumanReview,
  createdAt: new Date().toISOString(),
});

export class StubAIProvider implements AIProvider {
  async assess(request: AIFeedbackRequest): Promise<AIFeedbackDraft> {
    const rubricTotal = request.rubric.reduce((total, criterion) => total + criterion.maxPoints, 0);
    const response = request.responseText.toLowerCase();
    const modelKeywords = request.modelAnswer
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word.length > 5);
    const matched = modelKeywords.filter((word) => response.includes(word)).length;
    const ratio = modelKeywords.length === 0 ? 0.5 : matched / modelKeywords.length;

    return enforceAIGuardrails({
      strengths: ratio > 0.35 ? ["The response connects to several key ideas."] : ["The learner attempted the reflection."],
      missingIdeas: ratio > 0.65 ? [] : ["Add clearer evidence from the lesson and model answer."],
      revisionAdvice: ["Review the lesson notes, then rewrite one paragraph with a specific example."],
      suggestedScore: Math.round(rubricTotal * Math.min(0.85, Math.max(0.25, ratio))),
      maxScore: rubricTotal,
      requiresHumanReview: ratio < 0.45,
      comment: "This is AI-assisted draft feedback. A lecturer must approve or adjust the final mark.",
    });
  }
}
