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
  LevelAccessCredential,
  Lesson,
  LessonProgress,
  Question,
  Submission,
} from "../domain/types";

export const identities: Record<"learner" | "lecturer" | "administrator", LearnerIdentity> = {
  learner: {
    memberId: "member-learner-001",
    contactId: "contact-learner-001",
    email: "learner@example.com",
    displayName: "Amina Jacobs",
    roles: ["learner"],
  },
  lecturer: {
    memberId: "member-lecturer-001",
    contactId: "contact-lecturer-001",
    email: "lecturer@example.com",
    displayName: "Faithonomics Lecturer",
    roles: ["lecturer"],
  },
  administrator: {
    memberId: "member-admin-001",
    contactId: "contact-admin-001",
    email: "admin@example.com",
    displayName: "Faithonomics Admin",
    roles: ["administrator"],
  },
};

const publicAssetUrl = (assetPath: string): string => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;

export const courses: Course[] = [
  {
    id: "course-faithonomics-core",
    slug: "faithonomics-economic-discipleship",
    title: "Faithonomics Economic Discipleship",
    summary: "Eight levels that align work, stewardship, ownership, integrity and economic impact with God's framework.",
    description:
      "A structured Faithonomics LMS pathway with 8 levels, 32 sessions, step-based teaching blocks, interactive activities, written reflections and completion tracking.",
    imageUrl: publicAssetUrl("faithonomics-logo.png"),
    status: "published",
    pricePlanIds: ["plan-faithonomics-core"],
    storeProductIds: ["product-faithonomics-core"],
    isFree: false,
    lecturerIds: [identities.lecturer.memberId],
    estimatedHours: 32,
    certificateTemplateId: "certificate-faithonomics-core",
    theme: {
      primary: "#234638",
      accent: "#B99245",
    },
  },
];

