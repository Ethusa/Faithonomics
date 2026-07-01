import type { APIRoute } from "astro";
import { enrolments } from "../../../data/sampleData";
import { certificateService } from "../../../services/singleton";
import { identityFromRequest, json, notFound, safeRoute } from "../_shared";

export const POST: APIRoute = safeRoute(async ({ request, params }) => {
  const identity = identityFromRequest(request);
  const enrolmentId = params.enrolmentId;
  const enrolment = enrolments.find((item) => item.id === enrolmentId);
  if (!identity || !enrolment) {
    return notFound("Enrolment was not found.");
  }
  const certificate = await certificateService.issueIfComplete(identity, enrolment);
  return certificate ? json({ certificate }, 201) : json({ certificate: null, reason: "Course is not complete." });
});
