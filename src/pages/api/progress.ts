import type { APIRoute } from "astro";
import type { LessonProgress } from "../../domain/types";
import { classroomService } from "../../services/singleton";
import { badRequest, identityFromRequest, json, readJson, safeRoute } from "./_shared";

type ProgressBody = Omit<LessonProgress, "memberId" | "lastActivityAt">;

export const POST: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  const body = await readJson<ProgressBody>(request);
  if (!identity || !body?.id || !body.enrolmentId || !body.courseId || !body.lessonId) {
    return badRequest("Progress payload is incomplete.");
  }
  const progress = await classroomService.saveLessonProgress(identity, body);
  return json({ progress });
});
