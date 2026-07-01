import { useMemo, useState } from "react";
import { courses, identities, lessons, modules, progress, submissions } from "../data/sampleData";
import { Download, Users } from "./Icons";

const lecturerTools = [
  {
    id: "course-builder",
    label: "Course builder",
    description: "Create courses, levels, sessions and teaching blocks.",
  },
  {
    id: "submissions",
    label: "Submissions",
    description: "Review written responses and file submissions.",
  },
  {
    id: "ai-review",
    label: "AI review queue",
    description: "Draft marks awaiting lecturer approval.",
  },
  {
    id: "inactive",
    label: "Inactive learners",
    description: "Learners who need a reminder or pastoral follow-up.",
  },
] as const;

type LecturerToolId = (typeof lecturerTools)[number]["id"];

const adminControls = [
  ["users", "Users and roles", "Assign learner, lecturer and administrator permissions."],
  ["courses", "Courses and lecturers", "Connect levels, sessions and assigned lecturers."],
  ["payments", "Payments and access", "Verify Wix orders, free access and enrolment codes."],
  ["certificates", "Certificates", "Control certificate templates and issuing rules."],
  ["codes", "Enrolment codes", "Create, pause and audit private access codes."],
  ["ai", "AI usage", "Monitor usage limits and lecturer approval records."],
  ["automations", "Automation triggers", "Connect welcome, reminder and completion emails."],
  ["audit", "Audit records", "Review sensitive actions and export compliance logs."],
] as const;

type AdminControlId = (typeof adminControls)[number][0];

