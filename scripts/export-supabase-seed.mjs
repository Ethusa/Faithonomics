import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, ".tmp", "supabase-seed");
const bundledDataPath = path.join(outDir, "sampleData.mjs");
const seedPath = path.join(projectRoot, "supabase", "seed.sql");
const basePath = process.env.VITE_BASE_PATH || "/Faithonomics/";

const collectionInputs = [
  ["identities", (data) => Object.values(data.identities), (item) => item.memberId],
  ["courses", (data) => data.courses, (item) => item.id],
  ["modules", (data) => data.modules, (item) => item.id],
  ["lessons", (data) => data.lessons, (item) => item.id],
  ["activities", (data) => data.activities, (item) => item.id],
  ["questions", (data) => data.questions, (item) => item.id],
  ["answerChoices", (data) => data.answerChoices, (item) => item.id],
  ["enrolments", (data) => data.enrolments, (item) => item.id],
  ["lessonProgress", (data) => data.progress, (item) => item.id],
  ["activityCompletions", (data) => data.activityCompletions, (item) => `${item.memberId}-${item.activityId}`],
  ["submissions", (data) => data.submissions, (item) => item.id],
  ["discussionPosts", (data) => data.discussionPosts, (item) => item.id],
  ["discussionReplies", (data) => data.discussionReplies, (item) => item.id],
];

const stringField = (item, key) => (typeof item[key] === "string" ? item[key] : null);
const numberField = (item, key) => (typeof item[key] === "number" ? item[key] : null);

const sqlString = (value) => {
  if (value === null || value === undefined) {
    return "null";
  }
  return `'${String(value).replaceAll("'", "''")}'`;
};

const sqlJson = (value) => `${sqlString(JSON.stringify(value))}::jsonb`;

const toSqlRecord = (collection, recordId, payload) => [
  sqlString(collection),
  sqlString(recordId),
  sqlJson(payload),
  sqlString(stringField(payload, "courseId")),
  sqlString(stringField(payload, "moduleId")),
  sqlString(stringField(payload, "lessonId")),
  sqlString(stringField(payload, "activityId")),
  sqlString(stringField(payload, "questionId")),
  sqlString(stringField(payload, "memberId")),
  sqlString(stringField(payload, "enrolmentId")),
  sqlString(stringField(payload, "postId")),
  sqlString(stringField(payload, "submissionId")),
  sqlString(stringField(payload, "status")),
  numberField(payload, "sequence") ?? "null",
];

await rm(outDir, { force: true, recursive: true });
await mkdir(outDir, { recursive: true });

await build({
  bundle: true,
  define: {
    "import.meta.env.BASE_URL": JSON.stringify(basePath),
  },
  entryPoints: [path.join(projectRoot, "src", "data", "sampleData.ts")],
  format: "esm",
  outfile: bundledDataPath,
  platform: "neutral",
  target: "es2022",
  treeShaking: false,
});

const data = await import(pathToFileURL(bundledDataPath).href);
const rows = collectionInputs.flatMap(([collection, getItems, getRecordId]) =>
  getItems(data).map((item) => toSqlRecord(collection, getRecordId(item), item)),
);

const columns = [
  "collection",
  "record_id",
  "payload",
  "course_id",
  "module_id",
  "lesson_id",
  "activity_id",
  "question_id",
  "member_id",
  "enrolment_id",
  "post_id",
  "submission_id",
  "status",
  "sequence",
];

const seedSql = `-- Faithonomics seed data generated from src/data/sampleData.ts.
-- Generated with VITE_BASE_PATH=${basePath}
-- Run supabase/schema.sql first, then run this file in the Supabase SQL editor.

insert into public.classroom_records (${columns.join(", ")})
values
${rows.map((row) => `  (${row.join(", ")})`).join(",\n")}
on conflict (collection, record_id)
do update set
  payload = excluded.payload,
  course_id = excluded.course_id,
  module_id = excluded.module_id,
  lesson_id = excluded.lesson_id,
  activity_id = excluded.activity_id,
  question_id = excluded.question_id,
  member_id = excluded.member_id,
  enrolment_id = excluded.enrolment_id,
  post_id = excluded.post_id,
  submission_id = excluded.submission_id,
  status = excluded.status,
  sequence = excluded.sequence;
`;

await mkdir(path.dirname(seedPath), { recursive: true });
await writeFile(seedPath, seedSql);

console.log(`Wrote ${rows.length} records to ${path.relative(projectRoot, seedPath)}`);
