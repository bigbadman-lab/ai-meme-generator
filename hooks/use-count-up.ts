"use client";

import { useEffect, useState } from "react";

interface UseCountUpOptions {
  /** Final value to count to */
  end: number;
  /** Duration in ms */
  duration?: number;
  /** Start value (default 0) */
  start?: number;
  /** Callback when animation completes */
  onComplete?: () => void;
}

/**
 * Animates from start to end over duration. Respects prefers-reduced-motion.
 */
export function useCountUp({
  end,
  duration = 1800,
  start = 0,
  onComplete,
}: UseCountUpOptions): number {
  const [value, setValue] = useState(start);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || end === start) {
      setValue(end);
      onComplete?.();
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out for a smooth deceleration at the end
      const eased = 1 - (1 - progress) ** 2;
      const current = Math.round(start + (end - start) * eased);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(end);
        onComplete?.();
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration, prefersReducedMotion, onComplete]);

  return value;
}
