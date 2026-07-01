import type { ClassroomRepository } from "../classroomRepository";
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
} from "../../domain/types";

type CollectionKey =
  | "identities"
  | "courses"
  | "modules"
  | "lessons"
  | "activities"
  | "questions"
  | "answerChoices"
  | "enrolments"
  | "lessonProgress"
  | "activityCompletions"
  | "quizAttempts"
  | "submissions"
  | "discussionPosts"
  | "discussionReplies"
  | "marks"
  | "feedback"
  | "certificates"
  | "aiUsage"
  | "auditLogs";

type FilterValue = string | number | boolean | null | undefined;

interface SupabaseRecord<T> {
  collection: CollectionKey;
  record_id: string;
  payload: T;
  course_id: string | null;
  module_id: string | null;
  lesson_id: string | null;
  activity_id: string | null;
  question_id: string | null;
  member_id: string | null;
  enrolment_id: string | null;
  post_id: string | null;
  submission_id: string | null;
  status: string | null;
  sequence: number | null;
}

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

const now = (): string => new Date().toISOString();

const stringField = (item: Record<string, unknown>, key: string): string | null =>
  typeof item[key] === "string" ? item[key] : null;

const numberField = (item: Record<string, unknown>, key: string): number | null =>
  typeof item[key] === "number" ? item[key] : null;

const toSupabaseRecord = <T extends object>(
  collection: CollectionKey,
  recordId: string,
  item: T,
): SupabaseRecord<T> => {
  const indexedItem = item as Record<string, unknown>;
  return {
    collection,
    record_id: recordId,
    payload: item,
    course_id: stringField(indexedItem, "courseId"),
    module_id: stringField(indexedItem, "moduleId"),
    lesson_id: stringField(indexedItem, "lessonId"),
    activity_id: stringField(indexedItem, "activityId"),
    question_id: stringField(indexedItem, "questionId"),
    member_id: stringField(indexedItem, "memberId"),
    enrolment_id: stringField(indexedItem, "enrolmentId"),
    post_id: stringField(indexedItem, "postId"),
    submission_id: stringField(indexedItem, "submissionId"),
    status: stringField(indexedItem, "status"),
    sequence: numberField(indexedItem, "sequence"),
  };
};

const bySequence = <T extends { sequence?: number }>(a: T, b: T): number => (a.sequence ?? 0) - (b.sequence ?? 0);

export class SupabaseRestClassroomRepository implements ClassroomRepository {
  private readonly restBaseUrl: string;

  constructor(
    supabaseUrl: string,
    private readonly anonKey: string,
    private readonly tableName = "classroom_records",
  ) {
    this.restBaseUrl = `${trimTrailingSlash(supabaseUrl)}/rest/v1`;
  }

