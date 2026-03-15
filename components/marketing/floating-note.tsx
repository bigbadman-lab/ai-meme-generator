"use client";

import { cn } from "@/lib/utils";

type Accent = "yellow" | "mint" | "peach" | "blue" | "white";

const accentBg: Record<Accent, string> = {
  yellow: "bg-[var(--canvas-accent-yellow)]",
  mint: "bg-[var(--canvas-accent-mint)]",
  peach: "bg-[var(--canvas-accent-peach)]",
  blue: "bg-[var(--canvas-accent-blue)]",
  white: "bg-[var(--canvas-surface)]",
};

interface FloatingNoteProps {
  children: React.ReactNode;
  className?: string;
  accent?: Accent;
  rotate?: -2 | -1 | 0 | 1 | 2;
}

export function FloatingNote({
  children,
  className,
  accent = "white",
  rotate = 0,
}: FloatingNoteProps) {
  const rotateClass =
    rotate === -2
      ? "-rotate-[4deg]"
      : rotate === -1
        ? "-rotate-[2deg]"
        : rotate === 1
          ? "rotate-[2deg]"
          : rotate === 2
            ? "rotate-[4deg]"
            : "";

  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--canvas-border)] shadow-sm transition-shadow duration-200 hover:shadow-md",
        accentBg[accent],
        rotateClass,
        className
      )}
    >
      {children}
    </div>
  );
}
