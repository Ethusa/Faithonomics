import { useCallback, useEffect, useRef, useState } from "react";
import {
  activities,
  activityCompletions as seededActivityCompletions,
  answerChoices,
  discussionPosts as seededDiscussionPosts,
  discussionReplies as seededDiscussionReplies,
  enrolments,
  lessons,
  modules,
  progress,
  questions,
} from "../data/sampleData";
import { gradeQuiz } from "../domain/grading";
import { buildSandboxDocument, parseActivityMessage, parseH5PCompletionMessage } from "../domain/htmlSecurity";
import { getLessonLockStates, getLevelLockStates, lessonCompletionGate, sortLessons } from "../domain/progress";
import type {
  Activity,
  ActivityCompletion,
  AnswerChoice,
  Course,
  CourseModule,
  DiscussionPost,
  DiscussionReply,
  Enrolment,
  LearnerIdentity,
  Lesson,
  LessonContentBlock,
  LessonProgress,
  Question,
  QuizAttempt,
  Submission,
} from "../domain/types";
import { repository } from "../services/singleton";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  Lock,
  Maximize,
  Menu,
  PauseCircle,
  PlayCircle,
  Users,
  X,
} from "./Icons";

type YouTubePlayerEvent = {
  data: number;
};

type YouTubePlayer = {
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  pauseVideo: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
};

type YouTubeNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      height?: number | string;
      host?: string;
      videoId: string;
      width?: number | string;
      playerVars: Record<string, number | string>;
      events: {
        onReady: () => void;
        onStateChange: (event: YouTubePlayerEvent) => void;
        onError?: () => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<YouTubeNamespace> | null = null;

const getCourseEnrolment = (courseId: string, memberId: string): Enrolment | null =>
  enrolments.find((enrolment) => enrolment.courseId === courseId && enrolment.memberId === memberId) ?? null;

const formatCheckpointTime = (seconds: number): string =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

const isWixMediaReference = (url: string | undefined): boolean => url?.startsWith("wix-media://") ?? false;

const isHttpUrl = (url: string | undefined): url is string => /^https?:\/\//i.test(url ?? "");

const youTubeEmbedOrigin = "https://www.youtube-nocookie.com";
const fourPillarsForumButtonImage = `${import.meta.env.BASE_URL}assets/discussion-forum-button-clean.png`;
const fourPillarsForumImage = `${import.meta.env.BASE_URL}assets/discussion-forum-header-clean.png`;

const getYouTubeVideoId = (url: string | undefined): string | null => {
  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (host.endsWith("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }
      const embedMatch = parsedUrl.pathname.match(/^\/embed\/([^/?]+)/);
      if (embedMatch) {
        return embedMatch[1] ?? null;
      }
    }
  } catch {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
    return match?.[1] ?? null;
  }

  return null;
};

const loadYouTubeIframeApi = (): Promise<YouTubeNamespace> => {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]');
    const previousCallback = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      if (window.YT?.Player) {
        resolve(window.YT);
        return;
      }
      reject(new Error("YouTube iframe API loaded without a player constructor."));
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        youtubeApiPromise = null;
        reject(new Error("Unable to load the YouTube iframe API."));
      };
      document.head.appendChild(script);
    }
  });

  return youtubeApiPromise;
};

const isOrderingQuestion = (question: Question, activity: Activity): boolean =>
  question.kind === "ordering" ||
  question.kind === "timeline" ||
  activity.kind === "ordering" ||
  activity.kind === "timeline";

const getStringAnswer = (answers: Record<string, string | string[]>, questionId: string): string => {
  const answer = answers[questionId];
  return Array.isArray(answer) ? "" : answer ?? "";
};

const getArrayAnswer = (answers: Record<string, string | string[]>, questionId: string, length: number): string[] => {
  const answer = answers[questionId];
  if (Array.isArray(answer)) {
    return [...answer, ...Array.from({ length }, () => "")].slice(0, length);
  }
  return Array.from({ length }, () => "");
};

const LessonSidebar = ({
  courseLessons,
  courseModules,
  activeLessonId,
  lockStates,
  onSelect,
}: {
  courseLessons: Lesson[];
  courseModules: CourseModule[];
  activeLessonId: string;
  lockStates: Map<string, boolean>;
  onSelect: (lessonId: string) => void;
}) => (
  <aside className="lesson-sidebar">
    <h2>Levels and Sessions</h2>
    {[...courseModules]
      .sort((a, b) => a.sequence - b.sequence)
      .map((module) => {
        const moduleLessons = sortLessons(courseLessons.filter((lesson) => lesson.moduleId === module.id));
        return (
          <section className="level-group" key={module.id}>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            {moduleLessons.map((lesson) => {
              const locked = Boolean(lockStates.get(lesson.id));
              return (
                <button
                  key={lesson.id}
                  className={lesson.id === activeLessonId ? "lesson-nav-item active" : "lesson-nav-item"}
                  disabled={locked}
                  onClick={() => onSelect(lesson.id)}
                >
                  {locked ? <Lock size={16} /> : <BookOpen size={16} />}
                  {lesson.imageUrl ? <img className="lesson-nav-thumb" src={lesson.imageUrl} alt="" /> : null}
                  <span>{lesson.title}</span>
                </button>
              );
            })}
          </section>
        );
      })}
  </aside>
);

const ActivityStatus = ({ completed }: { completed: boolean }) => (
  <p className={completed ? "status success" : "status"}>
    {completed ? "Completion recorded." : "Required before session completion."}
  </p>
);

