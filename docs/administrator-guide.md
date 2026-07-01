# Administrator Guide

## Roles

- Visitor: sees public course information only.
- Learner: sees purchased, assigned, free, or code-unlocked courses.
- Lecturer: manages course content and reviews learner work.
- Administrator: manages the complete classroom system.

Permissions are enforced in backend code. Hidden buttons are only a user-experience layer.

## Course Management

Use the Wix dashboard extension to:

- Create and edit courses.
- Add levels and sessions.
- Reorder sessions by sequence.
- Maintain the Faithonomics structure as Level -> Session -> Step blocks.
- Add text, Scripture, video, images, downloads, web links, quizzes, written reflections, group discussions, file submissions, and custom HTML activities.
- Build multiple-choice, true-or-false, match-answer, timeline or ordering, fill-in-the-blank, and short-answer quiz activities.
- Attach Wix Media Manager assets and Wix CMS web links to lesson content.
- Mark each required step or activity as complete before a learner can complete the session.
- Create marking rubrics and model answers.

## Enrolments

Enrolments are created by:

- Verified Wix eCommerce order approval.
- Verified Wix Pricing Plan purchase.
- Administrator assignment.
- Free course claim.
- Enrolment code redemption.

Never create an enrolment from a browser success message alone.

## Written Work and AI Feedback

AI feedback is optional and lecturer-controlled.

The system:

- Uses lecturer-created rubrics and model answers.
- Identifies strengths and missing ideas.
- Gives constructive Grade 12-level feedback.
- Recommends revision areas.
- Flags uncertainty for lecturer review.
- Records every AI-assisted assessment in `AIUsage`.
- Creates draft marks only.

A lecturer or administrator must approve or change final marks. AI never issues a final fail decision.

## Certificates

Certificates issue only when all required sessions are complete and backend checks pass. Certificate records store:

- Wix Member ID.
- Course.
- Enrolment.
- Certificate number.
- Issue date.
- Verification URL.

## Reports

Reports can be viewed by:

- Learner.
- Course.
- Module.
- Session.
- Assessment.
- Completion status.
- Last activity date.
- Average result.

CSV export is available from the dashboard extension and uses backend report endpoints.

## Audit Records

Audit logs should be reviewed for:

- Role changes.
- Manual enrolments.
- Payment access overrides.
- AI usage.
- Certificate issue events.
- Course publishing changes.
