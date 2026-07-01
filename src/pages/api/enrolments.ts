import type { APIRoute } from "astro";
import type { Enrolment } from "../../domain/types";
import { classroomService } from "../../services/singleton";
import { badRequest, identityFromRequest, json, readJson, safeRoute } from "./_shared";

interface AdminEnrolmentBody {
  courseId: string;
  memberId: string;
  contactId: string;
}

export const POST: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  const body = await readJson<AdminEnrolmentBody>(request);
  if (!identity || !body?.courseId || !body.memberId || !body.contactId) {
    return badRequest("courseId, memberId and contactId are required.");
  }
  const enrolment: Enrolment = await classroomService.createAdminEnrolment(identity, body);
  return json({ enrolment }, 201);
});
