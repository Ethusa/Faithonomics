import type {
  Activity,
  ActivityCompletion,
  AnswerChoice,
  AIUsage,
  AuditLog,
  Certificate,
  Course,
  CourseModule,
  DiscussionPost,
  DiscussionReply,
  Enrolment,
  Feedback,
  LearnerIdentity,
  Lesson,
  LessonProgress,
  Mark,
  Question,
  QuizAttempt,
  ReportRow,
  Submission,
} from "../domain/types";

export interface ClassroomRepository {
  getIdentity(memberId: string): Promise<LearnerIdentity | null>;
  listCourses(): Promise<Course[]>;
  getCourse(courseIdOrSlug: string): Promise<Course | null>;
  listModules(courseId: string): Promise<CourseModule[]>;
  listLessons(courseId: string): Promise<Lesson[]>;
  listActivities(lessonId: string): Promise<Activity[]>;
  listQuestions(activityId: string): Promise<Question[]>;
  listAnswerChoices(questionId: string): Promise<AnswerChoice[]>;
  listEnrolmentsByMember(memberId: string): Promise<Enrolment[]>;
  listEnrolmentsByCourse(courseId: string): Promise<Enrolment[]>;
  insertEnrolment(enrolment: Enrolment): Promise<Enrolment>;
  listProgress(enrolmentId: string): Promise<LessonProgress[]>;
  saveProgress(progress: LessonProgress): Promise<LessonProgress>;
  listActivityCompletions(memberId: string, lessonId: string): Promise<ActivityCompletion[]>;
  saveActivityCompletion(completion: ActivityCompletion): Promise<ActivityCompletion>;
  saveQuizAttempt(attempt: QuizAttempt): Promise<QuizAttempt>;
  listSubmissions(filter: { memberId?: string; courseId?: string; status?: string }): Promise<Submission[]>;
  saveSubmission(submission: Submission): Promise<Submission>;
  listDiscussionPosts(activityId: string): Promise<DiscussionPost[]>;
  listDiscussionReplies(postId: string): Promise<DiscussionReply[]>;
  saveDiscussionPost(post: DiscussionPost): Promise<DiscussionPost>;
  saveDiscussionReply(reply: DiscussionReply): Promise<DiscussionReply>;
  saveMark(mark: Mark): Promise<Mark>;
  saveFeedback(feedback: Feedback): Promise<Feedback>;
  saveCertificate(certificate: Certificate): Promise<Certificate>;
  saveAIUsage(usage: AIUsage): Promise<AIUsage>;
  countAIUsage(memberId: string, sinceIso: string): Promise<number>;
  appendAuditLog(log: AuditLog): Promise<AuditLog>;
  buildReportRows(courseId?: string): Promise<ReportRow[]>;
}
