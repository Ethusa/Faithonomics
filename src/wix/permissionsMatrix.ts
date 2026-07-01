import type { Role } from "../domain/types";

export interface PermissionRule {
  action: string;
  roles: Role[];
  backendOnly: boolean;
}

export const permissionMatrix: PermissionRule[] = [
  { action: "viewPublicCourse", roles: ["visitor", "learner", "lecturer", "administrator"], backendOnly: false },
  { action: "viewOwnDashboard", roles: ["learner", "lecturer", "administrator"], backendOnly: true },
  { action: "saveOwnProgress", roles: ["learner"], backendOnly: true },
  { action: "submitOwnWork", roles: ["learner"], backendOnly: true },
  { action: "reviewSubmission", roles: ["lecturer", "administrator"], backendOnly: true },
  { action: "approveAIMark", roles: ["lecturer", "administrator"], backendOnly: true },
  { action: "manageCourses", roles: ["lecturer", "administrator"], backendOnly: true },
  { action: "manageUsersAndRoles", roles: ["administrator"], backendOnly: true },
  { action: "managePaymentsAndAccess", roles: ["administrator"], backendOnly: true },
  { action: "viewAuditLogs", roles: ["administrator"], backendOnly: true },
];
