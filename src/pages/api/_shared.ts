import type { APIRoute } from "astro";
import { identities } from "../../data/sampleData";
import type { LearnerIdentity } from "../../domain/types";

export const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export const badRequest = (message: string): Response => json({ error: message }, 400);
export const forbidden = (message = "Forbidden"): Response => json({ error: message }, 403);
export const notFound = (message = "Not found"): Response => json({ error: message }, 404);

export const readJson = async <T>(request: Request): Promise<T | null> => {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
};

export const identityFromRequest = (request: Request): LearnerIdentity | null => {
  const memberId = request.headers.get("x-demo-member-id") ?? identities.learner.memberId;
  return Object.values(identities).find((identity) => identity.memberId === memberId) ?? null;
};

export const safeRoute =
  (handler: APIRoute): APIRoute =>
  async (context) => {
    try {
      return await handler(context);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error";
      const status = /permission|forbidden|access/i.test(message) ? 403 : 500;
      return json({ error: message }, status);
    }
  };
