import type { Activity, ActivityCompletion, CourseModule, Enrolment, Lesson, LessonProgress } from "./types";

export interface LessonLockState {
  lessonId: string;
  locked: boolean;
  reason?: string;
}

export interface LevelLockState {
  moduleId: string;
  locked: boolean;
  reason?: string;
}

export const sortLessons = (lessons: readonly Lesson[]): Lesson[] =>
  [...lessons].sort((a, b) => a.sequence - b.sequence);

export const calculateCompletionPercent = (
  lessons: readonly Lesson[],
  progress: readonly LessonProgress[],
  enrolmentId: string,
): number => {
  const requiredLessons = lessons.filter((lesson) => lesson.required);
  if (requiredLessons.length === 0) {
    return 100;
  }
  const completedIds = new Set(
    progress
      .filter((item) => item.enrolmentId === enrolmentId && item.status === "completed")
      .map((item) => item.lessonId),
  );
  const completed = requiredLessons.filter((lesson) => completedIds.has(lesson.id)).length;
  return Math.round((completed / requiredLessons.length) * 100);
};

export const getLessonLockStates = (
  lessons: readonly Lesson[],
  progress: readonly LessonProgress[],
  enrolment: Enrolment,
): LessonLockState[] => {
  const completed = new Set(
    progress
      .filter((item) => item.enrolmentId === enrolment.id && item.status === "completed")
      .map((item) => item.lessonId),
  );

  let previousRequiredIncomplete: Lesson | null = null;
  return sortLessons(lessons).map((lesson) => {
    const state: LessonLockState =
      previousRequiredIncomplete === null
        ? { lessonId: lesson.id, locked: false }
        : {
            lessonId: lesson.id,
            locked: true,
            reason: `Complete "${previousRequiredIncomplete.title}" first.`,
          };

    if (lesson.required && !completed.has(lesson.id)) {
      previousRequiredIncomplete = lesson;
    }
    return state;
  });
};

export const isLevelComplete = (
  moduleId: string,
  lessons: readonly Lesson[],
  progress: readonly LessonProgress[],
  enrolment: Enrolment,
): boolean => {
  const requiredLessons = lessons.filter((lesson) => lesson.moduleId === moduleId && lesson.required);
  if (requiredLessons.length === 0) {
    return true;
  }
  const completed = new Set(
    progress
      .filter((item) => item.enrolmentId === enrolment.id && item.status === "completed")
      .map((item) => item.lessonId),
  );
  return requiredLessons.every((lesson) => completed.has(lesson.id));
};

export const getLevelLockStates = (
  modules: readonly CourseModule[],
  lessons: readonly Lesson[],
  progress: readonly LessonProgress[],
  enrolment: Enrolment,
): LevelLockState[] => {
  let previousIncompleteLevel: CourseModule | null = null;
  return [...modules]
    .sort((a, b) => a.sequence - b.sequence)
    .map((module) => {
      const state: LevelLockState =
        previousIncompleteLevel === null
          ? { moduleId: module.id, locked: false }
          : {
              moduleId: module.id,
              locked: true,
              reason: `Complete all sessions and required elements in "${previousIncompleteLevel.title}" first.`,
            };

      if (!isLevelComplete(module.id, lessons, progress, enrolment)) {
        previousIncompleteLevel = module;
      }

      return state;
    });
};

export const getContinueLesson = (
  lessons: readonly Lesson[],
  progress: readonly LessonProgress[],
  enrolment: Enrolment,
): Lesson | null => {
  const lockStates = new Map(
    getLessonLockStates(lessons, progress, enrolment).map((state) => [state.lessonId, state.locked]),
  );
  const completed = new Set(
    progress
      .filter((item) => item.enrolmentId === enrolment.id && item.status === "completed")
      .map((item) => item.lessonId),
  );
  return sortLessons(lessons).find((lesson) => !lockStates.get(lesson.id) && !completed.has(lesson.id)) ?? null;
};

export const requiredActivitiesComplete = (
  lessonId: string,
  activities: readonly Activity[],
  completions: readonly ActivityCompletion[],
): boolean => {
  const requiredActivityIds = activities
    .filter((activity) => activity.lessonId === lessonId && activity.required)
    .map((activity) => activity.id);

  if (requiredActivityIds.length === 0) {
    return true;
  }

  const completedIds = new Set(
    completions.filter((completion) => completion.completed).map((completion) => completion.activityId),
  );
  return requiredActivityIds.every((activityId) => completedIds.has(activityId));
};

export const requiredContentIds = (lesson: Lesson): string[] =>
  lesson.content.filter((block) => block.completionRequired !== false).map((block) => block.id);

export const lessonCompletionGate = (
  lesson: Lesson,
  activities: readonly Activity[],
  completions: readonly ActivityCompletion[],
  completedInteractiveContentIds: readonly string[],
): { allowed: boolean; completed: number; required: number } => {
  const requiredActivityIds = activities
    .filter((activity) => activity.lessonId === lesson.id && activity.required)
    .map((activity) => activity.id);
  const customHtmlIds = lesson.content.filter((block) => block.kind === "customHtml").map((block) => block.id);
  const completedIds = new Set([
    ...completions.filter((completion) => completion.completed).map((completion) => completion.activityId),
    ...completedInteractiveContentIds,
  ]);
  const requiredIds = Array.from(new Set([...requiredActivityIds, ...requiredContentIds(lesson), ...customHtmlIds]));
  const completed = requiredIds.filter((id) => completedIds.has(id)).length;
  return {
    allowed: completed === requiredIds.length,
    completed,
    required: requiredIds.length,
  };
};
