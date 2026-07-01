export interface ActivityMessage {
  type: "classroom.activity.completed" | "classroom.activity.progress";
  activityId: string;
  score?: number;
  maxScore?: number;
  completed?: boolean;
}

const dangerousTagPattern = /<\/?(script|object|embed|link|meta|base|form)\b[^>]*>/gi;
const eventAttributePattern = /\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi;
const javascriptUrlPattern = /(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi;

export const sanitizeCustomHtml = (html: string): string =>
  html
    .replace(dangerousTagPattern, "")
    .replace(eventAttributePattern, "")
    .replace(javascriptUrlPattern, '$1="#"');

export const buildSandboxDocument = (trustedHtml: string, activityId: string): string => {
  const safeHtml = sanitizeCustomHtml(trustedHtml);
  const bridge = `
    <script>
      window.classroomComplete = function(score, maxScore) {
        parent.postMessage({
          type: "classroom.activity.completed",
          activityId: ${JSON.stringify(activityId)},
          score: Number(score || 0),
          maxScore: Number(maxScore || 0),
          completed: true
        }, "*");
      };
      document.addEventListener("click", function(event) {
        var target = event.target && event.target.closest
          ? event.target.closest("[data-classroom-complete]")
          : null;
        if (!target) {
          return;
        }
        window.classroomComplete(
          target.getAttribute("data-score") || 0,
          target.getAttribute("data-max-score") || 0
        );
      });
    </script>
  `;
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${safeHtml}${bridge}</body></html>`;
};

export const parseActivityMessage = (
  value: unknown,
  allowedActivityIds: readonly string[],
): ActivityMessage | null => {
  if (typeof value !== "object" || value === null) {
    return null;
  }
  const candidate = value as Partial<ActivityMessage>;
  if (
    candidate.type !== "classroom.activity.completed" &&
    candidate.type !== "classroom.activity.progress"
  ) {
    return null;
  }
  if (typeof candidate.activityId !== "string" || !allowedActivityIds.includes(candidate.activityId)) {
    return null;
  }
  const score = typeof candidate.score === "number" && Number.isFinite(candidate.score) ? candidate.score : undefined;
  const maxScore =
    typeof candidate.maxScore === "number" && Number.isFinite(candidate.maxScore)
      ? candidate.maxScore
      : undefined;

  return {
    type: candidate.type,
    activityId: candidate.activityId,
    ...(score === undefined ? {} : { score }),
    ...(maxScore === undefined ? {} : { maxScore }),
    ...(typeof candidate.completed === "boolean" ? { completed: candidate.completed } : {}),
  };
};

export const parseH5PCompletionMessage = (
  value: unknown,
  activityId: string,
): ActivityMessage | null => {
  if (typeof value !== "object" || value === null) {
    return null;
  }

  const root = value as Record<string, unknown>;
  const statement = typeof root.statement === "object" && root.statement !== null
    ? (root.statement as Record<string, unknown>)
    : root;
  const verb = typeof statement.verb === "object" && statement.verb !== null
    ? (statement.verb as Record<string, unknown>)
    : null;
  const result = typeof statement.result === "object" && statement.result !== null
    ? (statement.result as Record<string, unknown>)
    : null;
  const verbId = typeof verb?.id === "string" ? verb.id : "";
  const completed =
    verbId.includes("completed") ||
    verbId.includes("passed") ||
    result?.completion === true;

  if (!completed) {
    return null;
  }

  const scoreObject = typeof result?.score === "object" && result.score !== null
    ? (result.score as Record<string, unknown>)
    : null;
  const score = typeof scoreObject?.raw === "number" ? scoreObject.raw : undefined;
  const maxScore = typeof scoreObject?.max === "number" ? scoreObject.max : undefined;

  return {
    type: "classroom.activity.completed",
    activityId,
    completed: true,
    ...(score === undefined ? {} : { score }),
    ...(maxScore === undefined ? {} : { maxScore }),
  };
};
