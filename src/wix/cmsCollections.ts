import { collectionSuffixes } from "../adapters/wix/collectionIds";

export type CmsFieldType =
  | "TEXT"
  | "RICH_TEXT"
  | "NUMBER"
  | "BOOLEAN"
  | "DATETIME"
  | "IMAGE"
  | "DOCUMENT"
  | "VIDEO"
  | "REFERENCE"
  | "OBJECT"
  | "ARRAY_STRING";

export interface CmsField {
  key: string;
  displayName: string;
  type: CmsFieldType;
  encrypted?: boolean;
  referenceOptions?: {
    referencedCollectionId: string;
  };
  objectOptions?: {
    fields?: CmsField[];
  };
}

export interface CmsCollectionSchema {
  idSuffix: string;
  displayName: string;
  displayField: string;
  permissions: {
    itemRead: "ANYONE" | "SITE_MEMBER" | "SITE_MEMBER_AUTHOR" | "CMS_EDITOR" | "PRIVILEGED";
    itemInsert: "SITE_MEMBER" | "SITE_MEMBER_AUTHOR" | "CMS_EDITOR" | "PRIVILEGED";
    itemUpdate: "SITE_MEMBER_AUTHOR" | "CMS_EDITOR" | "PRIVILEGED";
    itemRemove: "CMS_EDITOR" | "PRIVILEGED";
  };
  fields: CmsField[];
  indexes: Array<{
    fields: Array<{ path: string; order?: "ASC" | "DESC" }>;
    unique?: boolean;
  }>;
}

const publicReadStaffWrite = {
  itemRead: "ANYONE",
  itemInsert: "CMS_EDITOR",
  itemUpdate: "CMS_EDITOR",
  itemRemove: "PRIVILEGED",
} as const;

const privateBackendOnly = {
  itemRead: "PRIVILEGED",
  itemInsert: "PRIVILEGED",
  itemUpdate: "PRIVILEGED",
  itemRemove: "PRIVILEGED",
} as const;

const memberAuthor = {
  itemRead: "SITE_MEMBER_AUTHOR",
  itemInsert: "SITE_MEMBER_AUTHOR",
  itemUpdate: "SITE_MEMBER_AUTHOR",
  itemRemove: "PRIVILEGED",
} as const;

const ref = (key: string, displayName: string, referencedCollectionId: string): CmsField => ({
  key,
  displayName,
  type: "REFERENCE",
  referenceOptions: { referencedCollectionId },
});

