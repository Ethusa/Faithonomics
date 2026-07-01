import type { Course, Enrolment } from "./types";

export interface PaymentConfirmation {
  provider: "wix-ecommerce" | "wix-pricing-plans";
  orderId: string;
  memberId: string;
  contactId: string;
  purchasedCatalogIds: string[];
  paid: boolean;
  approvedAt: string;
}

export const matchPurchasedCourse = (
  courses: readonly Course[],
  confirmation: PaymentConfirmation,
): Course | null =>
  courses.find((course) =>
    confirmation.purchasedCatalogIds.some(
      (catalogId) => course.storeProductIds.includes(catalogId) || course.pricePlanIds.includes(catalogId),
    ),
  ) ?? null;

export const createEnrolmentFromPayment = (
  courses: readonly Course[],
  confirmation: PaymentConfirmation,
  existing: readonly Enrolment[],
): Enrolment | null => {
  if (!confirmation.paid) {
    return null;
  }
  const course = matchPurchasedCourse(courses, confirmation);
  if (!course) {
    return null;
  }
  const alreadyEnrolled = existing.some(
    (enrolment) =>
      enrolment.courseId === course.id &&
      enrolment.memberId === confirmation.memberId &&
      enrolment.status !== "refunded",
  );
  if (alreadyEnrolled) {
    return null;
  }
  return {
    id: `enrol-${confirmation.orderId}-${course.id}`,
    courseId: course.id,
    memberId: confirmation.memberId,
    contactId: confirmation.contactId,
    source: confirmation.provider === "wix-ecommerce" ? "order" : "pricingPlan",
    sourceId: confirmation.orderId,
    status: "active",
    enrolledAt: confirmation.approvedAt,
  };
};
