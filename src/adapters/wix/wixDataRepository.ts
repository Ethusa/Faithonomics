import type { ClassroomRepository } from "../classroomRepository";
import { scopedCollectionId } from "./collectionIds";
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

interface WixDataItem {
  _id?: string;
  [key: string]: unknown;
}

interface WixQuery<T extends WixDataItem> {
  eq(field: string, value: unknown): WixQuery<T>;
  limit(value: number): WixQuery<T>;
  ascending(...fields: string[]): WixQuery<T>;
  find(): Promise<{ items: T[] }>;
}

interface WixItemsApi {
  query<T extends WixDataItem>(collectionId: string): WixQuery<T>;
  insert<T extends WixDataItem>(collectionId: string, item: Partial<T>): Promise<T>;
  update<T extends WixDataItem>(collectionId: string, item: T): Promise<T>;
  save<T extends WixDataItem>(collectionId: string, item: Partial<T>): Promise<T>;
}

const loadItems = async (): Promise<WixItemsApi> => {
  const moduleName = "@wix/data";
  const imported = (await import(/* @vite-ignore */ moduleName)) as { items?: WixItemsApi };
  if (!imported.items) {
    throw new Error("Wix Data API is not available in this runtime.");
  }
  return imported.items;
};

const itemId = (item: { id: string }): string => item.id;

const toWixItem = <T extends { id: string }>(item: T): WixDataItem => ({
  ...item,
  _id: item.id,
});

const toActivityCompletionWixItem = (completion: ActivityCompletion): WixDataItem => ({
  ...completion,
  _id: `${completion.memberId}-${completion.activityId}`,
});

export class WixDataClassroomRepository implements ClassroomRepository {
  constructor(private readonly namespace: string) {}

  private collection(key: Parameters<typeof scopedCollectionId>[0]): string {
    return scopedCollectionId(key, this.namespace);
  }

  private async query<T extends WixDataItem>(key: Parameters<typeof scopedCollectionId>[0]): Promise<WixQuery<T>> {
    const items = await loadItems();
    return items.query<T>(this.collection(key));
  }

  async getIdentity(memberId: string): Promise<LearnerIdentity | null> {
    const enrolments = await this.listEnrolmentsByMember(memberId);
    const first = enrolments[0];
    if (!first) {
      return null;
    }
    return {
      memberId,
      contactId: first.contactId,
      email: "",
      displayName: memberId,
      roles: ["learner"],
    };
  }

  async listCourses(): Promise<Course[]> {
    const result = await (await this.query<Course & WixDataItem>("courses")).limit(1000).find();
    return result.items;
  }

  async getCourse(courseIdOrSlug: string): Promise<Course | null> {
    const byId = await (await this.query<Course & WixDataItem>("courses")).eq("_id", courseIdOrSlug).limit(1).find();
    if (byId.items[0]) {
      return byId.items[0];
    }
    const bySlug = await (await this.query<Course & WixDataItem>("courses")).eq("slug", courseIdOrSlug).limit(1).find();
    return bySlug.items[0] ?? null;
  }

  async listModules(courseId: string): Promise<CourseModule[]> {
    const result = await (await this.query<CourseModule & WixDataItem>("modules"))
      .eq("courseId", courseId)
      .ascending("sequence")
      .limit(1000)
      .find();
    return result.items;
  }

  async listLessons(courseId: string): Promise<Lesson[]> {
    const result = await (await this.query<Lesson & WixDataItem>("lessons"))
      .eq("courseId", courseId)
      .ascending("sequence")
      .limit(1000)
      .find();
    return result.items;
  }

  async listActivities(lessonId: string): Promise<Activity[]> {
    const result = await (await this.query<Activity & WixDataItem>("activities")).eq("lessonId", lessonId).limit(1000).find();
    return result.items;
  }

  async listQuestions(activityId: string): Promise<Question[]> {
    const result = await (await this.query<Question & WixDataItem>("questions")).eq("activityId", activityId).limit(1000).find();
    return result.items;
  }

  async listAnswerChoices(questionId: string): Promise<AnswerChoice[]> {
    const result = await (await this.query<AnswerChoice & WixDataItem>("answerChoices")).eq("questionId", questionId).limit(1000).find();
    return result.items;
  }

  async listEnrolmentsByMember(memberId: string): Promise<Enrolment[]> {
    const result = await (await this.query<Enrolment & WixDataItem>("enrolments")).eq("memberId", memberId).limit(1000).find();
    return result.items;
  }

  async listEnrolmentsByCourse(courseId: string): Promise<Enrolment[]> {
    const result = await (await this.query<Enrolment & WixDataItem>("enrolments")).eq("courseId", courseId).limit(1000).find();
    return result.items;
  }

  async insertEnrolment(enrolment: Enrolment): Promise<Enrolment> {
    const items = await loadItems();
    return items.insert<Enrolment & WixDataItem>(this.collection("enrolments"), toWixItem(enrolment));
  }

  async listProgress(enrolmentId: string): Promise<LessonProgress[]> {
    const result = await (await this.query<LessonProgress & WixDataItem>("lessonProgress"))
      .eq("enrolmentId", enrolmentId)
      .limit(1000)
      .find();
    return result.items;
  }

