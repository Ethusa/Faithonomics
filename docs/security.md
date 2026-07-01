# Security Notes

## Identity

The classroom uses Wix Members identity. It does not create duplicate learner accounts or use a second authentication provider.

## Data Isolation

Learners can only access records tied to their own Wix Member ID and Contact ID. Staff access is role-checked in backend code.

## CMS Permissions

Public course content is readable by visitors. Sensitive collections are privileged or member-author scoped:

- Enrolments
- Submissions
- LessonProgress
- QuizAttempts
- Marks
- Feedback
- Certificates
- LecturerAssignments
- AIUsage
- AuditLogs

Sensitive writes must go through backend functions.

## Custom HTML Activities

Custom HTML is sanitised before rendering, loaded in a sandboxed iframe, and communicates through a controlled `postMessage` protocol. Uploaded scripts cannot access member data, Wix credentials, or parent-window state.

## AI

AI requests run only through backend functions. API keys belong in Wix Secrets Manager. Usage limits and audit records are enforced server-side.

## Payments

Course access is granted only after the backend verifies a completed Wix order or pricing-plan purchase. Browser redirects and success messages are not trusted.
