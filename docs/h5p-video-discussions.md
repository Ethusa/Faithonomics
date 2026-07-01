# H5P, Video Questions and Group Discussions

## H5P in Wix

H5P can be included in the classroom as an embedded activity when the H5P content is hosted by an H5P-capable platform such as H5P.com, Moodle, Drupal, WordPress with H5P, or a controlled self-hosted H5P runtime.

Wix can display an external H5P activity through an HTML iframe/embed element, but uploading a raw `.h5p` package to Wix Media Manager is not enough to run it. A `.h5p` file is a package that must be unpacked and served by an H5P runtime.

Completion tracking must use a trusted bridge:

- H5P emits xAPI-style statements for interactions and completion.
- The classroom listens for a controlled `postMessage` or xAPI completion message.
- The browser message is treated as evidence only. The final completion record must be written by Wix backend code after checking the learner, enrolment, lesson, allowed origin and activity configuration.
- Public cross-origin H5P embeds can be display-only if the host does not expose completion messages to the parent frame.

## Video With Questions

The most reliable option is to upload course videos to Wix Media Manager and store the Wix media file reference on the activity. The classroom can then render the controlled video player and require timed checkpoint questions before progress is allowed.

External video embeds can also be used, but completion control depends on the video provider's player API. If the provider does not expose playback events, the system should use an H5P Interactive Video embed or a Wix-hosted video with the classroom's own checkpoint-question layer.

## Required Lesson Completion

Lesson progress is blocked until every required step and interactive element reports completion:

- text, Scripture, video, image, download, and web-link steps
- custom HTML checkpoint activities
- H5P activities
- video checkpoint questions
- quizzes, including multiple-choice, match-answer, timeline or ordering, fill-in-the-blank, and short-answer prompts
- written reflections
- group discussion post and reply requirements

The UI shows the completion gate, but security belongs in Wix backend functions. The backend should re-check required lesson-step completion records, `ActivityCompletions`, `QuizAttempts`, `Submissions`, `DiscussionPosts`, `DiscussionReplies` and `LessonProgress` before marking any lesson complete.

## Discussion Activities

Discussion activities are group interactions. A learner must add their own post and reply to at least one post before the activity can be completed. Discussion collections are backend-only so the backend can verify enrolment and return only posts for courses the learner may access.

## References

- Wix iframe element: https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/other-elements/html-i-frame-element/working-with-the-html-iframe-element
- Wix embed widget help: https://support.wix.com/en/article/wix-editor-embedding-a-site-or-a-widget
- H5P xAPI documentation: https://h5p.org/documentation/x-api
- H5P cross-iframe tracking limitation discussion: https://h5p.org/node/64552