  private headers(extraHeaders: Record<string, string> = {}): HeadersInit {
    return {
      apikey: this.anonKey,
      Authorization: `Bearer ${this.anonKey}`,
      ...extraHeaders,
    };
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.restBaseUrl}/${path}`, {
      ...init,
      headers: this.headers((init.headers as Record<string, string> | undefined) ?? {}),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Supabase request failed (${response.status}): ${detail}`);
    }

    if (response.status === 204) {
      return null as T;
    }

    return (await response.json()) as T;
  }

  private async listRecords<T>(
    collection: CollectionKey,
    filters: Record<string, FilterValue> = {},
    orderBySequence = false,
  ): Promise<T[]> {
    const params = new URLSearchParams({
      select: "payload",
      collection: `eq.${collection}`,
    });

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, `eq.${String(value)}`);
      }
    });

    if (orderBySequence) {
      params.set("order", "sequence.asc.nullslast");
    }

    const rows = await this.request<Array<{ payload: T }>>(`${this.tableName}?${params.toString()}`);
    return rows.map((row) => row.payload);
  }

  private async getRecord<T>(collection: CollectionKey, recordId: string): Promise<T | null> {
    const records = await this.listRecords<T>(collection, { record_id: recordId });
    return records[0] ?? null;
  }

  private async upsertRecord<T extends object>(
    collection: CollectionKey,
    recordId: string,
    item: T,
  ): Promise<T> {
    const params = new URLSearchParams({ on_conflict: "collection,record_id" });
    const records = await this.request<Array<{ payload: T }>>(`${this.tableName}?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify([toSupabaseRecord(collection, recordId, item)]),
    });
    return records[0]?.payload ?? item;
  }

  async getIdentity(memberId: string): Promise<LearnerIdentity | null> {
    const identity = await this.getRecord<LearnerIdentity>("identities", memberId);
    if (identity) {
      return identity;
    }
    const enrolment = (await this.listEnrolmentsByMember(memberId))[0];
    return enrolment
      ? {
          memberId,
          contactId: enrolment.contactId,
          email: "",
          displayName: memberId,
          roles: ["learner"],
        }
      : null;
  }

  async listCourses(): Promise<Course[]> {
    return this.listRecords<Course>("courses");
  }

  async getCourse(courseIdOrSlug: string): Promise<Course | null> {
    const byId = await this.getRecord<Course>("courses", courseIdOrSlug);
    if (byId) {
      return byId;
    }
    return (await this.listCourses()).find((course) => course.slug === courseIdOrSlug) ?? null;
  }

  async listModules(courseId: string): Promise<CourseModule[]> {
    return this.listRecords<CourseModule>("modules", { course_id: courseId }, true);
  }

  async listLessons(courseId: string): Promise<Lesson[]> {
    return this.listRecords<Lesson>("lessons", { course_id: courseId }, true);
  }

  async listActivities(lessonId: string): Promise<Activity[]> {
    return this.listRecords<Activity>("activities", { lesson_id: lessonId }, true);
  }

  async listQuestions(activityId: string): Promise<Question[]> {
    return this.listRecords<Question>("questions", { activity_id: activityId });
  }

  async listAnswerChoices(questionId: string): Promise<AnswerChoice[]> {
    return this.listRecords<AnswerChoice>("answerChoices", { question_id: questionId }, true);
  }

  async listEnrolmentsByMember(memberId: string): Promise<Enrolment[]> {
    return this.listRecords<Enrolment>("enrolments", { member_id: memberId });
  }

  async listEnrolmentsByCourse(courseId: string): Promise<Enrolment[]> {
    return this.listRecords<Enrolment>("enrolments", { course_id: courseId });
  }

  async insertEnrolment(enrolment: Enrolment): Promise<Enrolment> {
    return this.upsertRecord("enrolments", enrolment.id, enrolment);
  }

  async listProgress(enrolmentId: string): Promise<LessonProgress[]> {
    return this.listRecords<LessonProgress>("lessonProgress", { enrolment_id: enrolmentId });
  }

  async saveProgress(progress: LessonProgress): Promise<LessonProgress> {
    return this.upsertRecord("lessonProgress", progress.id, progress);
  }

  async listActivityCompletions(memberId: string, lessonId: string): Promise<ActivityCompletion[]> {
    return this.listRecords<ActivityCompletion>("activityCompletions", {
      member_id: memberId,
      lesson_id: lessonId,
    });
  }

  async saveActivityCompletion(completion: ActivityCompletion): Promise<ActivityCompletion> {
    return this.upsertRecord(
      "activityCompletions",
      `${completion.memberId}-${completion.activityId}`,
      completion,
    );
  }

  async saveQuizAttempt(attempt: QuizAttempt): Promise<QuizAttempt> {
    return this.upsertRecord("quizAttempts", attempt.id, attempt);
  }

  async listSubmissions(filter: { memberId?: string; courseId?: string; status?: string }): Promise<Submission[]> {
    return this.listRecords<Submission>("submissions", {
      member_id: filter.memberId,
      course_id: filter.courseId,
      status: filter.status,
    });
  }

  async saveSubmission(submission: Submission): Promise<Submission> {
    return this.upsertRecord("submissions", submission.id, submission);
  }

  async listDiscussionPosts(activityId: string): Promise<DiscussionPost[]> {
    const posts = await this.listRecords<DiscussionPost>("discussionPosts", { activity_id: activityId });
    return posts.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  }

  async listDiscussionReplies(postId: string): Promise<DiscussionReply[]> {
    const replies = await this.listRecords<DiscussionReply>("discussionReplies", { post_id: postId });
    return replies.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  }

  async saveDiscussionPost(post: DiscussionPost): Promise<DiscussionPost> {
    return this.upsertRecord("discussionPosts", post.id, post);
  }

  async saveDiscussionReply(reply: DiscussionReply): Promise<DiscussionReply> {
    return this.upsertRecord("discussionReplies", reply.id, reply);
  }

  async saveMark(mark: Mark): Promise<Mark> {
    return this.upsertRecord("marks", mark.id, mark);
  }

  async saveFeedback(feedback: Feedback): Promise<Feedback> {
    return this.upsertRecord("feedback", feedback.id, feedback);
  }

  async saveCertificate(certificate: Certificate): Promise<Certificate> {
    return this.upsertRecord("certificates", certificate.id, certificate);
  }

  async saveAIUsage(usage: AIUsage): Promise<AIUsage> {
    return this.upsertRecord("aiUsage", usage.id, usage);
  }

  async countAIUsage(memberId: string, sinceIso: string): Promise<number> {
    const usage = await this.listRecords<AIUsage>("aiUsage", { member_id: memberId });
    return usage.filter((item) => item.createdAt >= sinceIso).length;
  }

  async appendAuditLog(log: AuditLog): Promise<AuditLog> {
    return this.upsertRecord("auditLogs", log.id, log);
  }

  async buildReportRows(courseId?: string): Promise<ReportRow[]> {
    const activeCourses = courseId
      ? (await Promise.all([this.getCourse(courseId)])).filter((course): course is Course => Boolean(course))
      : await this.listCourses();
    const marks = await this.listRecords<Mark>("marks");
    const rows: ReportRow[] = [];

    for (const course of activeCourses) {
      const [courseModules, courseLessons, courseEnrolments] = await Promise.all([
        this.listModules(course.id),
        this.listLessons(course.id),
        this.listEnrolmentsByCourse(course.id),
      ]);

      for (const enrolment of courseEnrolments) {
        const identity = await this.getIdentity(enrolment.memberId);
        const learnerProgress = await this.listProgress(enrolment.id);
        const learnerSubmissions = await this.listSubmissions({
          memberId: enrolment.memberId,
          courseId: course.id,
        });

        courseLessons.sort(bySequence).forEach((lesson) => {
          const module = courseModules.find((item) => item.id === lesson.moduleId);
          const lessonProgress = learnerProgress.find((item) => item.lessonId === lesson.id);
          const submission = learnerSubmissions.find((item) => item.lessonId === lesson.id);
          const mark = submission ? marks.find((item) => item.submissionId === submission.id) : undefined;
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
      }
    }

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
