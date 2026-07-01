import type { Enrolment, LearnerIdentity, Role } from "./types";

export class PermissionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PermissionError";
  }
}

export const hasRole = (identity: LearnerIdentity | null, role: Role): boolean =>
  Boolean(identity?.roles.includes(role));

export const isStaff = (identity: LearnerIdentity | null): boolean =>
  hasRole(identity, "lecturer") || hasRole(identity, "administrator");

export const assertAuthenticated = (identity: LearnerIdentity | null): LearnerIdentity => {
  if (!identity) {
    throw new PermissionError("Authentication is required.");
  }
  return identity;
};

export const assertRole = (identity: LearnerIdentity | null, roles: readonly Role[]): LearnerIdentity => {
  const signedIn = assertAuthenticated(identity);
  if (!roles.some((role) => signedIn.roles.includes(role))) {
    throw new PermissionError("You do not have permission to perform this action.");
  }
  return signedIn;
};

export const assertOwnLearnerRecord = (
  identity: LearnerIdentity | null,
  ownerMemberId: string,
): LearnerIdentity => {
  const signedIn = assertAuthenticated(identity);
  if (signedIn.memberId !== ownerMemberId && !isStaff(signedIn)) {
    throw new PermissionError("Learners can only access their own classroom records.");
  }
  return signedIn;
};

export const canAccessCourse = (
  identity: LearnerIdentity | null,
  courseId: string,
  enrolments: readonly Enrolment[],
): boolean => {
  if (!identity) {
    return false;
  }
  if (isStaff(identity)) {
    return true;
  }
  return enrolments.some(
    (enrolment) =>
      enrolment.courseId === courseId &&
      enrolment.memberId === identity.memberId &&
      enrolment.status === "active",
  );
};

export const assertCourseAccess = (
  identity: LearnerIdentity | null,
  courseId: string,
  enrolments: readonly Enrolment[],
): LearnerIdentity => {
  const signedIn = assertAuthenticated(identity);
  if (!canAccessCourse(signedIn, courseId, enrolments)) {
    throw new PermissionError("This course is not available to the signed-in learner.");
  }
  return signedIn;
};
