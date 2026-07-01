import { describe, expect, it } from "vitest";
import {
  buildSandboxDocument,
  parseActivityMessage,
  parseH5PCompletionMessage,
  sanitizeCustomHtml,
} from "../src/domain/htmlSecurity";

describe("custom HTML activity security", () => {
  it("removes dangerous scripts and event attributes", () => {
    const sanitized = sanitizeCustomHtml('<script>alert(1)</script><button onclick="steal()">Go</button><a href="javascript:bad()">x</a>');
    expect(sanitized).not.toContain("<script");
    expect(sanitized).not.toContain("onclick");
    expect(sanitized).not.toContain("javascript:");
  });

  it("adds only the controlled completion bridge", () => {
    const doc = buildSandboxDocument("<p>Activity</p>", "activity-1");
    expect(doc).toContain("window.classroomComplete");
    expect(doc).toContain("classroom.activity.completed");
    expect(doc).toContain("data-classroom-complete");
  });

  it("rejects postMessage payloads for unknown activities", () => {
    const parsed = parseActivityMessage(
      { type: "classroom.activity.completed", activityId: "not-allowed", score: 1, maxScore: 1 },
      ["activity-1"],
    );
    expect(parsed).toBeNull();
  });

  it("accepts H5P xAPI completion messages", () => {
    const parsed = parseH5PCompletionMessage(
      {
        statement: {
          verb: { id: "http://adlnet.gov/expapi/verbs/completed" },
          result: {
            completion: true,
            score: { raw: 4, max: 5 },
          },
        },
      },
      "activity-h5p",
    );
    expect(parsed).toEqual({
      type: "classroom.activity.completed",
      activityId: "activity-h5p",
      completed: true,
      score: 4,
      maxScore: 5,
    });
  });
});
