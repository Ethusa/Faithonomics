import {
  activities,
  activityCompletions,
  answerChoices,
  courses,
  discussionPosts,
  discussionReplies,
  enrolments,
  identities,
  lessons,
  modules,
  progress,
  questions,
  submissions,
} from "../data/sampleData";
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
import type { ClassroomRepository } from "./classroomRepository";

const now = (): string => new Date().toISOString();

export class MockClassroomRepository implements ClassroomRepository {
  private readonly identities = new Map<string, LearnerIdentity>(
    Object.values(identities).map((identity) => [identity.memberId, identity]),
  );

  private courses = [...courses];
  private modules = [...modules];
  private lessons = [...lessons];
  private activities = [...activities];
  private questions = [...questions];
  private choices = [...answerChoices];
  private enrolments = [...enrolments];
  private progress = [...progress];
  private activityCompletions = [...activityCompletions];
  private submissions = [...submissions];
  private discussionPosts = [...discussionPosts];
  private discussionReplies = [...discussionReplies];
  private quizAttempts: QuizAttempt[] = [];
  private marks: Mark[] = [];
  private feedback: Feedback[] = [];
  private certificates: Certificate[] = [];
  private aiUsage: AIUsage[] = [];
  private auditLogs: AuditLog[] = [];

  async getIdentity(memberId: string): Promise<LearnerIdentity | null> {
    return this.identities.get(memberId) ?? null;
  }

  async listCourses(): Promise<Course[]> {
    return [...this.courses];
  }

  async getCourse(courseIdOrSlug: string): Promise<Course | null> {
    return this.courses.find((course) => course.id === courseIdOrSlug || course.slug === courseIdOrSlug) ?? null;
  }

  async listModules(courseId: string): Promise<CourseModule[]> {
    return this.modules.filter((module) => module.courseId === courseId).sort((a, b) => a.sequence - b.sequence);
  }

  async listLessons(courseId: string): Promise<Lesson[]> {
    return this.lessons.filter((lesson) => lesson.courseId === courseId).sort((a, b) => a.sequence - b.sequence);
  }

  async listActivities(lessonId: string): Promise<Activity[]> {
    return this.activities.filter((activity) => activity.lessonId === lessonId);
  }

  async listQuestions(activityId: string): Promise<Question[]> {
    return this.questions.filter((question) => question.activityId === activityId);
  }

  async listAnswerChoices(questionId: string): Promise<AnswerChoice[]> {
    return this.choices.filter((choice) => choice.questionId === questionId);
  }

  async listEnrolmentsByMember(memberId: string): Promise<Enrolment[]> {
    return this.enrolments.filter((enrolment) => enrolment.memberId === memberId);
  }

  async listEnrolmentsByCourse(courseId: string): Promise<Enrolment[]> {
    return this.enrolments.filter((enrolment) => enrolment.courseId === courseId);
  }

  async insertEnrolment(enrolment: Enrolment): Promise<Enrolment> {
    this.enrolments = [...this.enrolments, enrolment];
    return enrolment;
  }

  async listProgress(enrolmentId: string): Promise<LessonProgress[]> {
    return this.progress.filter((item) => item.enrolmentId === enrolmentId);
  }

  async saveProgress(item: LessonProgress): Promise<LessonProgress> {
    const existingIndex = this.progress.findIndex((progressItem) => progressItem.id === item.id);
    this.progress =
      existingIndex === -1
        ? [...this.progress, item]
        : this.progress.map((progressItem, index) => (index === existingIndex ? item : progressItem));
    return item;
  }

  async listActivityCompletions(memberId: string, lessonId: string): Promise<ActivityCompletion[]> {
    return this.activityCompletions.filter((item) => item.memberId === memberId && item.lessonId === lessonId);
  }

  async saveActivityCompletion(completion: ActivityCompletion): Promise<ActivityCompletion> {
    const existingIndex = this.activityCompletions.findIndex(
      (item) => item.activityId === completion.activityId && item.memberId === completion.memberId,
    );
    this.activityCompletions =
      existingIndex === -1
        ? [...this.activityCompletions, completion]
        : this.activityCompletions.map((item, index) => (index === existingIndex ? completion : item));
    return completion;
  }

  async saveQuizAttempt(attempt: QuizAttempt): Promise<QuizAttempt> {
    this.quizAttempts = [...this.quizAttempts, attempt];
    return attempt;
  }

