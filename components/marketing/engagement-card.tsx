"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
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
      {/* Meme preview area - Tenor GIF embed */}
      <div className="overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-stone-50 w-full aspect-[0.84375]">
        <div
          className="tenor-gif-embed w-full h-full [&_a]:hidden"
          data-postid="22113173"
          data-share-method="host"
          data-aspect-ratio="0.84375"
          data-width="100%"
        >
          <a href="https://tenor.com/view/rick-roll-rick-ashley-never-gonna-give-you-up-gif-22113173">
            Rick Roll Rick Ashley GIF
          </a>
          {" from "}
          <a href="https://tenor.com/search/rick+roll-gifs">Rick Roll GIFs</a>
        </div>
      </div>
      <Script
        src="https://tenor.com/embed.js"
        strategy="afterInteractive"
      />

      {/* Caption */}
      <p className="mt-2 text-xs text-[var(--canvas-muted)] line-clamp-2">
        Rickrolled has been used by <strong>Google</strong>, <strong>YouTube</strong>, <strong>Reddit</strong>, and countless brands.
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
