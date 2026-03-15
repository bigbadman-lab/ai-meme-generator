"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { formatNumber } from "@/lib/format-number";

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  className?: string;
}

export function CountUp({
  end,
  duration = 1800,
  start = 0,
  className,
}: CountUpProps) {
  const value = useCountUp({ end, duration, start });
  return (
    <span className={className} aria-label={`${formatNumber(value)}`}>
      {formatNumber(value)}
    </span>
  );
}
