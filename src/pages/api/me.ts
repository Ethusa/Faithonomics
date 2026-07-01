import type { APIRoute } from "astro";
import { classroomService } from "../../services/singleton";
import { identityFromRequest, json, safeRoute } from "./_shared";

export const GET: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  if (!identity) {
    return json({ identity: null }, 401);
  }
  const dashboard = await classroomService.getLearnerDashboard(identity);
  return json(dashboard);
});