const exportProgressCsv = () => {
  const rows = [
    ["Learner", "Course", "Level", "Session", "Status"],
    ...lessons.map((lesson) => {
      const level = modules.find((module) => module.id === lesson.moduleId);
      const status = progress.find((item) => item.lessonId === lesson.id)?.status ?? "notStarted";
      return [identities.learner.displayName, courses[0]?.title ?? "Faithonomics", level?.title ?? "", lesson.title, status];
    }),
  ];
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "faithonomics-progress-report.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

export const LecturerDashboard = () => {
  const [activeTool, setActiveTool] = useState<LecturerToolId>("course-builder");
  const [notice, setNotice] = useState("");
  const [draftCourses, setDraftCourses] = useState([
    {
      id: "draft-faithonomics-core",
      title: courses[0]?.title ?? "Faithonomics Course",
      levelCount: modules.length,
      sessionCount: lessons.length,
      status: "Published",
    },
  ]);
  const selectedTool = lecturerTools.find((tool) => tool.id === activeTool) ?? lecturerTools[0];

  const createCourse = () => {
    setDraftCourses((current) => [
      ...current,
      {
        id: `draft-course-${Date.now()}`,
        title: `New Faithonomics Course ${current.length + 1}`,
        levelCount: 0,
        sessionCount: 0,
        status: "Draft",
      },
    ]);
    setNotice("Draft course created. Add levels, sessions, media and activities before publishing.");
  };

  return (
    <main className="content-shell">
      <section className="dashboard-intro">
        <div>
          <p className="eyebrow">Lecturer workspace</p>
          <h2>{selectedTool?.label ?? "Course builder"}</h2>
        </div>
        <button className="primary-button" onClick={exportProgressCsv}>
          <Download size={18} />
          Export CSV
        </button>
      </section>
      <section className="work-grid" aria-label="Lecturer tools">
        {lecturerTools.map((item) => (
          <button
            className={activeTool === item.id ? "work-card tool-card active" : "work-card tool-card"}
            key={item.id}
            onClick={() => {
              setActiveTool(item.id);
              setNotice("");
            }}
          >
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </button>
        ))}
      </section>
      <section className="workspace-panel">
        {activeTool === "course-builder" ? (
          <>
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Builder</p>
                <h3>Create or edit courses</h3>
              </div>
              <button className="primary-button" onClick={createCourse}>
                Create course
              </button>
            </div>
            <div className="builder-list">
              {draftCourses.map((course) => (
                <article key={course.id}>
                  <strong>{course.title}</strong>
                  <span>{course.status}</span>
                  <span>{course.levelCount} levels</span>
                  <span>{course.sessionCount} sessions</span>
                </article>
              ))}
            </div>
          </>
        ) : null}
        {activeTool === "submissions" ? (
          <div className="builder-list">
            {submissions.map((submission) => (
              <article key={submission.id}>
                <strong>{submission.status}</strong>
                <span>{submission.responseText ?? "File submission"}</span>
                <span>{submission.submittedAt ?? "Draft"}</span>
              </article>
            ))}
          </div>
        ) : null}
        {activeTool === "ai-review" ? (
          <div className="empty-state compact">AI-assisted marks appear here until a lecturer approves or edits them.</div>
        ) : null}
        {activeTool === "inactive" ? (
          <div className="empty-state compact">No inactive learners in the sample data. Reminder automations are ready to connect in Wix.</div>
        ) : null}
        {notice ? <p className="status success">{notice}</p> : null}
      </section>
    </main>
  );
};

export const AdminDashboard = () => {
  const [activeControl, setActiveControl] = useState<AdminControlId>("users");
  const [notice, setNotice] = useState("");
  const selectedControl = adminControls.find(([id]) => id === activeControl) ?? adminControls[0];

  return (
    <main className="content-shell">
      <section className="dashboard-intro">
        <div>
          <p className="eyebrow">Administration</p>
          <h2>System controls</h2>
        </div>
        <span className="pill">Backend enforced</span>
      </section>
      <section className="admin-list" aria-label="Administrator controls">
        {adminControls.map(([id, item]) => (
          <button
            className={activeControl === id ? "active" : ""}
            key={id}
            onClick={() => {
              setActiveControl(id);
              setNotice("");
            }}
          >
            <Users size={18} />
            {item}
          </button>
        ))}
      </section>
      <section className="workspace-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Control panel</p>
            <h3>{selectedControl?.[1] ?? "Users and roles"}</h3>
          </div>
          <button className="primary-button" onClick={() => setNotice("System control saved for backend review.")}>
            Save control
          </button>
        </div>
        <p>{selectedControl?.[2] ?? "Manage system settings."}</p>
        <div className="control-metrics">
          <span>{modules.length} levels</span>
          <span>{lessons.length} sessions</span>
          <span>{submissions.length} submissions</span>
        </div>
        {notice ? <p className="status success">{notice}</p> : null}
      </section>
    </main>
  );
};

export const Reports = () => {
  const rows = useMemo(() => {
    const firstCourse = courses[0];
    if (!firstCourse) {
      return [];
    }
    const courseModules = modules.filter((module) => module.courseId === firstCourse.id);
    return lessons
      .filter((lesson) => lesson.courseId === firstCourse.id)
      .map((lesson) => ({
        lesson,
        module: courseModules.find((module) => module.id === lesson.moduleId),
        status: progress.find((item) => item.lessonId === lesson.id)?.status ?? "notStarted",
      }));
  }, []);

  return (
    <main className="content-shell">
      <section className="dashboard-intro">
        <div>
          <p className="eyebrow">Reports</p>
          <h2>Learner progress</h2>
        </div>
      </section>
      <div className="report-table" role="table" aria-label="Progress report">
        <div role="row" className="report-row head">
          <span>Learner</span>
          <span>Level</span>
          <span>Session</span>
          <span>Status</span>
        </div>
        {rows.map((row) => (
          <div role="row" className="report-row" key={row.lesson.id}>
            <span>{identities.learner.displayName}</span>
            <span>{row.module?.title ?? "Unassigned"}</span>
            <span>{row.lesson.title}</span>
            <span>{row.status}</span>
          </div>
        ))}
      </div>
    </main>
  );
};
