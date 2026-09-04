import { describe, expect, it } from "vitest";
import {
  activities,
  discussionPosts,
  levelAccessCredentials,
  lessons,
  modules,
} from "../src/data/sampleData";
import { authenticateLevelAccess } from "../src/domain/levelAccess";
import moralBudgetAuditHtml from "../public/moral-budget-audit.html?raw";
import urbanLiturgyHtml from "../public/urban-liturgy.html?raw";

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
    const updatedArtworkUrl = "https://static.wixstatic.com/media/7638b6_bf680d1d5dfc468fbd5db89ae370217b~mv2.png";
    const sessionArtworkUrls = [
      "https://static.wixstatic.com/media/7638b6_ebb07e58d7b64e3d8a99c272402c6dc9~mv2.png",
      "https://static.wixstatic.com/media/7638b6_0b086c8a75d9429c956c72a796be1f79~mv2.png",
      "https://static.wixstatic.com/media/7638b6_b3c35b4d4ed84d3aa0e50cd23c543fc3~mv2.png",
      "https://static.wixstatic.com/media/7638b6_d23d57dc349c4025aadcd93121e2db05~mv2.png",
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
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("https://www.canva.com/design/DAHN48np3Ro/4PH1SjOLXxIzXdLvpU-0uw/view?embed");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("Matthew 6:25-34");
    expect(importedSteps.map((block) => block.body).join(" ")).toContain("daily life, my work/business, or who I");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("Voting and public life");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("My kingdom-first economic choice");
    expect(dailyGrind?.content.map((block) => block.title).join(" ")).not.toContain("Market Orthodoxy");
    expect(dailyGrind?.content.map((block) => block.title).join(" ")).not.toContain("Kingdom-First Economic Choices");
    expect(importedSteps.map((block) => block.body).join(" ")).not.toContain("Practical questions for everyday life");
  });

  it("adds the city economic engine lesson as Level 1 Session 2 Step 2", () => {
    const competingParadigms = lessons.find((lesson) => lesson.id === "level-1-session-2-competing-paradigms");
    expect(competingParadigms).toBeDefined();
    expect(competingParadigms?.content.map((block) => block.title)).toEqual([
      "Step 1: Tale of Two Cities",
      "Step 2: The City: Economic Engine",
      "Step 3: The City Is Not a Neutral Economic Unit",
      "Step 4: The Two Trajectories of the City",
      "Step 5: Living Between Two Cities Discussion",
    ]);

    const cityStep = competingParadigms?.content[1];
    expect(cityStep?.kind).toBe("customHtml");
    expect(cityStep?.body).toContain("The City: Economic Engine and Human Vocation");
    expect(cityStep?.body).toContain("7638b6_ebdf2c0114524151aeccb50803b561b4");
    expect(cityStep?.body).toContain("7638b6_87333f384bcd49f0b4b6d8e2f3ac8ece");
    expect(cityStep?.body).toContain("7638b6_e18b819642c34d3596200a0c1f0eda34");
    expect(cityStep?.body).not.toContain("7638b6_d7a0dc463a204d64b414683471d44cb7");
    expect(cityStep?.body).not.toContain("7638b6_da7050914e224c23ae51c23e720e1766");
    expect(cityStep?.body).not.toContain("Global output");
    expect(cityStep?.body).not.toContain("80% of global GDP");
    expect(cityStep?.body).not.toContain("Job creation");
    expect(cityStep?.body).not.toContain("88% of private-sector jobs");
    expect(cityStep?.body).not.toContain("Urban future");
    expect(cityStep?.body).not.toContain("Nearly seven in ten");
    expect(cityStep?.body).toContain("The Economic Engine");
    expect(cityStep?.body).toContain("Vocabulary Check: Agglomeration Economics");
    expect(cityStep?.body).toContain("The Sharing-Matching-Learning Framework");
    expect(cityStep?.body).toContain("THE URBAN TRADE-OFF - SIMPLE TEACHING GRAPHIC");
    expect(cityStep?.body).toContain("Megacity");
    expect(cityStep?.body).toContain("A city is more than a place");
    expect(cityStep?.body).toContain("A city is not merely a geographic backdrop for trade");
    expect(cityStep?.body).not.toContain("The modern city");
    expect(cityStep?.body).not.toContain("Module 1");
    expect(cityStep?.body).not.toContain("<h3>Agglomeration Economies</h3>");
    expect(cityStep?.body).not.toContain("Density 1x");
    expect(cityStep?.body).not.toContain("Agglomeration and the creation mandate");
    expect(cityStep?.body).not.toContain("The city as a liturgical centre");
    expect(cityStep?.body).not.toContain("The city's moral budget");
    expect(cityStep?.body).not.toContain("Interdisciplinary synthesis matrix");
    expect(cityStep?.body).not.toContain("Economic mechanisms, theological truths and learning practices");
    expect(cityStep?.body).toContain("Lesson takeaway");
    expect(cityStep?.body).not.toContain("Lesson summary");
    expect(cityStep?.body).not.toContain("The Babel paradigm");
    expect(cityStep?.body).not.toContain("The New Jerusalem paradigm");
    expect(cityStep?.body).not.toContain("Ancient biblical city");
    expect(cityStep?.body).not.toContain("Economic reframing");
    expect(cityStep?.body).not.toContain("Research notes:");
    expect(cityStep?.body).toContain("Complete city lesson");
    expect(cityStep?.body).not.toContain("cdn.tailwindcss.com");
    expect(cityStep?.body).not.toContain("chart.js");

    const neutralStep = competingParadigms?.content[2];
    expect(neutralStep?.kind).toBe("customHtml");
    const neutralBody = neutralStep?.body ?? "";
    const neutralText = neutralBody.replace(/\s+/g, " ");
    expect(neutralStep?.body).toContain("No neutral economic units");
    expect(neutralStep?.body).toContain("The City Is Not a Neutral Economic Unit");
    expect(neutralStep?.body).not.toContain("min-height: 100vh");
    expect(neutralStep?.body).toContain("Lesson main point");
    expect(neutralText).toContain(
      "The city shows that no economic entity is neutral. Every zoning map, transit schedule, and retail district is a decision about the human soul and what we should learn to love.",
    );
    expect(neutralStep?.body).toContain(".city-neutral-visuals figure");
    expect(neutralStep?.body).toContain(".augustine-portrait");
    expect(neutralStep?.body).toContain("background: transparent");
    expect(neutralStep?.body).toContain("box-shadow: none");
    expect(neutralStep?.body).toContain("7638b6_765686efba994ddd9c2cb90bb7c674ea");
    expect(neutralStep?.body).toContain("7638b6_378e35b9ed7d4aa391c68c68354fe5e8");
    expect(neutralStep?.body).toContain("7638b6_26eb262c28cc445ea8f138382b07a2b9");
    expect(neutralStep?.body).toContain("7638b6_b36e305ca27a450fa4a58d4dc09af06e");
    expect(neutralStep?.body).toContain("7638b6_a5926de0f5dd4633a4066902b05a1db5");
    expect(neutralStep?.body).toContain("augustine-copy");
    expect(neutralStep?.body).toContain("The City without God (Civitas Terrena)");
    expect(neutralText).toContain("people seek power, status, security and success mainly for themselves");
    expect(neutralStep?.body).toContain("The City of God (Civitas Dei)");
    expect(neutralText).toContain("service, justice, community and shared flourishing");
    expect(neutralStep?.body).toContain("ordinatio amoris");
    expect(neutralStep?.body).toMatch(/\.city-love-card\s*\{[\s\S]*?min-height: inherit/);
    expect(neutralStep?.body).toMatch(/\.city-love-inner\s*\{[\s\S]*?display: block/);
    expect(neutralStep?.body).toMatch(/\.augustine-copy \.city-love-shell\s*\{[\s\S]*?aspect-ratio: auto[\s\S]*?min-height: 0/);
    expect(neutralStep?.body).toMatch(/\.augustine-copy \.city-love-front\s*\{[\s\S]*?position: relative[\s\S]*?background: transparent/);
    expect(neutralStep?.body).toMatch(/\.augustine-copy \.city-love-front img\s*\{[\s\S]*?height: auto[\s\S]*?padding: 0/);
    expect(neutralStep?.body).toMatch(/\.city-love-back\s*\{[\s\S]*?align-content: start[\s\S]*?justify-items: stretch/);
    expect(neutralStep?.body).toContain('.augustine-copy .city-love-back[data-love-city="man"]');
    expect(neutralStep?.body).toContain('.augustine-copy .city-love-back[data-love-city="god"]');
    expect(neutralStep?.body).toContain("#4b1f26");
    expect(neutralStep?.body).toMatch(/\.city-love-back p\s*\{[\s\S]*?text-align: justify/);
    expect(neutralStep?.body).toContain('class="city-love-face city-love-back city-love-back-man" data-love-city="man"');
    expect(neutralStep?.body).toContain('class="city-love-face city-love-back city-love-back-god" data-love-city="god"');
    const flipCardMarkupIndex = neutralBody.indexOf('class="city-love-grid"');
    expect(flipCardMarkupIndex).toBeGreaterThan(neutralBody.indexOf("ordinatio amoris"));
    expect(flipCardMarkupIndex).toBeLessThan(neutralBody.indexOf('class="liturgy-panel"'));
    expect(neutralStep?.body).toContain("The City as a Liturgical Centre");
    expect(neutralStep?.body).toContain("Open visual representation");
    expect(neutralStep?.body).toContain("margin: 4px auto 0");
    expect(neutralStep?.body).toContain(`data-rich-dialog-open="#${competingParadigms?.id}-urban-liturgy-popup"`);
    expect(neutralText).toContain("data-rich-dialog hidden");
    expect(neutralStep?.body).toContain('class="city-visual-actions"');
    expect(neutralStep?.body).toContain("Enlarge image");
    expect(neutralStep?.body).toContain('href="urban-liturgy.html"');
    expect(neutralStep?.body).toContain('class="city-visual-enlarge"');
    expect(neutralStep?.body).toContain('class="urban-liturgy-frame"');
    expect(neutralStep?.body).toContain('src="urban-liturgy.html"');
    expect(neutralStep?.body).not.toContain("How Urban Life Forms Desire");
    expect(neutralStep?.body).not.toContain('class="liturgy-diagram"');
    expect(neutralStep?.body).toContain("A City's Moral Budget");
    expect(neutralStep?.body).toContain("Global Moral Budget Observatory City Audit Quiz");
    expect(neutralStep?.body).toMatch(/\.moral-budget-embed\s*\{[\s\S]*?height: 315px[\s\S]*?min-height: 0 !important[\s\S]*?max-height: 315px/);
    expect(neutralStep?.body).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.moral-budget-embed\s*\{[\s\S]*?height: 470px[\s\S]*?max-height: 470px/);
    expect(neutralStep?.body).not.toMatch(/\.moral-budget-embed\s*\{[\s\S]*?height: 350px/);
    expect(neutralStep?.body).not.toContain("min-height: 860px");
    expect(neutralStep?.body).not.toContain("min-height: 960px");
    expect(neutralText).toContain("Land, Time, Capital, Attention, and Honour");
    expect(neutralStep?.body).toContain('src="moral-budget-audit.html"');
    expect(neutralStep?.body).not.toContain("GHS-UCDB R2024A");
    expect(neutralStep?.body).not.toContain("city_moral_budget_search");
    expect(neutralStep?.body).not.toContain("Search city");
    expect(neutralStep?.body).not.toContain("/.netlify/functions/city-audit");
    expect(neutralStep?.body).not.toContain("Quick self-audit");
    expect(neutralStep?.body).toContain('class="lesson-main-takeaway"');
    expect(neutralStep?.body).toContain("Main takeaway");
    expect(neutralText).toContain("The city is not a neutral economic unit, and neither are we neutral participants in it.");
    expect(neutralText).toContain("through our work, buying, travel, saving, spending, giving and status-seeking");
    expect(neutralText).toContain("Augustine's two cities remind us that our economic lives are shaped by love");
    expect(neutralText).toContain("What do I value, how am I being shaped by my economic choices");
    expect(neutralStep?.body).not.toContain("Student reflection");
    expect(neutralStep?.body).not.toContain("Which part of city life most trains desire?");
    expect(neutralStep?.body).not.toContain("city-reflection");
    expect(neutralStep?.body).not.toContain("<textarea");
    expect(neutralBody.indexOf('class="lesson-main-takeaway"')).toBeGreaterThan(
      neutralBody.indexOf('src="moral-budget-audit.html"'),
    );
    expect(neutralBody.indexOf('class="lesson-main-takeaway"')).toBeLessThan(
      neutralBody.indexOf("Complete moral budget step"),
    );
    expect(neutralStep?.body).toContain("Complete moral budget step");
    expect(neutralStep?.body).not.toContain("<script>");

    const timelineStep = competingParadigms?.content[3];
    const timelineBody = timelineStep?.body ?? "";
    expect(timelineStep?.kind).toBe("customHtml");
    expect(timelineStep?.title).toBe("Step 4: The Two Trajectories of the City");
    expect(timelineBody).toContain('class="combined-trajectories"');
    expect(timelineBody).toContain("City without God");
    expect(timelineBody).toContain("City with God");
    expect(timelineBody).toContain(".combined-trajectory-without-god");
    expect(timelineBody).toContain(".combined-trajectory-with-god");
    expect(timelineBody).toContain("Interactive timeline");
    expect(timelineBody).toContain("The Trajectory of the City");
    expect(timelineBody).toContain("7638b6_3c725c9d31f74d438d5c8f5f77b5c2f5");
    expect(timelineBody.match(/class="trajectory-hotspot trajectory-point-/g)).toHaveLength(7);
    expect(timelineBody.match(/class="trajectory-hotspot trajectory-point-[1-7]"[^>]*><\/button>/g)).toHaveLength(7);
    expect(timelineBody).toContain("top: 88.2%");
    expect(timelineBody).toContain("font-size: 0");
    expect(timelineBody.match(/data-rich-dialog hidden/g)).toHaveLength(7);
    expect(timelineBody).toContain("7638b6_9b3d754226284d84a5ef13072ed390bf");
    expect(timelineBody).toContain("7638b6_b8c7fe9434324c149d30f6f0808635d8");
    expect(timelineBody).toContain("7638b6_fb077df9d0ef479c9dad04dbaab24801");
    expect(timelineBody).toContain("7638b6_c5eced9d51024b30a082fa95aecaa072");
    expect(timelineBody).toContain("7638b6_7138836788404b1e8d0a7845c67d0f13");
    expect(timelineBody).toContain("7638b6_746226c4458c4ba0a84f471a91f7ab8e");
    expect(timelineBody).toContain("7638b6_e8310d3aaeaa4399b3b21b99205ea496");
    expect(timelineBody).toContain("7638b6_42d34737fe6a4bdb926e486578aed5f2");
    expect(timelineBody.match(/7638b6_17b750fcfbe94417b4b05d76a3be35d9/g)).toHaveLength(1);
    expect(timelineBody).toContain("7638b6_f53711fae80b4e62812d52830282d31d");
    expect(timelineBody.match(/class="trajectory-slideshow"/g)).toHaveLength(3);
    expect(timelineBody.match(/class="trajectory-slide-track"/g)).toHaveLength(3);
    expect(timelineBody.match(/class="trajectory-slide-arrow trajectory-slide-prev"/g)).toHaveLength(3);
    expect(timelineBody.match(/class="trajectory-slide-arrow trajectory-slide-next"/g)).toHaveLength(3);
    expect(timelineBody).toContain("transform: translateX(-100%)");
    expect(timelineBody).toContain("background: transparent");
    expect(timelineBody).toContain("box-shadow: none");
    expect(timelineBody).toContain("mix-blend-mode: multiply");
    expect(timelineBody).not.toContain("Complete trajectory timeline");
    expect(timelineBody).not.toContain("<script>");

    const kingdomTimelineStep = timelineStep;
    const kingdomTimelineBody = kingdomTimelineStep?.body ?? "";
    expect(kingdomTimelineStep?.kind).toBe("customHtml");
    expect(kingdomTimelineBody).toContain("The Trajectory of the City with God at the Centre");
    expect(kingdomTimelineBody).toContain("7638b6_bece28cf41be4c1089a1ea1faef3bdf0");
    expect(kingdomTimelineBody.match(/class="kingdom-hotspot kingdom-number-hotspot/g)).toHaveLength(3);
    expect(kingdomTimelineBody.match(/class="kingdom-hotspot kingdom-hand-hotspot/g)).toHaveLength(3);
    expect(kingdomTimelineBody.match(/data-rich-dialog-open="#[^"]+-kingdom-trajectory-popup-/g)).toHaveLength(6);
    expect(kingdomTimelineBody.match(/class="kingdom-popup"/g)).toHaveLength(3);
    expect(kingdomTimelineBody.match(/class="kingdom-flipbook"/g)).toHaveLength(3);
    expect(kingdomTimelineBody).toContain("transform: rotateY(180deg)");
    expect(kingdomTimelineBody).toContain("7638b6_3232598d947547769b19edd2f2963e0e");
    expect(kingdomTimelineBody).toContain("7638b6_29e376cb2414463d8ddd637d76bb56f4");
    expect(kingdomTimelineBody).toContain("7638b6_ffdea86f0e1e40b5b19202f684ad4aa9");
    expect(kingdomTimelineBody).toContain("7638b6_994b99b252df4e17aa830f35dfb03796");
    expect(kingdomTimelineBody).toContain("7638b6_309bf85168744a9195377b3d4fee4906");
    expect(kingdomTimelineBody).toContain("7638b6_a04f8ce1bddc41a797f6298a82d30dfd");
    expect(kingdomTimelineBody).not.toContain("Complete kingdom trajectory timeline");
    expect(kingdomTimelineBody).toContain("Complete both trajectory timelines");
    expect(kingdomTimelineBody.match(/data-classroom-complete/g)).toHaveLength(1);
    expect(kingdomTimelineBody).not.toContain("<script>");

    const discussionStep = competingParadigms?.content[4];
    const discussionBody = discussionStep?.body ?? "";
    expect(discussionStep?.kind).toBe("customHtml");
    expect(discussionBody).toContain("How Do We Live Between the Reality of Two Cities?");
    expect(discussionBody).not.toContain("We live in the tension between the City without God");
    expect(discussionBody).not.toContain("Recognise the City without God");
    expect(discussionBody).not.toContain("Notice signs of the City of God");
    expect(discussionBody).not.toContain("Live faithfully between the two cities");
    expect(discussionBody).not.toContain("Practical response");
    expect(discussionBody).toContain("Which City Is Your Money Building?");
    expect(discussionBody).toContain("7638b6_1f8d4701ddd94634946065ff3de07fda");
    expect(discussionBody).toContain("7638b6_4d265beddab44939b223089de3158338");
    expect(discussionBody).toContain("7638b6_892fd48495d84ca7a131a8b908493da7.m4a");
    expect(discussionBody).toContain("According to the Bible, our economic interactions");
    expect(discussionBody).toContain("God’s “<em>economic work</em>”");
    expect(discussionBody).toContain('class="two-cities-foundation"');
    expect(discussionBody).toContain("grid-template-columns: repeat(2, minmax(0, 1fr))");
    expect(discussionBody).toContain("Contrasting the Two Cities");
    expect(discussionBody).toContain("every economy is spiritual because it is built on what we love, value, and worship.");
    expect(discussionBody).toContain("Babylon represents the City without God, while New Jerusalem embodies the City of God");
    expect(discussionBody).toContain("Living in the In-Between");
    expect(discussionBody).toContain('In the <strong>"in-between"</strong> of Babylon and the New Jerusalem');
    expect(discussionBody).toContain("we participate in the economy without bowing to its idols");
    expect(discussionBody).toContain("7638b6_91a34d5451d44738b3dffa85f4495aa2~mv2.gif");
    expect(discussionBody).toContain(".two-cities-in-between-content {\n        display: grid;\n        gap: 24px;");
    expect(discussionBody).toContain("grid-template-columns: repeat(6, minmax(0, 1fr));");
    expect(discussionBody).toContain("Being Citizens of God’s City: Faithful Presence in the City of Man");
    expect(discussionBody).toContain("the call to resist");
    expect(discussionBody).toContain("the call to engage");
    expect(discussionBody).toContain("The Command to Engage");
    expect(discussionBody).toContain("The Command to Resist");
    expect(discussionBody).not.toContain("[20, 31]");
    expect(discussionBody).toContain("7638b6_1f432e0ca93f47f78f97f71a15b2a228");
    expect(discussionBody).toContain("7638b6_a2821415eaa34850898577caa2a7ddf7");
    expect(discussionBody.match(/class="two-city-contrast-card"/g)).toHaveLength(6);
    expect(discussionBody.match(/Babylon: The City without God/g)).toHaveLength(12);
    expect(discussionBody.match(/New Jerusalem: The City of God/g)).toHaveLength(12);
    expect(discussionBody.match(/data-rich-dialog hidden/g)).toHaveLength(14);
    expect(discussionBody).toContain("7638b6_855f1ad517a1435480e9d5cd9b73bb93");
    expect(discussionBody).toContain("7638b6_511388be90cb42a986331931d222ca91");
    expect(discussionBody).toContain("7638b6_bd952b5fa70d448ab15cccafa9c0e9d5");
    expect(discussionBody).toContain("7638b6_84a6fb3b318649e9907772b5ac481411");
    expect(discussionBody).toContain("7638b6_d3154fd777e74fbcb84f5aef137cb831");
    expect(discussionBody).toContain("7638b6_d568232ec526406594c8b8c22c30d89b");
    expect(discussionBody).toContain('class="audio-discussion"');
    expect(discussionBody).toContain('class="audio-popup"');
    expect(discussionBody).not.toContain("data-classroom-complete");
    expect(competingParadigms?.content.some((block) => block.id.endsWith("-session-reflection"))).toBe(false);

    const twoCitiesForum = activities.find(
      (activity) => activity.id === "activity-living-between-two-cities-discussion",
    );
    expect(twoCitiesForum).toMatchObject({
      lessonId: competingParadigms?.id,
      contentStepId: timelineStep?.id,
      kind: "discussion",
      required: true,
      completionMode: "postAndReply",
      replyRequirement: 2,
    });
    expect(twoCitiesForum?.instructions).toContain("City without God");
    expect(twoCitiesForum?.instructions).toContain("City of God");
    expect(twoCitiesForum?.instructions).toContain("two course participants");
    const twoCitiesPosts = discussionPosts.filter((post) => post.activityId === twoCitiesForum?.id);
    expect(twoCitiesPosts).toHaveLength(3);
    expect(twoCitiesPosts.map((post) => post.body).join(" ")).toMatch(/faithful presence/i);
    expect(activities.filter((activity) => activity.lessonId === competingParadigms?.id)).toHaveLength(1);
  });

  it("keeps the Moral Budget city audit quiz connected and intact", () => {
    expect(moralBudgetAuditHtml).toContain("Global Moral Budget Observatory");
    expect(moralBudgetAuditHtml).toContain("What Does Your City Prioritise?");
    expect(moralBudgetAuditHtml).toContain("Start City Audit");
    expect(moralBudgetAuditHtml).not.toContain("Try Sample Pattern");
    expect(moralBudgetAuditHtml).not.toContain("quickDemo");
    expect(moralBudgetAuditHtml).toContain("City Moral Budget Audit");
    expect(moralBudgetAuditHtml).toContain("Your City's Moral Budget Profile");
    expect(moralBudgetAuditHtml).toContain('id="answerHint"');
    expect(moralBudgetAuditHtml).toContain("Select one answer to show your analysis.");
    expect(moralBudgetAuditHtml).toContain("nextBtn.disabled=!hasAnswer");
    expect(moralBudgetAuditHtml).toContain('analysis.classList.add("show")');
    expect(moralBudgetAuditHtml).toContain("Land, Time, Capital, Attention and Honour");
    expect(moralBudgetAuditHtml).toContain("const BANK");
    expect(moralBudgetAuditHtml).toContain("land:");
    expect(moralBudgetAuditHtml).toContain("time:");
    expect(moralBudgetAuditHtml).toContain("capital:");
    expect(moralBudgetAuditHtml).toContain("attention:");
    expect(moralBudgetAuditHtml).toContain("honour:");
    expect(moralBudgetAuditHtml).not.toContain("city_moral_budget_search");
    expect(moralBudgetAuditHtml).not.toContain("supabase");
    expect(moralBudgetAuditHtml).not.toContain("\u00c3\u0097");
    expect(moralBudgetAuditHtml).not.toContain("\u00e2\u0080\u0094");
  });

  it("shows the Moral Budget analysis after all audit questions are answered", () => {
    const scriptMatch = moralBudgetAuditHtml.match(/<script>([\s\S]*)<\/script>/);
    expect(scriptMatch?.[1]).toBeTruthy();
    document.open();
    document.write(moralBudgetAuditHtml.replace(/<script>[\s\S]*<\/script>/, ""));
    document.close();
    window.eval(scriptMatch?.[1] ?? "");

    document.getElementById("openQuiz")?.click();
    expect((document.getElementById("nextBtn") as HTMLButtonElement | null)?.disabled).toBe(true);
    expect(document.getElementById("answerHint")?.textContent).toContain("Select one answer");

    for (let index = 0; index < 20; index += 1) {
      (document.querySelector(".answer") as HTMLButtonElement | null)?.click();
      (document.getElementById("nextBtn") as HTMLButtonElement | null)?.click();
    }

    expect(document.getElementById("analysis")?.classList.contains("show")).toBe(true);
    expect(document.querySelectorAll("#chart .row")).toHaveLength(5);
    expect(document.querySelectorAll("#cardgrid .statcard")).toHaveLength(5);
    expect(document.getElementById("modalBackdrop")?.classList.contains("show")).toBe(false);
  });

  it("keeps the Urban Liturgy popup source visual connected and intact", () => {
    expect(urbanLiturgyHtml).toContain("data:image/png;base64");
    expect(urbanLiturgyHtml).toContain("overflow:hidden");
    expect(urbanLiturgyHtml).toContain('id="workBox"');
    expect(urbanLiturgyHtml).toContain('id="travelBox"');
    expect(urbanLiturgyHtml).toContain('id="buyingBox"');
    expect(urbanLiturgyHtml).toContain('id="statusBox"');
    expect(urbanLiturgyHtml).toContain('id="spaceBox"');
    expect(urbanLiturgyHtml).toContain('aria-label="Open Work teaching popup"');
    expect(urbanLiturgyHtml).toContain('aria-label="Open The Production of Space teaching popup"');
    expect(urbanLiturgyHtml).toContain("#spaceBox{left:35.8%;bottom:1.7%;width:28.4%;height:10.8%;}");
    expect(urbanLiturgyHtml).toContain("#spaceBox button span:not(.badge){white-space:nowrap;}");
    expect(urbanLiturgyHtml).toContain("stroke-width:3.45");
    expect(urbanLiturgyHtml).toContain("stroke-width:1.2");
    expect(urbanLiturgyHtml).toContain('r="0.85"');
    expect(urbanLiturgyHtml).toContain("Henri Lefebvre was a French thinker");
    expect(urbanLiturgyHtml).toContain("urban-liturgy.close-outer");
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
