/**
 * Format a number with commas for display (e.g. 1240 → "1,240").
 */
export function formatNumber(value: number): string {
  return Math.round(value).toLocaleString();
}
