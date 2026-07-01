import { describe, expect, it } from "vitest";
import { activities, enrolments, identities, lessons, modules, progress } from "../src/data/sampleData";
import {
  calculateCompletionPercent,
  getContinueLesson,
  getLevelLockStates,
  getLessonLockStates,
  lessonCompletionGate,
  requiredActivitiesComplete,
  requiredContentIds,
} from "../src/domain/progress";
import type { ActivityCompletion, LessonProgress } from "../src/domain/types";

describe("lesson progress", () => {
  it("calculates required lesson completion percentage", () => {
    const enrolment = enrolments[0];
    expect(enrolment).toBeDefined();
    expect(calculateCompletionPercent(lessons, progress, enrolment?.id ?? "")).toBe(0);
  });

  it("locks later required lessons until previous required lesson is complete", () => {
    const enrolment = enrolments[0];
    expect(enrolment).toBeDefined();
    const states = getLessonLockStates(lessons, [], enrolment!);
    expect(states[0]?.locked).toBe(false);
    expect(states[1]?.locked).toBe(true);
  });

  it("locks a level until the previous level's required sessions are complete", () => {
    const enrolment = enrolments[0];
    expect(enrolment).toBeDefined();

    const firstPass = getLevelLockStates(modules, lessons, [], enrolment!);
    expect(firstPass.find((state) => state.moduleId === "level-1")?.locked).toBe(false);
    expect(firstPass.find((state) => state.moduleId === "level-2")?.locked).toBe(true);

    const completedLevelOneProgress: LessonProgress[] = lessons
      .filter((lesson) => lesson.moduleId === "level-1")
      .map((lesson) => ({
        id: `test-progress-${lesson.id}`,
        enrolmentId: enrolment!.id,
        courseId: lesson.courseId,
        lessonId: lesson.id,
        memberId: identities.learner.memberId,
        status: "completed",
        percent: 100,
        lastActivityAt: "2026-06-25T08:00:00.000Z",
        completedAt: "2026-06-25T08:00:00.000Z",
      }));

    const secondPass = getLevelLockStates(modules, lessons, completedLevelOneProgress, enrolment!);
    expect(secondPass.find((state) => state.moduleId === "level-2")?.locked).toBe(false);
  });

  it("returns the next available lesson", () => {
    const enrolment = enrolments[0];
    expect(enrolment).toBeDefined();
    const next = getContinueLesson(lessons, progress, enrolment!);
    expect(next?.id).toBe("level-1-session-1-the-daily-grind");
  });

  it("requires all required activities before completion", () => {
    const lessonId = "level-1-session-3-strategic-alignment";
    expect(requiredActivitiesComplete(lessonId, activities, [])).toBe(false);

    const completions: ActivityCompletion[] = activities
      .filter((activity) => activity.lessonId === lessonId && activity.required)
      .map((activity) => ({
        activityId: activity.id,
        memberId: identities.learner.memberId,
        lessonId,
        completed: true,
        score: activity.maxScore,
        maxScore: activity.maxScore,
        completedAt: "2026-06-24T09:00:00.000Z",
      }));
    expect(requiredActivitiesComplete(lessonId, activities, completions)).toBe(true);
  });

  it("blocks lesson completion until required steps and activities are complete", () => {
    const lesson = lessons.find((item) => item.id === "level-1-session-3-strategic-alignment");
    expect(lesson).toBeDefined();
    const lessonActivities = activities.filter((activity) => activity.lessonId === lesson?.id);
    const contentIds = requiredContentIds(lesson!);
    const requiredActivities = lessonActivities.filter((activity) => activity.required);

    const firstGate = lessonCompletionGate(lesson!, lessonActivities, [], []);
    expect(firstGate.allowed).toBe(false);
    expect(firstGate.required).toBe(contentIds.length + requiredActivities.length);

    expect(
      lessonCompletionGate(
        lesson!,
        lessonActivities,
        requiredActivities.map((activity) => ({
          activityId: activity.id,
          memberId: identities.learner.memberId,
          lessonId: lesson!.id,
          completed: true,
          score: activity.maxScore,
          maxScore: activity.maxScore,
          completedAt: "2026-06-24T09:00:00.000Z",
        })),
        contentIds,
      ).allowed,
    ).toBe(true);
  });
});
