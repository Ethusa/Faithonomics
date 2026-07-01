import { describe, expect, it } from "vitest";
import { courses, enrolments, identities } from "../src/data/sampleData";
import { canAccessCourse, PermissionError, assertOwnLearnerRecord, assertRole } from "../src/domain/permissions";

describe("permission enforcement", () => {
  it("allows learners to access purchased or assigned courses", () => {
    const course = courses[0];
    expect(course).toBeDefined();
    expect(canAccessCourse(identities.learner, course?.id ?? "", enrolments)).toBe(true);
  });

  it("blocks learner access to another learner record", () => {
    expect(() => assertOwnLearnerRecord(identities.learner, "member-someone-else")).toThrow(PermissionError);
  });

  it("keeps user and payment administration administrator-only", () => {
    expect(() => assertRole(identities.learner, ["administrator"])).toThrow(PermissionError);
    expect(assertRole(identities.administrator, ["administrator"]).memberId).toBe(identities.administrator.memberId);
  });
});
