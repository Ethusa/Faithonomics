import { describe, expect, it } from "vitest";
import { cmsCollections, requiredCollectionSuffixes } from "../src/wix/cmsCollections";

describe("Wix CMS schemas", () => {
  it("defines every required classroom collection", () => {
    const actual = cmsCollections.map((collection) => collection.idSuffix).sort();
    expect(actual).toEqual([...requiredCollectionSuffixes].sort());
  });

  it("keeps sensitive collections privileged or member-author scoped", () => {
    const sensitive = cmsCollections.filter((collection) =>
      [
        "enrolments",
        "activity-completions",
        "discussion-posts",
        "discussion-replies",
        "marks",
        "feedback",
        "certificates",
        "ai-usage",
        "audit-logs",
      ].includes(collection.idSuffix),
    );
    expect(sensitive.every((collection) => collection.permissions.itemInsert === "PRIVILEGED")).toBe(true);
  });

  it("encrypts learner submissions and answer keys", () => {
    const encryptedFields = cmsCollections.flatMap((collection) =>
      collection.fields.filter((field) => field.encrypted).map((field) => `${collection.idSuffix}.${field.key}`),
    );
    expect(encryptedFields).toContain("submissions.responseText");
    expect(encryptedFields).toContain("questions.correctAnswer");
    expect(encryptedFields).toContain("answer-choices.isCorrect");
  });
});
