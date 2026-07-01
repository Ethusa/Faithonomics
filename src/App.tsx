import { useState } from "react";
import { Header, type PortalView } from "./components/Header";
import { LearnerDashboard } from "./components/LearnerDashboard";
import { LevelLoginPage } from "./components/LevelLoginPage";
import { LessonView } from "./components/LessonView";
import { AdminDashboard, LecturerDashboard, Reports } from "./components/StaffDashboards";
import { courses, identities, lessons, modules, progress } from "./data/sampleData";
import type { LearnerIdentity, LevelAccessCredential } from "./domain/types";
import { Award } from "./components/Icons";

const usePortalState = () => {
  const [identity, setIdentity] = useState<LearnerIdentity>(identities.learner);
  const [view, setView] = useState<PortalView>("learner");
  const [activeCourseId, setActiveCourseId] = useState(courses[0]?.id ?? "");
  const [activeLessonId, setActiveLessonId] = useState(lessons[0]?.id ?? "");
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(
    () => new Set(progress.filter((item) => item.status === "completed").map((item) => item.lessonId)),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  return {
    identity,
    setIdentity,
    view,
    setView,
    activeCourseId,
    setActiveCourseId,
    activeLessonId,
    setActiveLessonId,
    activeLevelId,
    setActiveLevelId,
    completedLessonIds,
    setCompletedLessonIds,
    drawerOpen,
    setDrawerOpen,
  };
};

export const App = () => {
  const state = usePortalState();
  const activeCourse = courses.find((course) => course.id === state.activeCourseId) ?? courses[0];
  const activeLevel = modules.find((module) => module.id === state.activeLevelId) ?? null;

  const openLesson = (courseId: string, lessonId: string) => {
    state.setActiveCourseId(courseId);
    state.setActiveLessonId(lessonId);
    state.setView("lesson");
  };

  const loginToLevel = (access: LevelAccessCredential) => {
    const firstLevelLesson = lessons
      .filter((lesson) => lesson.moduleId === access.moduleId)
      .sort((a, b) => a.sequence - b.sequence)[0];
    state.setIdentity(identities.learner);
    state.setActiveCourseId(courses[0]?.id ?? "");
    state.setActiveLessonId(firstLevelLesson?.id ?? lessons[0]?.id ?? "");
    state.setActiveLevelId(access.moduleId);
    state.setView("learner");
  };

  const logout = () => {
    state.setActiveLevelId(null);
    state.setIdentity(identities.learner);
    state.setView("learner");
  };

  const completeLesson = (lessonId: string) => {
    state.setCompletedLessonIds((current) => {
      const next = new Set(current);
      next.add(lessonId);
      return next;
    });
  };

  if (!state.activeLevelId) {
    return (
      <div className="app-shell">
        <LevelLoginPage onLogin={loginToLevel} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header
        identity={state.identity}
        view={state.view}
        setView={state.setView}
        onIdentityChange={state.setIdentity}
        activeLevelTitle={activeLevel?.title ?? null}
        onLogout={logout}
      />
      {state.view === "learner" ? (
        <LearnerDashboard
          identity={state.identity}
          activeLevelId={state.activeLevelId}
          completedLessonIds={state.completedLessonIds}
          onOpenLesson={openLesson}
        />
      ) : null}
      {state.view === "lesson" && activeCourse ? (
        <LessonView
          identity={state.identity}
          course={activeCourse}
          lessonId={state.activeLessonId}
          activeLevelId={state.activeLevelId}
          completedLessonIds={state.completedLessonIds}
          drawerOpen={state.drawerOpen}
          setDrawerOpen={state.setDrawerOpen}
          onSelectLesson={state.setActiveLessonId}
          onCompleteLesson={completeLesson}
          onReturnToDashboard={() => state.setView("learner")}
        />
      ) : null}
      {state.view === "lecturer" ? <LecturerDashboard /> : null}
      {state.view === "admin" ? <AdminDashboard /> : null}
      {state.view === "reports" ? <Reports /> : null}
      <footer className="site-footer">
        <Award size={18} />
        Faithonomics Economic Discipleship
      </footer>
    </div>
  );
};
