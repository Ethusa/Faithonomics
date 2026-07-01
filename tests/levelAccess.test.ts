import { describe, expect, it } from "vitest";
import {
  activities,
  discussionPosts,
  levelAccessCredentials,
  lessons,
  modules,
} from "../src/data/sampleData";
import { authenticateLevelAccess } from "../src/domain/levelAccess";

describe("level access", () => {
  it("provides one login and password for every level", () => {
    expect(levelAccessCredentials).toHaveLength(modules.length);
    expect(levelAccessCredentials.map((credential) => credential.moduleId)).toEqual(
      modules.map((module) => module.id),
    );
  });

  it("authenticates the selected level only", () => {
    expect(authenticateLevelAccess(levelAccessCredentials, "level-1", "LEVEL1", "faith1")?.moduleId).toBe("level-1");
    expect(authenticateLevelAccess(levelAccessCredentials, "level-2", "level1", "faith1")).toBeNull();
    expect(authenticateLevelAccess(levelAccessCredentials, "level-1", "level1", "wrong")).toBeNull();
  });

  it("uses step labels instead of legacy nested lesson labels", () => {
    const labels = lessons.flatMap((lesson) => lesson.content.map((block) => block.title));
    const legacyPattern = new RegExp(["sub", "lesson"].join("-"), "i");
    expect(labels.every((label) => !legacyPattern.test(label))).toBe(true);
    expect(labels.every((label) => /^Step \d+:/i.test(label))).toBe(true);
  });

  it("maps the supplied papercraft artwork to Level 1 and its sessions", () => {
    const updatedArtworkUrl = "https://static.wixstatic.com/media/7638b6_c719b145dedf4638a21fa62bb71046bc~mv2.png";
    const sessionArtworkUrls = [
      "https://static.wixstatic.com/media/7638b6_58ab5c742514421194d57f0decba0044~mv2.png",
      "https://static.wixstatic.com/media/7638b6_ee2d807107c24a2db2c5787e73578b85~mv2.png",
      "https://static.wixstatic.com/media/7638b6_fb2b739765044e78b2dcbd33e7a43038~mv2.png",
      "https://static.wixstatic.com/media/7638b6_898e0407677c4585b6abb5e02e286355~mv2.png",
    ];
    expect(modules.find((module) => module.id === "level-1")?.imageUrl).toBe(updatedArtworkUrl);
    const levelOneArt = lessons
      .filter((lesson) => lesson.moduleId === "level-1")
      .map((lesson) => lesson.imageUrl);

    expect(levelOneArt).toEqual(sessionArtworkUrls);
  });

  it("adds a gated YouTube checkpoint quiz to Level 1 Session 1 Step 1", () => {
    const dailyGrind = lessons.find((lesson) => lesson.id === "level-1-session-1-the-daily-grind");
    expect(dailyGrind).toBeDefined();
    expect(dailyGrind?.summary).toBe(
      'To explore the core Faithonomics principle of "The Daily Grind": economics is the study of everyday choices, and those choices must be shaped by our faith, biblical wisdom, and Christ-like moral convictions.',
    );

    const stepOne = dailyGrind?.content[0];
    expect(stepOne?.kind).toBe("video");
    expect(stepOne?.title).toBe("Step 1: Choices");
    expect(stepOne?.url).toBe("https://youtu.be/_0sm9yWHgG4");
    expect(stepOne?.videoCheckpoint?.timeSeconds).toBe(206);
    expect(stepOne?.videoCheckpoint?.durationSeconds).toBe(321);
    expect(stepOne?.videoCheckpoint?.questions).toHaveLength(5);
    expect(stepOne?.videoCheckpoint?.questions[0]?.choices).toHaveLength(6);
    expect(stepOne?.videoCheckpoint?.questions[0]?.prompt).toContain("R45");
    expect(stepOne?.videoCheckpoint?.questions[0]?.prompt).not.toContain("R43");
  });

  it("includes the pasted Faithonomics exploration as Daily Grind lesson steps", () => {
    const dailyGrind = lessons.find((lesson) => lesson.id === "level-1-session-1-the-daily-grind");
    expect(dailyGrind).toBeDefined();
    expect(dailyGrind?.estimatedMinutes).toBe(145);
    expect(dailyGrind?.content.map((block) => block.title)).toEqual([
      "Step 1: Choices",
      "Step 2: The Ordinary Business of Life",
      "Step 3: Understanding Economics in Everyday Life",
      "Step 4: Practical Economic Elements",
      "Step 5: The Architecture of Choice",
    ]);

    const importedSteps = dailyGrind?.content.slice(1, 5) ?? [];
    expect(importedSteps.every((block) => block.kind === "customHtml")).toBe(true);
    expect(importedSteps.every((block) => block.body?.includes("data-rich-lesson-step"))).toBe(true);
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Thabo has R50");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("unlimited wants and essential needs");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("What Is Economics?");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("7638b6_f52c1f6f2d0c42a980e209c87b9db1dd");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("7638b6_4acddffa7162437eb2b046ff7ceeb9c3");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("The Four Pillars of Economic Activity");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("/assets/pillar-property-clean.png");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("/assets/pillar-work-clean.png");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("/assets/pillar-relationships-clean.png");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("/assets/pillar-consumption-clean.png");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Property");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Relationships");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Consumption");
    expect(dailyGrind?.content.map((block) => block.title).join(" ")).toContain("The Architecture of Choice");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("https://www.canva.com/design/DAHN48np3Ro/4PH1SjOLXxIzXdLvpU-0uw/view?embed");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Matthew 6:25-34");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("daily life, my work/business, or who I");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("Voting and public life");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("My kingdom-first economic choice");
    expect(dailyGrind?.content.map((block) => block.title).join(" ")).not.toContain("Market Orthodoxy");
    expect(dailyGrind?.content.map((block) => block.title).join(" ")).not.toContain("Kingdom-First Economic Choices");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("Practical questions for everyday life");
  });

  it("adds a Step 4 forum requiring a post and replies to two course participants", () => {
    const forum = activities.find((activity) => activity.id === "activity-four-pillars-discussion");
    expect(forum).toMatchObject({
      lessonId: "level-1-session-1-the-daily-grind",
      contentStepId: "level-1-session-1-the-daily-grind-practical-economic-elements",
      kind: "discussion",
      required: true,
      completionMode: "postAndReply",
      replyRequirement: 2,
    });
    expect(forum?.instructions).toContain("property, relationships, work, or consumption");
    expect(forum?.instructions).toContain("course participants");

    const posts = discussionPosts.filter((post) => post.activityId === "activity-four-pillars-discussion");
    expect(posts).toHaveLength(3);
    expect(posts.map((post) => post.body).join(" ")).toContain("This pillar challenges me");
    expect(posts.map((post) => post.body).join(" ")).toContain("Every purchase trains my habits");
    expect(activities.find((activity) => activity.id === "activity-economic-alignment-quiz")).toBeUndefined();
    expect(activities.find((activity) => activity.id === "activity-h5p-daily-grind")).toBeUndefined();
    expect(activities.find((activity) => activity.id === "activity-kingdom-first-discussion")).toBeUndefined();
  });
});
