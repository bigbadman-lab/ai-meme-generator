/**
 * Visual-only variant for engagement_text PNG renders (not a content template).
 */

export type EngagementVisualStyle = "classic" | "inverse";

export function coerceEngagementVisualStyle(
  value: unknown
): EngagementVisualStyle {
  return value === "inverse" ? "inverse" : "classic";
}