  async saveProgress(progress: LessonProgress): Promise<LessonProgress> {
    const items = await loadItems();
    return items.save<LessonProgress & WixDataItem>(this.collection("lessonProgress"), toWixItem(progress));
  }

  async listActivityCompletions(memberId: string, lessonId: string): Promise<ActivityCompletion[]> {
    const result = await (await this.query<ActivityCompletion & WixDataItem>("activityCompletions"))
      .eq("memberId", memberId)
      .eq("lessonId", lessonId)
      .limit(1000)
      .find();
    return result.items;
  }

  async saveActivityCompletion(completion: ActivityCompletion): Promise<ActivityCompletion> {
    const items = await loadItems();
    return items.save<ActivityCompletion & WixDataItem>(
      this.collection("activityCompletions"),
      toActivityCompletionWixItem(completion),
    );
  }

  async saveQuizAttempt(attempt: QuizAttempt): Promise<QuizAttempt> {
    const items = await loadItems();
    return items.insert<QuizAttempt & WixDataItem>(this.collection("quizAttempts"), toWixItem(attempt));
  }

  async listSubmissions(filter: { memberId?: string; courseId?: string; status?: string }): Promise<Submission[]> {
    let query = await this.query<Submission & WixDataItem>("submissions");
    if (filter.memberId) {
      query = query.eq("memberId", filter.memberId);
    }
    if (filter.courseId) {
      query = query.eq("courseId", filter.courseId);
    }
    if (filter.status) {
      query = query.eq("status", filter.status);
    }
    const result = await query.limit(1000).find();
    return result.items;
  }

  async saveSubmission(submission: Submission): Promise<Submission> {
    const items = await loadItems();
    return items.save<Submission & WixDataItem>(this.collection("submissions"), toWixItem(submission));
  }

  async listDiscussionPosts(activityId: string): Promise<DiscussionPost[]> {
    const result = await (await this.query<DiscussionPost & WixDataItem>("discussionPosts"))
      .eq("activityId", activityId)
      .limit(1000)
      .find();
    return result.items;
  }

  async listDiscussionReplies(postId: string): Promise<DiscussionReply[]> {
    const result = await (await this.query<DiscussionReply & WixDataItem>("discussionReplies"))
      .eq("postId", postId)
      .limit(1000)
      .find();
    return result.items;
  }

  async saveDiscussionPost(post: DiscussionPost): Promise<DiscussionPost> {
    const items = await loadItems();
    return items.save<DiscussionPost & WixDataItem>(this.collection("discussionPosts"), toWixItem(post));
  }

  async saveDiscussionReply(reply: DiscussionReply): Promise<DiscussionReply> {
    const items = await loadItems();
    return items.save<DiscussionReply & WixDataItem>(this.collection("discussionReplies"), toWixItem(reply));
  }

  async saveMark(mark: Mark): Promise<Mark> {
    const items = await loadItems();
    return items.save<Mark & WixDataItem>(this.collection("marks"), toWixItem(mark));
  }

  async saveFeedback(feedback: Feedback): Promise<Feedback> {
    const items = await loadItems();
    return items.save<Feedback & WixDataItem>(this.collection("feedback"), toWixItem(feedback));
  }

  async saveCertificate(certificate: Certificate): Promise<Certificate> {
    const items = await loadItems();
    return items.save<Certificate & WixDataItem>(this.collection("certificates"), toWixItem(certificate));
  }

  async saveAIUsage(usage: AIUsage): Promise<AIUsage> {
    const items = await loadItems();
    return items.insert<AIUsage & WixDataItem>(this.collection("aiUsage"), toWixItem(usage));
  }

  async countAIUsage(memberId: string, sinceIso: string): Promise<number> {
    const result = await (await this.query<AIUsage & WixDataItem>("aiUsage")).eq("memberId", memberId).limit(1000).find();
    return result.items.filter((usage) => usage.createdAt >= sinceIso).length;
  }

  async appendAuditLog(log: AuditLog): Promise<AuditLog> {
    const items = await loadItems();
    return items.insert<AuditLog & WixDataItem>(this.collection("auditLogs"), toWixItem(log));
  }

  async buildReportRows(courseId?: string): Promise<ReportRow[]> {
    const selectedCourse = courseId ? await this.getCourse(courseId) : null;
    const courses = courseId ? (selectedCourse ? [selectedCourse] : []) : await this.listCourses();
    const rows = await Promise.all(
      courses.filter((course): course is Course => course !== null).map(async (course) => {
        const [modules, lessons, enrolments] = await Promise.all([
          this.listModules(course.id),
          this.listLessons(course.id),
          this.listEnrolmentsByCourse(course.id),
        ]);
        return enrolments.flatMap((enrolment) =>
          lessons.map((lesson) => {
            const module = modules.find((item) => item.id === lesson.moduleId);
            return {
              learnerName: enrolment.memberId,
              courseTitle: course.title,
              moduleTitle: module?.title ?? "Unassigned",
              lessonTitle: lesson.title,
              completionStatus: "notStarted" as const,
              score: null,
              lastActivityAt: null,
            };
          }),
        );
      }),
    );
    return rows.flat();
  }
}

export const wixDataDocumentId = itemId;