const curriculum = [
  {
    title: "Level 1: Economic Alignment",
    description: "Move from economic pressure to intentional alignment.",
    sessions: ["The Daily Grind", "Competing Paradigms", "Strategic Alignment", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_bf680d1d5dfc468fbd5db89ae370217b~mv2.png",
    imageAlt: "Faithonomics Level 1 course artwork.",
  },
  {
    title: "Level 2: God's Economic Framework",
    description: "Understand creation, household, and community as economic foundations.",
    sessions: ["The Household Model of Economics", "The Economy of Creation", "The Economy of Community", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_c29d7165ba394234ad2f0e43b16ed57b~mv2.png",
    imageAlt: "Faithonomics Level 2 course artwork.",
  },
  {
    title: "Level 3: Economic Renewal",
    description: "Explore identity, repentance, and the power to change economic habits.",
    sessions: ["The Way In", "A New Identity", "Power to Change", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_f82323d9106a4fe2a024bdf5dc58ef46~mv2.png",
    imageAlt: "Faithonomics Level 3 course artwork.",
  },
  {
    title: "Level 4: Economic Impact and Transformation",
    description: "Trace transformation from personal decisions to social and societal renewal.",
    sessions: ["Personal Change", "Social Change", "Societal Change", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_9e68cca7bfc54ba1a2215b7e63db5223~mv2.png",
    imageAlt: "Faithonomics Level 4 course artwork.",
  },
  {
    title: "Level 5: God the Economist",
    description: "Practise abundance, ownership, and creative stewardship.",
    sessions: ["More Than Enough", "Who Really Owns It?", "Created to Create", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_1625036257f242189f311908439e6f57~mv2.png",
    imageAlt: "Faithonomics Level 5 course artwork.",
  },
  {
    title: "Level 6: The Great Command",
    description: "Let love set the standard for enterprise, access, and business culture.",
    sessions: ["How We Do Business", "Room for Everyone", "Love Sets the Standard", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_71676a8bba0c4e7b919f743daae40178~mv2.png",
    imageAlt: "Faithonomics Level 6 course artwork.",
  },
  {
    title: "Level 7: Godly Economic Practices",
    description: "Develop practical habits for work, generosity, and management.",
    sessions: ["Work That Matters", "Open Hands, Open Doors", "Manage What Matters", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_98ed63ccc0c74cecb623057e5a23a200~mv2.png",
    imageAlt: "Faithonomics Level 7 course artwork.",
  },
  {
    title: "Level 8: Economic Integrity",
    description: "Confront idolatry, hidden costs, and the discipline of enough.",
    sessions: ["When Success Becomes an Idol", "Who Pays the Price?", "Enough Is Enough", "Monday Morning"],
    imageUrl: "https://static.wixstatic.com/media/7638b6_714bd11be0764efc80bd75a8aeff1ddb~mv2.png",
    imageAlt: "Faithonomics Level 8 course artwork.",
  },
] as const;

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const modules: CourseModule[] = curriculum.map((level, index) => ({
  id: `level-${index + 1}`,
  courseId: "course-faithonomics-core",
  title: level.title,
  description: level.description,
  sequence: index + 1,
  ...("imageUrl" in level ? { imageUrl: level.imageUrl, imageAlt: level.imageAlt } : {}),
}));

export const levelAccessCredentials: LevelAccessCredential[] = modules.map((module) => ({
  moduleId: module.id,
  levelTitle: module.title,
  username: `level${module.sequence}`,
  password: `faith${module.sequence}`,
}));

const dailyGrindVideoCheckpoint = {
  id: "daily-grind-video-checkpoint",
  timeSeconds: 206,
  durationSeconds: 321,
  title: "Interactive Quiz: The Daily Grind",
  questions: [
    {
      id: "daily-grind-thabo-choice",
      prompt:
        "Thabo has R50. The latte costs R45. The coffee and muffin costs R49. Why might Thabo still choose the R49 option?",
      choices: [
        "Because spending almost everything is always wise",
        "Because the muffin may help him get through the morning",
        "Because the latte is a bad product",
        "Because the coffee shop owner told him to choose it",
        "Because cheaper choices are always selfish",
        "Because the muffin makes the coffee free",
      ],
      correctAnswer: "Because the muffin may help him get through the morning",
      feedback:
        "Correct. Thabo is not only asking, \"What is cheaper?\" He is asking, \"What will help me use what I have well today?\" This shows that everyday choices are shaped by needs, values, and the situation.",
    },
    {
      id: "daily-grind-thabo-decision",
      prompt: "Which question best describes what is happening inside Thabo's decision?",
      choices: [
        "How can I buy the most expensive thing?",
        "How can I copy what other people are buying?",
        "How can I use my limited money in a way that serves my day well?",
        "How can I avoid thinking about my choice?",
        "How can I make Johan happy?",
        "How can I prove that food is more important than drink?",
      ],
      correctAnswer: "How can I use my limited money in a way that serves my day well?",
      feedback:
        "Correct. Thabo's choice is an everyday example of economics. He has to decide how to use limited money for a real need. This is not cold maths; it is a human choice.",
    },
    {
      id: "daily-grind-johan-beans",
      prompt:
        "Johan must choose between cheaper Robusta beans and smoother Arabica beans that cost more. Which question should guide him best?",
      choices: [
        "Which beans cost the least today, even if customers enjoy them less?",
        "Which beans sound more professional when I talk about them?",
        "Which beans help me serve customers well and keep the shop healthy?",
        "Which beans make the fastest decision possible?",
        "Which beans will make every customer buy muffins?",
        "Which beans allow me to ignore what customers think?",
      ],
      correctAnswer: "Which beans help me serve customers well and keep the shop healthy?",
      feedback:
        "Correct. Johan's choice is not only about cost. He must think about quality, trust, customers, and the future of the business. Business choices are moral choices because they affect people.",
    },
    {
      id: "daily-grind-government-choice",
      prompt:
        "The government considers helping local farmers by making imported beans more expensive. What is the difficult part of this decision?",
      choices: [
        "It may help local farmers but make coffee more expensive for shops and customers",
        "It will make all coffee free for everyone",
        "It only affects farmers and never affects ordinary people",
        "It proves that government decisions are always easy",
        "It means coffee shops will no longer need customers",
        "It removes the need for careful thinking",
      ],
      correctAnswer: "It may help local farmers but make coffee more expensive for shops and customers",
      feedback:
        "Correct. A decision can help one group while placing pressure on another. This is why public choices must be guided by wisdom, justice, and care for people.",
    },
    {
      id: "daily-grind-bigger-lesson",
      prompt: "What do Thabo, Johan, and the government all show us about economics?",
      choices: [
        "Economics is only for experts who understand difficult maths",
        "Economics is mainly about banks and stock markets",
        "Economics is about people, businesses, and governments making choices with what they have",
        "Economics has nothing to do with values or beliefs",
        "Economics is only about choosing the cheapest option",
        "Economics is a machine that works without human hearts or convictions",
      ],
      correctAnswer:
        "Economics is about people, businesses, and governments making choices with what they have",
      feedback:
        "Correct. Economics studies real choices. And because real choices come from what people value, trust, love, and believe, our morals and faith should stand at the centre of our economic life.",
    },
  ],
  conclusion:
    "Thabo's coffee choice, Johan's business decision, and the government's farming policy all point to one lesson: economics is not only about money, banks, graphs, or difficult maths. It is about the choices people make with what they have. Because choices are shaped by what people value and believe, our morals and faith must guide our economic life.",
} satisfies NonNullable<Lesson["content"][number]["videoCheckpoint"]>;

const richLessonStepHtml = (
  content: string,
  options: { includeCompleteButton?: boolean; completeButtonLabel?: string } = {},
): string => `
  <style>
    :root {
      color-scheme: light;
      --paper: #f7f3e8;
      --cream: #e8d8b8;
      --forest: #234638;
      --ubuntu: #4f6b3a;
      --leaf: #7c8f5a;
      --gold: #b99245;
      --amber: #d99a3d;
      --kraft: #9a6b3f;
      --deep-kraft: #5b3a24;
      --ink: #17130f;
      --muted: #5d6659;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", system-ui, sans-serif;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.98), rgba(232, 216, 184, 0.74)),
        radial-gradient(circle at 16% 10%, rgba(217, 154, 61, 0.16), transparent 32%);
      color: var(--ink);
    }

    .rich-step {
      min-height: 100vh;
      padding: clamp(18px, 4vw, 34px);
    }

    h2,
    h3,
    p {
      margin-top: 0;
    }

    h2 {
      margin-bottom: 10px;
      color: var(--forest);
      font-size: clamp(1.65rem, 4vw, 2.6rem);
      line-height: 1.08;
    }

    h3 {
      margin-bottom: 8px;
      color: var(--forest);
      font-size: 1.08rem;
    }

    p {
      color: var(--muted);
      line-height: 1.62;
    }

    .intro {
      width: 100%;
      max-width: none;
      margin-bottom: 22px;
      font-size: 1rem;
    }

    .eyebrow {
      margin-bottom: 8px;
      color: var(--gold);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    .card,
    .callout,
    .comparison {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.56);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .card {
      padding: 16px;
    }

    .card strong {
      display: block;
      margin-bottom: 6px;
      color: var(--deep-kraft);
      font-size: 0.86rem;
      text-transform: uppercase;
    }

    .pill {
      display: inline-flex;
      min-height: 28px;
      align-items: center;
      margin: 8px 6px 0 0;
      padding: 0 10px;
      border-radius: 999px;
      background: rgba(124, 143, 90, 0.22);
      color: var(--forest);
      font-size: 0.82rem;
      font-weight: 750;
    }

    .callout {
      margin-top: 18px;
      padding: 16px;
      border-left: 5px solid var(--gold);
      background: rgba(217, 154, 61, 0.1);
    }

    .comparison {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      overflow: hidden;
    }

    .comparison div {
      padding: 14px;
    }

    .comparison div:first-child {
      border-right: 1px solid rgba(91, 58, 36, 0.18);
      background: rgba(35, 70, 56, 0.08);
    }

    ul {
      display: grid;
      gap: 9px;
      margin: 10px 0 0;
      padding-left: 18px;
      color: var(--muted);
      line-height: 1.5;
    }

    textarea {
      width: 100%;
      min-height: 150px;
      margin-top: 12px;
      border: 1px solid rgba(91, 58, 36, 0.22);
      border-radius: 8px;
      padding: 12px 14px;
      background: rgba(255, 255, 255, 0.72);
      color: var(--ink);
      font: inherit;
      line-height: 1.55;
      resize: vertical;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
    }

    textarea:focus {
      outline: 3px solid rgba(185, 146, 69, 0.28);
      outline-offset: 2px;
    }

    .market-theology-page {
      display: grid;
      gap: clamp(18px, 3vw, 26px);
      align-items: stretch;
      justify-items: center;
    }

    .audio-discussion {
      width: min(100%, 1180px);
      display: grid;
      gap: 10px;
      justify-items: center;
      margin-inline: auto;
    }

    .audio-discussion-copy {
      margin: 0;
      color: var(--forest);
      font-size: clamp(1rem, 1.6vw, 1.18rem);
      font-weight: 800;
      text-align: center;
    }

    .audio-discussion-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .audio-discussion-button {
      width: min(100%, 480px);
      display: block;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
    }

    .audio-discussion-button img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 16px 22px rgba(91, 58, 36, 0.16));
      transition: transform 180ms ease;
    }

    .audio-discussion-button:hover img {
      transform: translateY(-2px);
    }

    .audio-popup {
      position: fixed;
      inset: 0;
      z-index: 140;
      display: none;
      padding: clamp(18px, 3vw, 32px);
      background: rgba(23, 19, 15, 0.94);
    }

    .audio-discussion-toggle:checked ~ .audio-popup {
      display: grid;
    }

    .audio-popup-scrim {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .audio-popup-panel {
      position: relative;
      z-index: 1;
      width: min(100%, 980px);
      min-height: min(72vh, 680px);
      display: grid;
      gap: clamp(20px, 4vw, 34px);
      align-content: center;
      justify-self: center;
      align-self: center;
      border: 1px solid rgba(232, 216, 184, 0.22);
      border-radius: 8px;
      padding: clamp(22px, 4vw, 48px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.84)),
        radial-gradient(circle at 50% 0%, rgba(185, 146, 69, 0.18), transparent 42%);
      box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
    }

    .soundwave {
      min-height: clamp(150px, 24vw, 240px);
      display: flex;
      gap: clamp(7px, 1.3vw, 14px);
      align-items: center;
      justify-content: center;
      padding: clamp(16px, 3vw, 30px);
    }

    .soundwave span {
      width: clamp(7px, 1.2vw, 13px);
      height: 42%;
      border-radius: 999px;
      background: linear-gradient(180deg, var(--gold), var(--forest));
      animation: soundwave-rise 1.05s ease-in-out infinite;
      box-shadow: 0 10px 20px rgba(91, 58, 36, 0.16);
    }

    .soundwave span:nth-child(2) {
      animation-delay: -0.86s;
    }

    .soundwave span:nth-child(3) {
      animation-delay: -0.68s;
    }

    .soundwave span:nth-child(4) {
      animation-delay: -0.5s;
    }

    .soundwave span:nth-child(5) {
      animation-delay: -0.32s;
    }

    .soundwave span:nth-child(6) {
      animation-delay: -0.14s;
    }

    .soundwave span:nth-child(7) {
      animation-delay: -0.76s;
    }

    .soundwave span:nth-child(8) {
      animation-delay: -0.58s;
    }

    .soundwave span:nth-child(9) {
      animation-delay: -0.4s;
    }

    .soundwave span:nth-child(10) {
      animation-delay: -0.22s;
    }

    @keyframes soundwave-rise {
      0%,
      100% {
        transform: scaleY(0.34);
      }

      50% {
        transform: scaleY(1);
      }
    }

    .audio-popup audio {
      width: min(100%, 760px);
      justify-self: center;
      accent-color: var(--forest);
    }

    .audio-popup-close {
      min-height: 42px;
      width: fit-content;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      border: 1px solid rgba(35, 70, 56, 0.18);
      border-radius: 8px;
      padding: 0 16px;
      background: var(--forest);
      color: var(--paper);
      font-weight: 800;
      cursor: pointer;
      transition:
        background 160ms ease,
        transform 160ms ease;
    }

    .audio-popup-close:hover {
      background: #1d3a2f;
      transform: translateY(-1px);
    }

    .wrong-thinking-section {
      width: min(100%, 1180px);
      display: grid;
      gap: clamp(16px, 2.6vw, 24px);
      margin-inline: auto;
    }

    .wrong-thinking-section h2 {
      margin: 0;
      color: var(--forest);
      font-size: clamp(1.75rem, 4vw, 2.7rem);
      line-height: 1.08;
    }

    .scholars-heading {
      margin: clamp(6px, 1.4vw, 12px) 0 0;
      color: var(--deep-kraft);
      font-size: clamp(1.2rem, 2.4vw, 1.7rem);
      font-weight: 850;
      text-align: center;
    }

    .wrong-thinking-images,
    .wrong-card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(14px, 2.4vw, 22px);
      width: 100%;
    }

    .wrong-thinking-image {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(10px, 1.8vw, 18px);
      background: rgba(255, 255, 255, 0.58);
      box-shadow: 0 18px 36px rgba(91, 58, 36, 0.14);
    }

    .wrong-thinking-image:nth-child(1) {
      background:
        linear-gradient(145deg, rgba(210, 225, 194, 0.96), rgba(124, 143, 90, 0.34)),
        radial-gradient(circle at 12% 0%, rgba(35, 70, 56, 0.16), transparent 42%);
    }

    .wrong-thinking-image:nth-child(2) {
      background:
        linear-gradient(145deg, rgba(236, 214, 151, 0.96), rgba(217, 154, 61, 0.28)),
        radial-gradient(circle at 92% 0%, rgba(91, 58, 36, 0.14), transparent 42%);
    }

    .wrong-thinking-image {
      margin: 0;
      overflow: hidden;
    }

    .wrong-thinking-image img {
      display: block;
      width: 100%;
      height: 100%;
      min-height: clamp(280px, 34vw, 430px);
      object-fit: contain;
      border-radius: 6px;
      background: rgba(247, 243, 232, 0.28);
    }

    .wrong-flip-card {
      position: relative;
      aspect-ratio: 4 / 3;
      min-height: 0;
    }

    .wrong-flip-toggle,
    .wrong-slide-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .wrong-flip-cover {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
    }

    .wrong-flip-cover img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transition: transform 220ms ease;
    }

    .wrong-flip-cover:hover img {
      transform: none;
    }

    .wrong-flip-cta,
    .wrong-popup-close,
    .wrong-carousel-controls label {
      min-height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(35, 70, 56, 0.18);
      border-radius: 8px;
      background: var(--forest);
      color: var(--paper);
      font-weight: 800;
      cursor: pointer;
      transition:
        background 160ms ease,
        transform 160ms ease;
    }

    .wrong-flip-cta {
      position: absolute;
      right: clamp(14px, 2vw, 20px);
      bottom: clamp(14px, 2vw, 20px);
      padding: 0 18px;
      background: rgba(35, 70, 56, 0.92);
      box-shadow: 0 12px 26px rgba(23, 19, 15, 0.2);
    }

    .wrong-flip-cta:hover,
    .wrong-popup-close:hover,
    .wrong-carousel-controls label:hover {
      background: #1d3a2f;
      transform: translateY(-1px);
    }

    .wrong-carousel-popup {
      position: fixed;
      inset: 0;
      z-index: 120;
      display: none;
      padding: clamp(12px, 2vw, 24px);
      background: rgba(23, 19, 15, 0.94);
    }

    .wrong-flip-toggle:checked ~ .wrong-carousel-popup {
      display: grid;
    }

    .wrong-popup-scrim {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .wrong-popup-panel {
      position: relative;
      z-index: 1;
      min-width: 0;
      min-height: 0;
      display: grid;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(247, 243, 232, 0.08);
    }

    .wrong-carousel {
      position: relative;
      min-height: 0;
      display: grid;
      grid-template-rows: minmax(0, 1fr) auto;
      gap: 12px;
    }

    .wrong-carousel-window {
      min-height: 0;
      overflow: hidden;
      border: 0;
      border-radius: 8px;
      background: rgba(247, 243, 232, 0.08);
    }

    .wrong-carousel-track {
      display: flex;
      width: 200%;
      height: 100%;
      transition: transform 320ms ease;
    }

    .wrong-carousel-slide {
      flex: 0 0 50%;
      margin: 0;
    }

    .wrong-carousel-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
    }

    .wrong-slide-two-toggle:checked ~ .wrong-carousel-window .wrong-carousel-track {
      transform: translateX(-50%);
    }

    .wrong-carousel-controls {
      display: grid;
      grid-template-columns: minmax(52px, 0.12fr) minmax(52px, 0.12fr) auto;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .wrong-carousel-controls label {
      min-width: 42px;
      padding: 0 12px;
      background: rgba(35, 70, 56, 0.82);
      font-size: 0.92rem;
    }

    .wrong-slide-one-toggle:checked ~ .wrong-carousel-controls .wrong-dot-one,
    .wrong-slide-two-toggle:checked ~ .wrong-carousel-controls .wrong-dot-two {
      background: var(--gold);
      color: var(--ink);
    }

    .wrong-popup-close {
      padding: 0 14px;
      background: rgba(91, 58, 36, 0.86);
      color: var(--paper);
    }

    .market-image-story {
      width: min(100%, 1180px);
      margin-inline: auto;
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 30px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.68)),
        radial-gradient(circle at 10% 0%, rgba(185, 146, 69, 0.14), transparent 38%);
      box-shadow: 0 20px 42px rgba(91, 58, 36, 0.14);
    }

    .market-image-story::after {
      content: "";
      display: block;
      clear: both;
    }

    .market-theology-visual {
      float: right;
      width: min(46%, 520px);
      margin: 0 0 clamp(16px, 2.4vw, 26px) clamp(20px, 3vw, 38px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.62);
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.16);
    }

    .market-theology-visual img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .market-image-story p {
      margin: 0 0 clamp(12px, 1.8vw, 18px);
      color: var(--muted);
      font-size: clamp(1rem, 1.45vw, 1.16rem);
      line-height: 1.66;
    }

    .market-image-story p:last-child {
      margin-bottom: 0;
    }

    .market-image-story .closing-line {
      color: var(--forest);
      font-weight: 750;
    }

    .scripture-reflection {
      width: min(100%, 1180px);
      margin-inline: auto;
    }

    .value-bars {
      display: grid;
      gap: 12px;
      margin: 18px 0;
    }

    .value-row {
      display: grid;
      grid-template-columns: minmax(98px, 0.32fr) minmax(0, 1fr);
      gap: 12px;
      align-items: center;
      color: var(--deep-kraft);
      font-size: 0.9rem;
      font-weight: 750;
    }

    .value-track {
      min-height: 22px;
      overflow: hidden;
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.58);
    }

    .value-fill {
      display: flex;
      min-height: 22px;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--leaf), var(--gold));
      color: var(--paper);
      font-size: 0.78rem;
      font-weight: 800;
    }

    .choice-list {
      display: grid;
      gap: 12px;
      margin-top: 14px;
    }

    .choice-list .card {
      display: grid;
      gap: 6px;
      box-shadow: none;
    }

    .ordinary-art-page {
      min-height: calc(100vh - 120px);
      display: grid;
      gap: clamp(24px, 4vw, 42px);
      align-content: start;
      border-radius: 8px;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.84), rgba(247, 243, 232, 0.94)),
        radial-gradient(circle at 12% 0%, rgba(217, 154, 61, 0.12), transparent 34%);
    }

    .ordinary-story {
      color: #76604f;
    }

    .ordinary-story::after {
      content: "";
      display: block;
      clear: both;
    }

    .ordinary-hero {
      float: left;
      width: min(59%, 740px);
      margin: 0 clamp(24px, 3vw, 42px) 18px 0;
      border-radius: 8px;
      object-fit: contain;
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.16);
    }

    .ordinary-copy {
      max-width: none;
    }

    .ordinary-copy p {
      margin: 0 0 clamp(12px, 1.6vw, 18px);
      color: #76604f;
      font-size: clamp(1.08rem, 1.65vw, 1.38rem);
      line-height: 1.62;
    }

    .ordinary-copy p:last-child {
      margin-bottom: 0;
    }

    .ordinary-copy .ordinary-small {
      max-width: 72ch;
      margin-top: clamp(10px, 1.6vw, 18px);
      padding-top: clamp(10px, 1.4vw, 16px);
      border-top: 1px solid rgba(118, 96, 79, 0.18);
      font-size: clamp(0.98rem, 1.35vw, 1.14rem);
      line-height: 1.58;
    }

    .transparent-quote-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(280px, 1fr));
      gap: clamp(34px, 8vw, 110px);
      align-items: end;
      margin: 0;
      padding: clamp(12px, 2.2vw, 20px) clamp(8px, 2vw, 18px);
      border-radius: 8px;
      background:
        linear-gradient(90deg, rgba(247, 243, 232, 0.18), rgba(232, 216, 184, 0.32), rgba(247, 243, 232, 0.18));
    }

    .transparent-quote {
      margin: 0;
      border: 0;
      background: transparent;
      box-shadow: none;
      display: grid;
      place-items: end center;
    }

    .transparent-quote img {
      display: block;
      width: 100%;
      max-width: 640px;
      height: clamp(130px, 15vw, 178px);
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 10px 12px rgba(91, 58, 36, 0.12));
    }

    .economics-step-page {
      display: grid;
      gap: clamp(18px, 3vw, 26px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 28px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.72)),
        radial-gradient(circle at 15% 0%, rgba(217, 154, 61, 0.14), transparent 36%);
      box-shadow: 0 22px 48px rgba(91, 58, 36, 0.16);
    }

    .economics-step-header {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      justify-content: space-between;
    }

    .economics-step-header h2,
    .economics-step-header p {
      margin: 0;
    }

    .economics-step-header h2 {
      margin-top: 5px;
      color: var(--forest);
      font-size: clamp(1.65rem, 4vw, 2.55rem);
      line-height: 1.08;
    }

    .completion-icon {
      flex: 0 0 auto;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(185, 146, 69, 0.44);
      border-radius: 8px;
      background: rgba(247, 243, 232, 0.72);
      color: var(--forest);
      font-weight: 850;
      box-shadow: 0 10px 20px rgba(91, 58, 36, 0.1);
    }

    .economics-teaching-panel {
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 28px);
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.92), rgba(255, 255, 255, 0.55)),
        radial-gradient(circle at 85% 8%, rgba(124, 143, 90, 0.1), transparent 34%);
      box-shadow: 0 18px 38px rgba(91, 58, 36, 0.12);
    }

    .economics-hero-layout {
      display: grid;
      grid-template-columns: minmax(280px, 0.9fr) minmax(380px, 1.1fr);
      gap: clamp(18px, 3vw, 28px);
      align-items: stretch;
      margin-top: clamp(14px, 2vw, 18px);
    }

    .economics-hero-copy {
      display: grid;
      grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
      gap: clamp(16px, 2.4vw, 22px);
      min-width: 0;
    }

    .economics-hero-copy .teaching-section {
      display: grid;
      align-content: center;
      margin-top: 0;
    }

    .economics-square-image {
      display: block;
      width: 100%;
      height: 100%;
      min-height: clamp(520px, 58vw, 650px);
      margin: 0;
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      object-fit: cover;
      object-position: center;
      background: var(--cream);
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.18);
    }

    .teaching-section {
      margin-top: clamp(16px, 2.5vw, 22px);
      overflow: hidden;
      border: 1px solid rgba(91, 58, 36, 0.13);
      border-left: 4px solid rgba(185, 146, 69, 0.72);
      border-radius: 8px;
      padding: clamp(12px, 1.8vw, 16px) clamp(14px, 2vw, 18px);
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.46), rgba(247, 243, 232, 0.7)),
        radial-gradient(circle at 100% 0%, rgba(185, 146, 69, 0.1), transparent 34%);
      box-shadow: 0 12px 26px rgba(91, 58, 36, 0.08);
    }

    .teaching-section.everyday-life-section {
      border-left-color: rgba(79, 107, 58, 0.86);
      background:
        linear-gradient(145deg, rgba(124, 143, 90, 0.14), rgba(247, 243, 232, 0.76)),
        radial-gradient(circle at 100% 0%, rgba(79, 107, 58, 0.12), transparent 34%);
    }

    .teaching-section.misunderstanding-section {
      border-color: rgba(217, 154, 61, 0.34);
      border-left-color: var(--amber);
      background:
        linear-gradient(145deg, rgba(217, 154, 61, 0.2), rgba(247, 243, 232, 0.78)),
        radial-gradient(circle at 100% 0%, rgba(154, 107, 63, 0.14), transparent 34%);
    }

    .teaching-section.misunderstanding-section h3 {
      color: var(--deep-kraft);
    }

    .teaching-section.takeaway-section {
      border-left-color: rgba(35, 70, 56, 0.84);
      background:
        linear-gradient(145deg, rgba(35, 70, 56, 0.1), rgba(247, 243, 232, 0.76)),
        radial-gradient(circle at 100% 0%, rgba(185, 146, 69, 0.12), transparent 34%);
    }

    .teaching-section:first-of-type {
      margin-top: 0;
    }

    .teaching-section h3,
    .teaching-section p {
      margin: 0;
    }

    .teaching-section h3 {
      margin-bottom: 10px;
      color: var(--forest);
      font-size: clamp(1.05rem, 2vw, 1.22rem);
      line-height: 1.2;
    }

    .teaching-section p + p {
      margin-top: 22px;
    }

    .teaching-section p,
    .economics-list li {
      color: var(--deep-kraft);
      font-size: clamp(0.96rem, 1.55vw, 1.08rem);
      line-height: 1.72;
    }

    .economics-list {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 8px 18px;
      margin: 9px 0 0;
      padding-left: 18px;
    }

    .economics-visual-card {
      clear: both;
      margin: clamp(18px, 3vw, 26px) 0;
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 8px;
      padding: clamp(10px, 1.8vw, 14px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.86), rgba(255, 255, 255, 0.58)),
        radial-gradient(circle at 12% 0%, rgba(217, 154, 61, 0.12), transparent 32%);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .economics-visual-card img {
      display: block;
      width: 100%;
      max-height: 520px;
      object-fit: contain;
      border-radius: 6px;
    }

    .quote-card-row,
    .concept-card-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(14px, 2.5vw, 20px);
    }

    .quote-card-row {
      align-items: stretch;
    }

    .quote-card {
      display: grid;
      place-items: center;
      border: 1px solid rgba(185, 146, 69, 0.34);
      border-left: 5px solid var(--gold);
      border-radius: 8px;
      padding: 12px;
      background: rgba(247, 243, 232, 0.74);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .quote-card img {
      width: 100%;
      max-height: 210px;
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 10px 12px rgba(91, 58, 36, 0.12));
    }

    .concept-card-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .concept-card {
      border: 1px solid rgba(91, 58, 36, 0.15);
      border-radius: 8px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .concept-card strong {
      display: block;
      margin-bottom: 7px;
      color: var(--gold);
      font-size: 0.76rem;
      text-transform: uppercase;
    }

    .concept-card h3,
    .concept-card p {
      margin: 0;
    }

    .concept-card h3 {
      margin-bottom: 7px;
      color: var(--forest);
      font-size: 1.04rem;
    }

    .concept-card p {
      color: var(--muted);
      line-height: 1.5;
    }

    .economics-highlight {
      border: 1px solid rgba(185, 146, 69, 0.36);
      border-left: 5px solid var(--gold);
      border-radius: 8px;
      padding: 16px 18px;
      background: rgba(217, 154, 61, 0.1);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .economics-highlight h3,
    .economics-highlight p {
      margin: 0;
    }

    .economics-highlight h3 {
      margin-bottom: 7px;
      color: var(--forest);
    }

    .economics-choice-chart {
      display: grid;
      gap: 12px;
      border: 1px solid rgba(91, 58, 36, 0.15);
      border-radius: 8px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.48);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .economics-choice-chart h3 {
      margin: 0;
      color: var(--forest);
    }

    .choice-chart-row {
      display: grid;
      grid-template-columns: minmax(90px, 0.18fr) minmax(0, 1fr);
      gap: 12px;
      align-items: center;
    }

    .choice-chart-row strong {
      color: var(--deep-kraft);
    }

    .choice-chart-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .choice-chart-tags span {
      border: 1px solid rgba(79, 107, 58, 0.2);
      border-radius: 999px;
      padding: 6px 10px;
      background: rgba(124, 143, 90, 0.17);
      color: var(--forest);
      font-size: 0.86rem;
      font-weight: 750;
    }

    .faith-reflection {
      border-color: rgba(217, 154, 61, 0.44);
      border-left-color: var(--amber);
      background:
        linear-gradient(145deg, rgba(217, 154, 61, 0.13), rgba(247, 243, 232, 0.74));
    }

    .pillars-page {
      display: grid;
      gap: clamp(18px, 3vw, 28px);
    }

    .pillars-hero {
      display: grid;
      gap: 10px;
      justify-items: center;
      text-align: center;
      padding: clamp(18px, 3vw, 28px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.94), rgba(232, 216, 184, 0.7)),
        radial-gradient(circle at 50% 0%, rgba(217, 154, 61, 0.16), transparent 36%);
      box-shadow: 0 18px 42px rgba(91, 58, 36, 0.14);
    }

    .pillars-hero h2 {
      max-width: 980px;
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      color: var(--forest);
      font-size: clamp(2rem, 6vw, 4.4rem);
      line-height: 1;
    }

    .pillars-hero p {
      max-width: 760px;
      margin: 0;
      color: var(--deep-kraft);
      font-size: clamp(0.98rem, 1.5vw, 1.12rem);
    }

    .pillars-grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, minmax(260px, 1fr));
      gap: clamp(16px, 2.5vw, 26px);
      padding: clamp(12px, 2vw, 18px);
      border-radius: 8px;
      overflow: visible;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.42), rgba(232, 216, 184, 0.36)),
        radial-gradient(circle at 0% 100%, rgba(185, 146, 69, 0.12), transparent 30%);
    }

    .pillar-card-shell {
      position: relative;
      min-height: clamp(210px, 22vw, 280px);
      z-index: 0;
    }

    .pillar-card-shell:has(.pillar-toggle:checked) {
      z-index: 1000;
    }

    .pillar-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .pillar-flip-card {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      min-height: inherit;
      cursor: pointer;
      transform-style: preserve-3d;
      transition:
        transform 420ms ease,
        filter 180ms ease;
    }

    .pillar-toggle:checked + .pillar-flip-card {
      z-index: 4;
      transform: translateY(-2px) scale(1.01);
      filter: drop-shadow(0 24px 30px rgba(91, 58, 36, 0.18));
    }

    .pillar-toggle:focus-visible + .pillar-flip-card .pillar-face {
      outline: 3px solid rgba(185, 146, 69, 0.45);
      outline-offset: 3px;
    }

    .pillar-face {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border: 2px solid rgba(185, 146, 69, 0.58);
      border-radius: 8px;
      backface-visibility: hidden;
      box-shadow:
        0 18px 34px rgba(91, 58, 36, 0.13),
        inset 0 1px 0 rgba(255, 255, 255, 0.7);
    }

    .pillar-front {
      display: grid;
      grid-template-columns: minmax(112px, 0.42fr) minmax(0, 1fr);
      gap: clamp(14px, 2vw, 22px);
      align-items: center;
      padding: clamp(22px, 3vw, 32px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.56)),
        radial-gradient(circle at 0% 100%, rgba(185, 146, 69, 0.18), transparent 34%);
    }

    .pillar-icon {
      display: grid;
      place-items: center;
      min-height: 128px;
      color: var(--gold);
    }

    .pillar-icon img {
      display: block;
      width: min(150px, 100%);
      height: auto;
      max-height: 150px;
      object-fit: contain;
      filter: drop-shadow(0 10px 10px rgba(91, 58, 36, 0.16));
    }

    .pillar-front h3,
    .pillar-front p,
    .pillar-popup-card h3,
    .pillar-popup-card p {
      margin: 0;
    }

    .pillar-front h3 {
      color: var(--forest);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.75rem, 3.5vw, 3.15rem);
      line-height: 1;
    }

    .pillar-front p {
      max-width: 30rem;
      margin-top: 10px;
      color: var(--deep-kraft);
      font-size: clamp(0.95rem, 1.35vw, 1.08rem);
      line-height: 1.35;
    }

    .pillar-front span {
      display: inline-flex;
      width: fit-content;
      margin-top: 14px;
      border-radius: 999px;
      padding: 6px 10px;
      background: rgba(185, 146, 69, 0.16);
      color: var(--deep-kraft);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .pillar-popup {
      position: fixed;
      inset: 0;
      z-index: 9999;
      isolation: isolate;
      display: grid;
      place-items: center;
      padding: clamp(16px, 4vw, 38px);
      background: rgba(23, 19, 15, 0.68);
      backdrop-filter: blur(5px);
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transition:
        opacity 180ms ease,
        visibility 180ms ease;
    }

    .pillar-toggle:checked ~ .pillar-popup {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .pillar-popup-backdrop {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .pillar-popup-card {
      position: relative;
      z-index: 1;
      width: min(760px, calc(100vw - 28px));
      max-height: min(84vh, 680px);
      display: grid;
      gap: clamp(14px, 2vw, 18px);
      overflow: auto;
      border: 2px solid rgba(185, 146, 69, 0.58);
      border-radius: 8px;
      padding: clamp(20px, 3vw, 32px);
      background:
        linear-gradient(145deg, #f7f3e8, #f0e5cf),
        radial-gradient(circle at 100% 0%, rgba(79, 107, 58, 0.12), transparent 36%);
      box-shadow: 0 34px 90px rgba(23, 19, 15, 0.52);
      transform: translateY(18px) rotateX(4deg) scale(0.97);
      transform-origin: center;
      transition: transform 220ms ease;
    }

    .pillar-toggle:checked ~ .pillar-popup .pillar-popup-card {
      transform: translateY(0) rotateX(0) scale(1);
    }

    .pillar-popup-close {
      position: sticky;
      top: 0;
      justify-self: end;
      border: 1px solid rgba(91, 58, 36, 0.2);
      border-radius: 999px;
      padding: 7px 12px;
      background: #f7f3e8;
      color: var(--deep-kraft);
      cursor: pointer;
      font-size: 0.78rem;
      font-weight: 850;
      text-transform: uppercase;
      box-shadow: 0 8px 16px rgba(91, 58, 36, 0.12);
    }

    .pillar-popup-card strong {
      color: var(--gold);
      font-size: 0.76rem;
      text-transform: uppercase;
    }

    .pillar-popup-card h3 {
      color: var(--forest);
      max-width: 100%;
      font-size: clamp(1.55rem, 3vw, 2.25rem);
      line-height: 1.16;
      text-wrap: balance;
    }

    .pillar-popup-card p {
      color: var(--muted);
      max-width: 68ch;
      font-size: clamp(1.04rem, 1.55vw, 1.18rem);
      line-height: 1.65;
    }

    .complete-button {
      display: inline-flex;
      min-height: 42px;
      align-items: center;
      justify-content: center;
      margin-top: 22px;
      padding: 0 16px;
      border: 1px solid var(--forest);
      border-radius: 8px;
      background: linear-gradient(145deg, var(--forest), var(--ubuntu));
      color: var(--paper);
      font: inherit;
      font-weight: 750;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(35, 70, 56, 0.22);
      transition:
        background 160ms ease,
        transform 160ms ease,
        box-shadow 160ms ease;
    }

    .complete-button:hover {
      background: linear-gradient(145deg, #1d3a2f, var(--forest));
      box-shadow: 0 14px 28px rgba(35, 70, 56, 0.26);
      transform: translateY(-1px);
    }

    @media (max-width: 640px) {
      .comparison {
        grid-template-columns: 1fr;
      }

      .comparison div:first-child {
        border-right: 0;
        border-bottom: 1px solid rgba(91, 58, 36, 0.18);
      }

      .value-row {
        grid-template-columns: 1fr;
        gap: 6px;
      }

      .ordinary-hero {
        float: none;
        width: 100%;
        margin: 0 0 18px;
      }

      .ordinary-copy p {
        font-size: 1rem;
        line-height: 1.56;
      }

      .market-theology-visual {
        float: none;
        width: 100%;
        margin: 0 0 18px;
      }

      .audio-discussion-button {
        width: min(100%, 360px);
      }

      .audio-popup-panel {
        min-height: min(72vh, 560px);
        padding: 18px;
      }

      .soundwave {
        min-height: 130px;
      }

      .wrong-thinking-images,
      .wrong-card-grid {
        grid-template-columns: 1fr;
      }

      .wrong-thinking-image img {
        min-height: 0;
      }

      .wrong-flip-card {
        min-height: 0;
      }

      .market-image-story p {
        font-size: 1rem;
        line-height: 1.58;
      }

      .transparent-quote-row {
        grid-template-columns: 1fr;
      }

      .economics-step-header {
        align-items: flex-start;
      }

      .economics-hero-layout {
        grid-template-columns: 1fr;
      }

      .economics-square-image {
        height: auto;
        min-height: 0;
        object-fit: contain;
      }

      .quote-card-row,
      .concept-card-row {
        grid-template-columns: 1fr;
      }

      .pillars-grid {
        grid-template-columns: 1fr;
      }

      .pillar-card-shell {
        min-height: 250px;
      }

      .pillar-front {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }

      .choice-chart-row {
        grid-template-columns: 1fr;
        gap: 7px;
      }
    }
  </style>
  <main class="rich-step" data-rich-lesson-step>
    ${content}
    ${options.includeCompleteButton === false ? "" : `<button class="complete-button" data-classroom-complete data-score="5" data-max-score="5">${options.completeButtonLabel ?? "Continue"}</button>`}
  </main>
`;

const createDailyGrindExplorationSteps = (lessonId: string): Lesson["content"] => [
  {
    id: `${lessonId}-ordinary-business-life`,
    kind: "customHtml",
    title: "Step 2: The Ordinary Business of Life",
    body: richLessonStepHtml(`
      <p class="eyebrow">Interactive exploration</p>
      <h2>The Ordinary Business of Life</h2>
      <p class="intro">
        Economics is the art of making the most of life. Every transaction involves deeper questions of value,
        cost, preference, justice, and faith.
      </p>
      <div class="grid">
        <section class="card">
          <strong>1. The Consumer: Thabo</strong>
          <h3>Muffin combo or fancy latte?</h3>
          <p>Thabo has R50. A muffin combo costs R49, while a fancy latte costs R45. His decision is not only about price; it is about what will serve his real day well.</p>
          <span class="pill">Need</span><span class="pill">Preference</span><span class="pill">Limited money</span>
        </section>
        <section class="card">
          <strong>2. The Producer: Johan</strong>
          <h3>Cheap Robusta or premium Arabica?</h3>
          <p>Johan must choose between higher margins and higher quality. Business decisions are moral decisions because they affect trust, customers, workers, and the future.</p>
          <span class="pill">Quality</span><span class="pill">Profit</span><span class="pill">Trust</span>
        </section>
        <section class="card">
          <strong>3. The Government</strong>
          <h3>Tax, protect, or subsidise?</h3>
          <p>Public policy can help one group while placing pressure on another. Good economic decisions need wisdom, justice, and care for ordinary people.</p>
          <span class="pill">Public good</span><span class="pill">Trade-offs</span><span class="pill">Justice</span>
        </section>
      </div>
      <div class="callout">
        <h3>Reflect</h3>
        <p>Do these choices treat people merely as consumers and producers, or as image-bearers of God?</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-economics-everyday-choices`,
    kind: "customHtml",
    title: "Step 3: Understanding Economics in Everyday Life",
    body: richLessonStepHtml(`
      <section class="economics-step-page">
        <header class="economics-step-header">
          <div>
            <p class="eyebrow">Step 3</p>
            <h2>Understanding Economics in Everyday Life</h2>
          </div>
          <div class="completion-icon" aria-label="Step status">&#10003;</div>
        </header>

        <section class="economics-teaching-panel">
          <p class="eyebrow">The study of choices</p>
          <h2>What Is Economics?</h2>
          <div class="economics-hero-layout">
            <img
              class="economics-square-image"
              src="https://static.wixstatic.com/media/7638b6_f52c1f6f2d0c42a980e209c87b9db1dd~mv2.png"
              alt="Papercraft public building representing shared economic choices"
            />
            <div class="economics-hero-copy">
              <section class="teaching-section">
                <h3>What Economics Means</h3>
                <p>
                  Economics is the study of the choices persons, businesses, and governments make when they use limited
                  means to satisfy unlimited wants and essential needs. We all want many things, but we are limited in
                  how we can meet those wants and needs. Because we do not have unlimited time, money, energy, skills,
                  or materials, we must make choices.
                </p>
              </section>

              <section class="teaching-section">
                <h3>Why Choices Matter</h3>
                <p>
                  Life is full of constraints. We cannot do everything, buy everything, or produce everything at once.
                  Economics helps us understand how people decide what matters most and how they make the best use of
                  what they have. Economics is the science of figuring out how to make the most of what we have got.
                </p>
              </section>
            </div>
          </div>

          <figure class="economics-visual-card">
            <img
              src="https://static.wixstatic.com/media/7638b6_4acddffa7162437eb2b046ff7ceeb9c3~mv2.png"
              alt="Visual explanation of the everyday areas economics looks at"
            />
          </figure>

          <section class="teaching-section everyday-life-section">
            <h3>Economics in Everyday Life</h3>
            <p>
              The scope of economic activity reaches into everyday life. It helps us understand how individuals and
              society interact in the interest of well-being, while trying to meet essential needs and important wants.
              Economics also considers the choices and trade-offs people make as they try to use resources wisely and
              achieve better outcomes.
            </p>
          </section>

          <section class="teaching-section misunderstanding-section">
            <h3>Common Misunderstanding</h3>
            <p>
              Many people misunderstand economics as only being about complex mathematical models, the stock exchange,
              government policy, or making money. However, economics goes far beyond that. It is about the resources we
              have, how we use them, our connections with people, organisations, and nations, what we do to create or
              obtain resources, and how we use and share them.
            </p>
          </section>

          <section class="teaching-section takeaway-section">
            <h3>Final Takeaway</h3>
            <p>
              Economics is not only about numbers. It is about choices, limited resources, human needs, and how people
              live together.
            </p>
          </section>
        </section>

        <div class="quote-card-row" aria-label="Economics quote visuals">
          <figure class="quote-card">
            <img src="https://static.wixstatic.com/media/7638b6_cf834dcfb79f4803a64eb0cc7b0de17b~mv2.png" alt="Alfred Marshall quote about economics and ordinary life" />
          </figure>
          <figure class="quote-card">
            <img src="https://static.wixstatic.com/media/7638b6_bda9733d617c4cca965c4c45b6971001~mv2.png" alt="Gary Becker quote about economy and making the most of life" />
          </figure>
        </div>

      </section>
    `),
  },
  {
    id: `${lessonId}-practical-economic-elements`,
    kind: "customHtml",
    title: "Step 4: Practical Economic Elements",
    body: richLessonStepHtml(`
      <section class="pillars-page">
        <section class="pillars-hero">
          <p class="eyebrow">Practical life</p>
          <h2>The Four Pillars of Economic Activity</h2>
          <p>
            Tap a pillar to open a detail popup and see how property, relationships, work, and consumption shape daily
            choices for individuals, businesses, and governments.
          </p>
        </section>

        <div class="pillars-grid" aria-label="Four pillars of economic activity">
          <input class="pillar-toggle pillar-reset" type="radio" name="${lessonId}-pillar-detail" id="${lessonId}-pillar-none" checked />

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${lessonId}-pillar-detail" id="${lessonId}-pillar-property" />
            <label class="pillar-flip-card" for="${lessonId}-pillar-property">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${publicAssetUrl("assets/pillar-property-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Property</h3>
                  <p>What we own, manage, and protect.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Property detail">
              <label class="pillar-popup-backdrop" for="${lessonId}-pillar-none" aria-label="Close property detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${lessonId}-pillar-none">Close</label>
                <strong>Property</strong>
                <h3>What we own, manage, and protect</h3>
                <p>For individuals, property includes money, a home, tools, time, and personal belongings. We choose whether to use these gifts for fear, pride, comfort, service, or stewardship.</p>
                <p>For businesses, property includes stock, equipment, buildings, ideas, and capital. These assets should create value without exploiting people.</p>
                <p>For governments, property includes laws, rights, land use, and public resources. Good policy protects ownership while also caring for public welfare.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${lessonId}-pillar-detail" id="${lessonId}-pillar-relationships" />
            <label class="pillar-flip-card" for="${lessonId}-pillar-relationships">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${publicAssetUrl("assets/pillar-relationships-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Relationships</h3>
                  <p>Who we trust, trade with, and serve.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Relationships detail">
              <label class="pillar-popup-backdrop" for="${lessonId}-pillar-none" aria-label="Close relationships detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${lessonId}-pillar-none">Close</label>
                <strong>Relationships</strong>
                <h3>Who we trust, trade with, and serve</h3>
                <p>For individuals, relationships affect family budgets, friendships, borrowing, lending, and daily support. Our economic choices can build trust or damage it.</p>
                <p>For businesses, relationships include customers, workers, suppliers, competitors, and the community. Fair dealing creates long-term strength.</p>
                <p>For governments, relationships include trade, diplomacy, social support, and peace. Public decisions can strengthen or weaken the bonds of society.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${lessonId}-pillar-detail" id="${lessonId}-pillar-work" />
            <label class="pillar-flip-card" for="${lessonId}-pillar-work">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${publicAssetUrl("assets/pillar-work-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Work</h3>
                  <p>How effort becomes service.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Work detail">
              <label class="pillar-popup-backdrop" for="${lessonId}-pillar-none" aria-label="Close work detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${lessonId}-pillar-none">Close</label>
                <strong>Work</strong>
                <h3>How effort becomes service</h3>
                <p>For individuals, work is a source of income, skill, dignity, and purpose. The question is not only, "How much do I earn?" but also, "What kind of person am I becoming through my work?"</p>
                <p>For businesses, work creates jobs, products, services, and training. Good businesses organise labour in ways that respect people.</p>
                <p>For governments, work connects to labour law, education, safety, fair wages, and economic growth. Wise policy helps people work with dignity.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${lessonId}-pillar-detail" id="${lessonId}-pillar-consumption" />
            <label class="pillar-flip-card" for="${lessonId}-pillar-consumption">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${publicAssetUrl("assets/pillar-consumption-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Consumption</h3>
                  <p>How we use resources to meet needs.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Consumption detail">
              <label class="pillar-popup-backdrop" for="${lessonId}-pillar-none" aria-label="Close consumption detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${lessonId}-pillar-none">Close</label>
                <strong>Consumption</strong>
                <h3>How we use resources to meet needs</h3>
                <p>For individuals, consumption includes food, clothing, transport, entertainment, and technology. Every purchase asks whether we are meeting a need, feeding greed, or serving a good purpose.</p>
                <p>For businesses, consumption patterns shape production, pricing, advertising, and distribution. Companies must decide whether to serve real needs or only create more desire.</p>
                <p>For governments, consumption affects access to goods, public services, taxation, and fairness. Good systems help people meet needs without wasting resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `, { includeCompleteButton: false }),
  },
  {
    id: `${lessonId}-art-of-living-well`,
    kind: "customHtml",
    title: "Step 5: The Architecture of Choice",
    body: richLessonStepHtml(`
      <section class="market-theology-page">
        <section class="audio-discussion" aria-label="Audio discussion">
          <p class="audio-discussion-copy">Click the button to listen to the discussion.</p>
          <input
            class="audio-discussion-toggle"
            type="checkbox"
            id="${lessonId}-wallet-worldview-audio"
            data-rich-popup-toggle
            data-audio-toggle
            data-audio-target="#${lessonId}-wallet-worldview-audio-player"
          />
          <label class="audio-discussion-button" for="${lessonId}-wallet-worldview-audio">
            <img
              src="https://static.wixstatic.com/media/7638b6_4d265beddab44939b223089de3158338~mv2.png"
              alt="Open audio discussion"
            />
          </label>
          <div class="audio-popup" role="dialog" aria-label="Audio discussion player">
            <label class="audio-popup-scrim" for="${lessonId}-wallet-worldview-audio" aria-label="Close audio discussion"></label>
            <div class="audio-popup-panel">
              <div class="soundwave" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <audio id="${lessonId}-wallet-worldview-audio-player" controls preload="metadata">
                <source src="https://static.wixstatic.com/mp3/7638b6_731005efcdc94fc89592073673540bd8.m4a" type="audio/mp4" />
              </audio>
              <label class="audio-popup-close" for="${lessonId}-wallet-worldview-audio">Close</label>
            </div>
          </div>
        </section>

        <section class="wrong-thinking-section" aria-label="Wrong thinking about economics">
          <h2>Wrong thinking about economics</h2>

          <div class="wrong-thinking-images" aria-label="Wrong economic thinking visuals">
            <figure class="wrong-thinking-image">
              <img
                src="https://static.wixstatic.com/media/7638b6_a9ec244496864c2aa33dfb8d0104c46f~mv2.png"
                alt="Wrong thinking about economics visual"
              />
            </figure>
            <figure class="wrong-thinking-image">
              <img
                src="https://static.wixstatic.com/media/7638b6_c05404d411b64c23b78e6c2ce1ab3cff~mv2.png"
                alt="Wrong thinking about economics comparison visual"
              />
            </figure>
          </div>

          <p class="scholars-heading">Find out what scholars says</p>

          <div class="wrong-card-grid" aria-label="Wrong thinking flip cards">
            <article class="wrong-flip-card">
              <input class="wrong-flip-toggle" type="checkbox" id="${lessonId}-wrong-card-one" data-rich-popup-toggle />
              <label class="wrong-flip-cover" for="${lessonId}-wrong-card-one">
                <img
                  src="https://static.wixstatic.com/media/7638b6_d6bf992a5e584631869e2b85fb075a6b~mv2.png"
                  alt="First wrong thinking flip card cover"
                />
                <span class="wrong-flip-cta">Find out more</span>
              </label>
              <div class="wrong-carousel-popup" role="dialog" aria-label="First wrong thinking carousel">
                <label class="wrong-popup-scrim" for="${lessonId}-wrong-card-one" aria-label="Close first carousel"></label>
                <div class="wrong-popup-panel">
                  <div class="wrong-carousel">
                    <input class="wrong-slide-toggle wrong-slide-one-toggle" type="radio" name="${lessonId}-wrong-card-one-carousel" id="${lessonId}-wrong-card-one-slide-one" checked />
                    <input class="wrong-slide-toggle wrong-slide-two-toggle" type="radio" name="${lessonId}-wrong-card-one-carousel" id="${lessonId}-wrong-card-one-slide-two" />
                    <div class="wrong-carousel-window">
                      <div class="wrong-carousel-track">
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_f8c5c53c17a9489895b293cb53e9aad1~mv2.png"
                            alt="First carousel slide for the first wrong thinking card"
                          />
                        </figure>
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_2951a0d17d8a4389b4c29a84397af2a1~mv2.png"
                            alt="Second carousel slide for the first wrong thinking card"
                          />
                        </figure>
                      </div>
                    </div>
                    <div class="wrong-carousel-controls">
                      <label class="wrong-dot-one" for="${lessonId}-wrong-card-one-slide-one">1</label>
                      <label class="wrong-dot-two" for="${lessonId}-wrong-card-one-slide-two">2</label>
                      <label class="wrong-popup-close" for="${lessonId}-wrong-card-one">Close</label>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article class="wrong-flip-card">
              <input class="wrong-flip-toggle" type="checkbox" id="${lessonId}-wrong-card-two" data-rich-popup-toggle />
              <label class="wrong-flip-cover" for="${lessonId}-wrong-card-two">
                <img
                  src="https://static.wixstatic.com/media/7638b6_af53a18f98cc4c84ba49e3357ca743f1~mv2.png"
                  alt="Second wrong thinking flip card cover"
                />
                <span class="wrong-flip-cta">Find out more</span>
              </label>
              <div class="wrong-carousel-popup" role="dialog" aria-label="Second wrong thinking carousel">
                <label class="wrong-popup-scrim" for="${lessonId}-wrong-card-two" aria-label="Close second carousel"></label>
                <div class="wrong-popup-panel">
                  <div class="wrong-carousel">
                    <input class="wrong-slide-toggle wrong-slide-one-toggle" type="radio" name="${lessonId}-wrong-card-two-carousel" id="${lessonId}-wrong-card-two-slide-one" checked />
                    <input class="wrong-slide-toggle wrong-slide-two-toggle" type="radio" name="${lessonId}-wrong-card-two-carousel" id="${lessonId}-wrong-card-two-slide-two" />
                    <div class="wrong-carousel-window">
                      <div class="wrong-carousel-track">
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_a894e89316604b2d8d33688b97811959~mv2.png"
                            alt="First carousel slide for the second wrong thinking card"
                          />
                        </figure>
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_16fe653c77904001a72b0786dd8fce2c~mv2.png"
                            alt="Second carousel slide for the second wrong thinking card"
                          />
                        </figure>
                      </div>
                    </div>
                    <div class="wrong-carousel-controls">
                      <label class="wrong-dot-one" for="${lessonId}-wrong-card-two-slide-one">1</label>
                      <label class="wrong-dot-two" for="${lessonId}-wrong-card-two-slide-two">2</label>
                      <label class="wrong-popup-close" for="${lessonId}-wrong-card-two">Close</label>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <article class="market-image-story">
          <figure class="market-theology-visual">
            <img
              src="https://static.wixstatic.com/media/7638b6_5f69750a6fca42718c433eaf03285fc7~mv2.png"
              alt="Faithonomics visual exploring economic thinking and theological teaching"
            />
          </figure>
          <p>
            At times our Christian way of thinking sees economics as being a science based on natural laws, and we
            should only correct it when it is in clear conflict with Bible morals. For example, liberal economic
            theories suggest that society works because people focus on their own needs and try to outdo each other.
          </p>
          <p>
            On the other hand, in socialist theories, the key goals are people cooperating and ensuring everyone is
            treated equally. However, both of these approaches omit God from these important human interactions.
          </p>
          <p>
            Economic thought and theological teaching in the past were deeply connected. God's provision and justice
            formed the foundation for understanding how society should organise resources and care for people.
          </p>
          <p>
            During the period of the Enlightenment, God's wisdom was replaced by reason and human experience. Divine
            guidance on economic thought was replaced by thinkers like Adam Smith with the autonomous market system
            and Karl Marx with the socio-economic "laws" of historical development.
          </p>
          <p class="closing-line">
            Removing God from the choices we make in what we have, how we work and how we use what we have directly
            affects our relationship with God. Redefining God, humanity and our worship of God.
          </p>
        </article>

        <section class="callout scripture-reflection">
          <h3>Read Matthew 6:25-34</h3>
          <p>
            Read Matthew 6:25-34, and reflect on what the portion of Scripture says about how we should make
            our economic choices. How do I practically apply it to my daily life, my work/business, or who I
            vote for?
          </p>
          <textarea aria-label="Matthew 6 economic choice reflection" rows="7" placeholder="Write your reflection here..."></textarea>
        </section>
      </section>
    `, { completeButtonLabel: "Complete step" }),
  },
  {
    id: `${lessonId}-market-orthodoxy`,
    kind: "customHtml",
    title: "Step 5: Market Orthodoxy",
    body: richLessonStepHtml(`
      <p class="eyebrow">The religion of economics</p>
      <h2>Market Orthodoxy</h2>
      <p class="intro">
        Modern economics often claims to be neutral, but it can begin to operate like a godless religion:
        it offers a story of providence, a view of humanity, a priesthood, and a promise of salvation.
      </p>
      <div class="grid">
        <section class="card">
          <strong>I. The New God</strong>
          <h3>The Invisible Hand</h3>
          <p>The market is treated as a form of providence that guides outcomes and deserves trust.</p>
        </section>
        <section class="card">
          <strong>II. The Image</strong>
          <h3>Reduced Humanity</h3>
          <p>People are reduced from spiritual image-bearers to rational consumers and profit-driven producers.</p>
        </section>
        <section class="card">
          <strong>III. The Priesthood</strong>
          <h3>Expert Orthodoxy</h3>
          <p>Economists and market experts proclaim doctrines of growth, globalisation, and efficiency.</p>
        </section>
        <section class="card">
          <strong>IV. Salvation</strong>
          <h3>Material Abundance</h3>
          <p>The promised heaven is technological progress, uninterrupted growth, and more consumption.</p>
        </section>
      </div>
      <div class="callout">
        <h3>Checkpoint</h3>
        <p>Faithonomics asks what has taken the place of God in the economic imagination.</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-economic-theology`,
    kind: "customHtml",
    title: "Step 6: Economic Theology",
    body: richLessonStepHtml(`
      <p class="eyebrow">Paradigm shift</p>
      <h2>Towards an Economic Theology</h2>
      <p class="intro">
        Economic theology asks how belief in God should shape what we consider real, valuable, fair,
        responsible, and meaningful in the economy.
      </p>
      <div class="comparison">
        <div>
          <h3>Modern Economics Often Prioritises</h3>
          <ul>
            <li>Efficiency and progress</li>
            <li>Material abundance</li>
            <li>Self-interest as rationality</li>
            <li>Value measured mainly by market price</li>
            <li>Debt treated as a technical obligation</li>
          </ul>
        </div>
        <div>
          <h3>Economic Theology Reframes</h3>
          <ul>
            <li>Purpose and meaning</li>
            <li>Community and trust</li>
            <li>Morality and fairness</li>
            <li>Value measured by human flourishing and created purpose</li>
            <li>Debt viewed through responsibility, neighbour-love, and grace</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Learning move</h3>
        <p>Do not ask only, "What works?" Ask, "What kind of people and community does this economy form?"</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-daily-application`,
    kind: "customHtml",
    title: "Step 7: Daily Application",
    body: richLessonStepHtml(`
      <p class="eyebrow">Practice</p>
      <h2>Applying the Lens to Daily Life</h2>
      <p class="intro">
        Rejecting the religion of the market changes ordinary behaviour. Faith reshapes work, money,
        purchasing, management, and the way we see people.
      </p>
      <div class="grid">
        <section class="card">
          <strong>The Office</strong>
          <h3>Purpose over pure profit</h3>
          <p>A job is not only a mechanism to maximise income. It is a vocation that should contribute to human flourishing.</p>
        </section>
        <section class="card">
          <strong>The Office</strong>
          <h3>Colleagues as image-bearers</h3>
          <p>Workers are not merely human resources or budget lines. They carry dignity and deserve fair wages, rest, and honour.</p>
        </section>
        <section class="card">
          <strong>The Wallet</strong>
          <h3>Stewardship over consumerism</h3>
          <p>Money is entrusted for good, not simply for accumulating goods. Material abundance cannot save us.</p>
        </section>
        <section class="card">
          <strong>The Wallet</strong>
          <h3>Mindful purchasing</h3>
          <p>Even buying coffee raises faithful questions: Was this ethically sourced? Does this purchase support a fair economic system?</p>
        </section>
      </div>
      <div class="callout">
        <h3>Monday question</h3>
        <p>What is one economic decision you can make this week that treats people as image-bearers rather than market units?</p>
      </div>
    `),
  },
];

const createPracticalEconomicsSteps = (lessonId: string): Lesson["content"] => [
  {
    id: `${lessonId}-two-ways-economics`,
    kind: "customHtml",
    title: "Step 8: Two Ways to Understand Economics",
    body: richLessonStepHtml(`
      <p class="eyebrow">Big picture</p>
      <h2>Two Ways to Understand Economics</h2>
      <p class="intro">
        Every day people buy groceries, work at jobs, pay taxes, save money, and share what they have.
        Economics studies this busy world. But there are two very different ways to understand what is happening.
      </p>
      <div class="comparison">
        <div>
          <h3>Method 1: The Rules of Nature</h3>
          <p><strong>The hard science view</strong></p>
          <ul>
            <li>It treats economics like physics, chemistry, or biology.</li>
            <li>It focuses on land, water, labour, machines, money, and production.</li>
            <li>It asks, "How much can we produce with the resources we have?"</li>
            <li>It tries to be value-neutral, meaning it avoids questions of right and wrong.</li>
          </ul>
        </div>
        <div>
          <h3>Method 2: Natural Theology</h3>
          <p><strong>The human choice view</strong></p>
          <ul>
            <li>It studies the people behind the numbers.</li>
            <li>It notices goals, love, duty, sacrifice, fear, trust, and hope.</li>
            <li>It asks, "Why did this person choose this, and what does the choice reveal?"</li>
            <li>It sees human choice as a sign that people are made with soul, purpose, and moral responsibility.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Learning move</h3>
        <p>Faithonomics does not reject numbers. It asks us to see the human person behind the numbers.</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-hard-science-economics`,
    kind: "customHtml",
    title: "Step 9: Economics as a Hard Science",
    body: richLessonStepHtml(`
      <p class="eyebrow">Numbers and resources</p>
      <h2>Economics as a Hard Science</h2>
      <p class="intro">
        A hard science studies fixed rules in the physical world. In this view, economics is mainly about
        limited resources and measurable results. It counts what goes in and what comes out.
      </p>
      <div class="grid">
        <section class="card">
          <strong>Value-neutral</strong>
          <h3>Just the facts</h3>
          <p>This view does not ask whether an outcome is loving, just, or wise. It asks how many goods were produced, how much labour was used, and how much money changed hands.</p>
        </section>
        <section class="card">
          <strong>Capitalism or socialism</strong>
          <h3>The question stays numerical</h3>
          <p>Whether private businesses or the state controls resources, the hard science view compares the data: output, cost, consumption, and efficiency.</p>
        </section>
        <section class="card">
          <strong>Limit</strong>
          <h3>No room for conscience</h3>
          <p>If humans are treated only as inputs and outputs, there is no need to speak about God, soul, free will, or moral responsibility.</p>
        </section>
      </div>
      <section class="card">
        <strong>Simple resource output example</strong>
        <h3>What this view measures</h3>
        <div class="value-bars">
          <div class="value-row"><span>Agriculture</span><div class="value-track"><div class="value-fill" style="width: 72%;">72</div></div></div>
          <div class="value-row"><span>Manufacturing</span><div class="value-track"><div class="value-fill" style="width: 64%;">64</div></div></div>
          <div class="value-row"><span>Technology</span><div class="value-track"><div class="value-fill" style="width: 82%;">82</div></div></div>
          <div class="value-row"><span>Healthcare</span><div class="value-track"><div class="value-fill" style="width: 58%;">58</div></div></div>
        </div>
        <p>The chart is useful, but it cannot tell us whether workers are honoured, whether the weak are protected, or whether greed is shaping the system.</p>
      </section>
      <div class="callout">
        <h3>Reflect</h3>
        <p>Numbers can describe economic activity, but they cannot tell the full truth about human dignity.</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-human-choice-and-value`,
    kind: "customHtml",
    title: "Step 10: Human Choice and Value",
    body: richLessonStepHtml(`
      <p class="eyebrow">People behind the prices</p>
      <h2>Economics as the Study of Human Decisions</h2>
      <p class="intro">
        Economics is not only about things. It is about people choosing between different goods, needs,
        duties, dreams, and fears. The same item can have a different value in a different situation.
      </p>
      <div class="grid">
        <section class="card">
          <strong>Example</strong>
          <h3>A bottle of water</h3>
          <p>In a shop, a bottle of water may feel ordinary. In a desert, it may feel priceless. The object has not changed, but the human need has changed.</p>
        </section>
        <section class="card">
          <strong>Animals and humans</strong>
          <h3>More than instinct</h3>
          <p>An animal mainly follows instinct. A human can be hungry and still give food to a child. That choice shows love, purpose, and moral value.</p>
        </section>
      </div>
      <section class="card">
        <strong>Practical example: You have R500</strong>
        <h3>Three choices, three values</h3>
        <div class="choice-list">
          <section class="card">
            <strong>Invest in a skill or small business</strong>
            <p>This choice values the future. You give up comfort today because you hope to create better opportunities tomorrow.</p>
          </section>
          <section class="card">
            <strong>Buy a thoughtful gift for a family member</strong>
            <p>This choice values relationship. You spend money to honour someone and strengthen love inside the household.</p>
          </section>
          <section class="card">
            <strong>Give to a local hospital or community need</strong>
            <p>This choice values mercy. You use your money to help people you may never meet, because their lives still matter.</p>
          </section>
        </div>
      </section>
      <div class="callout">
        <h3>Reflect</h3>
        <p>Our choices reveal what we believe is worth protecting, building, or loving.</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-creator-free-will`,
    kind: "customHtml",
    title: "Step 11: The Creator and Free Will",
    body: richLessonStepHtml(`
      <p class="eyebrow">Economic theology</p>
      <h2>The Necessity of the Holy Creator</h2>
      <p class="intro">
        If economics is truly about human choices, we must ask a deeper question: where does our ability
        to choose, judge, love, sacrifice, and take responsibility come from?
      </p>
      <div class="grid">
        <section class="card">
          <strong>1. Matter Cannot Make Moral Choices</strong>
          <h3>Atoms do not feel guilt or generosity</h3>
          <p>Rocks, chemicals, and machines follow physical rules. They do not decide to be kind, unfair, greedy, or faithful. Moral choice is more than matter moving around.</p>
        </section>
        <section class="card">
          <strong>2. Free Will Demands a Soul</strong>
          <h3>Humans choose with meaning</h3>
          <p>People make choices based on invisible values like trust, love, ambition, fear, duty, and sacrifice. This points to mind, will, and soul.</p>
        </section>
        <section class="card">
          <strong>3. A Soul Points to a Creator</strong>
          <h3>Purpose is not an accident</h3>
          <p>If humans can make real moral choices, then we are not only economic machines. We are created persons with responsibility before God.</p>
        </section>
      </div>
      <div class="callout">
        <h3>Summary</h3>
        <p>When resources and money are treated only as numbers, economics becomes cold and mechanical. When we see that every economic event is driven by human choices, we see signs of divine design: people made with soul, purpose, and moral responsibility.</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-god-in-practical-economics`,
    kind: "customHtml",
    title: "Step 12: God in Practical Economics",
    body: richLessonStepHtml(`
      <p class="eyebrow">Explaining the practical problem</p>
      <h2>What Happens When God Is Left Out?</h2>
      <p class="intro">
        Sometimes Christians think economics is only a science of natural laws. We then treat it like a machine
        that only needs correction when it clearly breaks a Bible rule. But economics is not only about laws,
        money, and systems. It is about people choosing, working, trading, sharing, and using what God has given.
      </p>
      <div class="grid">
        <section class="card">
          <strong>Liberal economic thinking</strong>
          <h3>The individual becomes central</h3>
          <p>This approach often says society works best when people focus on their own needs and try to outdo one another. It can encourage freedom and initiative, but it can also make self-interest feel normal.</p>
          <p>The danger is that people may be treated mainly as competitors, consumers, or profit seekers.</p>
        </section>
        <section class="card">
          <strong>Socialist economic thinking</strong>
          <h3>The group becomes central</h3>
          <p>This approach often says society works best when people cooperate and everyone is treated equally. It can encourage care for the poor and concern for fairness.</p>
          <p>The danger is that the person may be swallowed by the system, and responsibility before God can be replaced by responsibility only to the group or state.</p>
        </section>
        <section class="card">
          <strong>The shared weakness</strong>
          <h3>God is pushed out of human interaction</h3>
          <p>Both approaches can leave God out of property, relationships, work, and consumption. They may explain behaviour, but they do not fully explain worship, calling, sin, stewardship, justice, mercy, and human dignity.</p>
        </section>
      </div>
      <div class="comparison">
        <div>
          <h3>Older Christian economic thought</h3>
          <ul>
            <li>God's provision shaped how people understood resources.</li>
            <li>God's justice shaped how people cared for the poor and vulnerable.</li>
            <li>Economic order was connected to moral order, worship, and community responsibility.</li>
          </ul>
        </div>
        <div>
          <h3>After the Enlightenment</h3>
          <ul>
            <li>Human reason and human experience became the main guide.</li>
            <li>Adam Smith described the market as an autonomous system.</li>
            <li>Karl Marx described society through historical and economic laws.</li>
            <li>God's wisdom was often replaced by systems that claimed to explain life without Him.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Practical question</h3>
        <p>Before making an economic choice, ask: "What does this decision say about God, people, worship, and stewardship?"</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-wrong-thinking-about-economics`,
    kind: "customHtml",
    title: "Step 13: Wrong Thinking About Economics",
    body: richLessonStepHtml(`
      <p class="eyebrow">Practical correction</p>
      <h2>Wrong Thinking About Economics</h2>
      <p class="intro">
        Two common mistakes make economics feel cold and distant from faith. The first mistake says economics is a
        hard science with fixed laws. The second mistake says economics is value-neutral and only follows facts.
        Both mistakes hide the human choices behind economic life.
      </p>
      <div class="comparison">
        <div>
          <h3>Wrong idea: Economics is a hard science</h3>
          <p><strong>The misconception:</strong> Economics works like physics. Supply, demand, markets, and efficiency are treated as universal truths that work the same way everywhere.</p>
          <p><strong>The reality:</strong> Economics is a social science. It studies people. People's choices change according to culture, history, beliefs, pressure, trust, fear, and hope.</p>
        </div>
        <div>
          <h3>Wrong idea: Economics is value-neutral</h3>
          <p><strong>The misconception:</strong> Economics has no bias. Its theories are purely factual and based only on data and numbers.</p>
          <p><strong>The reality:</strong> Economic theories are shaped by values. People decide what to measure, what to ignore, what to reward, and what to call success.</p>
        </div>
      </div>
      <div class="grid">
        <section class="card">
          <strong>Property</strong>
          <h3>Not just ownership</h3>
          <p>If economics is not neutral, then ownership is not only a legal fact. It is also a stewardship question: how should this resource serve God and neighbour?</p>
        </section>
        <section class="card">
          <strong>Relationships</strong>
          <h3>Not just exchange</h3>
          <p>A sale, wage, loan, or contract is never only a transaction. It can build trust, cause harm, honour dignity, or create dependence.</p>
        </section>
        <section class="card">
          <strong>Work</strong>
          <h3>Not just labour</h3>
          <p>Work is more than input. It shapes identity, discipline, creativity, service, income, and the wellbeing of families and communities.</p>
        </section>
        <section class="card">
          <strong>Consumption</strong>
          <h3>Not just demand</h3>
          <p>Consumption is more than buying. It trains desire. It can teach contentment, generosity, gratitude, wastefulness, or greed.</p>
        </section>
      </div>
      <div class="callout">
        <h3>Practise the correction</h3>
        <p>When you hear an economic claim, ask: "What view of God, people, value, and success is hidden inside this claim?"</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-economics-as-religion`,
    kind: "customHtml",
    title: "Step 14: Economics as Religion",
    body: richLessonStepHtml(`
      <p class="eyebrow">Economic belief systems</p>
      <h2>Economics as a Substitute Religion</h2>
      <p class="intro">
        Professor Robert Nelson, in <em>Economics as Religion</em>, argues that modern economics has not simply
        removed God from its systems. It has often created a new godless religion. It gives people a story about
        salvation, progress, human identity, and what society should trust.
      </p>
      <div class="grid">
        <section class="card">
          <strong>Robert Nelson</strong>
          <h3>The market replaces God</h3>
          <p>Adam Smith's "invisible hand" can be treated as if it replaces God's providence. The market is trusted to guide society, reward effort, and create order.</p>
          <p>When this happens, God is no longer seen as the One who gives purpose, provision, and justice. The market becomes the great organiser of life.</p>
        </section>
        <section class="card">
          <strong>Reduced humanity</strong>
          <h3>People become consumers and producers</h3>
          <p>Modern economics can reduce people to consumers, producers, rational choosers, and self-interested agents. This leaves out worship, sin, love, sacrifice, calling, and responsibility before God.</p>
          <p>Faithonomics restores the fuller picture: people are image-bearers, not market units.</p>
        </section>
        <section class="card">
          <strong>A new priesthood</strong>
          <h3>Experts preach market orthodoxy</h3>
          <p>This substitute religion has its own messengers: experts, institutions, and theories that preach free markets, globalisation, efficiency, growth, and technological advancement as the path to a better world.</p>
          <p>Its promise of salvation is a heaven on earth through material abundance.</p>
        </section>
      </div>
      <div class="comparison">
        <div>
          <h3>Stefan Schwarzkopf's practical warning</h3>
          <p>Stefan Schwarzkopf argues that our belief in God and our understanding of economics must be connected. Faith should do more than tell us what is right and wrong after the fact.</p>
          <p>Our view of God must shape how we understand trust, fairness, debt, value, work, responsibility, and the purpose of economic life.</p>
        </div>
        <div>
          <h3>How this changes daily choices</h3>
          <ul>
            <li><strong>Debt:</strong> not only a financial obligation, but a responsibility involving trust, justice, and care.</li>
            <li><strong>Value:</strong> not only price, but usefulness, dignity, purpose, and service.</li>
            <li><strong>Work:</strong> not only income, but calling, contribution, and formation.</li>
            <li><strong>Systems:</strong> not only resource allocation, but questions of life, purpose, worship, and meaning.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Reflect</h3>
        <p>What has the strongest voice in your economic choices: God, fear, status, efficiency, profit, comfort, or the promise of material abundance?</p>
      </div>
    `),
  },
  {
    id: `${lessonId}-kingdom-first-economic-choices`,
    kind: "customHtml",
    title: "Step 15: Kingdom-First Economic Choices",
    body: richLessonStepHtml(`
      <p class="eyebrow">Scripture and discussion preparation</p>
      <h2>Seek First the Kingdom</h2>
      <p class="intro">
        Read Matthew 6:25-34. Jesus does not tell us to ignore food, clothing, work, money, or the future.
        He tells us that these things must not become our master. Economic choices become faithful when
        they begin with the kingdom of God rather than anxiety, status, comfort, or control.
      </p>
      <div class="grid">
        <section class="card">
          <strong>The warning</strong>
          <h3>Simplicity can become idolatry</h3>
          <p>Simplicity is good when it helps us love God and neighbour. But simplicity itself becomes an idol when it becomes the main goal. The aim is not to look simple, spend less, earn less, or own less for its own sake. The aim is to seek God's kingdom first.</p>
        </section>
        <section class="card">
          <strong>Kierkegaard's challenge</strong>
          <h3>First become quiet before God</h3>
          <p>Soren Kierkegaard asks what effort we should make to pursue God's kingdom. Should we get a suitable job to influence people? Should we give away all our money? Should we preach this truth to everyone? His answer keeps returning to the same point: first seek God's kingdom.</p>
          <p>In his words, the beginning is to become nothing before God and learn to keep silent. That silence is not laziness. It is surrender before action.</p>
        </section>
        <section class="card">
          <strong>Faithonomics application</strong>
          <h3>Action after surrender</h3>
          <p>After we seek the kingdom, work, generosity, business, voting, budgeting, saving, and consumption can all become acts of stewardship. The question is no longer, "How do I secure myself?" but, "How do I honour God with this choice?"</p>
        </section>
      </div>
      <div class="comparison">
        <div>
          <h3>Reflection prompts</h3>
          <ul>
            <li>Where does anxiety most shape my economic choices?</li>
            <li>How does Matthew 6 challenge the way I spend, save, work, or plan?</li>
            <li>What would change in my business or workplace if I sought the kingdom first?</li>
            <li>How should this shape the kind of policies and leaders I vote for?</li>
          </ul>
        </div>
        <div>
          <h3>Prepare your discussion post</h3>
          <ul>
            <li>Name one economic choice you face in daily life, work, business, or voting.</li>
            <li>Explain what anxiety, status, comfort, or control wants you to do.</li>
            <li>Explain what seeking God's kingdom first would require.</li>
            <li>Reply to another learner with a question that helps them move from worry to faithful action.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Discussion question</h3>
        <p>How does Matthew 6:25-34 reshape the way you make economic choices in daily life, work, business, or voting?</p>
      </div>
    `),
  },
];

export const lessons: Lesson[] = curriculum.flatMap((level, levelIndex) =>
  level.sessions.map((sessionTitle, sessionIndex) => {
    const levelNumber = levelIndex + 1;
    const sessionNumber = sessionIndex + 1;
    const id = `level-${levelNumber}-session-${sessionNumber}-${slugify(sessionTitle)}`;
    const isMondayMorning = sessionTitle === "Monday Morning";
    const levelOneSessionArt: Record<number, { imageUrl: string; imageAlt: string }> = {
      1: {
        imageUrl: "https://static.wixstatic.com/media/7638b6_58ab5c742514421194d57f0decba0044~mv2.png",
        imageAlt: "Papercraft Faithonomics choices scene for the opening session.",
      },
      2: {
        imageUrl: "https://static.wixstatic.com/media/7638b6_ee2d807107c24a2db2c5787e73578b85~mv2.png",
        imageAlt: "Split papercraft road showing a grey decline path and green-gold renewal path through an open door.",
      },
      3: {
        imageUrl: "https://static.wixstatic.com/media/7638b6_fb2b739765044e78b2dcbd33e7a43038~mv2.png",
        imageAlt: "Papercraft strategy map with compass, cross marker, route, growth chart and scales.",
      },
      4: {
        imageUrl: "https://static.wixstatic.com/media/7638b6_898e0407677c4585b6abb5e02e286355~mv2.png",
        imageAlt: "Papercraft Monday morning workspace with calendar, laptop, checklist, open path and cross-lit doorway.",
      },
    };
    const sessionArt = levelNumber === 1 ? levelOneSessionArt[sessionNumber] : undefined;
    const content: Lesson["content"] = [
      {
        id: `${id}-session-teaching`,
        kind: "text",
        title: "Step 1: Core Teaching",
        body: `${level.title} frames ${sessionTitle} as part of faithful economic discipleship. Learners identify the dominant assumption, compare it with God's economy, and name the decision that needs alignment.`,
      },
      {
        id: `${id}-session-scripture`,
        kind: "scripture",
        title: "Step 2: Scripture and Principle",
        body: "Read the assigned passage, identify the economic principle, and state how it challenges scarcity, ownership, status, work, generosity, or integrity.",
      },
      {
        id: `${id}-session-application`,
        kind: "text",
        title: "Step 3: Business Application",
        body: "Apply the principle to a business case: stakeholders, value creation, pricing, wages, stewardship, customer care, supplier relationships, and long-term trust.",
      },
      {
        id: `${id}-session-reflection`,
        kind: "customHtml",
        title: "Step 4: Reflection Checkpoint",
        body: `<main><h2>${sessionTitle}</h2><p>Choose one action you will practise before the next session.</p><button data-classroom-complete data-score="5" data-max-score="5">Mark reflection complete</button></main>`,
      },
    ];

    if (levelNumber === 1 && sessionNumber === 1) {
      content[0] = {
        id: `${id}-session-teaching-video`,
        kind: "video",
        title: "Step 1: Choices",
        body:
          "Watch the teaching video. At 3:26 it pauses for a checkpoint quiz, then unlocks the next step only after the quiz is completed and the video reaches the end.",
        url: "https://youtu.be/_0sm9yWHgG4",
        videoCheckpoint: dailyGrindVideoCheckpoint,
      };
      content.splice(1, 2, ...createDailyGrindExplorationSteps(id).slice(0, 4));
      const reflectionIndex = content.findIndex((block) => block.id === `${id}-session-reflection`);
      if (reflectionIndex !== -1) {
        content.splice(reflectionIndex, 1);
      }
    }

    if (levelNumber === 1 && sessionNumber === 2) {
      content.splice(3, 0, {
        id: `${id}-resource-link`,
        kind: "webLink",
        title: "Step 4: Wix Resource Link",
        body: "Open the lecturer-approved web resource stored in Wix CMS, then return here to confirm you reviewed it.",
        url: "https://www.wix.com/learn",
      });
    }

    if (levelNumber === 1 && sessionNumber === 3) {
      content.splice(3, 0, {
        id: `${id}-teaching-video`,
        kind: "video",
        title: "Step 4: Teaching Video",
        body: "Watch the teaching video before attempting the strategic alignment checkpoint.",
        url: "wix-media://video/faithonomics-strategic-alignment.mp4",
      });
    }
    const reflectionStep = content.find((block) => block.id === `${id}-session-reflection`);
    if (reflectionStep) {
      reflectionStep.title = `Step ${content.length}: Reflection Checkpoint`;
    }

    return {
      id,
      courseId: "course-faithonomics-core",
      moduleId: `level-${levelNumber}`,
      title: `Session ${sessionNumber}: ${sessionTitle}`,
      summary: isMondayMorning
        ? "Translate the level into a practical Monday morning decision, conversation, metric, and action."
        : id === "level-1-session-1-the-daily-grind"
          ? 'To explore the core Faithonomics principle of "The Daily Grind": economics is the study of everyday choices, and those choices must be shaped by our faith, biblical wisdom, and Christ-like moral convictions.'
        : `Develop the core Faithonomics principle of "${sessionTitle}" and connect it to everyday economic decisions.`,
      sequence: levelIndex * 4 + sessionIndex + 1,
      required: true,
      estimatedMinutes: id === "level-1-session-1-the-daily-grind" ? 145 : isMondayMorning ? 35 : 50,
      ...(sessionArt ? { imageUrl: sessionArt.imageUrl, imageAlt: sessionArt.imageAlt } : {}),
      content,
    } satisfies Lesson;
  }),
);

export const activities: Activity[] = [
  {
    id: "activity-four-pillars-discussion",
    lessonId: "level-1-session-1-the-daily-grind",
    contentStepId: "level-1-session-1-the-daily-grind-practical-economic-elements",
    kind: "discussion",
    title: "Four pillars discussion forum",
    instructions:
      "Choose one pillar: property, relationships, work, or consumption. Post one everyday example that shows how this pillar influences choices. Then reply to two course participants' posts with a thoughtful question, connection, or practical suggestion.",
    required: true,
    maxScore: 5,
    completionMode: "postAndReply",
    replyRequirement: 2,
  },
  {
    id: "activity-economic-alignment-reflection",
    lessonId: "level-1-session-2-competing-paradigms",
    kind: "reflection",
    title: "Competing paradigms reflection",
    instructions: "Write a short reflection on the economic paradigm you most often inherit at work and how God's economy reframes it.",
    required: true,
    maxScore: 10,
    modelAnswer:
      "A strong answer names a current economic assumption, compares it with God's ownership and stewardship, and describes a concrete business practice that should change.",
    rubric: [
      {
        id: "rubric-paradigm",
        label: "Paradigm clarity",
        description: "Clearly identifies the economic assumption being challenged.",
        maxPoints: 4,
      },
      {
        id: "rubric-theology",
        label: "Theological connection",
        description: "Connects the response to God's ownership, stewardship, justice, generosity or love.",
        maxPoints: 3,
      },
      {
        id: "rubric-practice",
        label: "Practical change",
        description: "Names a specific Monday-ready business or work practice.",
        maxPoints: 3,
      },
    ],
  },
  {
    id: "activity-paradigm-matching",
    lessonId: "level-1-session-2-competing-paradigms",
    kind: "matching",
    title: "Match the paradigm",
    instructions: "Match each workplace statement with the economic paradigm it reveals.",
    required: true,
    maxScore: 6,
    minimumScore: 6,
  },
  {
    id: "activity-strategic-video",
    lessonId: "level-1-session-3-strategic-alignment",
    kind: "interactiveVideo",
    title: "Strategic alignment video checkpoint",
    instructions:
      "Watch the teaching video and answer each checkpoint question before this session can be completed.",
    required: true,
    maxScore: 5,
    videoUrl: "wix-media://video/faithonomics-strategic-alignment.mp4",
    completionMode: "videoQuestions",
    minimumScore: 5,
    videoQuestions: [
      {
        id: "video-question-metric",
        timeSeconds: 68,
        prompt: "Which planning habit best proves alignment has moved beyond intention?",
        choices: ["A Monday-ready metric", "A larger slogan", "A hidden budget line"],
        correctAnswer: "A Monday-ready metric",
      },
      {
        id: "video-question-stakeholders",
        timeSeconds: 142,
        prompt: "Who should be considered when testing whether a decision is aligned?",
        choices: ["Only the owner", "Customers, workers, suppliers and community", "Only current buyers"],
        correctAnswer: "Customers, workers, suppliers and community",
      },
    ],
  },
  {
    id: "activity-alignment-timeline",
    lessonId: "level-1-session-3-strategic-alignment",
    kind: "timeline",
    title: "Alignment timeline",
    instructions: "Place the alignment practices in the order a team should use them.",
    required: true,
    maxScore: 5,
    minimumScore: 5,
  },
  {
    id: "activity-monday-discussion",
    lessonId: "level-1-session-4-monday-morning",
    kind: "discussion",
    title: "Monday morning group practice",
    instructions:
      "Post your Monday action and reply to one learner with a constructive question or encouragement.",
    required: true,
    maxScore: 5,
    completionMode: "postAndReply",
  },
  {
    id: "activity-monday-short-answer",
    lessonId: "level-1-session-4-monday-morning",
    kind: "shortAnswer",
    title: "Monday action short answer",
    instructions: "Write the concrete action you will take first, who it affects, and how you will know it is faithful.",
    required: true,
    maxScore: 5,
    modelAnswer:
      "A strong answer names one concrete first action, identifies affected people, and describes a measurable sign of faithful economic alignment.",
  },
];

export const questions: Question[] = [
  {
    id: "question-access",
    activityId: "activity-economic-alignment-quiz",
    prompt: "What is the safest way to grant access to a paid Faithonomics level?",
    kind: "multipleChoice",
    points: 5,
  },
  {
    id: "question-match-scarcity",
    activityId: "activity-paradigm-matching",
    prompt: "Protect advantage by keeping opportunity narrow",
    kind: "matching",
    points: 2,
    correctAnswer: "scarcity",
  },
  {
    id: "question-match-stewardship",
    activityId: "activity-paradigm-matching",
    prompt: "Treat resources as entrusted by God for faithful use",
    kind: "matching",
    points: 2,
    correctAnswer: "stewardship",
  },
  {
    id: "question-match-community",
    activityId: "activity-paradigm-matching",
    prompt: "Make room for others to participate and flourish",
    kind: "matching",
    points: 2,
    correctAnswer: "community",
  },
  {
    id: "question-alignment-timeline",
    activityId: "activity-alignment-timeline",
    prompt: "Arrange the practices from diagnosis to Monday action.",
    kind: "timeline",
    points: 5,
    correctAnswer: ["assumption", "scripture", "stakeholders", "metric"],
  },
  {
    id: "question-monday-short-answer",
    activityId: "activity-monday-short-answer",
    prompt: "What is the first faithful economic action you will take on Monday morning?",
    kind: "shortAnswer",
    points: 5,
  },
];

export const answerChoices: AnswerChoice[] = [
  {
    id: "choice-browser-success",
    questionId: "question-access",
    label: "Trust the browser success page",
    value: "browser",
    isCorrect: false,
  },
  {
    id: "choice-backend-verify",
    questionId: "question-access",
    label: "Verify the completed Wix order in backend code",
    value: "backend",
    isCorrect: true,
  },
  {
    id: "choice-match-scarcity-a",
    questionId: "question-match-scarcity",
    label: "Scarcity paradigm",
    value: "scarcity",
    isCorrect: true,
  },
  {
    id: "choice-match-scarcity-b",
    questionId: "question-match-scarcity",
    label: "Stewardship paradigm",
    value: "stewardship",
    isCorrect: false,
  },
  {
    id: "choice-match-scarcity-c",
    questionId: "question-match-scarcity",
    label: "Community paradigm",
    value: "community",
    isCorrect: false,
  },
  {
    id: "choice-match-stewardship-a",
    questionId: "question-match-stewardship",
    label: "Scarcity paradigm",
    value: "scarcity",
    isCorrect: false,
  },
  {
    id: "choice-match-stewardship-b",
    questionId: "question-match-stewardship",
    label: "Stewardship paradigm",
    value: "stewardship",
    isCorrect: true,
  },
  {
    id: "choice-match-stewardship-c",
    questionId: "question-match-stewardship",
    label: "Community paradigm",
    value: "community",
    isCorrect: false,
  },
  {
    id: "choice-match-community-a",
    questionId: "question-match-community",
    label: "Scarcity paradigm",
    value: "scarcity",
    isCorrect: false,
  },
  {
    id: "choice-match-community-b",
    questionId: "question-match-community",
    label: "Stewardship paradigm",
    value: "stewardship",
    isCorrect: false,
  },
  {
    id: "choice-match-community-c",
    questionId: "question-match-community",
    label: "Community paradigm",
    value: "community",
    isCorrect: true,
  },
  {
    id: "choice-timeline-scripture",
    questionId: "question-alignment-timeline",
    label: "Compare with Scripture",
    value: "scripture",
    isCorrect: true,
    sequence: 2,
  },
  {
    id: "choice-timeline-metric",
    questionId: "question-alignment-timeline",
    label: "Set a Monday-ready metric",
    value: "metric",
    isCorrect: true,
    sequence: 4,
  },
  {
    id: "choice-timeline-assumption",
    questionId: "question-alignment-timeline",
    label: "Name the inherited assumption",
    value: "assumption",
    isCorrect: true,
    sequence: 1,
  },
  {
    id: "choice-timeline-stakeholders",
    questionId: "question-alignment-timeline",
    label: "Test impact on stakeholders",
    value: "stakeholders",
    isCorrect: true,
    sequence: 3,
  },
];

export const enrolments: Enrolment[] = [
  {
    id: "enrol-faithonomics-amina",
    courseId: "course-faithonomics-core",
    memberId: identities.learner.memberId,
    contactId: identities.learner.contactId,
    source: "admin",
    status: "active",
    enrolledAt: "2026-06-01T08:00:00.000Z",
  },
];

export const progress: LessonProgress[] = [];

export const activityCompletions: ActivityCompletion[] = [];

export const submissions: Submission[] = [
  {
    id: "submission-paradigms-amina",
    activityId: "activity-economic-alignment-reflection",
    lessonId: "level-1-session-2-competing-paradigms",
    courseId: "course-faithonomics-core",
    enrolmentId: "enrol-faithonomics-amina",
    memberId: identities.learner.memberId,
    contactId: identities.learner.contactId,
    responseText:
      "I often inherit a scarcity mindset at work. God's economy reframes my role as stewardship, so I need to make decisions that build trust and room for others.",
    status: "submitted",
    submittedAt: "2026-06-21T12:30:00.000Z",
  },
];

export const discussionPosts: DiscussionPost[] = [
  {
    id: "post-kingdom-first-001",
    activityId: "activity-kingdom-first-discussion",
    memberId: "member-learner-002",
    authorName: "Thabo Mokoena",
    body:
      "Matthew 6 challenges how I think about overtime. I often say yes because I fear falling behind, even when it damages family life and rest. Seeking the kingdom first would mean planning honestly, working faithfully, but not treating income as my saviour.",
    createdAt: "2026-06-22T07:45:00.000Z",
  },
  {
    id: "post-kingdom-first-002",
    activityId: "activity-kingdom-first-discussion",
    memberId: "member-learner-003",
    authorName: "Lerato Dlamini",
    body:
      "For me this affects voting and business policy. I usually ask which option protects my own costs first. This passage asks me to consider righteousness too: who is protected, who is ignored, and whether the policy helps people live with dignity.",
    createdAt: "2026-06-22T08:05:00.000Z",
  },
  {
    id: "post-four-pillars-001",
    activityId: "activity-four-pillars-discussion",
    memberId: "member-learner-002",
    authorName: "Thabo Mokoena",
    body:
      "I chose property. For me, property is not only a house or money. It is also my phone, my time, and the tools I use for work. This pillar challenges me to ask whether I use what I have only for myself, or whether I can steward it in a way that helps others.",
    createdAt: "2026-06-22T08:10:00.000Z",
  },
  {
    id: "post-four-pillars-002",
    activityId: "activity-four-pillars-discussion",
    memberId: "member-learner-003",
    authorName: "Lerato Dlamini",
    body:
      "Relationships stood out to me. Buying, selling, borrowing, and working are never only private choices. They can build trust or damage trust. I think a business can lose money in the long run if it treats relationships as less important than quick profit.",
    createdAt: "2026-06-22T08:18:00.000Z",
  },
  {
    id: "post-four-pillars-003",
    activityId: "activity-four-pillars-discussion",
    memberId: "member-learner-004",
    authorName: "Johan van der Merwe",
    body:
      "I chose consumption. Every purchase trains my habits. Sometimes I buy because I need something, but sometimes I buy because I feel pressure to look successful. This pillar helps me think about whether my choices serve a good purpose.",
    createdAt: "2026-06-22T08:26:00.000Z",
  },
  {
    id: "post-monday-practice-001",
    activityId: "activity-monday-discussion",
    memberId: "member-learner-002",
    authorName: "Thabo Mokoena",
    body: "My Monday action is to review our supplier terms through the lens of fairness, not only speed.",
    createdAt: "2026-06-22T08:15:00.000Z",
  },
];

export const discussionReplies: DiscussionReply[] = [
  {
    id: "reply-kingdom-first-001",
    postId: "post-kingdom-first-001",
    memberId: identities.lecturer.memberId,
    authorName: identities.lecturer.displayName,
    body:
      "Strong connection between anxiety and work. What boundary could show trust in God without becoming irresponsible toward your employer or family?",
    createdAt: "2026-06-22T08:30:00.000Z",
  },
  {
    id: "reply-kingdom-first-002",
    postId: "post-kingdom-first-002",
    memberId: "member-learner-004",
    authorName: "Johan van der Merwe",
    body:
      "Your point about voting helps me. Could you add one practical question you would ask before supporting a policy?",
    createdAt: "2026-06-22T08:42:00.000Z",
  },
  {
    id: "reply-monday-practice-001",
    postId: "post-monday-practice-001",
    memberId: identities.lecturer.memberId,
    authorName: identities.lecturer.displayName,
    body: "Good start. Add one measurable sign that the supplier relationship has become more just.",
    createdAt: "2026-06-22T09:00:00.000Z",
  },
];
