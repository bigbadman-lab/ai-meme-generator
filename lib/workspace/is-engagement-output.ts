/**
 * Client/server helper: workspace output cards that use engagement_text rendering.
 */
export function isWorkspaceEngagementOutput(meta: unknown): boolean {
  if (!meta || typeof meta !== "object") return false;
  const m = meta as Record<string, unknown>;
  if (m.content_template_family === "engagement_text") return true;
  if (Array.isArray(m.engagement_names) && m.engagement_names.length > 0) {
    return true;
  }
  if (m.engagement_style === "classic" || m.engagement_style === "inverse") {
    return true;
  }
  return false;
}
