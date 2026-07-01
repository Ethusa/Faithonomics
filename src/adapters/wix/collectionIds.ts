export const APP_NAMESPACE_PLACEHOLDER = "<app-namespace>";

export const collectionSuffixes = {
  courses: "courses",
  modules: "modules",
  lessons: "lessons",
  activities: "activities",
  questions: "questions",
  answerChoices: "answer-choices",
  enrolments: "enrolments",
  lessonProgress: "lesson-progress",
  quizAttempts: "quiz-attempts",
  activityCompletions: "activity-completions",
  submissions: "submissions",
  discussionPosts: "discussion-posts",
  discussionReplies: "discussion-replies",
  marks: "marks",
  feedback: "feedback",
  certificates: "certificates",
  lecturerAssignments: "lecturer-assignments",
  aiUsage: "ai-usage",
  auditLogs: "audit-logs",
} as const;

export type CollectionKey = keyof typeof collectionSuffixes;

export const scopedCollectionId = (key: CollectionKey, namespace = APP_NAMESPACE_PLACEHOLDER): string =>
  `${namespace}/${collectionSuffixes[key]}`;
