import type { APIRoute } from "astro";
import { classroomService } from "../../services/singleton";
import { identityFromRequest, json, safeRoute } from "./_shared";

export const GET: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  if (!identity) {
    return json({ error: "Authentication is required." }, 401);
  }
  const url = new URL(request.url);
  const courseId = url.searchParams.get("courseId") ?? undefined;
  const rows = await classroomService.getReports(identity, courseId);
  return json({ rows });
});
