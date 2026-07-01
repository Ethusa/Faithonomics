export type AutomationEventKey =
  | "CLASSROOM_WELCOME"
  | "CLASSROOM_REMINDER"
  | "CLASSROOM_COMPLETION"
  | "CLASSROOM_SUBMISSION_REVIEWED";

export interface AutomationEventDefinition {
  key: AutomationEventKey;
  description: string;
  payloadFields: string[];
}

export const automationEvents: AutomationEventDefinition[] = [
  {
    key: "CLASSROOM_WELCOME",
    description: "Triggered when a learner is enrolled after verified payment, admin assignment, free course claim, or enrolment code.",
    payloadFields: ["memberId", "contactId", "courseId", "enrolmentId"],
  },
  {
    key: "CLASSROOM_REMINDER",
    description: "Triggered when a learner is inactive beyond the configured reminder window.",
    payloadFields: ["memberId", "contactId", "courseId", "lastActivityAt"],
  },
  {
    key: "CLASSROOM_COMPLETION",
    description: "Triggered when all required lessons are complete and a certificate is issued.",
    payloadFields: ["memberId", "contactId", "courseId", "certificateNumber"],
  },
  {
    key: "CLASSROOM_SUBMISSION_REVIEWED",
    description: "Triggered when a lecturer finalises feedback or marks.",
    payloadFields: ["memberId", "contactId", "courseId", "submissionId", "score"],
  },
];
