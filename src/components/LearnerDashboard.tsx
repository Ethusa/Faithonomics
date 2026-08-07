import { useEffect, useState } from "react";
import { courses, enrolments, lessons, modules, progress } from "../data/sampleData";
import {
  calculateCompletionPercent,
  getContinueLesson,
  getLessonLockStates,
  sortLessons,
} from "../domain/progress";
import { isStaff } from "../domain/permissions";
import type { Course, CourseModule, Enrolment, LearnerIdentity, Lesson, LessonProgress } from "../domain/types";
import { repository } from "../services/singleton";
import { Lock, PlayCircle } from "./Icons";
import { LevelOneIntroSlideshow } from "./LevelOneIntroSlideshow";

const getCourseEnrolment = (courseId: string, memberId: string): Enrolment | null =>
  enrolments.find((enrolment) => enrolment.courseId === courseId && enrolment.memberId === memberId) ?? null;

const CourseCard = ({
  course,
  activeLevel,
  identity,
  completedLessonIds,
  progressRecords,
  onOpenLesson,
}: {
  course: Course;
  activeLevel: CourseModule | null;
  identity: LearnerIdentity;
  completedLessonIds: ReadonlySet<string>;
  progressRecords: LessonProgress[];
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => {
  const staffPreview = isStaff(identity);
  const courseLessons = sortLessons(
    lessons.filter(
      (lesson) =>
        lesson.courseId === course.id &&
        (staffPreview || !activeLevel || lesson.moduleId === activeLevel.id),
    ),
  );
  const enrolment = getCourseEnrolment(course.id, identity.memberId);
  const courseProgress = enrolment
    ? buildLocalProgress(course.id, identity, enrolment, completedLessonIds, progressRecords)
    : [];
  const percent = enrolment ? calculateCompletionPercent(courseLessons, courseProgress, enrolment.id) : 0;
  const continueLesson =
    enrolment && !staffPreview ? getContinueLesson(courseLessons, courseProgress, enrolment) : courseLessons[0] ?? null;
  const sessionLockStates = new Map(
    staffPreview
      ? courseLessons.map((lesson) => [lesson.id, false] as const)
      : enrolment
      ? getLessonLockStates(courseLessons, courseProgress, enrolment).map((item) => [item.lessonId, item.locked])
      : courseLessons.map((lesson) => [lesson.id, true] as const),
  );
  const title = staffPreview ? course.title : activeLevel?.title ?? course.title;
  const artworkUrl = staffPreview ? course.imageUrl : activeLevel?.imageUrl ?? course.imageUrl;
  const artworkAlt = staffPreview ? "" : activeLevel?.imageAlt ?? "";
  const canOpenCourse = staffPreview || Boolean(enrolment) || course.isFree;

  return (
    <article className="course-card">
      <img src={artworkUrl} alt={artworkAlt} />
      <div className="course-card-body">
        <div className="course-title-row">
          <h2>{title}</h2>
          {staffPreview ? (
            <span className="pill">Staff preview</span>
          ) : !enrolment && !course.isFree ? (
            <span className="pill locked">Paid</span>
          ) : (
            <span className="pill">Open</span>
          )}
        </div>
        <p>{staffPreview ? course.summary : activeLevel?.description ?? course.summary}</p>
        <div className="progress-line" aria-label={`${percent}% complete`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="card-meta">
          <span>{percent}% complete</span>
          <span>{courseLessons.length} sessions</span>
        </div>
        <button
          className="primary-button"
          disabled={!continueLesson || !canOpenCourse}
          onClick={() => {
            if (continueLesson) {
              onOpenLesson(course.id, continueLesson.id);
            }
          }}
        >
          <PlayCircle size={18} />
          Continue learning
        </button>
        <SessionList
          courseId={course.id}
          sessions={courseLessons}
          lockStates={sessionLockStates}
          onOpenLesson={onOpenLesson}
        />
      </div>
    </article>
  );
};

const SessionList = ({
  courseId,
  sessions,
  lockStates,
  onOpenLesson,
}: {
  courseId: string;
  sessions: Lesson[];
  lockStates: Map<string, boolean>;
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => (
  <div className="session-list" aria-label="Level sessions">
    {sessions.map((session) => {
      const locked = Boolean(lockStates.get(session.id));
      return (
        <button
          key={session.id}
          disabled={locked}
          title={locked ? "Complete the previous required session first." : session.title}
          onClick={() => onOpenLesson(courseId, session.id)}
        >
          {locked ? <Lock size={15} /> : <PlayCircle size={15} />}
          {session.imageUrl ? <img className="session-thumb" src={session.imageUrl} alt="" /> : null}
          <span>{session.title}</span>
        </button>
      );
    })}
  </div>
);

const buildLocalProgress = (
  courseId: string,
  identity: LearnerIdentity,
  enrolment: Enrolment,
  completedLessonIds: ReadonlySet<string>,
  progressRecords: LessonProgress[],
): LessonProgress[] => {
  const baseProgress = progressRecords.filter((item) => item.enrolmentId === enrolment.id);
  const merged = [...baseProgress];
  for (const lessonId of completedLessonIds) {
    if (!merged.some((item) => item.lessonId === lessonId)) {
      merged.push({
        id: `local-progress-${lessonId}`,
        enrolmentId: enrolment.id,
        courseId,
        lessonId,
        memberId: identity.memberId,
        status: "completed",
        percent: 100,
        lastActivityAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
      });
    }
  }
  return merged;
};

export const LearnerDashboard = ({
  identity,
  activeLevelId,
  completedLessonIds,
  pendingIntroSlideshowLevelId,
  onIntroSlideshowHandled,
  onOpenLesson,
}: {
  identity: LearnerIdentity;
  activeLevelId: string | null;
  completedLessonIds: ReadonlySet<string>;
  pendingIntroSlideshowLevelId: string | null;
  onIntroSlideshowHandled: () => void;
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => {
  const staffPreview = isStaff(identity);
  const activeLevel = staffPreview ? null : modules.find((module) => module.id === activeLevelId) ?? null;
  const activeLevelSessions = lessons.filter((lesson) => !activeLevel || lesson.moduleId === activeLevel.id);
  const [liveProgress, setLiveProgress] = useState<LessonProgress[]>(progress);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [showLevelOneIntro, setShowLevelOneIntro] = useState(false);
  const [levelOneSlideIndex, setLevelOneSlideIndex] = useState(0);

  useEffect(() => {
    const learnerEnrolments = enrolments.filter((item) => item.memberId === identity.memberId);
    let active = true;
    setProgressLoaded(false);

    Promise.all(learnerEnrolments.map((enrolment) => repository.listProgress(enrolment.id)))
      .then((progressGroups) => {
        if (active) {
          setLiveProgress(progressGroups.flat());
          setProgressLoaded(true);
        }
      })
      .catch(() => {
        if (active) {
          setLiveProgress(progress);
          setProgressLoaded(true);
        }
      });

    return () => {
      active = false;
    };
  }, [identity.memberId]);

  useEffect(() => {
    if (!progressLoaded || !pendingIntroSlideshowLevelId) {
      return;
    }

    if (staffPreview) {
      onIntroSlideshowHandled();
      return;
    }

    if (pendingIntroSlideshowLevelId !== "level-1" || activeLevelId !== "level-1") {
      onIntroSlideshowHandled();
      return;
    }

    const primaryCourse = courses[0] ?? null;
    if (!primaryCourse) {
      onIntroSlideshowHandled();
      return;
    }

    const enrolment = getCourseEnrolment(primaryCourse.id, identity.memberId);
    const levelLessons = lessons.filter((lesson) => lesson.moduleId === "level-1");
    const mergedProgress = enrolment
      ? buildLocalProgress(primaryCourse.id, identity, enrolment, completedLessonIds, liveProgress)
      : [];
    const hasCompletedSession = levelLessons.some((lesson) =>
      mergedProgress.some((item) => item.lessonId === lesson.id && item.status === "completed"),
    );

    if (hasCompletedSession) {
      onIntroSlideshowHandled();
      return;
    }

    setLevelOneSlideIndex(0);
    setShowLevelOneIntro(true);
  }, [
    activeLevelId,
    completedLessonIds,
    identity,
    staffPreview,
    liveProgress,
    onIntroSlideshowHandled,
    pendingIntroSlideshowLevelId,
    progressLoaded,
  ]);

  const closeLevelOneIntro = () => {
    setShowLevelOneIntro(false);
    onIntroSlideshowHandled();
  };

  const openFirstLevelOneLesson = () => {
    closeLevelOneIntro();
    const firstLevelLesson = sortLessons(lessons.filter((lesson) => lesson.moduleId === "level-1"))[0] ?? null;
    if (firstLevelLesson) {
      onOpenLesson(firstLevelLesson.courseId, firstLevelLesson.id);
    }
  };

  return (
    <main className="content-shell">
      <section className="dashboard-intro paper-stage">
        <div className="paper-sun" aria-hidden="true" />
        <div className="paper-layer paper-back" aria-hidden="true" />
        <div className="paper-layer paper-mid" aria-hidden="true" />
        <div className="paper-road" aria-hidden="true" />
        <div className="paper-people" aria-hidden="true">
          <span />
          <span />
        </div>
        <div>
          <p className="eyebrow">Student page</p>
          <h2>{identity.displayName}</h2>
          <p className="intro-copy">
            {activeLevel
              ? `${activeLevel.title} is open. Continue through each required session in sequence.`
              : "Faithonomics courses, progress, submissions, feedback and certificates in one Wix-connected classroom."}
          </p>
        </div>
        <div className="stat-strip">
          <div>
            <strong>{activeLevel ? "1" : enrolments.filter((item) => item.memberId === identity.memberId).length}</strong>
            <span>{activeLevel ? "Active level" : "Courses"}</span>
          </div>
          <div>
            <strong>{activeLevelSessions.length}</strong>
            <span>Sessions</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Next reminder</span>
          </div>
        </div>
      </section>
      <section className="course-grid" aria-label="Enrolled courses">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            activeLevel={activeLevel}
            identity={identity}
            completedLessonIds={completedLessonIds}
            progressRecords={liveProgress}
            onOpenLesson={onOpenLesson}
          />
        ))}
      </section>
      {showLevelOneIntro ? (
        <LevelOneIntroSlideshow
          mode="start"
          slideIndex={levelOneSlideIndex}
          setSlideIndex={setLevelOneSlideIndex}
          onOpenCourse={openFirstLevelOneLesson}
          onClose={closeLevelOneIntro}
        />
      ) : null}
    </main>
  );
};
