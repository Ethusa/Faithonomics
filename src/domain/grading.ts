import type { AnswerChoice, Question } from "./types";

export interface GradedAnswer {
  questionId: string;
  correct: boolean;
  awarded: number;
}

export interface GradingResult {
  score: number;
  maxScore: number;
  answers: GradedAnswer[];
}

const normalize = (value: string): string => value.trim().toLowerCase();

const compareAnswer = (
  expected: string | string[] | undefined,
  submitted: string | string[] | undefined,
): boolean => {
  if (expected === undefined || submitted === undefined) {
    return false;
  }
  const expectedValues = Array.isArray(expected) ? expected.map(normalize) : [normalize(expected)];
  const submittedValues = Array.isArray(submitted) ? submitted.map(normalize) : [normalize(submitted)];
  if (expectedValues.length !== submittedValues.length) {
    return false;
  }
  return expectedValues.every((value, index) => submittedValues[index] === value);
};

export const gradeQuiz = (
  questions: readonly Question[],
  choices: readonly AnswerChoice[],
  submitted: Record<string, string | string[]>,
): GradingResult => {
  const graded = questions.map((question) => {
    const correctChoiceValues = choices
      .filter((choice) => choice.questionId === question.id && choice.isCorrect)
      .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
      .map((choice) => choice.value);
    const expected = question.correctAnswer ?? correctChoiceValues;
    const correct = compareAnswer(expected, submitted[question.id]);
    return {
      questionId: question.id,
      correct,
      awarded: correct ? question.points : 0,
    };
  });
  return {
    score: graded.reduce((total, item) => total + item.awarded, 0),
    maxScore: questions.reduce((total, question) => total + question.points, 0),
    answers: graded,
  };
};