export const cmsCollections: CmsCollectionSchema[] = [
  {
    idSuffix: collectionSuffixes.courses,
    displayName: "Courses",
    displayField: "title",
    permissions: publicReadStaffWrite,
    fields: [
      { key: "title", displayName: "Title", type: "TEXT" },
      { key: "slug", displayName: "Slug", type: "TEXT" },
      { key: "summary", displayName: "Summary", type: "TEXT" },
      { key: "description", displayName: "Description", type: "RICH_TEXT" },
      { key: "image", displayName: "Image", type: "IMAGE" },
      { key: "status", displayName: "Status", type: "TEXT" },
      { key: "pricePlanIds", displayName: "Pricing Plan IDs", type: "ARRAY_STRING" },
      { key: "storeProductIds", displayName: "Store Product IDs", type: "ARRAY_STRING" },
      { key: "isFree", displayName: "Free Course", type: "BOOLEAN" },
      { key: "lecturerMemberIds", displayName: "Lecturer Member IDs", type: "ARRAY_STRING" },
      { key: "certificateTemplateId", displayName: "Certificate Template ID", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "slug" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.modules,
    displayName: "Modules",
    displayField: "title",
    permissions: publicReadStaffWrite,
    fields: [
      ref("course", "Course", collectionSuffixes.courses),
      { key: "title", displayName: "Title", type: "TEXT" },
      { key: "description", displayName: "Description", type: "TEXT" },
      { key: "sequence", displayName: "Sequence", type: "NUMBER" },
    ],
    indexes: [{ fields: [{ path: "course" }, { path: "sequence", order: "ASC" }] }],
  },
  {
    idSuffix: collectionSuffixes.lessons,
    displayName: "Lessons",
    displayField: "title",
    permissions: publicReadStaffWrite,
    fields: [
      ref("course", "Course", collectionSuffixes.courses),
      ref("module", "Module", collectionSuffixes.modules),
      { key: "title", displayName: "Title", type: "TEXT" },
      { key: "summary", displayName: "Summary", type: "TEXT" },
      { key: "sequence", displayName: "Sequence", type: "NUMBER" },
      { key: "required", displayName: "Required", type: "BOOLEAN" },
      {
        key: "content",
        displayName: "Content Blocks",
        type: "OBJECT",
        objectOptions: {
          fields: [
            { key: "kind", displayName: "Kind", type: "TEXT" },
            { key: "title", displayName: "Title", type: "TEXT" },
            { key: "body", displayName: "Body / HTML", type: "RICH_TEXT" },
            { key: "url", displayName: "Wix Media or Web URL", type: "TEXT" },
            { key: "fileName", displayName: "File Name", type: "TEXT" },
            { key: "alt", displayName: "Alt Text", type: "TEXT" },
            { key: "completionRequired", displayName: "Completion Required", type: "BOOLEAN" },
          ],
        },
      },
    ],
    indexes: [{ fields: [{ path: "course" }, { path: "sequence", order: "ASC" }] }],
  },
  {
    idSuffix: collectionSuffixes.activities,
    displayName: "Activities",
    displayField: "title",
    permissions: publicReadStaffWrite,
    fields: [
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      { key: "kind", displayName: "Kind", type: "TEXT" },
      { key: "title", displayName: "Title", type: "TEXT" },
      { key: "instructions", displayName: "Instructions", type: "RICH_TEXT" },
      { key: "required", displayName: "Required", type: "BOOLEAN" },
      { key: "maxScore", displayName: "Max Score", type: "NUMBER" },
      { key: "embedUrl", displayName: "H5P Embed URL", type: "TEXT" },
      { key: "videoUrl", displayName: "Video URL", type: "VIDEO" },
      { key: "completionMode", displayName: "Completion Mode", type: "TEXT" },
      { key: "minimumScore", displayName: "Minimum Score", type: "NUMBER" },
      { key: "videoQuestions", displayName: "Video Questions", type: "OBJECT", objectOptions: {} },
      { key: "rubric", displayName: "Rubric", type: "OBJECT", objectOptions: {} },
      { key: "modelAnswer", displayName: "Model Answer", type: "RICH_TEXT", encrypted: true },
    ],
    indexes: [{ fields: [{ path: "lesson" }] }],
  },
  {
    idSuffix: collectionSuffixes.questions,
    displayName: "Questions",
    displayField: "prompt",
    permissions: publicReadStaffWrite,
    fields: [
      ref("activity", "Activity", collectionSuffixes.activities),
      { key: "prompt", displayName: "Prompt", type: "RICH_TEXT" },
      { key: "kind", displayName: "Kind", type: "TEXT" },
      { key: "points", displayName: "Points", type: "NUMBER" },
      { key: "correctAnswer", displayName: "Correct Answer", type: "OBJECT", objectOptions: {}, encrypted: true },
    ],
    indexes: [{ fields: [{ path: "activity" }] }],
  },
  {
    idSuffix: collectionSuffixes.answerChoices,
    displayName: "Answer Choices",
    displayField: "label",
    permissions: publicReadStaffWrite,
    fields: [
      ref("question", "Question", collectionSuffixes.questions),
      { key: "label", displayName: "Label", type: "TEXT" },
      { key: "value", displayName: "Value", type: "TEXT", encrypted: true },
      { key: "isCorrect", displayName: "Correct", type: "BOOLEAN", encrypted: true },
      { key: "matchKey", displayName: "Match Key", type: "TEXT", encrypted: true },
      { key: "sequence", displayName: "Sequence", type: "NUMBER" },
    ],
    indexes: [{ fields: [{ path: "question" }, { path: "sequence", order: "ASC" }] }],
  },
  {
    idSuffix: collectionSuffixes.enrolments,
    displayName: "Enrolments",
    displayField: "memberId",
    permissions: privateBackendOnly,
    fields: [
      ref("course", "Course", collectionSuffixes.courses),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "contactId", displayName: "Wix Contact ID", type: "TEXT" },
      { key: "source", displayName: "Source", type: "TEXT" },
      { key: "sourceId", displayName: "Source ID", type: "TEXT" },
      { key: "status", displayName: "Status", type: "TEXT" },
      { key: "enrolledAt", displayName: "Enrolled At", type: "DATETIME" },
      { key: "completedAt", displayName: "Completed At", type: "DATETIME" },
    ],
    indexes: [
      { fields: [{ path: "course" }, { path: "memberId" }], unique: true },
      { fields: [{ path: "contactId" }] },
    ],
  },
  {
    idSuffix: collectionSuffixes.lessonProgress,
    displayName: "Lesson Progress",
    displayField: "lessonId",
    permissions: memberAuthor,
    fields: [
      ref("enrolment", "Enrolment", collectionSuffixes.enrolments),
      ref("course", "Course", collectionSuffixes.courses),
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "status", displayName: "Status", type: "TEXT" },
      { key: "percent", displayName: "Percent", type: "NUMBER" },
      { key: "lastActivityAt", displayName: "Last Activity At", type: "DATETIME" },
      { key: "completedAt", displayName: "Completed At", type: "DATETIME" },
    ],
    indexes: [{ fields: [{ path: "enrolment" }, { path: "lesson" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.quizAttempts,
    displayName: "Quiz Attempts",
    displayField: "memberId",
    permissions: memberAuthor,
    fields: [
      ref("activity", "Activity", collectionSuffixes.activities),
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      ref("enrolment", "Enrolment", collectionSuffixes.enrolments),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "answers", displayName: "Answers", type: "OBJECT", objectOptions: {}, encrypted: true },
      { key: "score", displayName: "Score", type: "NUMBER" },
      { key: "maxScore", displayName: "Max Score", type: "NUMBER" },
      { key: "submittedAt", displayName: "Submitted At", type: "DATETIME" },
    ],
    indexes: [{ fields: [{ path: "memberId" }, { path: "activity" }] }],
  },
  {
    idSuffix: collectionSuffixes.activityCompletions,
    displayName: "Activity Completions",
    displayField: "memberId",
    permissions: privateBackendOnly,
    fields: [
      ref("activity", "Activity", collectionSuffixes.activities),
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "score", displayName: "Score", type: "NUMBER" },
      { key: "maxScore", displayName: "Max Score", type: "NUMBER" },
      { key: "completionSource", displayName: "Completion Source", type: "TEXT" },
      { key: "completedAt", displayName: "Completed At", type: "DATETIME" },
      { key: "payload", displayName: "Trusted Payload", type: "OBJECT", objectOptions: {}, encrypted: true },
    ],
    indexes: [{ fields: [{ path: "memberId" }, { path: "activity" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.discussionPosts,
    displayName: "Discussion Posts",
    displayField: "authorName",
    permissions: privateBackendOnly,
    fields: [
      ref("activity", "Activity", collectionSuffixes.activities),
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      ref("course", "Course", collectionSuffixes.courses),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "contactId", displayName: "Wix Contact ID", type: "TEXT" },
      { key: "authorName", displayName: "Author Name", type: "TEXT" },
      { key: "body", displayName: "Body", type: "RICH_TEXT", encrypted: true },
      { key: "createdAt", displayName: "Created At", type: "DATETIME" },
      { key: "status", displayName: "Status", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "activity" }, { path: "createdAt", order: "DESC" }] }],
  },
  {
    idSuffix: collectionSuffixes.discussionReplies,
    displayName: "Discussion Replies",
    displayField: "authorName",
    permissions: privateBackendOnly,
    fields: [
      ref("post", "Post", collectionSuffixes.discussionPosts),
      ref("activity", "Activity", collectionSuffixes.activities),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "contactId", displayName: "Wix Contact ID", type: "TEXT" },
      { key: "authorName", displayName: "Author Name", type: "TEXT" },
      { key: "body", displayName: "Body", type: "RICH_TEXT", encrypted: true },
      { key: "createdAt", displayName: "Created At", type: "DATETIME" },
      { key: "status", displayName: "Status", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "post" }, { path: "createdAt", order: "ASC" }] }],
  },
  {
    idSuffix: collectionSuffixes.submissions,
    displayName: "Submissions",
    displayField: "memberId",
    permissions: memberAuthor,
    fields: [
      ref("activity", "Activity", collectionSuffixes.activities),
      ref("lesson", "Lesson", collectionSuffixes.lessons),
      ref("course", "Course", collectionSuffixes.courses),
      ref("enrolment", "Enrolment", collectionSuffixes.enrolments),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "contactId", displayName: "Wix Contact ID", type: "TEXT" },
      { key: "responseText", displayName: "Response Text", type: "RICH_TEXT", encrypted: true },
      { key: "file", displayName: "File", type: "DOCUMENT", encrypted: true },
      { key: "status", displayName: "Status", type: "TEXT" },
      { key: "submittedAt", displayName: "Submitted At", type: "DATETIME" },
    ],
    indexes: [{ fields: [{ path: "course" }, { path: "memberId" }, { path: "status" }] }],
  },
  {
    idSuffix: collectionSuffixes.marks,
    displayName: "Marks",
    displayField: "memberId",
    permissions: privateBackendOnly,
    fields: [
      ref("submission", "Submission", collectionSuffixes.submissions),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "lecturerMemberId", displayName: "Lecturer Member ID", type: "TEXT" },
      { key: "score", displayName: "Score", type: "NUMBER" },
      { key: "maxScore", displayName: "Max Score", type: "NUMBER" },
      { key: "status", displayName: "Status", type: "TEXT" },
      { key: "aiSuggested", displayName: "AI Suggested", type: "BOOLEAN" },
      { key: "finalisedAt", displayName: "Finalised At", type: "DATETIME" },
    ],
    indexes: [{ fields: [{ path: "memberId" }, { path: "submission" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.feedback,
    displayName: "Feedback",
    displayField: "comment",
    permissions: privateBackendOnly,
    fields: [
      ref("submission", "Submission", collectionSuffixes.submissions),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "authorMemberId", displayName: "Author Member ID", type: "TEXT" },
      { key: "authorRole", displayName: "Author Role", type: "TEXT" },
      { key: "strengths", displayName: "Strengths", type: "ARRAY_STRING" },
      { key: "missingIdeas", displayName: "Missing Ideas", type: "ARRAY_STRING" },
      { key: "revisionAdvice", displayName: "Revision Advice", type: "ARRAY_STRING" },
      { key: "comment", displayName: "Comment", type: "RICH_TEXT" },
      { key: "requiresHumanReview", displayName: "Requires Human Review", type: "BOOLEAN" },
      { key: "createdAt", displayName: "Created At", type: "DATETIME" },
    ],
    indexes: [{ fields: [{ path: "submission" }] }],
  },
  {
    idSuffix: collectionSuffixes.certificates,
    displayName: "Certificates",
    displayField: "certificateNumber",
    permissions: privateBackendOnly,
    fields: [
      ref("course", "Course", collectionSuffixes.courses),
      ref("enrolment", "Enrolment", collectionSuffixes.enrolments),
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      { key: "certificateNumber", displayName: "Certificate Number", type: "TEXT" },
      { key: "issuedAt", displayName: "Issued At", type: "DATETIME" },
      { key: "verificationUrl", displayName: "Verification URL", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "certificateNumber" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.lecturerAssignments,
    displayName: "Lecturer Assignments",
    displayField: "lecturerMemberId",
    permissions: privateBackendOnly,
    fields: [
      ref("course", "Course", collectionSuffixes.courses),
      { key: "lecturerMemberId", displayName: "Lecturer Member ID", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "course" }, { path: "lecturerMemberId" }], unique: true }],
  },
  {
    idSuffix: collectionSuffixes.aiUsage,
    displayName: "AI Usage",
    displayField: "memberId",
    permissions: privateBackendOnly,
    fields: [
      { key: "memberId", displayName: "Wix Member ID", type: "TEXT" },
      ref("submission", "Submission", collectionSuffixes.submissions),
      { key: "model", displayName: "Model", type: "TEXT" },
      { key: "promptTokens", displayName: "Prompt Tokens", type: "NUMBER" },
      { key: "completionTokens", displayName: "Completion Tokens", type: "NUMBER" },
      { key: "createdAt", displayName: "Created At", type: "DATETIME" },
      { key: "status", displayName: "Status", type: "TEXT" },
    ],
    indexes: [{ fields: [{ path: "memberId" }, { path: "createdAt", order: "DESC" }] }],
  },
  {
    idSuffix: collectionSuffixes.auditLogs,
    displayName: "Audit Logs",
    displayField: "action",
    permissions: privateBackendOnly,
    fields: [
      { key: "actorMemberId", displayName: "Actor Member ID", type: "TEXT" },
      { key: "action", displayName: "Action", type: "TEXT" },
      { key: "entityType", displayName: "Entity Type", type: "TEXT" },
      { key: "entityId", displayName: "Entity ID", type: "TEXT" },
      { key: "createdAt", displayName: "Created At", type: "DATETIME" },
      { key: "metadata", displayName: "Metadata", type: "OBJECT", objectOptions: {} },
    ],
    indexes: [{ fields: [{ path: "createdAt", order: "DESC" }] }],
  },
];

export const requiredCollectionSuffixes = Object.values(collectionSuffixes);