const ActivityPanel = ({
  activity,
  courseId,
  lessonId,
  enrolment,
  identity,
  completed,
  discussionPosts,
  discussionReplies,
  onComplete,
  onAddPost,
  onAddReply,
}: {
  activity: Activity;
  courseId: string;
  lessonId: string;
  enrolment: Enrolment | null;
  identity: LearnerIdentity;
  completed: boolean;
  discussionPosts: DiscussionPost[];
  discussionReplies: DiscussionReply[];
  onComplete: (activity: Activity, score?: number, maxScore?: number) => void;
  onAddPost: (activity: Activity, body: string) => void;
  onAddReply: (post: DiscussionPost, body: string) => void;
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | string[]>>({});
  const [feedback, setFeedback] = useState("");
  const [reflectionText, setReflectionText] = useState(
    "Psalm 1 shows that delight grows through daily meditation and repeated choices.",
  );
  const [videoAnswers, setVideoAnswers] = useState<Record<string, string>>({});
  const [postBody, setPostBody] = useState("");
  const [replyBodyByPost, setReplyBodyByPost] = useState<Record<string, string>>({});
  const h5pFrameRef = useRef<HTMLIFrameElement | null>(null);

  const saveSubmissionRecord = (responseText: string) => {
    if (!enrolment) {
      return;
    }

    const submittedAt = new Date().toISOString();
    const submission: Submission = {
      id: `submission-${activity.id}-${identity.memberId}`,
      activityId: activity.id,
      lessonId,
      courseId,
      enrolmentId: enrolment.id,
      memberId: identity.memberId,
      contactId: enrolment.contactId,
      responseText,
      status: "submitted",
      submittedAt,
    };
    void repository.saveSubmission(submission).catch(() => undefined);
  };

  const saveQuizAttemptRecord = (answers: Record<string, string | string[]>, score: number, maxScore: number) => {
    if (!enrolment) {
      return;
    }

    const attempt: QuizAttempt = {
      id: `quiz-${activity.id}-${identity.memberId}-${Date.now()}`,
      activityId: activity.id,
      lessonId,
      memberId: identity.memberId,
      enrolmentId: enrolment.id,
      answers,
      score,
      maxScore,
      submittedAt: new Date().toISOString(),
    };
    void repository.saveQuizAttempt(attempt).catch(() => undefined);
  };

  const activityQuestions = questions.filter((question) => question.activityId === activity.id);
  const choices = answerChoices.filter((choice) =>
    activityQuestions.some((question) => question.id === choice.questionId),
  );

  useEffect(() => {
    if (activity.kind !== "h5p") {
      return undefined;
    }

    const listener = (event: MessageEvent<unknown>) => {
      const iframeWindow = h5pFrameRef.current?.contentWindow;
      if (iframeWindow && event.source !== iframeWindow) {
        return;
      }

      const message =
        parseActivityMessage(event.data, [activity.id]) ?? parseH5PCompletionMessage(event.data, activity.id);
      if (message?.type === "classroom.activity.completed") {
        onComplete(activity, message.score ?? activity.maxScore, message.maxScore ?? activity.maxScore);
      }
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, [activity, onComplete]);

  if (activity.kind === "reflection") {
    return (
      <section className="activity-panel">
        <div className="activity-heading">
          <h3>{activity.title}</h3>
          <ClipboardCheck size={20} />
        </div>
        <p>{activity.instructions}</p>
        <textarea
          value={reflectionText}
          onChange={(event) => setReflectionText(event.target.value)}
          aria-label="Written reflection"
        />
        <button
          className="secondary-button"
          onClick={() => {
            setFeedback("Answer saved.");
            saveSubmissionRecord(reflectionText);
            onComplete(activity, activity.maxScore, activity.maxScore);
          }}
        >
          Save answer
        </button>
        {feedback ? <p className="status success">{feedback}</p> : <ActivityStatus completed={completed} />}
      </section>
    );
  }

  if (activity.kind === "h5p") {
    return (
      <section className="activity-panel">
        <div className="activity-heading">
          <h3>{activity.title}</h3>
          <ClipboardCheck size={20} />
        </div>
        <p>{activity.instructions}</p>
        {activity.embedUrl ? (
          <iframe
            ref={h5pFrameRef}
            className="h5p-frame"
            title={activity.title}
            src={activity.embedUrl}
            sandbox="allow-scripts allow-same-origin allow-forms"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="video-placeholder">
            <PlayCircle size={42} />
            <span>H5P package awaiting hosted embed URL</span>
          </div>
        )}
        <ActivityStatus completed={completed} />
      </section>
    );
  }

  if (activity.kind === "interactiveVideo") {
    const videoQuestions = activity.videoQuestions ?? [];
    const correctCount = videoQuestions.filter(
      (question) => videoAnswers[question.id] === question.correctAnswer,
    ).length;
    const scaledScore =
      videoQuestions.length === 0 ? activity.maxScore : Math.round((correctCount / videoQuestions.length) * activity.maxScore);
    const meetsThreshold = scaledScore >= (activity.minimumScore ?? activity.maxScore);
    const videoIsWixMedia = activity.videoUrl?.startsWith("wix-media://") ?? false;

    return (
      <section className="activity-panel">
        <div className="activity-heading">
          <h3>{activity.title}</h3>
          <PlayCircle size={20} />
        </div>
        <p>{activity.instructions}</p>
        {activity.videoUrl && !videoIsWixMedia ? (
          <video className="lesson-video" controls preload="metadata" src={activity.videoUrl} />
        ) : (
          <div className="video-placeholder">
            <PlayCircle size={42} />
            <span>Wix Media video with timed questions</span>
          </div>
        )}
        <div className="video-question-grid">
          {videoQuestions.map((question) => (
            <fieldset key={question.id}>
              <legend>
                {formatCheckpointTime(question.timeSeconds)} - {question.prompt}
              </legend>
              {question.choices.map((choice) => (
                <label key={choice} className="choice-row">
                  <input
                    type="radio"
                    name={question.id}
                    value={choice}
                    checked={videoAnswers[question.id] === choice}
                    onChange={() => setVideoAnswers((current) => ({ ...current, [question.id]: choice }))}
                  />
                  {choice}
                </label>
              ))}
            </fieldset>
          ))}
        </div>
        <div className="activity-toolbar">
          <span className="status">
            Score: {scaledScore}/{activity.maxScore}
          </span>
          <button
            className="secondary-button"
            disabled={!meetsThreshold}
            onClick={() => {
              saveQuizAttemptRecord(videoAnswers, scaledScore, activity.maxScore);
              onComplete(activity, scaledScore, activity.maxScore);
            }}
          >
            Save video answers
          </button>
        </div>
        <ActivityStatus completed={completed} />
      </section>
    );
  }

  if (activity.kind === "discussion") {
    const posts = discussionPosts.filter((post) => post.activityId === activity.id);
    const postIds = new Set(posts.map((post) => post.id));
    const postById = new Map(posts.map((post) => [post.id, post]));
    const ownPostExists = posts.some((post) => post.memberId === identity.memberId);
    const requiredReplies = Math.max(1, activity.replyRequirement ?? 1);
    const ownReplyPostIds = new Set(
      discussionReplies
        .filter((reply) => {
          const repliedPost = postById.get(reply.postId);
          return (
            reply.memberId === identity.memberId &&
            postIds.has(reply.postId) &&
            repliedPost !== undefined &&
            repliedPost.memberId !== identity.memberId
          );
        })
        .map((reply) => reply.postId),
    );
    const ownRepliesToOthersCount = ownReplyPostIds.size;
    const requirementsMet = ownPostExists && ownRepliesToOthersCount >= requiredReplies;
    const postPlaceholder =
      activity.id === "activity-kingdom-first-discussion"
        ? "Share how Matthew 6 reshapes one economic choice..."
        : activity.id === "activity-four-pillars-discussion"
          ? "Choose property, relationships, work, or consumption. Share one everyday example..."
        : "Share your Monday action...";
    const completeIfRequirementsAreMet = (postRequirementMet: boolean, replyCount: number) => {
      if (postRequirementMet && replyCount >= requiredReplies) {
        onComplete(activity, activity.maxScore, activity.maxScore);
      }
    };

    return (
      <section className="activity-panel discussion-panel">
        <div className="activity-heading">
          <h3>{activity.title}</h3>
          <Users size={20} />
        </div>
        <p>{activity.instructions}</p>
        <div className="discussion-requirements" aria-label="Discussion completion requirements">
          <span className={ownPostExists ? "met" : ""}>{ownPostExists ? "Post added" : "Add one post"}</span>
          <span className={ownRepliesToOthersCount >= requiredReplies ? "met" : ""}>
            Reply to course participants: {ownRepliesToOthersCount}/{requiredReplies}
          </span>
        </div>
        <div className="discussion-composer">
          <textarea
            value={postBody}
            onChange={(event) => setPostBody(event.target.value)}
            aria-label="Group discussion post"
            placeholder={postPlaceholder}
          />
          <button
            className="secondary-button"
            onClick={() => {
              if (!postBody.trim()) {
                return;
              }
              onAddPost(activity, postBody.trim());
              setPostBody("");
              completeIfRequirementsAreMet(true, ownRepliesToOthersCount);
            }}
          >
            Add post
          </button>
        </div>
        <div className="discussion-list">
          {posts.map((post) => {
            const replies = discussionReplies.filter((reply) => reply.postId === post.id);
            const isOwnPost = post.memberId === identity.memberId;
            const replyCountsForLearner = ownReplyPostIds.has(post.id);
            return (
              <article
                className={["discussion-post", isOwnPost ? "own-post" : "", replyCountsForLearner ? "replied" : ""]
                  .filter(Boolean)
                  .join(" ")}
                key={post.id}
              >
                <strong>{post.authorName}</strong>
                {isOwnPost ? <span className="discussion-badge">Your post</span> : null}
                {replyCountsForLearner ? <span className="discussion-badge replied">Reply counted</span> : null}
                <p>{post.body}</p>
                <div className="reply-list">
                  {replies.map((reply) => (
                    <p key={reply.id}>
                      <strong>{reply.authorName}:</strong> {reply.body}
                    </p>
                  ))}
                </div>
                {isOwnPost ? (
                  <p className="status">This is your post. Reply to course participants to complete the activity.</p>
                ) : (
                  <div className="reply-composer">
                    <textarea
                      value={replyBodyByPost[post.id] ?? ""}
                      onChange={(event) =>
                        setReplyBodyByPost((current) => ({ ...current, [post.id]: event.target.value }))
                      }
                      aria-label={`Reply to ${post.authorName}`}
                      placeholder="Ask a thoughtful question or add a practical connection..."
                    />
                    <button
                      className="secondary-button"
                      onClick={() => {
                        const body = replyBodyByPost[post.id]?.trim();
                        if (!body) {
                          return;
                        }
                        onAddReply(post, body);
                        setReplyBodyByPost((current) => ({ ...current, [post.id]: "" }));
                        const repliesAfterAdd = ownRepliesToOthersCount + (ownReplyPostIds.has(post.id) ? 0 : 1);
                        completeIfRequirementsAreMet(ownPostExists, repliesAfterAdd);
                      }}
                    >
                      Add reply
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <p className={requirementsMet ? "status success" : "status"}>
          {requirementsMet
            ? "Discussion requirement met."
            : `Add one post and reply to ${requiredReplies} ${requiredReplies === 1 ? "course participant" : "course participants"} to complete this activity.`}
        </p>
        <ActivityStatus completed={completed} />
      </section>
    );
  }

  if (activity.kind === "shortAnswer") {
    const shortAnswersComplete =
      activityQuestions.length > 0 &&
      activityQuestions.every((question) => getStringAnswer(selectedAnswers, question.id).trim().length >= 10);

    return (
      <section className="activity-panel">
        <div className="activity-heading">
          <h3>{activity.title}</h3>
          <FileText size={20} />
        </div>
        <p>{activity.instructions}</p>
        {activityQuestions.map((question) => (
          <label className="short-answer-field" key={question.id}>
            <span>{question.prompt}</span>
            <textarea
              value={getStringAnswer(selectedAnswers, question.id)}
              onChange={(event) =>
                setSelectedAnswers((current) => ({ ...current, [question.id]: event.target.value }))
              }
              aria-label={question.prompt}
              placeholder="Write a brief answer..."
            />
          </label>
        ))}
        <div className="activity-toolbar">
          <span className="status">Saved answers can be reviewed by a lecturer before final marks.</span>
          <button
            className="secondary-button"
            disabled={!shortAnswersComplete}
            onClick={() => {
              const shortAnswerPayload = activityQuestions.reduce<Record<string, string>>((payload, question) => {
                payload[question.id] = getStringAnswer(selectedAnswers, question.id);
                return payload;
              }, {});
              setFeedback("Short answer saved for review.");
              saveSubmissionRecord(JSON.stringify(shortAnswerPayload));
              onComplete(activity, activity.maxScore, activity.maxScore);
            }}
          >
            Save short answer
          </button>
        </div>
        {feedback ? <p className="status success">{feedback}</p> : <ActivityStatus completed={completed} />}
      </section>
    );
  }

  const getQuestionChoices = (questionId: string): AnswerChoice[] =>
    choices.filter((choice) => choice.questionId === questionId);

  const setTextAnswer = (questionId: string, value: string) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: value }));
  };

  const setOrderedAnswer = (questionId: string, index: number, value: string, length: number) => {
    setSelectedAnswers((current) => {
      const nextAnswer = getArrayAnswer(current, questionId, length);
      nextAnswer[index] = value;
      return { ...current, [questionId]: nextAnswer };
    });
  };

  const answerPayload = activityQuestions.reduce<Record<string, string | string[]>>((payload, question) => {
    const questionChoices = getQuestionChoices(question.id);
    payload[question.id] = isOrderingQuestion(question, activity)
      ? getArrayAnswer(selectedAnswers, question.id, questionChoices.length)
      : getStringAnswer(selectedAnswers, question.id);
    return payload;
  }, {});
  const result = gradeQuiz(activityQuestions, choices, answerPayload);
  const meetsThreshold = result.score >= (activity.minimumScore ?? activity.maxScore);
  const questionHasAnswer = (question: Question): boolean => {
    const answer = answerPayload[question.id];
    if (isOrderingQuestion(question, activity)) {
      const questionChoices = getQuestionChoices(question.id);
      return (
        Array.isArray(answer) &&
        questionChoices.length > 0 &&
        answer.length === questionChoices.length &&
        answer.every((value) => value.trim().length > 0) &&
        new Set(answer).size === answer.length
      );
    }
    return typeof answer === "string" && answer.trim().length > 0;
  };
  const canSubmitQuiz = activityQuestions.length > 0 && activityQuestions.every(questionHasAnswer) && meetsThreshold;

  const renderQuestion = (question: Question) => {
    const questionChoices = getQuestionChoices(question.id);

    if (question.kind === "fillBlank" || activity.kind === "fillBlank") {
      return (
        <fieldset key={question.id}>
          <legend>{question.prompt}</legend>
          <input
            className="blank-input"
            value={getStringAnswer(selectedAnswers, question.id)}
            onChange={(event) => setTextAnswer(question.id, event.target.value)}
            aria-label={question.prompt}
            placeholder="Type your answer"
          />
        </fieldset>
      );
    }

    if (question.kind === "matching" || activity.kind === "matching") {
      return (
        <fieldset key={question.id}>
          <legend>{question.prompt}</legend>
          <select
            className="match-select"
            value={getStringAnswer(selectedAnswers, question.id)}
            onChange={(event) => setTextAnswer(question.id, event.target.value)}
            aria-label={`Match answer for ${question.prompt}`}
          >
            <option value="">Choose matching answer</option>
            {questionChoices.map((choice) => (
              <option key={choice.id} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </fieldset>
      );
    }

    if (isOrderingQuestion(question, activity)) {
      const ordered = getArrayAnswer(selectedAnswers, question.id, questionChoices.length);
      const usedValues = new Set(ordered.filter((value) => value.length > 0));

      return (
        <fieldset key={question.id}>
          <legend>{question.prompt}</legend>
          <div className="timeline-slots">
            {questionChoices.map((choice, index) => (
              <label key={`${question.id}-slot-${index + 1}`}>
                <span>{activity.kind === "timeline" ? `Timeline ${index + 1}` : `Position ${index + 1}`}</span>
                <select
                  value={ordered[index] ?? ""}
                  onChange={(event) =>
                    setOrderedAnswer(question.id, index, event.target.value, questionChoices.length)
                  }
                  aria-label={`${question.prompt} position ${index + 1}`}
                >
                  <option value="">Choose item</option>
                  {questionChoices.map((option) => (
                    <option
                      key={option.id}
                      value={option.value}
                      disabled={usedValues.has(option.value) && ordered[index] !== option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </fieldset>
      );
    }

    return (
      <fieldset key={question.id}>
        <legend>{question.prompt}</legend>
        {questionChoices.map((choice) => (
          <label key={choice.id} className="choice-row">
            <input
              type="radio"
              name={question.id}
              value={choice.value}
              checked={getStringAnswer(selectedAnswers, question.id) === choice.value}
              onChange={() => setTextAnswer(question.id, choice.value)}
            />
            {choice.label}
          </label>
        ))}
      </fieldset>
    );
  };

  return (
    <section className="activity-panel">
      <div className="activity-heading">
        <h3>{activity.title}</h3>
        <ClipboardCheck size={20} />
      </div>
      <p>{activity.instructions}</p>
      {activityQuestions.map(renderQuestion)}
      <div className="activity-toolbar">
        <span className="status">
          Score: {result.score}/{result.maxScore}
        </span>
        <button
          className="secondary-button"
          disabled={!canSubmitQuiz}
          onClick={() => {
            saveQuizAttemptRecord(answerPayload, result.score, result.maxScore);
            onComplete(activity, result.score, result.maxScore);
          }}
        >
          Submit answers
        </button>
      </div>
      <ActivityStatus completed={completed} />
    </section>
  );
};

const YouTubeCheckpointVideo = ({
  content,
  completed,
  onCompleteContent,
}: {
  content: LessonContentBlock;
  completed: boolean;
  onCompleteContent: (contentId: string) => void;
}) => {
  const checkpoint = content.videoCheckpoint;
  const videoId = getYouTubeVideoId(content.url);
  const playerHostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const pollRef = useRef<number | null>(null);
  const checkpointFallbackTimerRef = useRef<number | null>(null);
  const completionFallbackTimerRef = useRef<number | null>(null);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const quizPassedRef = useRef(completed);
  const completedRef = useRef(completed);
  const checkpointOpenRef = useRef(false);
  const [playerStatus, setPlayerStatus] = useState<"loading" | "ready" | "error">("loading");
  const [checkpointOpen, setCheckpointOpen] = useState(false);
  const [quizPassed, setQuizPassed] = useState(completed);
  const [checkpointFallbackReady, setCheckpointFallbackReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const lockVideoAtCheckpoint = useCallback(() => {
    const player = playerRef.current;
    const checkpointTime = checkpoint?.timeSeconds;
    if (!player || typeof checkpointTime !== "number") {
      return;
    }

    player.pauseVideo();
    const currentTime = player.getCurrentTime();
    if (Number.isFinite(currentTime) && currentTime > checkpointTime + 0.25) {
      player.seekTo(checkpointTime, true);
    }
  }, [checkpoint?.timeSeconds]);

  const openCheckpointQuiz = useCallback(() => {
    checkpointOpenRef.current = true;
    lockVideoAtCheckpoint();
    setSubmitted(false);
    setCheckpointOpen(true);
  }, [lockVideoAtCheckpoint]);

  useEffect(() => {
    quizPassedRef.current = quizPassed;
  }, [quizPassed]);

  useEffect(() => {
    checkpointOpenRef.current = checkpointOpen;
  }, [checkpointOpen]);

  useEffect(() => {
    completedRef.current = completed;
    if (completed) {
      setQuizPassed(true);
      quizPassedRef.current = true;
    }
  }, [completed]);

  useEffect(() => {
    if (!checkpoint || !videoId) {
      return undefined;
    }

    let active = true;

    const clearPoll = () => {
      if (pollRef.current !== null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };

    const clearCheckpointFallbackTimer = () => {
      if (checkpointFallbackTimerRef.current !== null) {
        window.clearTimeout(checkpointFallbackTimerRef.current);
        checkpointFallbackTimerRef.current = null;
      }
    };

    const clearCompletionFallbackTimer = () => {
      if (completionFallbackTimerRef.current !== null) {
        window.clearTimeout(completionFallbackTimerRef.current);
        completionFallbackTimerRef.current = null;
      }
    };

    const startCheckpointFallbackTimer = () => {
      clearCheckpointFallbackTimer();
      if (quizPassedRef.current || checkpointOpenRef.current || completedRef.current) {
        return;
      }
      checkpointFallbackTimerRef.current = window.setTimeout(() => {
        if (!quizPassedRef.current && !checkpointOpenRef.current && !completedRef.current) {
          setCheckpointFallbackReady(true);
        }
      }, 3000);
    };

    const checkProgress = () => {
      const player = playerRef.current;
      if (!player) {
        return;
      }

      const measuredCurrentTime = player.getCurrentTime();
      const measuredDuration = player.getDuration();
      currentTimeRef.current = Number.isFinite(measuredCurrentTime) ? measuredCurrentTime : currentTimeRef.current;
      durationRef.current = Number.isFinite(measuredDuration) ? measuredDuration : durationRef.current;

      const currentTime = currentTimeRef.current;
      const duration = durationRef.current;
      if (checkpointOpenRef.current && !quizPassedRef.current) {
        lockVideoAtCheckpoint();
        return;
      }

      if (!quizPassedRef.current && currentTime >= checkpoint.timeSeconds) {
        clearCheckpointFallbackTimer();
        openCheckpointQuiz();
        return;
      }

      if (
        quizPassedRef.current &&
        !completedRef.current &&
        Number.isFinite(duration) &&
        duration > 0 &&
        currentTime >= duration - 1
      ) {
        onCompleteContent(content.id);
      }
    };

    const startPoll = () => {
      clearPoll();
      pollRef.current = window.setInterval(checkProgress, 350);
    };

    currentTimeRef.current = quizPassedRef.current ? checkpoint.timeSeconds : 0;
    durationRef.current = 0;
    setCheckpointFallbackReady(false);
    setPlayerStatus("loading");
    loadYouTubeIframeApi()
      .then((YT) => {
        if (!active || !playerHostRef.current) {
          return;
        }

        const playerVars: Record<string, number | string> = {
          autoplay: 0,
          enablejsapi: 1,
          modestbranding: 1,
          origin: window.location.origin,
          playsinline: 1,
          rel: 0,
          start: quizPassedRef.current ? checkpoint.timeSeconds : 0,
        };
        playerRef.current = new YT.Player(playerHostRef.current, {
          height: "100%",
          host: youTubeEmbedOrigin,
          videoId,
          width: "100%",
          playerVars,
          events: {
            onReady: () => {
              setPlayerStatus("ready");
              startPoll();
            },
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PLAYING) {
                checkProgress();
                startPoll();
                return;
              }

              if (event.data === YT.PlayerState.ENDED && !quizPassedRef.current) {
                clearPoll();
                clearCheckpointFallbackTimer();
                openCheckpointQuiz();
                return;
              }

              if (event.data === YT.PlayerState.ENDED && quizPassedRef.current && !completedRef.current) {
                clearPoll();
                clearCheckpointFallbackTimer();
                clearCompletionFallbackTimer();
                onCompleteContent(content.id);
              }
            },
            onError: () => {
              setPlayerStatus("error");
              clearPoll();
              startCheckpointFallbackTimer();
            },
          },
        });
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setPlayerStatus("error");
        clearPoll();
        startCheckpointFallbackTimer();
      });

    return () => {
      active = false;
      clearPoll();
      clearCheckpointFallbackTimer();
      clearCompletionFallbackTimer();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [checkpoint, content.id, lockVideoAtCheckpoint, onCompleteContent, openCheckpointQuiz, videoId]);

  useEffect(() => {
    if (!checkpoint || !quizPassed || completed) {
      return undefined;
    }

    const durationSeconds = checkpoint.durationSeconds ?? 0;
    const remainingSeconds = durationSeconds - checkpoint.timeSeconds;
    if (remainingSeconds <= 0) {
      return undefined;
    }

    completionFallbackTimerRef.current = window.setTimeout(() => {
      if (quizPassedRef.current && !completedRef.current) {
        onCompleteContent(content.id);
      }
    }, remainingSeconds * 1000 + 1500);

    return () => {
      if (completionFallbackTimerRef.current !== null) {
        window.clearTimeout(completionFallbackTimerRef.current);
        completionFallbackTimerRef.current = null;
      }
    };
  }, [checkpoint, completed, content.id, onCompleteContent, quizPassed]);

  if (!checkpoint || !videoId) {
    return (
      <div className="video-placeholder">
        <PlayCircle size={42} />
        <span>YouTube checkpoint video is awaiting a valid URL and quiz.</span>
      </div>
    );
  }

  const allAnswered = checkpoint.questions.every((question) => Boolean(selectedAnswers[question.id]));

  const finishQuizAndContinueVideo = () => {
    setSubmitted(true);
    if (!allAnswered) {
      return;
    }
    setQuizPassed(true);
    quizPassedRef.current = true;
    checkpointOpenRef.current = false;
    setCheckpointFallbackReady(false);
    setCheckpointOpen(false);
    const player = playerRef.current;
    if (player) {
      const resumeAt = checkpoint.timeSeconds + 0.25;
      player.seekTo(resumeAt, true);
      player.playVideo();
    }
  };

  return (
    <div className="checkpoint-video-shell">
      {content.body ? <p>{content.body}</p> : null}
      <div className="youtube-frame-wrap">
        <div className="youtube-frame-slot" aria-label={content.title}>
          <div className="youtube-player-host" ref={playerHostRef} />
        </div>
        {checkpointOpen && !quizPassed ? (
          <div className="video-blocker" role="status" aria-live="polite">
            <Lock size={24} />
            <span>Complete the checkpoint quiz pop-up to continue the video.</span>
          </div>
        ) : null}
      </div>
      <div className="video-state-row">
        <span className={completed ? "status success" : "status"}>
          {completed
            ? "Video step complete."
            : `Checkpoint quiz opens at ${formatCheckpointTime(checkpoint.timeSeconds)}.`}
        </span>
        {playerStatus === "loading" ? <span className="status">Loading YouTube player...</span> : null}
        {checkpointFallbackReady && !checkpointOpen && !quizPassed ? (
          <button className="secondary-button" type="button" onClick={openCheckpointQuiz}>
            Open checkpoint quiz
          </button>
        ) : null}
      </div>
      {checkpointOpen ? (
        <div className="checkpoint-modal-backdrop" role="presentation">
          <section
            className="checkpoint-quiz checkpoint-modal"
            role="dialog"
            aria-modal="true"
            aria-live="polite"
            aria-labelledby={`${checkpoint.id}-title`}
          >
            <div className="activity-heading">
              <h4 id={`${checkpoint.id}-title`}>{checkpoint.title}</h4>
              <ClipboardCheck size={19} />
            </div>
            <p className="checkpoint-intro">
              Answer each question to continue the video. Feedback appears as you choose.
            </p>
            {checkpoint.questions.map((question) => {
              const selectedAnswer = selectedAnswers[question.id];
              const selectedAnswerIsCorrect = selectedAnswer === question.correctAnswer;

              return (
                <article
                  className="checkpoint-question"
                  key={question.id}
                  role="group"
                  aria-labelledby={`${question.id}-prompt`}
                >
                  <p className="checkpoint-prompt" id={`${question.id}-prompt`}>
                    {question.prompt}
                  </p>
                  <div className="checkpoint-choice-list">
                    {question.choices.map((choice, index) => {
                      const letter = String.fromCharCode(65 + index);
                      return (
                        <label key={choice} className="choice-row">
                          <input
                            type="radio"
                            name={question.id}
                            value={choice}
                            checked={selectedAnswer === choice}
                            onChange={() =>
                              setSelectedAnswers((current) => ({ ...current, [question.id]: choice }))
                            }
                          />
                          <span>
                            <strong>{letter}.</strong> {choice}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {selectedAnswer ? (
                    <p className={selectedAnswerIsCorrect ? "quiz-feedback success" : "quiz-feedback error"}>
                      {selectedAnswerIsCorrect
                        ? question.feedback
                        : "Not quite. Review the scenario and compare your answer with the main idea before you continue."}
                    </p>
                  ) : null}
                </article>
              );
            })}
            {submitted && !allAnswered ? <p className="status error">Answer every question before continuing.</p> : null}
            <button className="primary-button" disabled={!allAnswered} onClick={finishQuizAndContinueVideo}>
              Finish video
            </button>
          </section>
        </div>
      ) : null}
    </div>
  );
};

const getContentCompletionLabel = (content: LessonContentBlock): string => {
  if (content.kind === "video") {
    return "Mark video complete";
  }
  if (content.kind === "webLink") {
    return "Mark link reviewed";
  }
  if (content.kind === "download") {
    return "Mark download reviewed";
  }
  return "Continue";
};

type ConsumerChoice = "muffin" | "latte";
type ProducerChoice = "robusta" | "arabica";
type GovernmentChoice = "freeTrade" | "importTax";

type SimulatorState = {
  consumer: ConsumerChoice;
  producer: ProducerChoice;
  government: GovernmentChoice;
};

type SatisfactionStatus = "happy" | "neutral" | "unsatisfied";

type SimulatorAssessmentId = "farmer" | "johan" | "thabo" | "fairnessTrust" | "pricePressure" | "government";

type SimulatorAssessment = {
  id: SimulatorAssessmentId;
  category: string;
  status: SatisfactionStatus;
  value: number;
  explanation: string;
  iconUrl: string;
};

type SimulatorScaleAnalysis = {
  scale: "Micro" | "Meso" | "Macro";
  title: string;
  body: string;
};

type SimulatorDeckSlide =
  | {
      id: "overview";
      kind: "overview";
      title: string;
      body: string;
      secondaryBody: string;
    }
  | {
      id: string;
      kind: "scale";
      scale: SimulatorScaleAnalysis["scale"];
      scaleTitle: string;
      scaleBody: string;
      assessments: SimulatorAssessment[];
    };

type SimulatorAnalysis = {
  headline: string;
  policyLabel: string;
  story: string;
  policyImpact: string;
  theologicalLens: string;
  scaleAnalysis: SimulatorScaleAnalysis[];
  assessments: SimulatorAssessment[];
};

type SimulatorChoiceSliderTheme = "consumer" | "producer" | "government";

type SimulatorChoiceSliderOption<T extends string> = {
  value: T;
  label: string;
  description: string;
};

type SimulatorChoiceSliderProps<T extends string> = {
  ariaLabel: string;
  value: T;
  options: [SimulatorChoiceSliderOption<T>, SimulatorChoiceSliderOption<T>];
  theme: SimulatorChoiceSliderTheme;
  onChange: (value: T) => void;
};

const initialSimulatorState: SimulatorState = {
  consumer: "muffin",
  producer: "robusta",
  government: "freeTrade",
};

const simulatorChoiceLabels: {
  consumer: Record<ConsumerChoice, string>;
  producer: Record<ProducerChoice, string>;
  government: Record<GovernmentChoice, string>;
} = {
  consumer: {
    muffin: "Coffee + Muffin (R49)",
    latte: "Fancy Latte (R45)",
  },
  producer: {
    robusta: "Robusta Beans",
    arabica: "Arabica Beans",
  },
  government: {
    freeTrade: "Free Trade",
    importTax: "Import Tax",
  },
};

const simulatorPublicAssetUrl = (assetPath: string): string =>
  `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;

const simulatorChoiceSummaryImages: Record<keyof SimulatorState, { still: string; motion: string }> = {
  consumer: {
    still: simulatorPublicAssetUrl("assets/simulator-thabo-static.gif"),
    motion: "https://static.wixstatic.com/media/7638b6_63ddf056c7a84471b430693d65decee9~mv2.gif",
  },
  producer: {
    still: simulatorPublicAssetUrl("assets/simulator-johan-static.gif"),
    motion: "https://static.wixstatic.com/media/7638b6_958741e949ae4756bd69a76fa52c3b98~mv2.gif",
  },
  government: {
    still: simulatorPublicAssetUrl("assets/simulator-government-static.gif"),
    motion: "https://static.wixstatic.com/media/7638b6_ead4d59a26914e5083ba3de1a0721cc3~mv2.gif",
  },
};

const simulatorDeckScaleOrder: SimulatorScaleAnalysis["scale"][] = ["Micro", "Meso", "Macro"];

const simulatorScaleAssessmentOrder: Record<SimulatorScaleAnalysis["scale"], SimulatorAssessmentId[]> = {
  Micro: ["thabo", "pricePressure"],
  Meso: ["johan", "fairnessTrust"],
  Macro: ["farmer", "government"],
};

const thaboNeutralIcon = "https://static.wixstatic.com/media/7638b6_f5c6de8175f94568906e6da8e8076dbf~mv2.png";

const simulatorAssessmentIcons: Record<SimulatorAssessmentId, Record<SatisfactionStatus, string>> = {
  farmer: {
    happy: "https://static.wixstatic.com/media/7638b6_573af9fe2b7f41b9b625a413d3bf77c1~mv2.png",
    neutral: "https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png",
    unsatisfied: "https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png",
  },
  johan: {
    happy: "https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",
    neutral: "https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",
    unsatisfied: "https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",
  },
  thabo: {
    happy: thaboNeutralIcon,
    neutral: thaboNeutralIcon,
    unsatisfied: "https://static.wixstatic.com/media/7638b6_873ba6be814f4d768cbf56339c2f8b7a~mv2.png",
  },
  fairnessTrust: {
    happy: "https://static.wixstatic.com/media/7638b6_324c44a8162448c5b444d9e0843f1766~mv2.png",
    neutral: "https://static.wixstatic.com/media/7638b6_a936d246f0e64f6c907f64e3ecacfd7c~mv2.png",
    unsatisfied: "https://static.wixstatic.com/media/7638b6_4f4e7890783c40689dbd497826b690bd~mv2.png",
  },
  pricePressure: {
    happy: "https://static.wixstatic.com/media/7638b6_519de2e908a2420aa76a24bd372094d3~mv2.png",
    neutral: "https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png",
    unsatisfied: "https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png",
  },
  government: {
    happy: "https://static.wixstatic.com/media/7638b6_35bf49a6a16741b9b72bf63e87f8f8d1~mv2.png",
    neutral: "https://static.wixstatic.com/media/7638b6_10e58b2c5aa34625aaccd294f2a3f1c4~mv2.png",
    unsatisfied: "https://static.wixstatic.com/media/7638b6_a13ba433beb149349f07acd4ffea114d~mv2.png",
  },
};

const simulatorStatusLabels: Record<SatisfactionStatus, string> = {
  happy: "Happy",
  neutral: "Neutral",
  unsatisfied: "Unsatisfied",
};

function SimulatorChoiceSlider<T extends string>({
  ariaLabel,
  value,
  options,
  theme,
  onChange,
}: SimulatorChoiceSliderProps<T>) {
  const foundIndex = options.findIndex((option) => option.value === value);
  const activeIndex = foundIndex === 1 ? 1 : 0;
  const activeOption = options[activeIndex];

  return (
    <div className={`simulator-choice-slider ${theme}`} data-position={activeIndex}>
      <div className="simulator-slider-guidance">
        <span>Tap a block to change</span>
        <strong>{activeOption.label}</strong>
      </div>
      <div className="simulator-slider-options" role="group" aria-label={ariaLabel}>
        {options.map((option, index) => (
          <button
            type="button"
            className={index === activeIndex ? "active" : ""}
            onClick={() => onChange(option.value)}
            aria-pressed={index === activeIndex}
            key={option.value}
          >
            <span>{option.label}</span>
            <small>{option.description}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

const getPositiveAssessmentStatus = (value: number): SatisfactionStatus => {
  if (value >= 75) {
    return "happy";
  }
  if (value >= 45) {
    return "neutral";
  }
  return "unsatisfied";
};

const getPressureAssessmentStatus = (value: number): SatisfactionStatus => {
  if (value <= 35) {
    return "happy";
  }
  if (value <= 65) {
    return "neutral";
  }
  return "unsatisfied";
};

const getSimulatorAnalysis = (state: SimulatorState): SimulatorAnalysis => {
  let headline = "";
  let story = "";
  let thaboSatisfaction = 0;
  let johanSatisfaction = 0;
  let fairness = 0;

  if (state.consumer === "muffin" && state.producer === "robusta") {
    headline = "Basic Needs & Business Wants";
    story =
      "Thabo chooses the coffee and muffin because he needs food before work. Johan chooses cheaper Robusta beans because he wants to keep more money in the business. Both are making choices between needs, wants, and limited resources.";
    thaboSatisfaction = 75;
    johanSatisfaction = 90;
    fairness = 55;
  } else if (state.consumer === "latte" && state.producer === "arabica") {
    headline = "Quality and Experience";
    story =
      "Thabo spends his money on a fancy latte because he wants something special. Johan buys better Arabica beans so the coffee tastes smoother. He earns less profit, but the shop feels more honest and careful.";
    thaboSatisfaction = 90;
    johanSatisfaction = 62;
    fairness = 82;
  } else if (state.consumer === "latte" && state.producer === "robusta") {
    headline = "Paying for Quality, Getting Cheap";
    story =
      "Thabo pays for a premium latte, hoping for a good experience. Johan uses cheaper beans to make more profit. Johan may earn more today, but Thabo may feel cheated if the coffee tastes flat.";
    thaboSatisfaction = 45;
    johanSatisfaction = 88;
    fairness = 35;
  } else {
    headline = "Mismatched Priorities";
    story =
      "Thabo just wants basic food to fill him up, but Johan spends extra money on fancy beans. Johan is trying to offer quality, but he might lose money if everyday customers only want the cheapest option.";
    thaboSatisfaction = 68;
    johanSatisfaction = 48;
    fairness = 64;
  }

  const policyLabel = state.government === "freeTrade" ? "Free Trade" : "Government Import Tax";
  const localFarmerImpact = state.government === "freeTrade" ? 28 : 82;
  const pricePressure = state.government === "freeTrade" ? 18 : 72;
  const adjustedThaboSatisfaction = state.government === "freeTrade" ? thaboSatisfaction : Math.max(20, thaboSatisfaction - 18);
  const adjustedJohanSatisfaction = state.government === "freeTrade" ? johanSatisfaction : Math.max(20, johanSatisfaction - 16);
  const adjustedFairness = state.government === "freeTrade" ? fairness : Math.min(95, fairness + 10);
  const governmentValue = state.government === "freeTrade" ? 55 : 80;
  const pricePressureRelief = 100 - pricePressure;
  const thaboStatus = getPositiveAssessmentStatus(adjustedThaboSatisfaction);
  const johanStatus = getPositiveAssessmentStatus(adjustedJohanSatisfaction);
  const farmerStatus = getPositiveAssessmentStatus(localFarmerImpact);
  const fairnessStatus = getPositiveAssessmentStatus(adjustedFairness);
  const pricePressureStatus = getPressureAssessmentStatus(pricePressure);
  const governmentStatus: SatisfactionStatus = state.government === "freeTrade" ? "neutral" : "happy";
  const policyImpact =
    state.government === "freeTrade"
      ? "The government keeps trade free. Prices stay low for Thabo, and Johan can buy cheap imported beans. This helps the coffee shop, but local South African farmers may struggle to compete with cheap imports."
      : "The government adds an import tax. Johan's beans now cost more, so he may raise prices. Thabo's R50 may not stretch as far, but local farmers get more protection.";

  return {
    headline,
    policyLabel,
    story,
    policyImpact,
    theologicalLens:
      "Does this market state treat humans merely as consumers and producers, or as image-bearers of the divine?",
    scaleAnalysis: [
      {
        scale: "Micro",
        title: "Thabo's daily life",
        body:
          state.consumer === "muffin"
            ? "At the personal level, Thabo is trying to use limited money for food, energy, and good value before work."
            : "At the personal level, Thabo chooses experience and taste, but must still ask whether the choice serves his real day well.",
      },
      {
        scale: "Meso",
        title: "Johan's business and community",
        body:
          state.producer === "robusta"
            ? "At the shop level, Johan protects profit, but the quality and trust relationship with customers may carry pressure."
            : "At the shop level, Johan invests in quality, which can build trust, but it reduces the money left after costs.",
      },
      {
        scale: "Macro",
        title: "Policy and wider society",
        body:
          state.government === "freeTrade"
            ? "At the wider policy level, open trade keeps prices lower, yet local farmers carry more risk."
            : "At the wider policy level, the import tax protects local farmers, yet customers and small shops feel higher prices.",
      },
    ],
    assessments: [
      {
        id: "thabo",
        category: "Thabo's satisfaction",
        status: thaboStatus,
        value: adjustedThaboSatisfaction,
        explanation:
          thaboStatus === "happy"
            ? "Thabo feels that his R50 gives him good value for the day ahead."
            : thaboStatus === "neutral"
              ? "Thabo receives part of what he needs, but price, taste, or fullness still feels imperfect."
              : "Thabo feels the choice does not stretch his limited money far enough.",
        iconUrl: simulatorAssessmentIcons.thabo[thaboStatus],
      },
      {
        id: "johan",
        category: "Johan's business satisfaction",
        status: johanStatus,
        value: adjustedJohanSatisfaction,
        explanation:
          johanStatus === "happy"
            ? "Johan feels the choice protects his profit and keeps the shop moving."
            : johanStatus === "neutral"
              ? "Johan can still trade, but quality, costs, or customer trust creates tension."
              : "Johan feels squeezed because the business choice may not cover his costs well.",
        iconUrl: simulatorAssessmentIcons.johan[johanStatus],
      },
      {
        id: "farmer",
        category: "Farmer impact",
        status: farmerStatus,
        value: localFarmerImpact,
        explanation:
          farmerStatus === "happy"
            ? "Local farmers are protected from cheaper imports and have a better chance to compete."
            : farmerStatus === "neutral"
              ? "Local farmers receive some help, but still face pressure from the market."
              : "Local farmers struggle because cheaper imported beans make it hard to compete.",
        iconUrl: simulatorAssessmentIcons.farmer[farmerStatus],
      },
      {
        id: "fairnessTrust",
        category: "Fairness and Trust",
        status: fairnessStatus,
        value: adjustedFairness,
        explanation:
          fairnessStatus === "happy"
            ? "The choices feel honest and balanced, so trust can grow between buyer, seller, and community."
            : fairnessStatus === "neutral"
              ? "The outcome has some balance, but one group still carries a noticeable cost."
              : "The outcome feels unfair because one person benefits while another carries too much loss.",
        iconUrl: simulatorAssessmentIcons.fairnessTrust[fairnessStatus],
      },
      {
        id: "pricePressure",
        category: "Price Pressure",
        status: pricePressureStatus,
        value: pricePressureRelief,
        explanation:
          pricePressureStatus === "happy"
            ? "Prices stay low enough for Thabo's R50 to cover his immediate need."
            : pricePressureStatus === "neutral"
              ? "Prices are manageable, but Thabo must still choose carefully."
              : "Prices place heavy pressure on Thabo, so his R50 may no longer be enough.",
        iconUrl: simulatorAssessmentIcons.pricePressure[pricePressureStatus],
      },
      {
        id: "government",
        category: "Government",
        status: governmentStatus,
        value: governmentValue,
        explanation:
          state.government === "freeTrade"
            ? "The state keeps prices low and trade open, but leaves local farmers exposed."
            : "The state protects local farmers, but must explain why some prices may rise.",
        iconUrl: simulatorAssessmentIcons.government[governmentStatus],
      },
    ],
  };
};

const buildSimulatorDeckSlides = (analysis: SimulatorAnalysis): SimulatorDeckSlide[] => {
  const scaleByName = new Map(analysis.scaleAnalysis.map((item) => [item.scale, item]));
  const assessmentsById = new Map(analysis.assessments.map((assessment) => [assessment.id, assessment]));
  const scaleSlides = simulatorDeckScaleOrder
    .map((scaleName): SimulatorDeckSlide | null => {
      const scale = scaleByName.get(scaleName);
      const assessments = simulatorScaleAssessmentOrder[scaleName]
        .map((id) => assessmentsById.get(id))
        .filter((assessment): assessment is SimulatorAssessment => Boolean(assessment));
      if (!scale || assessments.length === 0) {
        return null;
      }
      return {
        id: `scale-${scaleName.toLowerCase()}`,
        kind: "scale",
        scale: scaleName,
        scaleTitle: scale.title,
        scaleBody: scale.body,
        assessments,
      };
    })
    .filter((slide): slide is SimulatorDeckSlide => slide !== null);

  return [
    {
      id: "overview",
      kind: "overview",
      title: `${analysis.headline} + ${analysis.policyLabel}`,
      body: analysis.story,
      secondaryBody: analysis.policyImpact,
    },
    ...scaleSlides,
  ];
};

const DailyGrindSimulatorStep = ({
  content,
  completed,
  onCompleteContent,
}: {
  content: LessonContentBlock;
  completed: boolean;
  onCompleteContent: (contentId: string) => void;
}) => {
  const [simulatorState, setSimulatorState] = useState<SimulatorState>(initialSimulatorState);
  const [assessmentDeckOpen, setAssessmentDeckOpen] = useState(false);
  const [assessmentSlideIndex, setAssessmentSlideIndex] = useState(0);
  const [assessmentDeckPaused, setAssessmentDeckPaused] = useState(false);
  const [assessmentFeedbackViewed, setAssessmentFeedbackViewed] = useState(false);
  const [animatedSummaryItems, setAnimatedSummaryItems] = useState<Partial<Record<keyof SimulatorState, number>>>({});
  const previousSimulatorStateRef = useRef<SimulatorState>(initialSimulatorState);
  const summaryAnimationTimersRef = useRef<Partial<Record<keyof SimulatorState, number>>>({});
  const analysis = getSimulatorAnalysis(simulatorState);
  const deckSlides = buildSimulatorDeckSlides(analysis);
  const activeSlide = assessmentDeckOpen ? deckSlides[assessmentSlideIndex] ?? null : null;
  const hasPreviousAssessmentSlide = assessmentSlideIndex > 0;
  const hasNextAssessmentSlide = assessmentSlideIndex < deckSlides.length - 1;
  const isFinalAssessmentSlide = assessmentSlideIndex >= deckSlides.length - 1;
  const startSummaryAnimation = useCallback((choice: keyof SimulatorState) => {
    const activeTimer = summaryAnimationTimersRef.current[choice];

    if (activeTimer !== undefined) {
      window.clearTimeout(activeTimer);
    }

    const token = Date.now();
    setAnimatedSummaryItems((current) => ({ ...current, [choice]: token }));
    summaryAnimationTimersRef.current[choice] = window.setTimeout(() => {
      setAnimatedSummaryItems((current) => {
        if (current[choice] !== token) {
          return current;
        }

        const next = { ...current };
        delete next[choice];
        return next;
      });
      delete summaryAnimationTimersRef.current[choice];
    }, 2200);
  }, []);

  const updateSimulatorChoice = (updates: Partial<SimulatorState>) => {
    const hasChangedChoice = (Object.keys(updates) as Array<keyof SimulatorState>).some(
      (choice) => updates[choice] !== undefined && updates[choice] !== simulatorState[choice],
    );

    if (!hasChangedChoice) {
      return;
    }

    setSimulatorState((current) => ({ ...current, ...updates }));
    setAssessmentSlideIndex(0);
    setAssessmentDeckOpen(false);
    setAssessmentDeckPaused(false);
    setAssessmentFeedbackViewed(false);
  };

  const lockSimulatorChoice = () => {
    setAssessmentSlideIndex(0);
    setAssessmentDeckOpen(true);
    setAssessmentDeckPaused(false);
    setAssessmentFeedbackViewed(false);
  };

  const closeAssessmentDeck = () => {
    setAssessmentDeckOpen(false);
    setAssessmentDeckPaused(false);
  };

  const showPreviousAssessmentSlide = () => {
    setAssessmentDeckPaused(true);
    setAssessmentSlideIndex((current) => Math.max(current - 1, 0));
  };

  const showNextAssessmentSlide = () => {
    setAssessmentDeckPaused(true);
    setAssessmentSlideIndex((current) => Math.min(current + 1, deckSlides.length - 1));
  };

  useEffect(() => {
    if (!assessmentDeckOpen || assessmentDeckPaused || isFinalAssessmentSlide) {
      return undefined;
    }

    const slideDuration = deckSlides[assessmentSlideIndex]?.kind === "overview" ? 3600 : 5600;
    const timer = window.setTimeout(
      () => {
        setAssessmentSlideIndex((current) => Math.min(current + 1, deckSlides.length - 1));
      },
      slideDuration,
    );

    return () => window.clearTimeout(timer);
  }, [assessmentDeckOpen, assessmentDeckPaused, assessmentSlideIndex, deckSlides.length, isFinalAssessmentSlide]);

  useEffect(() => {
    if (assessmentDeckOpen && isFinalAssessmentSlide) {
      setAssessmentFeedbackViewed(true);
    }
  }, [assessmentDeckOpen, isFinalAssessmentSlide]);

  useEffect(() => {
    const previousState = previousSimulatorStateRef.current;
    const changedChoices = (Object.keys(simulatorState) as Array<keyof SimulatorState>).filter(
      (choice) => previousState[choice] !== simulatorState[choice],
    );

    changedChoices.forEach(startSummaryAnimation);
    previousSimulatorStateRef.current = simulatorState;
  }, [simulatorState, startSummaryAnimation]);

  useEffect(
    () => () => {
      Object.values(summaryAnimationTimersRef.current).forEach((timer) => {
        if (timer !== undefined) {
          window.clearTimeout(timer);
        }
      });
    },
    [],
  );

  const getSummaryImageUrl = (choice: keyof SimulatorState): string =>
    animatedSummaryItems[choice]
      ? simulatorChoiceSummaryImages[choice].motion
      : simulatorChoiceSummaryImages[choice].still;

  const getSummaryImageKey = (choice: keyof SimulatorState): string =>
    `${choice}-${animatedSummaryItems[choice] ?? "still"}`;

  return (
    <section className="lesson-block simulator-lesson-block">
      <div className="activity-heading">
        <h3>{content.title}</h3>
        <ClipboardCheck size={20} />
      </div>
      <div className="simulator-layout">
        <div className="simulator-controls">
          <blockquote>
            Thabo is walking to work. He has R50. He stops at Ubuntu Brews, owned by Johan.
          </blockquote>
          <section className="simulator-control-card">
            <p className="simulator-control-label consumer">Thabo's Choice (The Consumer)</p>
            <p>Thabo only has R50. What should he buy?</p>
            <SimulatorChoiceSlider
              ariaLabel="Change Thabo's choice"
              theme="consumer"
              value={simulatorState.consumer}
              onChange={(consumer) => updateSimulatorChoice({ consumer })}
              options={[
                { value: "muffin", label: "Coffee + Muffin (R49)", description: "Fills you up" },
                { value: "latte", label: "Fancy Latte (R45)", description: "Tastes amazing" },
              ]}
            />
          </section>
          <section className="simulator-control-card">
            <p className="simulator-control-label producer">Johan's Choice (The Business)</p>
            <p>Johan must buy coffee beans. Which ones should he pick?</p>
            <SimulatorChoiceSlider
              ariaLabel="Change Johan's choice"
              theme="producer"
              value={simulatorState.producer}
              onChange={(producer) => updateSimulatorChoice({ producer })}
              options={[
                { value: "robusta", label: "Robusta Beans", description: "Cheaper, makes more profit" },
                { value: "arabica", label: "Arabica Beans", description: "Expensive, but tastes better" },
              ]}
            />
          </section>
          <section className="simulator-control-card">
            <p className="simulator-control-label government">The Government's Choice</p>
            <p>The state must decide how to manage imported goods.</p>
            <SimulatorChoiceSlider
              ariaLabel="Change the government's choice"
              theme="government"
              value={simulatorState.government}
              onChange={(government) => updateSimulatorChoice({ government })}
              options={[
                { value: "freeTrade", label: "Free Trade", description: "Keeps prices low, hurts local farmers" },
                { value: "importTax", label: "Import Tax", description: "Raises prices, protects local farmers" },
              ]}
            />
          </section>
        </div>
        <section className="simulator-lock-panel" aria-live="polite">
          <p className="simulator-control-label government">Ready to analyse</p>
          <h4>Lock your choice</h4>
          <p>
            Tap either choice block to change Thabo's, Johan's, and the government's choices before locking them.
            The selected block slides across so you can see what is active. Lock your choices, then use the Next button in the feedback to see how economics
            studies choices and how each choice has an impact.
            After the final feedback slide, close the feedback and press Continue below to unlock the next step.
          </p>
          <div className="simulator-choice-summary">
            <div className={`simulator-choice-summary-item ${animatedSummaryItems.consumer ? "is-animating" : ""}`}>
              <img key={getSummaryImageKey("consumer")} src={getSummaryImageUrl("consumer")} alt="Thabo" />
              <span>
                <strong>Thabo</strong>
                {simulatorChoiceLabels.consumer[simulatorState.consumer]}
              </span>
            </div>
            <div className={`simulator-choice-summary-item ${animatedSummaryItems.producer ? "is-animating" : ""}`}>
              <img key={getSummaryImageKey("producer")} src={getSummaryImageUrl("producer")} alt="Johan" />
              <span>
                <strong>Johan</strong>
                {simulatorChoiceLabels.producer[simulatorState.producer]}
              </span>
            </div>
            <div className={`simulator-choice-summary-item ${animatedSummaryItems.government ? "is-animating" : ""}`}>
              <img key={getSummaryImageKey("government")} src={getSummaryImageUrl("government")} alt="Government" />
              <span>
                <strong>Government</strong>
                {simulatorChoiceLabels.government[simulatorState.government]}
              </span>
            </div>
          </div>
          <button className="primary-button" type="button" onClick={lockSimulatorChoice}>
            Lock your choice
          </button>
        </section>
      </div>
      {activeSlide ? (
        <div className="simulator-response-deck-backdrop" role="presentation">
          <section
            className={`simulator-response-slide ${activeSlide.kind === "scale" ? activeSlide.scale.toLowerCase() : "overview"}`}
            role="dialog"
            aria-modal="true"
            aria-live="polite"
            aria-label={activeSlide.kind === "scale" ? `${activeSlide.scale} economic effects` : "Economic effects overview"}
          >
            <button
              className="simulator-response-close"
              type="button"
              onClick={closeAssessmentDeck}
              aria-label="Close impact response slides"
            >
              <X size={18} />
            </button>
            <p className="simulator-response-kicker">Your choice has the following economic effects</p>
            {activeSlide.kind === "overview" ? (
              <div className="simulator-response-overview">
                <span>What happens?</span>
                <h5>{activeSlide.title}</h5>
                <p>{activeSlide.body}</p>
                <p>
                  <strong>Policy impact:</strong> {activeSlide.secondaryBody}
                </p>
              </div>
            ) : (
              <div className="simulator-response-scale-slide">
                <div className="simulator-response-copy">
                  <span className="simulator-scale-pill">{activeSlide.scale}</span>
                  <h5>{activeSlide.scaleTitle}</h5>
                  <p>{activeSlide.scaleBody}</p>
                </div>
                <div className="simulator-response-effect-grid">
                  {activeSlide.assessments.map((assessment) => (
                    <article className={`simulator-response-effect ${assessment.status}`} key={assessment.id}>
                      <img
                        src={assessment.iconUrl}
                        alt={`${assessment.category} ${simulatorStatusLabels[assessment.status].toLowerCase()} icon`}
                      />
                      <div>
                        <span className={`simulator-status-pill ${assessment.status}`}>
                          {simulatorStatusLabels[assessment.status]}
                        </span>
                        <h6>{assessment.category}</h6>
                        <p>{assessment.explanation}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
            <div className="simulator-response-controls" aria-label="Impact slide controls">
              <button
                type="button"
                className="simulator-response-nav-button"
                onClick={showPreviousAssessmentSlide}
                disabled={!hasPreviousAssessmentSlide}
                aria-label="Previous impact slide"
              >
                <ChevronLeft size={18} />
                <span>Back</span>
              </button>
              <button
                type="button"
                className="simulator-response-nav-button timing"
                onClick={() => setAssessmentDeckPaused((current) => !current)}
                aria-label={assessmentDeckPaused ? "Resume slide timing" : "Pause slide timing"}
              >
                {assessmentDeckPaused ? <PlayCircle size={18} /> : <PauseCircle size={18} />}
                <span>{assessmentDeckPaused ? "Resume" : "Pause"}</span>
              </button>
              <button
                type="button"
                className="simulator-response-nav-button"
                onClick={showNextAssessmentSlide}
                disabled={!hasNextAssessmentSlide}
                aria-label="Next impact slide"
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="simulator-response-dots" aria-label="Impact slide progress">
              {deckSlides.map((slide, index) => (
                <span
                  className={index === assessmentSlideIndex ? "active" : ""}
                  key={slide.id}
                  aria-label={slide.kind === "scale" ? `${slide.scale} slide` : "What happens slide"}
                />
              ))}
            </div>
          </section>
        </div>
      ) : null}
      <div className="step-toolbar">
        <button
          className={assessmentFeedbackViewed && !completed ? "primary-button" : "secondary-button"}
          disabled={completed || !assessmentFeedbackViewed}
          onClick={() => onCompleteContent(content.id)}
        >
          {completed ? "Step complete" : assessmentFeedbackViewed ? "Continue" : "Review feedback first"}
        </button>
        <ActivityStatus completed={completed} />
      </div>
    </section>
  );
};

const LessonContentPanel = ({
  content,
  completed,
  onCompleteContent,
}: {
  content: LessonContentBlock;
  completed: boolean;
  onCompleteContent: (contentId: string) => void;
}) => {
  const required = content.completionRequired !== false;
  const isWixAsset = isWixMediaReference(content.url);
  const url = isHttpUrl(content.url) ? content.url : undefined;
  const youtubeVideoId = getYouTubeVideoId(url);
  const isCheckpointVideo = content.kind === "video" && Boolean(youtubeVideoId && content.videoCheckpoint);

  const body = (() => {
    if (content.kind === "scripture") {
      return <blockquote>{content.body}</blockquote>;
    }

    if (content.kind === "video") {
      if (isCheckpointVideo) {
        return (
          <YouTubeCheckpointVideo content={content} completed={completed} onCompleteContent={onCompleteContent} />
        );
      }
      if (url && !isWixAsset) {
        return (
          <video
            className="lesson-video"
            controls
            preload="metadata"
            src={url}
            onEnded={() => onCompleteContent(content.id)}
          />
        );
      }
      return (
        <div className="video-placeholder">
          <PlayCircle size={42} />
          <span>{isWixAsset ? "Wix Media video asset" : "Video asset awaiting Wix Media URL"}</span>
        </div>
      );
    }

    if (content.kind === "image") {
      if (url && !isWixAsset) {
        return <img className="lesson-image" src={url} alt={content.alt ?? content.title} />;
      }
      return (
        <div className="resource-placeholder">
          <FileText size={34} />
          <span>{isWixAsset ? "Wix Media image asset" : "Image asset awaiting Wix Media URL"}</span>
        </div>
      );
    }

    if (content.kind === "download") {
      return (
        <div className="lesson-resource">
          <p>{content.body}</p>
          {url ? (
            <a className="resource-link" href={url} target="_blank" rel="noreferrer">
              <Download size={18} />
              {content.fileName ?? "Open download"}
            </a>
          ) : (
            <div className="resource-placeholder">
              <Download size={34} />
              <span>{isWixAsset ? "Wix Media document asset" : "Document awaiting Wix Media URL"}</span>
            </div>
          )}
        </div>
      );
    }

    if (content.kind === "webLink") {
      return (
        <div className="lesson-resource">
          <p>{content.body}</p>
          {url ? (
            <a className="resource-link" href={url} target="_blank" rel="noreferrer">
              <ExternalLink size={18} />
              Open learning link
            </a>
          ) : (
            <div className="resource-placeholder">
              <ExternalLink size={34} />
              <span>Web link awaiting Wix CMS URL</span>
            </div>
          )}
        </div>
      );
    }

    return <p>{content.body}</p>;
  })();

  return (
    <section className="lesson-block">
      <div className="activity-heading">
        <h3>{content.title}</h3>
        <FileText size={20} />
      </div>
      {body}
      {required && isCheckpointVideo ? (
        <div className="step-toolbar">
          <span className="status">This step completes only after the checkpoint quiz and full video.</span>
          <ActivityStatus completed={completed} />
        </div>
      ) : required ? (
        <div className="step-toolbar">
          <button className="secondary-button" disabled={completed} onClick={() => onCompleteContent(content.id)}>
            {completed ? "Step complete" : getContentCompletionLabel(content)}
          </button>
          <ActivityStatus completed={completed} />
        </div>
      ) : (
        <p className="status">Optional resource.</p>
      )}
    </section>
  );
};

const CustomHtmlStep = ({
  htmlBlock,
  completedContentIds,
  onCompleteContent,
}: {
  htmlBlock: LessonContentBlock;
  completedContentIds: string[];
  onCompleteContent: (contentId: string) => void;
}) => {
  const richFrameWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MessageEvent<unknown>) => {
      const message = parseActivityMessage(event.data, [htmlBlock.id]);
      if (message?.type === "classroom.activity.completed") {
        onCompleteContent(message.activityId);
      }
      if (typeof event.data === "object" && event.data !== null) {
        const richStepMessage = event.data as { activityId?: unknown; type?: unknown };
        if (
          richStepMessage.type === "classroom.richPopup.opened" &&
          richStepMessage.activityId === htmlBlock.id
        ) {
          richFrameWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, [htmlBlock.id, onCompleteContent]);

  const isRichLessonStep = htmlBlock.body?.includes("data-rich-lesson-step") ?? false;
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.();
      return;
    }

    const target = richFrameWrapperRef.current;
    if (!target?.requestFullscreen) {
      return;
    }

    void target.requestFullscreen().catch(() => undefined);
  };

  return (
    <section className="activity-panel">
      <div className="activity-heading">
        <h3>{htmlBlock.title}</h3>
        <ClipboardCheck size={20} />
      </div>
      {isRichLessonStep ? (
        <div className="rich-lesson-frame-wrap" ref={richFrameWrapperRef}>
          <button
            className="rich-step-fullscreen-button"
            type="button"
            onClick={toggleFullscreen}
            aria-label={`View ${htmlBlock.title} fullscreen`}
          >
            <Maximize size={16} />
            Fullscreen
          </button>
          <iframe
            className="rich-lesson-frame"
            title={htmlBlock.title}
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            allow="fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            srcDoc={buildSandboxDocument(htmlBlock.body ?? "", htmlBlock.id)}
          />
        </div>
      ) : (
        <iframe
          title={htmlBlock.title}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          allow="fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          srcDoc={buildSandboxDocument(htmlBlock.body ?? "", htmlBlock.id)}
        />
      )}
      <ActivityStatus completed={completedContentIds.includes(htmlBlock.id)} />
    </section>
  );
};

export const LessonView = ({
  identity,
  course,
  lessonId,
  activeLevelId,
  completedLessonIds,
  drawerOpen,
  setDrawerOpen,
  onSelectLesson,
  onCompleteLesson,
  onReturnToDashboard,
}: {
  identity: LearnerIdentity;
  course: Course;
  lessonId: string;
  activeLevelId: string | null;
  completedLessonIds: ReadonlySet<string>;
  drawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
  onSelectLesson: (lessonId: string) => void;
  onCompleteLesson: (lessonId: string) => void;
  onReturnToDashboard: () => void;
}) => {
  const allCourseLessons = lessons.filter((lesson) => lesson.courseId === course.id);
  const allCourseModules = modules.filter((module) => module.courseId === course.id);
  const courseLessons = lessons.filter(
    (lesson) => lesson.courseId === course.id && (!activeLevelId || lesson.moduleId === activeLevelId),
  );
  const courseModules = modules.filter(
    (module) => module.courseId === course.id && (!activeLevelId || module.id === activeLevelId),
  );
  const activeLevel = activeLevelId ? allCourseModules.find((module) => module.id === activeLevelId) ?? null : null;
  const lesson = courseLessons.find((item) => item.id === lessonId) ?? courseLessons[0];
  const enrolment = getCourseEnrolment(course.id, identity.memberId);
  const [courseProgress, setCourseProgress] = useState<LessonProgress[]>(
    () => (enrolment ? progress.filter((item) => item.enrolmentId === enrolment.id) : []),
  );
  const [activityRecords, setActivityRecords] = useState<ActivityCompletion[]>(seededActivityCompletions);
  const [discussionPostRecords, setDiscussionPostRecords] = useState<DiscussionPost[]>(seededDiscussionPosts);
  const [discussionReplyRecords, setDiscussionReplyRecords] = useState<DiscussionReply[]>(seededDiscussionReplies);
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [openLinkedActivityId, setOpenLinkedActivityId] = useState<string | null>(null);
  const [completedContentIds, setCompletedContentIds] = useState<string[]>(() => {
    const completed = new Set([
      ...courseProgress.filter((item) => item.status === "completed").map((item) => item.lessonId),
      ...completedLessonIds,
    ]);
    return courseLessons
      .filter((courseLesson) => completed.has(courseLesson.id))
      .flatMap((courseLesson) => courseLesson.content.map((block) => block.id));
  });

  useEffect(() => {
    setActiveContentIndex(0);
    setOpenLinkedActivityId(null);
  }, [lesson?.id]);

  useEffect(() => {
    if (!enrolment) {
      setCourseProgress([]);
      return;
    }

    let active = true;
    repository
      .listProgress(enrolment.id)
      .then((records) => {
        if (active) {
          setCourseProgress(records);
        }
      })
      .catch(() => {
        if (active) {
          setCourseProgress(progress.filter((item) => item.enrolmentId === enrolment.id));
        }
      });

    return () => {
      active = false;
    };
  }, [enrolment?.id]);

  useEffect(() => {
    if (!lesson) {
      return undefined;
    }

    let active = true;
    const discussionActivities = activities.filter(
      (activity) => activity.lessonId === lesson.id && activity.kind === "discussion",
    );

    Promise.all([
      repository.listActivityCompletions(identity.memberId, lesson.id),
      Promise.all(discussionActivities.map((activity) => repository.listDiscussionPosts(activity.id))),
    ])
      .then(async ([completionRecords, postGroups]) => {
        if (!active) {
          return;
        }

        const postRecords = postGroups.flat();
        const replyGroups = await Promise.all(postRecords.map((post) => repository.listDiscussionReplies(post.id)));
        if (!active) {
          return;
        }

        setActivityRecords((current) => [
          ...current.filter(
            (record) =>
              record.lessonId !== lesson.id ||
              record.memberId !== identity.memberId,
          ),
          ...completionRecords,
        ]);
        setDiscussionPostRecords((current) => [
          ...current.filter((post) => !discussionActivities.some((activity) => activity.id === post.activityId)),
          ...postRecords,
        ]);
        setDiscussionReplyRecords((current) => [
          ...current.filter((reply) => !postRecords.some((post) => post.id === reply.postId)),
          ...replyGroups.flat(),
        ]);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [identity.memberId, lesson?.id]);

  useEffect(() => {
    if (!lesson) {
      return;
    }

    const completedRemoteContentIds = activityRecords
      .filter(
        (record) =>
          record.memberId === identity.memberId &&
          record.lessonId === lesson.id &&
          record.completed &&
          lesson.content.some((content) => content.id === record.activityId),
      )
      .map((record) => record.activityId);

    if (completedRemoteContentIds.length > 0) {
      setCompletedContentIds((current) => Array.from(new Set([...current, ...completedRemoteContentIds])));
    }
  }, [activityRecords, identity.memberId, lesson]);

  const localProgress: LessonProgress[] = [...courseProgress];
  for (const completedLessonId of completedLessonIds) {
    if (!localProgress.some((item) => item.lessonId === completedLessonId)) {
      localProgress.push({
        id: `local-progress-${completedLessonId}`,
        enrolmentId: enrolment?.id ?? "local-enrolment",
        courseId: course.id,
        lessonId: completedLessonId,
        memberId: identity.memberId,
        status: "completed",
        percent: 100,
        lastActivityAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
      });
    }
  }

  const lockStateList = enrolment ? getLessonLockStates(courseLessons, localProgress, enrolment) : [];
  const lockStates = new Map(lockStateList.map((item) => [item.lessonId, item.locked]));
  const levelLockState = enrolment && activeLevelId
    ? getLevelLockStates(allCourseModules, allCourseLessons, localProgress, enrolment).find(
        (state) => state.moduleId === activeLevelId,
      )
    : undefined;
  const lessonActivities = lesson ? activities.filter((activity) => activity.lessonId === lesson.id) : [];
  const standaloneLessonActivities = lessonActivities.filter((activity) => !activity.contentStepId);
  const learnerActivityRecords = activityRecords.filter((record) => record.memberId === identity.memberId);
  const gate = lesson
    ? lessonCompletionGate(lesson, lessonActivities, learnerActivityRecords, completedContentIds)
    : { allowed: false, completed: 0, required: 0 };

  const markActivityComplete = useCallback(
    (activity: Activity, score = activity.maxScore, maxScore = activity.maxScore) => {
      const nextRecord: ActivityCompletion = {
        activityId: activity.id,
        memberId: identity.memberId,
        lessonId: activity.lessonId,
        completed: true,
        score,
        maxScore,
        completedAt: new Date().toISOString(),
      };
      setActivityRecords((current) => {
        const existingIndex = current.findIndex(
          (record) => record.activityId === activity.id && record.memberId === identity.memberId,
        );
        if (existingIndex === -1) {
          return [...current, nextRecord];
        }
        return current.map((record, index) => (index === existingIndex ? nextRecord : record));
      });
      void repository.saveActivityCompletion(nextRecord).catch(() => undefined);
    },
    [identity.memberId],
  );

  const saveLessonCompletion = useCallback(
    (completedLesson: Lesson) => {
      if (enrolment) {
        const completedAt = new Date().toISOString();
        const nextProgress: LessonProgress = {
          id: `progress-${enrolment.id}-${completedLesson.id}`,
          enrolmentId: enrolment.id,
          courseId: course.id,
          lessonId: completedLesson.id,
          memberId: identity.memberId,
          status: "completed",
          percent: 100,
          lastActivityAt: completedAt,
          completedAt,
        };

        setCourseProgress((current) => [
          ...current.filter((item) => item.id !== nextProgress.id && item.lessonId !== completedLesson.id),
          nextProgress,
        ]);
        void repository.saveProgress(nextProgress).catch(() => undefined);
      }

      onCompleteLesson(completedLesson.id);
    },
    [course.id, enrolment, identity.memberId, onCompleteLesson],
  );

  const markContentComplete = useCallback(
    (contentId: string) => {
      const contentIndex = lesson?.content.findIndex((content) => content.id === contentId) ?? -1;
      const contentCount = lesson?.content.length ?? 0;
      const isFinalDailyGrindStep =
        lesson?.id === "level-1-session-1-the-daily-grind" &&
        contentIndex >= 0 &&
          contentIndex === contentCount - 1;

      setCompletedContentIds((current) => (current.includes(contentId) ? current : [...current, contentId]));
      if (lesson) {
        const nextRecord: ActivityCompletion = {
          activityId: contentId,
          memberId: identity.memberId,
          lessonId: lesson.id,
          completed: true,
          score: 5,
          maxScore: 5,
          completedAt: new Date().toISOString(),
        };
        setActivityRecords((current) => {
          const existingIndex = current.findIndex(
            (record) => record.activityId === contentId && record.memberId === identity.memberId,
          );
          if (existingIndex === -1) {
            return [...current, nextRecord];
          }
          return current.map((record, index) => (index === existingIndex ? nextRecord : record));
        });
        void repository.saveActivityCompletion(nextRecord).catch(() => undefined);
      }
      if (isFinalDailyGrindStep && lesson) {
        saveLessonCompletion(lesson);
        onReturnToDashboard();
        return;
      }
      if (contentIndex >= 0 && contentIndex < (lesson?.content.length ?? 0) - 1) {
        setActiveContentIndex(contentIndex + 1);
      }
    },
    [identity.memberId, lesson, onReturnToDashboard, saveLessonCompletion],
  );

  const addDiscussionPost = useCallback(
    (activity: Activity, body: string) => {
      const post: DiscussionPost = {
        id: `post-${activity.id}-${Date.now()}`,
        activityId: activity.id,
        memberId: identity.memberId,
        authorName: identity.displayName,
        body,
        createdAt: new Date().toISOString(),
      };
      setDiscussionPostRecords((current) => [...current, post]);
      void repository.saveDiscussionPost(post).catch(() => undefined);
    },
    [identity.displayName, identity.memberId],
  );

  const addDiscussionReply = useCallback(
    (post: DiscussionPost, body: string) => {
      const reply: DiscussionReply = {
        id: `reply-${post.id}-${Date.now()}`,
        postId: post.id,
        memberId: identity.memberId,
        authorName: identity.displayName,
        body,
        createdAt: new Date().toISOString(),
      };
      setDiscussionReplyRecords((current) => [...current, reply]);
      void repository.saveDiscussionReply(reply).catch(() => undefined);
    },
    [identity.displayName, identity.memberId],
  );

  if (!lesson) {
    return <main className="empty-state">No session is available.</main>;
  }

  if (levelLockState?.locked) {
    return (
      <main className="content-shell">
        <section className="dashboard-intro">
          <div>
            <p className="eyebrow">Level locked</p>
            <h2>{activeLevel?.title ?? "This level"}</h2>
            <p className="intro-copy">{levelLockState.reason}</p>
          </div>
          <span className="pill locked">Complete previous level</span>
        </section>
      </main>
    );
  }

  const firstIncompleteRequiredContentIndex = lesson.content.findIndex(
    (content) => content.completionRequired !== false && !completedContentIds.includes(content.id),
  );
  const visibleContent =
    firstIncompleteRequiredContentIndex === -1
      ? lesson.content
      : lesson.content.slice(0, firstIncompleteRequiredContentIndex + 1);
  const lockedContentCount = lesson.content.length - visibleContent.length;
  const activitiesUnlocked = firstIncompleteRequiredContentIndex === -1;
  const currentContentIndex = visibleContent.length === 0 ? -1 : Math.min(activeContentIndex, visibleContent.length - 1);
  const currentContent = currentContentIndex >= 0 ? visibleContent[currentContentIndex] : undefined;
  const hasPreviousContent = currentContentIndex > 0;
  const hasNextContent = currentContentIndex >= 0 && currentContentIndex < visibleContent.length - 1;

  const completeLesson = () => {
    if (!gate.allowed) {
      return;
    }
    saveLessonCompletion(lesson);
  };

  const renderContentBlock = (content: LessonContentBlock) => {
    const linkedActivity = lessonActivities.find((activity) => activity.contentStepId === content.id);

    if (content.id.endsWith("-ordinary-business-life")) {
      return (
        <DailyGrindSimulatorStep
          key={content.id}
          content={content}
          completed={completedContentIds.includes(content.id)}
          onCompleteContent={markContentComplete}
        />
      );
    }

    if (content.kind === "customHtml" && linkedActivity) {
      const linkedActivityCompleted = learnerActivityRecords.some(
        (record) => record.activityId === linkedActivity.id && record.completed,
      );
      const contentCompleted = completedContentIds.includes(content.id);
      const linkedActivityOpen = openLinkedActivityId === linkedActivity.id;

      return (
        <div className="linked-step-activity" key={content.id}>
          <CustomHtmlStep
            htmlBlock={content}
            completedContentIds={completedContentIds}
            onCompleteContent={markContentComplete}
          />
          <section className="discussion-launch-panel" aria-label="Open discussion forum activity">
            <div>
              <p className="eyebrow">Forum activity</p>
              <h3>{linkedActivity.title}</h3>
              <p>
                Click the image to open the forum. Add your own post, then reply to two course participants. When your
                contribution is complete, the Continue button will unlock.
              </p>
            </div>
            <button
              className="discussion-image-button"
              type="button"
              onClick={() => setOpenLinkedActivityId(linkedActivity.id)}
              aria-label="Open the Step 4 discussion forum"
            >
              <img src={fourPillarsForumButtonImage} alt="" />
              <span>Open discussion forum</span>
            </button>
            <div className="discussion-step-actions">
              <button
                className={linkedActivityCompleted && !contentCompleted ? "primary-button" : "secondary-button"}
                type="button"
                disabled={!linkedActivityCompleted || contentCompleted}
                onClick={() => markContentComplete(content.id)}
              >
                {contentCompleted ? "Step complete" : linkedActivityCompleted ? "Continue" : "Complete discussion first"}
              </button>
              <span className={linkedActivityCompleted ? "status success" : "status"}>
                {linkedActivityCompleted
                  ? "Forum contribution complete. Press Continue to unlock the next step."
                  : "Required: one post and replies to two course participants."}
              </span>
            </div>
          </section>
          {linkedActivityOpen ? (
            <div className="discussion-modal" role="dialog" aria-modal="true" aria-label={linkedActivity.title}>
              <button
                className="discussion-modal-backdrop"
                type="button"
                aria-label="Close discussion forum"
                onClick={() => setOpenLinkedActivityId(null)}
              />
              <div className="discussion-modal-card">
                <button
                  className="discussion-modal-close"
                  type="button"
                  onClick={() => setOpenLinkedActivityId(null)}
                  aria-label="Close discussion forum"
                >
                  <X size={18} />
                  Close
                </button>
                <img className="discussion-popup-hero" src={fourPillarsForumImage} alt="" />
                <ActivityPanel
                  activity={linkedActivity}
                  courseId={course.id}
                  lessonId={lesson.id}
                  enrolment={enrolment}
                  identity={identity}
                  completed={linkedActivityCompleted}
                  discussionPosts={discussionPostRecords}
                  discussionReplies={discussionReplyRecords}
                  onComplete={(activity, score, maxScore) => {
                    markActivityComplete(activity, score, maxScore);
                  }}
                  onAddPost={addDiscussionPost}
                  onAddReply={addDiscussionReply}
                />
              </div>
            </div>
          ) : null}
        </div>
      );
    }

    if (content.kind === "customHtml") {
      return (
        <CustomHtmlStep
          key={content.id}
          htmlBlock={content}
          completedContentIds={completedContentIds}
          onCompleteContent={markContentComplete}
        />
      );
    }

    return (
      <LessonContentPanel
        key={content.id}
        content={content}
        completed={completedContentIds.includes(content.id)}
        onCompleteContent={markContentComplete}
      />
    );
  };

  return (
    <main className="lesson-layout">
      <div className={drawerOpen ? "mobile-drawer open" : "mobile-drawer"}>
        <button className="close-drawer" onClick={() => setDrawerOpen(false)} aria-label="Close session list">
          <X size={19} />
        </button>
        <LessonSidebar
          courseLessons={courseLessons}
          courseModules={courseModules}
          activeLessonId={lesson.id}
          lockStates={lockStates}
          onSelect={(next) => {
            onSelectLesson(next);
            setDrawerOpen(false);
          }}
        />
      </div>
      <LessonSidebar
        courseLessons={courseLessons}
        courseModules={courseModules}
        activeLessonId={lesson.id}
        lockStates={lockStates}
        onSelect={onSelectLesson}
      />
      <article className="lesson-main">
        <button className="drawer-trigger" onClick={() => setDrawerOpen(true)}>
          <Menu size={18} />
          Sessions
        </button>
        <p className="eyebrow">{course.title}</p>
        <h2>{lesson.title}</h2>
        <p className="lesson-summary">{lesson.summary}</p>
        {lesson.imageUrl ? (
          <figure className="lesson-artwork">
            <img src={lesson.imageUrl} alt={lesson.imageAlt ?? ""} />
          </figure>
        ) : null}
        <section className="lesson-carousel" aria-label="Lesson steps">
          <div className="lesson-carousel-header">
            <div>
              <span className="carousel-step-count">
                Step {currentContentIndex + 1} of {lesson.content.length}
              </span>
              {lockedContentCount > 0 ? (
                <p>{lockedContentCount} {lockedContentCount === 1 ? "step is" : "steps are"} locked until you complete this step.</p>
              ) : (
                <p>All lesson steps are unlocked.</p>
              )}
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-nav-button"
                type="button"
                disabled={!hasPreviousContent}
                onClick={() => setActiveContentIndex((current) => Math.max(0, current - 1))}
              >
                Previous
              </button>
              <button
                className="carousel-nav-button"
                type="button"
                disabled={!hasNextContent}
                onClick={() => setActiveContentIndex((current) => Math.min(visibleContent.length - 1, current + 1))}
              >
                Next
              </button>
            </div>
          </div>
          <div className="carousel-step-tabs" aria-label="Unlocked lesson step navigation">
            {visibleContent.map((content, index) => {
              const completed = completedContentIds.includes(content.id);
              return (
                <button
                  key={content.id}
                  className={[
                    "carousel-step-tab",
                    index === currentContentIndex ? "active" : "",
                    completed ? "complete" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  type="button"
                  onClick={() => setActiveContentIndex(index)}
                  aria-current={index === currentContentIndex ? "step" : undefined}
                >
                  <span className="carousel-step-number">{index + 1}</span>
                  <span className="carousel-step-title">{content.title.replace(/^Step \d+:\s*/, "")}</span>
                </button>
              );
            })}
          </div>
          <div className="lesson-carousel-stage">{currentContent ? renderContentBlock(currentContent) : null}</div>
        </section>
        {activitiesUnlocked ? (
          standaloneLessonActivities.map((activity) => (
            <ActivityPanel
              key={activity.id}
              activity={activity}
              courseId={course.id}
              lessonId={lesson.id}
              enrolment={enrolment}
              identity={identity}
              completed={learnerActivityRecords.some(
                (record) => record.activityId === activity.id && record.completed,
              )}
              discussionPosts={discussionPostRecords}
              discussionReplies={discussionReplyRecords}
              onComplete={markActivityComplete}
              onAddPost={addDiscussionPost}
              onAddReply={addDiscussionReply}
            />
          ))
        ) : standaloneLessonActivities.length > 0 ? (
          <section className="activity-panel locked-activity-panel">
            <div className="activity-heading">
              <h3>Activities locked</h3>
              <Lock size={20} />
            </div>
            <p>Complete all required lesson steps before opening quizzes, discussions, or submissions.</p>
          </section>
        ) : null}
        <section className="completion-gate">
          <div>
            <strong>Session completion</strong>
            <span>
              {gate.completed}/{gate.required} required steps and activities complete
            </span>
          </div>
          <button className="primary-button" disabled={!gate.allowed} onClick={completeLesson}>
            Complete session
          </button>
          {completedLessonIds.has(lesson.id) ? <p className="status success">Session completed.</p> : null}
        </section>
      </article>
    </main>
  );
};
