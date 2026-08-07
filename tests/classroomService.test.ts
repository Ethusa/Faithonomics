import { describe, expect, it } from "vitest";
import { createMockRepository } from "../src/adapters/mockRepository";
import { enrolments, identities, lessons } from "../src/data/sampleData";
import { ClassroomService } from "../src/services/classroomService";

describe("ClassroomService completion gates", () => {
  it("keeps learner session access gated by previous completion", async () => {
    const service = new ClassroomService(createMockRepository());

    await expect(
      service.getLesson(
        identities.learner,
        "course-faithonomics-core",
        "level-1-session-2-competing-paradigms",
      ),
    ).rejects.toThrow(/Complete "Session 1: The Daily Grind" first/i);
  });

  it("allows staff to open any session without learner sequence locks", async () => {
    const service = new ClassroomService(createMockRepository());

    const lesson = await service.getLesson(
      identities.lecturer,
      "course-faithonomics-core",
      "level-4-session-3-societal-change",
    );

    expect(lesson.lesson.id).toBe("level-4-session-3-societal-change");
    expect(lesson.lockStates.every((state) => !state.locked)).toBe(true);
  });

  it("rejects completed lesson progress until required step and activity records exist", async () => {
    const service = new ClassroomService(createMockRepository());
    const lesson = lessons.find((item) => item.id === "level-1-session-2-competing-paradigms");
    expect(lesson).toBeDefined();

    const progressInput = {
      id: "progress-service-gate",
      enrolmentId: enrolments[0]!.id,
      courseId: "course-faithonomics-core",
      lessonId: lesson!.id,
      status: "completed" as const,
      percent: 100,
      completedAt: "2026-06-24T09:30:00.000Z",
    };

    await expect(service.saveLessonProgress(identities.learner, progressInput)).rejects.toThrow(
      /required lesson steps and activities/i,
    );

    for (const content of lesson!.content) {
      await service.saveActivityCompletion(identities.learner, {
        activityId: content.id,
        lessonId: lesson!.id,
        completed: true,
        score: 1,
        maxScore: 1,
      });
    }
    await Promise.all(
      ["activity-economic-alignment-reflection", "activity-paradigm-matching"].map((activityId) =>
        service.saveActivityCompletion(identities.learner, {
          activityId,
          lessonId: lesson!.id,
          completed: true,
          score: 10,
          maxScore: 10,
        }),
      ),
    );

    await expect(service.saveLessonProgress(identities.learner, progressInput)).resolves.toMatchObject({
      lessonId: lesson!.id,
      status: "completed",
    });
  });
});
