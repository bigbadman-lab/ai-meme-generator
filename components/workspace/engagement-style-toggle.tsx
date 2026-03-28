"use client";

import { cn } from "@/lib/utils";
import type { EngagementVisualStyle } from "@/lib/memes/engagement-style";

export function EngagementStyleToggle({
  value,
  onChange,
  disabled,
  className,
  compact,
}: {
  value: EngagementVisualStyle;
  onChange: (next: EngagementVisualStyle) => void;
  disabled?: boolean;
  className?: string;
  /** Tighter layout in compact toolbars. */
  compact?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span
        className={cn(
          "font-semibold uppercase tracking-[0.12em] text-stone-600",
          compact ? "text-[9px]" : "text-[10px]"
        )}
      >
        Output
      </span>
      <div
        role="radiogroup"
        aria-label="Output: white or black background"
        className={cn(
          "flex rounded-xl border border-stone-200/90 bg-stone-100/60 p-0.5",
          compact && "rounded-lg"
        )}
      >
        {(
          [
            {
              id: "classic" as const,
              label: "White",
              swatch: "bg-white ring-1 ring-stone-300",
            },
            {
              id: "inverse" as const,
              label: "Black",
              swatch: "bg-stone-900 ring-1 ring-stone-600",
            },
          ] as const
        ).map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={disabled}
              onClick={() => onChange(opt.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-1.5 py-1 text-[11px] font-medium transition",
                compact && "px-1 py-0.5 text-[10px]",
                active
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:bg-white/80",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              <span
                className={cn(
                  "shrink-0 rounded-sm",
                  compact ? "h-3 w-3" : "h-3.5 w-3.5",
                  opt.swatch
                )}
                aria-hidden
              />
              {opt.label}
            </button>
          );
        })}
      </div>
      {!compact ? (
        <p className="text-[10px] leading-snug text-stone-400">
          Same content — white or black background only.
        </p>
      ) : null}
    </div>
  );
}
