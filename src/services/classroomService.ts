import type { ClassroomRepository } from "../adapters/classroomRepository";
import { createEnrolmentFromPayment, type PaymentConfirmation } from "../domain/paymentEnrollment";
import { assertCourseAccess, assertOwnLearnerRecord, assertRole } from "../domain/permissions";
import { calculateCompletionPercent, getContinueLesson, getLessonLockStates, lessonCompletionGate } from "../domain/progress";
import type {
  Activity,
  ActivityCompletion,
  Course,
  DiscussionPost,
  DiscussionReply,
  Enrolment,
  LearnerIdentity,
  Lesson,
  LessonProgress,
  ReportRow,
  Submission,
} from "../domain/types";

export interface LearnerDashboard {
  identity: LearnerIdentity;
  courses: Array<{
    course: Course;
    enrolment: Enrolment;
    completionPercent: number;
    continueLesson: Lesson | null;
  }>;
}

export interface LessonViewModel {
  course: Course;
  lessons: Lesson[];
  lesson: Lesson;
  activities: Activity[];
  lockStates: ReturnType<typeof getLessonLockStates>;
}

export class ClassroomService {
  constructor(private readonly repository: ClassroomRepository) {}

  async getLearnerDashboard(identity: LearnerIdentity): Promise<LearnerDashboard> {
    assertRole(identity, ["learner", "lecturer", "administrator"]);
    const enrolments = await this.repository.listEnrolmentsByMember(identity.memberId);
    const rows = await Promise.all(
      enrolments.map(async (enrolment) => {
        const course = await this.repository.getCourse(enrolment.courseId);
        if (!course) {
          return null;
        }
        const lessons = await this.repository.listLessons(course.id);
        const progress = await this.repository.listProgress(enrolment.id);
        return {
          course,
          enrolment,
          completionPercent: calculateCompletionPercent(lessons, progress, enrolment.id),
          continueLesson: getContinueLesson(lessons, progress, enrolment),
        };
      }),
    );

    return {
      identity,
      courses: rows.filter((row): row is NonNullable<typeof row> => row !== null),
    };
  }

  async getLesson(identity: LearnerIdentity, courseId: string, lessonId: string): Promise<LessonViewModel> {
    const enrolments = await this.repository.listEnrolmentsByMember(identity.memberId);
    assertCourseAccess(identity, courseId, enrolments);
    const course = await this.repository.getCourse(courseId);
    const enrolment = enrolments.find((item) => item.courseId === courseId && item.status === "active");
    if (!course || !enrolment) {
      throw new Error("Course enrolment was not found.");
    }
    const lessons = await this.repository.listLessons(courseId);
    const lesson = lessons.find((item) => item.id === lessonId);
    if (!lesson) {
      throw new Error("Lesson was not found.");
    }
    const progress = await this.repository.listProgress(enrolment.id);
    const lockStates = getLessonLockStates(lessons, progress, enrolment);
    const lockState = lockStates.find((item) => item.lessonId === lessonId);
    if (lockState?.locked) {
      throw new Error(lockState.reason ?? "This lesson is locked.");
    }
    return {
      course,
      lessons,
      lesson,
      activities: await this.repository.listActivities(lessonId),
      lockStates,
    };
  }

  async saveLessonProgress(
    identity: LearnerIdentity,
    input: Omit<LessonProgress, "memberId" | "lastActivityAt">,
  ): Promise<LessonProgress> {
    assertOwnLearnerRecord(identity, identity.memberId);
    const enrolments = await this.repository.listEnrolmentsByMember(identity.memberId);
    assertCourseAccess(identity, input.courseId, enrolments);

    if (input.status === "completed") {
      const enrolment = enrolments.find(
        (item) => item.id === input.enrolmentId && item.courseId === input.courseId && item.status === "active",
      );
      if (!enrolment) {
        throw new Error("Active course enrolment was not found.");
      }

      const lessons = await this.repository.listLessons(input.courseId);
      const lesson = lessons.find((item) => item.id === input.lessonId);
      if (!lesson) {
        throw new Error("Lesson was not found.");
      }

      const [lessonActivities, completions] = await Promise.all([
        this.repository.listActivities(input.lessonId),
        this.repository.listActivityCompletions(identity.memberId, input.lessonId),
      ]);
      const contentCompletionIds = completions
        .filter((completion) =>
          lesson.content.some((block) => block.id === completion.activityId && completion.completed),
        )
        .map((completion) => completion.activityId);
      const gate = lessonCompletionGate(lesson, lessonActivities, completions, contentCompletionIds);
      if (!gate.allowed) {
        throw new Error(`Complete all required lesson steps and activities before finishing this lesson (${gate.completed}/${gate.required}).`);
      }
    }

    const item: LessonProgress = {
      ...input,
      memberId: identity.memberId,
      lastActivityAt: new Date().toISOString(),
    };
    return this.repository.saveProgress(item);
  }

  async saveActivityCompletion(
    identity: LearnerIdentity,
    completion: Omit<ActivityCompletion, "memberId" | "completedAt">,
  ): Promise<ActivityCompletion> {
    assertOwnLearnerRecord(identity, identity.memberId);
    const item: ActivityCompletion = {
      ...completion,
      memberId: identity.memberId,
      completedAt: new Date().toISOString(),
    };
    return this.repository.saveActivityCompletion(item);
  }

  async saveSubmission(identity: LearnerIdentity, submission: Submission): Promise<Submission> {
    assertOwnLearnerRecord(identity, submission.memberId);
    return this.repository.saveSubmission(submission);
  }

  async saveDiscussionPost(
    identity: LearnerIdentity,
    post: Omit<DiscussionPost, "memberId" | "authorName" | "createdAt">,
  ): Promise<DiscussionPost> {
    assertOwnLearnerRecord(identity, identity.memberId);
    return this.repository.saveDiscussionPost({
      ...post,
      memberId: identity.memberId,
      authorName: identity.displayName,
      createdAt: new Date().toISOString(),
    });
  }

  async saveDiscussionReply(
    identity: LearnerIdentity,
    reply: Omit<DiscussionReply, "memberId" | "authorName" | "createdAt">,
  ): Promise<DiscussionReply> {
    assertOwnLearnerRecord(identity, identity.memberId);
    return this.repository.saveDiscussionReply({
      ...reply,
      memberId: identity.memberId,
      authorName: identity.displayName,
      createdAt: new Date().toISOString(),
    });
  }

  async enrolFromPayment(confirmation: PaymentConfirmation): Promise<Enrolment | null> {
    const courses = await this.repository.listCourses();
    const existing = await this.repository.listEnrolmentsByMember(confirmation.memberId);
    const enrolment = createEnrolmentFromPayment(courses, confirmation, existing);
    return enrolment ? this.repository.insertEnrolment(enrolment) : null;
  }

  async createAdminEnrolment(
    actor: LearnerIdentity,
    input: Pick<Enrolment, "courseId" | "memberId" | "contactId">,
  ): Promise<Enrolment> {
    assertRole(actor, ["administrator", "lecturer"]);
    const enrolment: Enrolment = {
      id: `enrol-admin-${input.memberId}-${input.courseId}`,
      courseId: input.courseId,
      memberId: input.memberId,
      contactId: input.contactId,
      source: "admin",
      status: "active",
      enrolledAt: new Date().toISOString(),
    };
    return this.repository.insertEnrolment(enrolment);
  }

  async getReports(actor: LearnerIdentity, courseId?: string): Promise<ReportRow[]> {
    assertRole(actor, ["lecturer", "administrator"]);
    return this.repository.buildReportRows(courseId);
  }
}
