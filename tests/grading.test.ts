import { describe, expect, it } from "vitest";
import { answerChoices, questions } from "../src/data/sampleData";
import { gradeQuiz } from "../src/domain/grading";

describe("quiz grading", () => {
  it("grades matching answers against stored answer keys", () => {
    const activityQuestions = questions.filter((question) => question.activityId === "activity-paradigm-matching");
    const choices = answerChoices.filter((choice) =>
      activityQuestions.some((question) => question.id === choice.questionId),
    );

    const result = gradeQuiz(activityQuestions, choices, {
      "question-match-scarcity": "scarcity",
      "question-match-stewardship": "stewardship",
      "question-match-community": "community",
    });

    expect(result).toMatchObject({ score: 6, maxScore: 6 });
    expect(result.answers.every((answer) => answer.correct)).toBe(true);
  });

  it("grades timeline answers in the required order", () => {
    const activityQuestions = questions.filter((question) => question.activityId === "activity-alignment-timeline");
    const choices = answerChoices.filter((choice) =>
      activityQuestions.some((question) => question.id === choice.questionId),
    );

    const correct = gradeQuiz(activityQuestions, choices, {
      "question-alignment-timeline": ["assumption", "scripture", "stakeholders", "metric"],
    });
    const incorrect = gradeQuiz(activityQuestions, choices, {
      "question-alignment-timeline": ["scripture", "assumption", "stakeholders", "metric"],
    });

    expect(correct).toMatchObject({ score: 5, maxScore: 5 });
    expect(incorrect).toMatchObject({ score: 0, maxScore: 5 });
  });
});
