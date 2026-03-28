"use client";

import { useEffect, useState } from "react";
import { Heart, Share2, MessageCircle, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountUp } from "./count-up";

const METRICS = [
  { key: "likes", label: "Likes", icon: Heart, start: 124, end: 1247, color: "text-[#1877F2]" }, // Facebook blue
  { key: "shares", label: "Shares", icon: Share2, start: 12, end: 146, color: "text-[#42B72A]" }, // Facebook green
  { key: "comments", label: "Comments", icon: MessageCircle, start: 4, end: 63, color: "text-[#1877F2]" }, // Facebook blue
  { key: "saves", label: "Saves", icon: Bookmark, start: 8, end: 94, color: "text-[#65676B]" }, // Facebook muted gray
] as const;

export function EngagementCard({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    if (mq.matches) {
      setMounted(true);
      return () => mq.removeEventListener("change", handler);
    }
    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      clearTimeout(t);
      mq.removeEventListener("change", handler);
    };
  }, []);

  return (
    <article
      className={cn(
        "w-full max-w-sm rounded-2xl border border-[var(--canvas-border)] bg-[var(--canvas-surface)] p-4 shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-0.5",
        "opacity-0 translate-y-3 transition-all duration-500 ease-out",
        mounted && "opacity-100 translate-y-0",
        className
      )}
      aria-label="Social engagement preview"
    >
      {/* Meme preview area — static placeholder (no third-party embed) */}
      <div className="relative aspect-[0.84375] w-full overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-gradient-to-br from-stone-100 via-sky-50/60 to-fuchsia-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.85),transparent_55%)]" />
        <div className="absolute bottom-3 left-3 right-3 top-1/3 rounded-lg border border-white/60 bg-white/40 shadow-sm backdrop-blur-[2px]" />
        <p className="absolute bottom-2.5 left-0 right-0 text-center text-[10px] font-medium uppercase tracking-wide text-stone-400">
          Post preview
        </p>
      </div>

      {/* Caption */}
      <p className="mt-2 text-xs text-[var(--canvas-muted)] line-clamp-2">
        Meme-style posts drive comments and shares for{" "}
        <strong>Google</strong>, <strong>YouTube</strong>, <strong>Reddit</strong>, and countless brands.
      </p>

      {/* Metrics row */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-[var(--canvas-border)] pt-3">
        {METRICS.map(({ key, label, icon: Icon, start, end, color }, i) => (
          <div
            key={key}
            className="flex flex-col items-center gap-0.5 min-w-0 flex-1"
          >
            <span
              className={cn(
                "inline-flex shrink-0",
                mounted && !reduceMotion && "animate-icon-pop"
              )}
              style={
                mounted && !reduceMotion
                  ? { animationDelay: `${200 + i * 80}ms` }
                  : undefined
              }
            >
              <Icon
                className={cn("h-4 w-4", color)}
                aria-hidden
              />
            </span>
            <CountUp
              end={end}
              start={start}
              duration={2000}
              className="text-sm font-semibold tabular-nums text-[var(--canvas-heading)]"
            />
            <span className="sr-only">{label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
