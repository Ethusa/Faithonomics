import { useMemo, useState } from "react";
import { courses, identities, submissions } from "../../../../data/sampleData";
import { hasRole } from "../../../../domain/permissions";

const staffIdentity = identities.administrator;

export default function ClassroomAdminPage() {
  const [filter, setFilter] = useState("all");
  const visibleSubmissions = useMemo(
    () => submissions.filter((submission) => filter === "all" || submission.status === filter),
    [filter],
  );

  if (!hasRole(staffIdentity, "administrator") && !hasRole(staffIdentity, "lecturer")) {
    return <main style={{ padding: 24 }}>You do not have access to Classroom administration.</main>;
  }

  return (
    <main style={{ padding: 24, maxWidth: 1180 }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "center" }}>
        <div>
          <p style={{ margin: 0, color: "#60706b", fontWeight: 700 }}>Secure Classroom</p>
          <h1 style={{ margin: "4px 0 0" }}>Lecturer and administrator dashboard</h1>
        </div>
        <button style={{ minHeight: 40, borderRadius: 8, border: 0, padding: "0 16px", background: "#24515a", color: "#fff" }}>
          Export CSV
        </button>
      </header>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
        {[
          ["Published courses", courses.filter((course) => course.status === "published").length],
          ["Pending submissions", submissions.filter((submission) => submission.status === "submitted").length],
          ["AI review queue", submissions.filter((submission) => submission.status === "needsLecturerReview").length],
          ["Active lecturers", 1],
        ].map(([label, value]) => (
          <article key={label} style={{ border: "1px solid #dce4df", borderRadius: 8, padding: 16, background: "#fff" }}>
            <strong style={{ display: "block", fontSize: 28, color: "#24515a" }}>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>
      <section style={{ marginTop: 24, border: "1px solid #dce4df", borderRadius: 8, background: "#fff", padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Written submissions</h2>
          <select value={filter} onChange={(event) => setFilter(event.target.value)} style={{ minHeight: 38, borderRadius: 8 }}>
            <option value="all">All</option>
            <option value="submitted">Submitted</option>
            <option value="needsLecturerReview">Needs lecturer review</option>
            <option value="reviewed">Reviewed</option>
          </select>
        </div>
        {visibleSubmissions.map((submission) => (
          <article key={submission.id} style={{ borderTop: "1px solid #dce4df", padding: "14px 0" }}>
            <strong>{submission.id}</strong>
            <p style={{ margin: "6px 0", color: "#60706b" }}>{submission.responseText}</p>
            <button style={{ minHeight: 36, borderRadius: 8, border: "1px solid #24515a", color: "#24515a", background: "#fff" }}>
              Review feedback
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
