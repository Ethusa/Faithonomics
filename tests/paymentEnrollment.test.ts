import { describe, expect, it } from "vitest";
import { courses } from "../src/data/sampleData";
import { createEnrolmentFromPayment } from "../src/domain/paymentEnrollment";

describe("payment enrolment", () => {
  it("does not grant access unless Wix payment is approved", () => {
    const enrolment = createEnrolmentFromPayment(courses, {
      provider: "wix-ecommerce",
      orderId: "order-pending",
      memberId: "member-new",
      contactId: "contact-new",
      purchasedCatalogIds: ["product-faithonomics-core"],
      paid: false,
      approvedAt: new Date().toISOString(),
    }, []);

    expect(enrolment).toBeNull();
  });

  it("creates one enrolment from a verified Wix order", () => {
    const enrolment = createEnrolmentFromPayment(courses, {
      provider: "wix-ecommerce",
      orderId: "order-approved",
      memberId: "member-new",
      contactId: "contact-new",
      purchasedCatalogIds: ["product-faithonomics-core"],
      paid: true,
      approvedAt: "2026-06-24T09:00:00.000Z",
    }, []);

    expect(enrolment?.courseId).toBe("course-faithonomics-core");
    expect(enrolment?.source).toBe("order");
  });
});
