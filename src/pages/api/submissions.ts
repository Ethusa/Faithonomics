import type { APIRoute } from "astro";
import type { Submission } from "../../domain/types";
import { classroomService } from "../../services/singleton";
import { badRequest, identityFromRequest, json, readJson, safeRoute } from "./_shared";

export const POST: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  const body = await readJson<Submission>(request);
  if (!identity || !body?.id || !body.activityId || !body.memberId || !body.enrolmentId) {
    return badRequest("Submission payload is incomplete.");
  }
  const submission = await classroomService.saveSubmission(identity, body);
  return json({ submission });
});
