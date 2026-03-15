"use client";

export function CanvasBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: "var(--canvas-bg)",
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--canvas-dot) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
      aria-hidden
    />
  );
}
