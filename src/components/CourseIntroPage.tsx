import { useEffect, useMemo, useState } from "react";
import { enrolments, identities, lessons, modules, progress } from "../data/sampleData";
import { calculateCompletionPercent, sortLessons } from "../domain/progress";
import type { CourseModule, Enrolment, LessonProgress } from "../domain/types";
import { repository } from "../services/singleton";
import { PlayCircle } from "./Icons";
import { LevelOneIntroSlideshow, type LevelOneSlideshowMode } from "./LevelOneIntroSlideshow";

type CourseStatus = "completed" | "current" | "upcoming";

const learner = identities.learner;
const learnerEnrolment =
  enrolments.find((enrolment) => enrolment.memberId === learner.memberId) ?? null;

const getLevelNumber = (module: CourseModule): number => {
  const explicitNumber = Number(module.id.match(/^level-(\d+)$/)?.[1] ?? module.title.match(/Level\s+(\d+)/i)?.[1]);
  return Number.isFinite(explicitNumber) && explicitNumber > 0 ? explicitNumber : module.sequence;
};

const sortModulesNumerically = (courseModules: readonly CourseModule[]): CourseModule[] =>
  [...courseModules].sort((a, b) => getLevelNumber(a) - getLevelNumber(b) || a.sequence - b.sequence);

const getCourseStatuses = (
  courseModules: CourseModule[],
  progressRecords: LessonProgress[],
  enrolment: Enrolment | null,
): Map<string, CourseStatus> => {
  const statuses = new Map<string, CourseStatus>();
  if (!enrolment) {
    courseModules.forEach((module, index) => {
      statuses.set(module.id, index === 0 ? "current" : "upcoming");
    });
    return statuses;
  }

  const completedModuleIds = new Set(
    courseModules
      .filter((module) => {
        const moduleLessons = lessons.filter((lesson) => lesson.moduleId === module.id);
        return calculateCompletionPercent(moduleLessons, progressRecords, enrolment.id) === 100;
      })
      .map((module) => module.id),
  );
  const currentModule = courseModules.find((module) => !completedModuleIds.has(module.id)) ?? courseModules.at(-1);

  courseModules.forEach((module) => {
    const status: CourseStatus = completedModuleIds.has(module.id)
      ? "completed"
      : module.id === currentModule?.id
        ? "current"
        : "upcoming";
    statuses.set(module.id, status);
  });

  return statuses;
};

export const CourseIntroPage = ({ onSelectLevel }: { onSelectLevel: (moduleId: string) => void }) => {
  const [liveProgress, setLiveProgress] = useState<LessonProgress[]>(progress);
  const [aboutModuleId, setAboutModuleId] = useState<string | null>(null);
  const [levelOneSlideshowMode, setLevelOneSlideshowMode] = useState<LevelOneSlideshowMode | null>(null);
  const [levelOneSlideIndex, setLevelOneSlideIndex] = useState(0);
  const sortedModules = useMemo(() => sortModulesNumerically(modules), []);
  const aboutModule = sortedModules.find((module) => module.id === aboutModuleId) ?? null;
  const statuses = useMemo(
    () => getCourseStatuses(sortedModules, liveProgress, learnerEnrolment),
    [liveProgress, sortedModules],
  );

  const openLevelOneSlideshow = (mode: LevelOneSlideshowMode) => {
    setAboutModuleId(null);
    setLevelOneSlideIndex(0);
    setLevelOneSlideshowMode(mode);
  };

  const closeLevelOneSlideshow = () => {
    setLevelOneSlideshowMode(null);
    setLevelOneSlideIndex(0);
  };

  useEffect(() => {
    let active = true;

    if (!learnerEnrolment) {
      return () => {
        active = false;
      };
    }

    repository
      .listProgress(learnerEnrolment.id)
      .then((records) => {
        if (active) {
          setLiveProgress(records);
        }
      })
      .catch(() => {
        if (active) {
          setLiveProgress(progress);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="course-intro-page">
      <section className="course-intro-hero">
        <div>
          <p className="eyebrow">Faithonomics courses</p>
          <h1>Choose Your Level</h1>
          <p>
            Start with the current level, review completed learning, or see what is coming next in the
            Faithonomics pathway.
          </p>
        </div>
      </section>

      <section className="intro-course-grid" aria-label="Faithonomics levels">
        {sortedModules.map((module) => {
          const status = statuses.get(module.id) ?? "upcoming";
          const levelLessons = sortLessons(lessons.filter((lesson) => lesson.moduleId === module.id));
          const percent = learnerEnrolment
            ? calculateCompletionPercent(levelLessons, liveProgress, learnerEnrolment.id)
            : status === "completed"
              ? 100
              : 0;
          const levelNumber = getLevelNumber(module);
          const openLevel = () => onSelectLevel(module.id);
          const openAbout = () => {
            if (module.id === "level-1") {
              openLevelOneSlideshow("about");
              return;
            }
            setAboutModuleId(module.id);
          };

          return (
            <article key={module.id} className={`intro-course-card ${status}`} style={{ order: levelNumber }}>
              <button
                className="intro-course-image-link"
                type="button"
                onClick={openLevel}
                aria-label={`Open ${module.title}`}
              >
                {module.imageUrl ? <img src={module.imageUrl} alt={module.imageAlt ?? module.title} /> : null}
                <span>{status}</span>
              </button>
              <div className="intro-course-details">
                <div className="intro-course-meta">
                  <span>Level {levelNumber}</span>
                  <span>{levelLessons.length} sessions</span>
                  <span>{percent}% complete</span>
                </div>
                <div className="intro-course-actions">
                  <button className="course-link-button" type="button" onClick={openLevel}>
                    <PlayCircle size={18} />
                    Open course
                  </button>
                  <button className="about-button" type="button" onClick={openAbout}>
                    About
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      {aboutModule ? (
        <div className="course-about-modal" role="dialog" aria-modal="true" aria-labelledby="course-about-title">
          <button
            className="course-about-backdrop"
            type="button"
            aria-label="Close about"
            onClick={() => setAboutModuleId(null)}
          />
          <article className="course-about-panel">
            {aboutModule.imageUrl ? <img src={aboutModule.imageUrl} alt="" /> : null}
            <div>
              <p className="eyebrow">Level {getLevelNumber(aboutModule)}</p>
              <h2 id="course-about-title">{aboutModule.title.replace(/^Level \d+:\s*/, "")}</h2>
              <p>{aboutModule.description}</p>
              <div className="intro-course-actions">
                <button className="course-link-button" type="button" onClick={() => onSelectLevel(aboutModule.id)}>
                  <PlayCircle size={18} />
                  Open course
                </button>
                <button className="about-button" type="button" onClick={() => setAboutModuleId(null)}>
                  Close
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : null}
      {levelOneSlideshowMode ? (
        <LevelOneIntroSlideshow
          mode={levelOneSlideshowMode}
          slideIndex={levelOneSlideIndex}
          setSlideIndex={setLevelOneSlideIndex}
          onOpenCourse={() => onSelectLevel("level-1")}
          onClose={closeLevelOneSlideshow}
        />
      ) : null}
    </main>
  );
};
