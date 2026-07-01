import type { APIRoute } from "astro";
import { readWixSecret } from "../../adapters/wix/secrets";
import type { AIFeedbackRequest } from "../../domain/aiFeedback";
import { aiAssessmentService } from "../../services/singleton";
import { badRequest, identityFromRequest, json, readJson, safeRoute } from "./_shared";

export const POST: APIRoute = safeRoute(async ({ request }) => {
  const identity = identityFromRequest(request);
  const body = await readJson<AIFeedbackRequest>(request);
  if (!identity || !body?.submissionId || !body.memberId || !body.responseText || !body.modelAnswer) {
    return badRequest("AI feedback request is incomplete.");
  }
  const secretName = process.env.OPENAI_SECRET_NAME ?? "OPENAI_API_KEY";
  const secret = await readWixSecret(secretName);
  if (!secret && import.meta.env.PROD) {
    return json({ error: "AI provider key is not configured in Wix Secrets Manager." }, 503);
  }
  const result = await aiAssessmentService.assessWrittenSubmission(identity, body);
  return json(result, 201);
});
