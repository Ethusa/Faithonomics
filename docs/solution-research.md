# Solution Research: Wix-First LMS With H5P

## Recommendation

Keep the Faithonomics LMS as a Wix-first custom app. Do not replace Wix Members, Contacts, CMS, Pricing Plans, eCommerce, Media Manager or Wix dashboard extensions with a third-party LMS.

Best-fit architecture:

1. Use Wix Headless Redirects for member login, registration and Wix-managed checkout.
2. Use Wix Pricing Plans or Wix eCommerce webhooks to verify payment and create enrolments.
3. Use Wix CMS collections as the LMS record system for courses, lessons, progress, submissions, marks, certificates, AI usage and discussions.
4. Use Wix Media Manager for videos, images, PDFs and downloadable lesson assets.
5. Use Wix dashboard extensions for lecturer/admin management.
6. Add an H5P runtime only for H5P package execution and xAPI capture.

## GitHub Options Reviewed

### Lumieducation/H5P-Nodejs-library

Repository: https://github.com/Lumieducation/H5P-Nodejs-library  
Docs: https://docs.lumi.education/

Best use:

- Self-hosted H5P authoring and playback service.
- Uploading and unpacking `.h5p` packages.
- Capturing xAPI completion and score data.
- Building a trusted server-side bridge back into Wix backend functions.

Fit for this project:

- Strongest GitHub fit if lecturers need to upload/build H5P content.
- TypeScript/Node matches the project.
- Should not become the learner database. Wix remains the source of truth for member, enrolment and progress records.

Tradeoff:

- Requires a separate runtime for H5P content execution.
- H5P package files/assets may live outside Wix CMS, but learner progress should be written back to Wix CMS.

### tunapanda/h5p-standalone

Repository: https://github.com/tunapanda/h5p-standalone

Best use:

- Rendering pre-extracted H5P content without a full H5P server.
- Static or read-only H5P playback.

Fit for this project:

- Good lightweight option for proof-of-concept playback.
- Less suitable if lecturers need full authoring, upload, editing and reliable tracked completion.

Tradeoff:

- Does not remove the need to unpack `.h5p` packages.
- Tracking must still be bridged carefully into Wix backend.

### h5p/h5p-interactive-video

Repository: https://github.com/h5p/h5p-interactive-video

Best use:

- H5P interactive videos with questions and overlays.

Fit for this project:

- Good when course creators want standard H5P Interactive Video authoring.
- For videos uploaded directly to Wix Media Manager, the custom LMS checkpoint engine is simpler and keeps the video asset inside Wix.

### LearningLocker/learninglocker

Repository: https://github.com/LearningLocker/learninglocker

Best use:

- Full Learning Record Store for xAPI analytics.

Fit for this project:

- Optional later if the college needs formal xAPI/LRS reporting across many external learning tools.
- Not recommended for the first production version because it introduces another learning-data store.

## Wix Solutions Reviewed

### Wix Headless Redirects

Use for:

- Wix-managed login and registration.
- Wix-hosted checkout flows.
- Returning users to `/student-portal` or `learn.mycollege.co.za` after auth or payment.

Why:

- Keeps Wix Members as the identity system.
- Avoids duplicate learner accounts.
- Works better across domains where Wix session sharing is not direct.

### Wix Pricing Plans or Wix eCommerce

Use for:

- Paid courses.
- Free courses.
- Plan/order webhooks that trigger automatic enrolment.

Best default:

- Use Pricing Plans for course access/membership style products.
- Use eCommerce when course purchases need store-style products, cart behaviour, coupons or bundles.

### Wix CMS Data Items and Data Collections

Use for:

- Courses, modules, lessons and activity definitions.
- Enrolments, lesson progress, activity completions, submissions, marks, feedback and certificates.
- Group discussion posts and replies.

Why:

- Fits the requirement that Wix CMS collections hold course and progress data.
- Data collection extensions can create the app collections during installation.

### Wix Media Manager

Use for:

- Lesson videos.
- PDFs, worksheets and downloadable files.
- Course images and certificate assets.

Best default:

- Upload videos to Wix Media Manager when the LMS needs timed questions and reliable completion tracking.
- Use H5P Interactive Video only when the authoring experience is more important than Wix-native media ownership.

### Wix Secrets Manager

Use for:

- OpenAI API key.
- H5P service signing secret.
- Any server-to-server API credentials.

Rule:

- Never expose these to the browser. Wix backend functions should read secrets and perform privileged calls.

## Final Fit

Use a hybrid of:

- Wix Headless + Wix CLI app extensions + Wix CMS + Wix Pricing Plans/eCommerce as the main platform.
- Lumieducation H5P Nodejs library as an optional H5P execution/authoring sidecar.
- The current LMS custom interactive engine for Wix-hosted videos, quizzes, reflections, and group posts.

Avoid:

- Replacing Wix Members with another auth system.
- Moving learner progress to a separate LMS database.
- Using a full external LMS such as Moodle as the primary classroom unless Wix becomes only a marketing site.
- Trusting client-side success pages or iframe messages without backend verification.