  async listSubmissions(filter: { memberId?: string; courseId?: string; status?: string }): Promise<Submission[]> {
    return this.submissions.filter((submission) => {
      if (filter.memberId && submission.memberId !== filter.memberId) {
        return false;
      }
      if (filter.courseId && submission.courseId !== filter.courseId) {
        return false;
      }
      if (filter.status && submission.status !== filter.status) {
        return false;
      }
      return true;
    });
  }

  async saveSubmission(submission: Submission): Promise<Submission> {
    const existingIndex = this.submissions.findIndex((item) => item.id === submission.id);
    this.submissions =
      existingIndex === -1
        ? [...this.submissions, submission]
        : this.submissions.map((item, index) => (index === existingIndex ? submission : item));
    return submission;
  }

  async listDiscussionPosts(activityId: string): Promise<DiscussionPost[]> {
    return this.discussionPosts.filter((post) => post.activityId === activityId);
  }

  async listDiscussionReplies(postId: string): Promise<DiscussionReply[]> {
    return this.discussionReplies.filter((reply) => reply.postId === postId);
  }

  async saveDiscussionPost(post: DiscussionPost): Promise<DiscussionPost> {
    this.discussionPosts = [...this.discussionPosts.filter((item) => item.id !== post.id), post];
    return post;
  }

  async saveDiscussionReply(reply: DiscussionReply): Promise<DiscussionReply> {
    this.discussionReplies = [...this.discussionReplies.filter((item) => item.id !== reply.id), reply];
    return reply;
  }

  async saveMark(mark: Mark): Promise<Mark> {
    this.marks = [...this.marks.filter((item) => item.id !== mark.id), mark];
    return mark;
  }

  async saveFeedback(feedback: Feedback): Promise<Feedback> {
    this.feedback = [...this.feedback.filter((item) => item.id !== feedback.id), feedback];
    return feedback;
  }

  async saveCertificate(certificate: Certificate): Promise<Certificate> {
    this.certificates = [...this.certificates.filter((item) => item.id !== certificate.id), certificate];
    return certificate;
  }

  async saveAIUsage(usage: AIUsage): Promise<AIUsage> {
    this.aiUsage = [...this.aiUsage, usage];
    return usage;
  }

  async countAIUsage(memberId: string, sinceIso: string): Promise<number> {
    return this.aiUsage.filter((usage) => usage.memberId === memberId && usage.createdAt >= sinceIso).length;
  }

  async appendAuditLog(log: AuditLog): Promise<AuditLog> {
    this.auditLogs = [...this.auditLogs, log];
    return log;
  }

  async buildReportRows(courseId?: string): Promise<ReportRow[]> {
    const rows: ReportRow[] = [];
    const activeCourses = courseId ? this.courses.filter((course) => course.id === courseId) : this.courses;

    activeCourses.forEach((course) => {
      const courseModules = this.modules.filter((module) => module.courseId === course.id);
      const courseLessons = this.lessons.filter((lesson) => lesson.courseId === course.id);
      const courseEnrolments = this.enrolments.filter((enrolment) => enrolment.courseId === course.id);
      courseEnrolments.forEach((enrolment) => {
        const identity = this.identities.get(enrolment.memberId);
        courseLessons.forEach((lesson) => {
          const module = courseModules.find((item) => item.id === lesson.moduleId);
          const lessonProgress = this.progress.find(
            (item) => item.enrolmentId === enrolment.id && item.lessonId === lesson.id,
          );
          const submission = this.submissions.find(
            (item) => item.enrolmentId === enrolment.id && item.lessonId === lesson.id,
          );
          const mark = submission ? this.marks.find((item) => item.submissionId === submission.id) : undefined;
          rows.push({
            learnerName: identity?.displayName ?? enrolment.memberId,
            courseTitle: course.title,
            moduleTitle: module?.title ?? "Unassigned",
            lessonTitle: lesson.title,
            completionStatus: lessonProgress?.status ?? "notStarted",
            score: mark?.score ?? null,
            lastActivityAt: lessonProgress?.lastActivityAt ?? submission?.submittedAt ?? null,
          });
        });
      });
    });

    if (rows.length === 0) {
      rows.push({
        learnerName: "No learners yet",
        courseTitle: activeCourses[0]?.title ?? "No course",
        moduleTitle: "",
        lessonTitle: "",
        completionStatus: "notStarted",
        score: null,
        lastActivityAt: null,
      });
    }
    return rows.sort((a, b) => (a.lastActivityAt ?? now()).localeCompare(b.lastActivityAt ?? now()));
  }
}

export const createMockRepository = (): MockClassroomRepository => new MockClassroomRepository();
