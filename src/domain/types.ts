export type Role = "visitor" | "learner" | "lecturer" | "administrator";

export type LessonContentKind =
  | "text"
  | "scripture"
  | "video"
  | "image"
  | "download"
  | "webLink"
  | "customHtml";

export type ActivityKind =
  | "multipleChoice"
  | "trueFalse"
  | "matching"
  | "ordering"
  | "timeline"
  | "fillBlank"
  | "shortAnswer"
  | "reflection"
  | "fileSubmission"
  | "h5p"
  | "interactiveVideo"
  | "discussion";

export type CompletionStatus = "notStarted" | "inProgress" | "completed";
export type SubmissionStatus = "draft" | "submitted" | "reviewed" | "needsLecturerReview";

export interface LearnerIdentity {
  memberId: string;
  contactId: string;
  email: string;
  displayName: string;
  roles: Role[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  status: "draft" | "published" | "archived";
  pricePlanIds: string[];
  storeProductIds: string[];
  isFree: boolean;
  lecturerIds: string[];
  estimatedHours: number;
  certificateTemplateId: string;
  theme: {
    primary: string;
    accent: string;
  };
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  description: string;
  sequence: number;
  imageUrl?: string;
  imageAlt?: string;
}

export interface LevelAccessCredential {
  moduleId: string;
  levelTitle: string;
  username: string;
  password: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  summary: string;
  sequence: number;
  required: boolean;
  estimatedMinutes: number;
  imageUrl?: string;
  imageAlt?: string;
  content: LessonContentBlock[];
}

export interface LessonContentBlock {
  id: string;
  kind: LessonContentKind;
  title: string;
  body?: string;
  url?: string;
  fileName?: string;
  alt?: string;
  completionRequired?: boolean;
  videoCheckpoint?: VideoCheckpointQuiz;
}

export interface VideoCheckpointQuiz {
  id: string;
  timeSeconds: number;
  durationSeconds?: number;
  title: string;
  questions: VideoCheckpointQuestion[];
  conclusion?: string;
}

export interface VideoCheckpointQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctAnswer: string;
  feedback: string;
}

export interface Activity {
  id: string;
  lessonId: string;
  kind: ActivityKind;
  title: string;
  instructions: string;
  required: boolean;
  maxScore: number;
  embedUrl?: string;
  videoUrl?: string;
  completionMode?: "score" | "postAndReply" | "videoQuestions" | "trustedMessage";
  contentStepId?: string;
  replyRequirement?: number;
  minimumScore?: number;
  videoQuestions?: InteractiveVideoQuestion[];
  rubric?: RubricCriterion[];
  modelAnswer?: string;
}

export interface InteractiveVideoQuestion {
  id: string;
  timeSeconds: number;
  prompt: string;
  choices: string[];
  correctAnswer: string;
}

export interface Question {
  id: string;
  activityId: string;
  prompt: string;
  kind: ActivityKind;
  points: number;
  correctAnswer?: string | string[];
}

export interface AnswerChoice {
  id: string;
  questionId: string;
  label: string;
  value: string;
  isCorrect: boolean;
  matchKey?: string;
  sequence?: number;
}

export interface Enrolment {
  id: string;
  courseId: string;
  memberId: string;
  contactId: string;
  source: "order" | "pricingPlan" | "admin" | "free" | "code";
  sourceId?: string;
  status: "active" | "completed" | "suspended" | "refunded";
  enrolledAt: string;
  completedAt?: string;
}

export interface LessonProgress {
  id: string;
  enrolmentId: string;
  courseId: string;
  lessonId: string;
  memberId: string;
  status: CompletionStatus;
  percent: number;
  lastActivityAt: string;
  completedAt?: string;
}

export interface QuizAttempt {
  id: string;
  activityId: string;
  lessonId: string;
  memberId: string;
  enrolmentId: string;
  answers: Record<string, string | string[]>;
  score: number;
  maxScore: number;
  submittedAt: string;
}

export interface Submission {
  id: string;
  activityId: string;
  lessonId: string;
  courseId: string;
  enrolmentId: string;
  memberId: string;
  contactId: string;
  responseText?: string;
  fileUrl?: string;
  status: SubmissionStatus;
  submittedAt?: string;
}

export interface ActivityCompletion {
  activityId: string;
  memberId: string;
  lessonId: string;
  completed: boolean;
  score: number;
  maxScore: number;
  completedAt: string;
}

export interface DiscussionPost {
  id: string;
  activityId: string;
  memberId: string;
  authorName: string;
  body: string;
  createdAt: string;
}

export interface DiscussionReply {
  id: string;
  postId: string;
  memberId: string;
  authorName: string;
  body: string;
  createdAt: string;
}

export interface Mark {
  id: string;
  submissionId: string;
  memberId: string;
  lecturerId?: string;
  score: number;
  maxScore: number;
  status: "draft" | "approved" | "returned";
  aiSuggested: boolean;
  finalisedAt?: string;
}

export interface Feedback {
  id: string;
  submissionId: string;
  memberId: string;
  authorId: string;
  authorRole: "lecturer" | "ai";
  strengths: string[];
  missingIdeas: string[];
  revisionAdvice: string[];
  comment: string;
  requiresHumanReview: boolean;
  createdAt: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  enrolmentId: string;
  memberId: string;
  certificateNumber: string;
  issuedAt: string;
  verificationUrl: string;
}

export interface LecturerAssignment {
  id: string;
  courseId: string;
  lecturerMemberId: string;
}

export interface AIUsage {
  id: string;
  memberId: string;
  submissionId: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  createdAt: string;
  status: "ok" | "limited" | "error";
}

export interface AuditLog {
  id: string;
  actorMemberId: string;
  action: string;
  entityType: string;
  entityId: string;
  createdAt: string;
  metadata: Record<string, string | number | boolean>;
}

export interface RubricCriterion {
  id: string;
  label: string;
  description: string;
  maxPoints: number;
}

export interface ReportRow {
  learnerName: string;
  courseTitle: string;
  moduleTitle: string;
  lessonTitle: string;
  completionStatus: CompletionStatus;
  score: number | null;
  lastActivityAt: string | null;
}
