import { orders } from "@wix/ecom";
import { classroomService } from "../../../../services/singleton";
import type { PaymentConfirmation } from "../../../../domain/paymentEnrollment";

const readString = (source: Record<string, unknown>, keys: readonly string[]): string | null => {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }
  return null;
};

const toConfirmation = (event: unknown): PaymentConfirmation | null => {
  if (typeof event !== "object" || event === null) {
    return null;
  }
  const root = event as Record<string, unknown>;
  const entity = typeof root.entity === "object" && root.entity !== null ? (root.entity as Record<string, unknown>) : root;
  const orderId = readString(entity, ["_id", "id", "orderId"]);
  const memberId = readString(entity, ["memberId", "buyerMemberId"]);
  const contactId = readString(entity, ["contactId", "buyerContactId"]) ?? memberId;
  const approvedAt = readString(entity, ["approvedDate", "_updatedDate"]) ?? new Date().toISOString();
  const rawLineItems = Array.isArray(entity.lineItems) ? entity.lineItems : [];
  const purchasedCatalogIds = rawLineItems
    .map((item) => {
      if (typeof item !== "object" || item === null) {
        return null;
      }
      const line = item as Record<string, unknown>;
      const catalog = typeof line.catalogReference === "object" && line.catalogReference !== null
        ? (line.catalogReference as Record<string, unknown>)
        : line;
      return readString(catalog, ["catalogItemId", "appId", "productId", "id"]);
    })
    .filter((value): value is string => value !== null);

  if (!orderId || !memberId || !contactId || purchasedCatalogIds.length === 0) {
    return null;
  }

  return {
    provider: "wix-ecommerce",
    orderId,
    memberId,
    contactId,
    purchasedCatalogIds,
    paid: true,
    approvedAt,
  };
};

export default orders.onOrderApproved(async (event: unknown) => {
  const confirmation = toConfirmation(event);
  if (!confirmation) {
    console.error("Approved order could not be mapped to a classroom enrolment.");
    return;
  }
  await classroomService.enrolFromPayment(confirmation);
});
