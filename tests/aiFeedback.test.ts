import { describe, expect, it } from "vitest";
import { buildAssessmentPrompt, enforceAIGuardrails, StubAIProvider } from "../src/domain/aiFeedback";
import { activities } from "../src/data/sampleData";

const reflection = activities.find((activity) => activity.id === "activity-economic-alignment-reflection");

describe("AI feedback guardrails", () => {
  it("keeps the lecturer rubric and no-final-fail rule in the prompt", () => {
    expect(reflection?.rubric).toBeDefined();
    const prompt = buildAssessmentPrompt({
      memberId: "member-learner-001",
      submissionId: "submission-1",
      responseText: "A short response",
      modelAnswer: reflection?.modelAnswer ?? "",
      rubric: reflection?.rubric ?? [],
      gradeLevel: "Grade 12",
    });

    expect(prompt).toContain("Grade 12");
    expect(prompt).toContain("Never issue a final fail decision");
    expect(prompt).toContain("Paradigm clarity");
  });

  it("flags uncertain or zero-score drafts for human review", () => {
    const guarded = enforceAIGuardrails({
      strengths: [],
      missingIdeas: ["No evidence"],
      revisionAdvice: ["Revise the lesson."],
      suggestedScore: -4,
      maxScore: 10,
      requiresHumanReview: false,
      comment: "This is a final fail.",
    });

    expect(guarded.suggestedScore).toBe(0);
    expect(guarded.requiresHumanReview).toBe(true);
    expect(guarded.comment).not.toMatch(/final fail/i);
  });

  it("provides constructive stub feedback for local tests without exposing keys", async () => {
    const provider = new StubAIProvider();
    const draft = await provider.assess({
      memberId: "member-learner-001",
      submissionId: "submission-1",
      responseText: "God owns the work, so business decisions should practice stewardship and make room for others.",
      modelAnswer: reflection?.modelAnswer ?? "",
      rubric: reflection?.rubric ?? [],
      gradeLevel: "Grade 12",
    });

    expect(draft.comment).toContain("lecturer");
    expect(draft.maxScore).toBe(10);
  });
});
