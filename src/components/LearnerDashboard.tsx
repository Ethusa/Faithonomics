import { courses, enrolments, lessons, modules, progress } from "../data/sampleData";
import {
  calculateCompletionPercent,
  getContinueLesson,
  getLessonLockStates,
  getLevelLockStates,
  sortLessons,
} from "../domain/progress";
import type { Course, CourseModule, Enrolment, LearnerIdentity, Lesson, LessonProgress } from "../domain/types";
import { Lock, PlayCircle } from "./Icons";

const getCourseEnrolment = (courseId: string, memberId: string): Enrolment | null =>
  enrolments.find((enrolment) => enrolment.courseId === courseId && enrolment.memberId === memberId) ?? null;

const CourseCard = ({
  course,
  activeLevel,
  identity,
  completedLessonIds,
  onOpenLesson,
}: {
  course: Course;
  activeLevel: CourseModule | null;
  identity: LearnerIdentity;
  completedLessonIds: ReadonlySet<string>;
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => {
  const allCourseLessons = sortLessons(lessons.filter((lesson) => lesson.courseId === course.id));
  const courseModules = modules.filter((module) => module.courseId === course.id);
  const courseLessons = sortLessons(
    lessons.filter(
      (lesson) => lesson.courseId === course.id && (!activeLevel || lesson.moduleId === activeLevel.id),
    ),
  );
  const enrolment = getCourseEnrolment(course.id, identity.memberId);
  const courseProgress = enrolment ? buildLocalProgress(course.id, identity, enrolment, completedLessonIds) : [];
  const percent = enrolment ? calculateCompletionPercent(courseLessons, courseProgress, enrolment.id) : 0;
  const levelLockStates = new Map(
    enrolment
      ? getLevelLockStates(courseModules, allCourseLessons, courseProgress, enrolment).map((item) => [item.moduleId, item])
      : [],
  );
  const activeLevelLock = activeLevel ? levelLockStates.get(activeLevel.id) : undefined;
  const levelLocked = Boolean(activeLevelLock?.locked);
  const continueLesson =
    enrolment && !levelLocked ? getContinueLesson(courseLessons, courseProgress, enrolment) : courseLessons[0] ?? null;
  const sessionLockStates = new Map(
    enrolment && !levelLocked
      ? getLessonLockStates(courseLessons, courseProgress, enrolment).map((item) => [item.lessonId, item.locked])
      : courseLessons.map((lesson) => [lesson.id, true] as const),
  );
  const title = activeLevel?.title ?? course.title;
  const artworkUrl = activeLevel?.imageUrl ?? course.imageUrl;
  const artworkAlt = activeLevel?.imageAlt ?? "";

  return (
    <article className="course-card">
      <img src={artworkUrl} alt={artworkAlt} />
      <div className="course-card-body">
        <div className="course-title-row">
          <h2>{title}</h2>
          {!enrolment && !course.isFree ? <span className="pill locked">Paid</span> : <span className="pill">Open</span>}
        </div>
        <p>{activeLevel?.description ?? course.summary}</p>
        <div className="progress-line" aria-label={`${percent}% complete`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="card-meta">
          <span>{percent}% complete</span>
          <span>{courseLessons.length} sessions</span>
        </div>
        <button
          className="primary-button"
          disabled={levelLocked || !continueLesson || (!enrolment && !course.isFree)}
          onClick={() => {
            if (continueLesson && !levelLocked) {
              onOpenLesson(course.id, continueLesson.id);
            }
          }}
        >
          <PlayCircle size={18} />
          Continue learning
        </button>
        {activeLevelLock?.locked ? <p className="status error">{activeLevelLock.reason}</p> : null}
        <SessionList
          courseId={course.id}
          sessions={courseLessons}
          lockStates={sessionLockStates}
          lockReason={activeLevelLock?.reason}
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
  lockReason,
  onOpenLesson,
}: {
  courseId: string;
  sessions: Lesson[];
  lockStates: Map<string, boolean>;
  lockReason: string | undefined;
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => (
  <div className="session-list" aria-label="Level sessions">
    {sessions.map((session) => {
      const locked = Boolean(lockStates.get(session.id));
      return (
        <button
          key={session.id}
          disabled={locked}
          title={locked ? lockReason ?? "Complete the previous required session first." : session.title}
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
): LessonProgress[] => {
  const baseProgress = progress.filter((item) => item.enrolmentId === enrolment.id);
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
  onOpenLesson,
}: {
  identity: LearnerIdentity;
  activeLevelId: string | null;
  completedLessonIds: ReadonlySet<string>;
  onOpenLesson: (courseId: string, lessonId: string) => void;
}) => {
  const activeLevel = modules.find((module) => module.id === activeLevelId) ?? null;
  const activeLevelSessions = lessons.filter((lesson) => !activeLevel || lesson.moduleId === activeLevel.id);

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
            onOpenLesson={onOpenLesson}
          />
        ))}
      </section>
    </main>
  );
};
