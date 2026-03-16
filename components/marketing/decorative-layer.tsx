"use client";

import { cn } from "@/lib/utils";

interface DecorativeLayerProps {
  className?: string;
  /** Optional faint oversized text for background */
  text?: string;
  /** Soft line or shape accents */
  variant?: "blobs" | "lines" | "none";
  children?: React.ReactNode;
}

export function DecorativeLayer({
  className,
  text,
  variant = "none",
  children,
}: DecorativeLayerProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {text && (
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(6rem,20vw,14rem)] font-bold leading-none text-black/[0.02] whitespace-nowrap"
          aria-hidden
        >
          {text}
        </span>
      )}
      {variant === "blobs" && (
        <>
          <div className="absolute -right-8 top-1/4 h-32 w-32 rounded-full bg-black/[0.02]" />
          <div className="absolute bottom-1/4 -left-8 h-24 w-24 rounded-full bg-black/[0.015]" />
        </>
      )}
      {children}
    </div>
  );
}
