import type { ClassroomRepository } from "../adapters/classroomRepository";
import {
  draftToFeedback,
  enforceAIGuardrails,
  type AIFeedbackRequest,
  type AIProvider,
  StubAIProvider,
} from "../domain/aiFeedback";
import { assertRole } from "../domain/permissions";
import type { LearnerIdentity, Mark } from "../domain/types";

export interface AIAssessmentResult {
  feedbackId: string;
  markId: string;
  requiresHumanReview: boolean;
}

const todayStartIso = (): string => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

export class AIAssessmentService {
  constructor(
    private readonly repository: ClassroomRepository,
    private readonly provider: AIProvider = new StubAIProvider(),
    private readonly dailyLimit = 8,
  ) {}

  async assessWrittenSubmission(
    actor: LearnerIdentity,
    request: AIFeedbackRequest,
  ): Promise<AIAssessmentResult> {
    assertRole(actor, ["lecturer", "administrator"]);
    const usedToday = await this.repository.countAIUsage(request.memberId, todayStartIso());
    if (usedToday >= this.dailyLimit) {
      await this.repository.saveAIUsage({
        id: `ai-limited-${request.submissionId}-${Date.now()}`,
        memberId: request.memberId,
        submissionId: request.submissionId,
        model: "limit",
        promptTokens: 0,
        completionTokens: 0,
        createdAt: new Date().toISOString(),
        status: "limited",
      });
      throw new Error("AI assessment limit reached for this learner today.");
    }

    const draft = enforceAIGuardrails(await this.provider.assess(request));
    const feedback = await this.repository.saveFeedback(
      draftToFeedback(draft, request.submissionId, request.memberId),
    );
    const mark: Mark = await this.repository.saveMark({
      id: `mark-ai-${request.submissionId}`,
      submissionId: request.submissionId,
      memberId: request.memberId,
      lecturerId: actor.memberId,
      score: draft.suggestedScore,
      maxScore: draft.maxScore,
      status: "draft",
      aiSuggested: true,
    });
    await this.repository.saveAIUsage({
      id: `ai-ok-${request.submissionId}-${Date.now()}`,
      memberId: request.memberId,
      submissionId: request.submissionId,
      model: "configured-provider",
      promptTokens: 0,
      completionTokens: 0,
      createdAt: new Date().toISOString(),
      status: "ok",
    });
    return {
      feedbackId: feedback.id,
      markId: mark.id,
      requiresHumanReview: draft.requiresHumanReview,
    };
  }
}
