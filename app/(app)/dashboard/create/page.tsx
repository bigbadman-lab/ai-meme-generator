"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeAlert,
  CheckCircle2,
  Megaphone,
  Sparkles,
  Wand2,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const GOOD_EXAMPLES = [
  "20% off all skincare this weekend",
  "Buy one get one free on all coffees until Sunday",
  "New spring menu launches Friday",
  "Free consultation for first-time clients this month",
  "Annual membership sale ends Monday at midnight",
];

const WEAK_EXAMPLES = ["big sale", "summer promo", "special offer"];

export default function CreatePage() {
  const router = useRouter();
  const [hasPromotion, setHasPromotion] = useState<"yes" | "no">("no");
  const [promotion, setPromotion] = useState("");
  const hasPromotionDetails = promotion.trim().length > 0;

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-indigo-400/20 bg-indigo-500/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-indigo-300">
                Step 1 of 2
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400">
                AI briefing
              </span>
            </div>

            <div className="mt-6 max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Brief the AI before it generates your memes
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-stone-400 sm:text-base">
                If you have a live promotion, launch, or offer, add it here so the
                generator can decide when to weave it into the meme naturally. Strong
                detail creates sharper memes. Weak detail creates weaker angles.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Sparkles className="h-4 w-4 text-indigo-300" />
                  Shapes meme angle
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  The input can influence the joke, framing, and final caption tone.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <BadgeAlert className="h-4 w-4 text-amber-300" />
                  Accuracy matters
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  If the AI references your promo, inaccurate details can weaken or
                  mislead the output.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Wand2 className="h-4 w-4 text-emerald-300" />
                  Optional input
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  No promotion running? Leave it blank and Mimly will go broader.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                    Promotion mode
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Should the generator consider a live promo?
                  </h2>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-stone-400 sm:block">
                  Optional, but high impact
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setHasPromotion("yes")}
                  className={
                    "rounded-[22px] border p-4 text-left transition-all " +
                    (hasPromotion === "yes"
                      ? "border-indigo-400/40 bg-indigo-500/10 shadow-[0_12px_30px_rgba(99,102,241,0.14)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]")
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Megaphone className="mt-0.5 h-4 w-4 text-indigo-300" />
                        <p className="text-sm font-medium text-white">
                          Yes, work in a promotion
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-stone-400">
                        Best for live sales, launches, offers, events, deadlines, and
                        limited-time pushes.
                      </p>
                    </div>
                    {hasPromotion === "yes" && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-300" />
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setHasPromotion("no")}
                  className={
                    "rounded-[22px] border p-4 text-left transition-all " +
                    (hasPromotion === "no"
                      ? "border-white/15 bg-white/[0.06] shadow-[0_12px_30px_rgba(255,255,255,0.04)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]")
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 text-stone-300" />
                        <p className="text-sm font-medium text-white">
                          No, keep it brand-led
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-stone-400">
                        Mimly will generate broader memes around your brand, audience,
                        and tone instead.
                      </p>
                    </div>
                    {hasPromotion === "no" && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-stone-200" />
                    )}
                  </div>
                </button>
              </div>

              {hasPromotion === "yes" && (
                <div className="mt-5 rounded-[22px] border border-indigo-400/20 bg-indigo-500/[0.06] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <label
                        htmlFor="create-promotion"
                        className="block text-sm font-medium text-stone-100"
                      >
                        Promotion details for the meme generator
                      </label>
                      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-stone-400">
                        Include the exact offer, launch, freebie, or deadline if it
                        matters. Specific details like discount amount, what is
                        included, and timing produce stronger memes. Avoid vague
                        phrases, and only enter details that are accurate right now
                        because the AI may reference them in the captions.
                      </p>
                    </div>
                    <div className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                      Precision improves output
                    </div>
                  </div>

                  <textarea
                    id="create-promotion"
                    value={promotion}
                    onChange={(e) => setPromotion(e.target.value)}
                    rows={4}
                    placeholder="e.g. 20% off all skincare this weekend, buy one get one free on all coffees until Sunday, new spring menu launches Friday"
                    className="mt-4 w-full rounded-[22px] border border-white/10 bg-black/30 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 focus:border-indigo-400/50 focus:outline-none focus:ring-1 focus:ring-indigo-400/40"
                  />

                  <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px]">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-300">
                        Good examples
                      </p>
                      <div className="mt-3 grid gap-2 text-sm text-stone-200">
                        {GOOD_EXAMPLES.map((example) => (
                          <p key={example}>&quot;{example}&quot;</p>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-amber-400/20 bg-amber-500/[0.06] p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-200">
                        Avoid this
                      </p>
                      <div className="mt-3 grid gap-2 text-sm text-amber-50/90">
                        {WEAK_EXAMPLES.map((example) => (
                          <p key={example}>&quot;{example}&quot;</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-stone-400">
                      No promotion running? Leave this blank and we&apos;ll generate broader
                      brand-aware memes instead.
                    </p>
                    <span className="text-xs font-medium text-stone-500">
                      {hasPromotionDetails ? "Promotion details added" : "Still optional"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                  What happens next
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  We&apos;ll combine your brand context, optional promotion brief, and live
                  meme templates to generate a tailored set.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-stone-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const params = new URLSearchParams();
                    if (promotion.trim()) params.set("promotion", promotion.trim());
                    router.push(
                      `/dashboard/generating${params.toString() ? `?${params.toString()}` : ""}`
                    );
                  }}
                  className="cta-funky inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:bg-indigo-400"
                >
                  Generate memes
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                How Mimly uses this
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                A better brief creates better meme angles
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  {
                    title: "Reads your brand context",
                    body: "The generator starts with your audience, offer, and positioning.",
                  },
                  {
                    title: "Chooses whether promo fits",
                    body: "It decides per template whether to ignore, lightly reference, or directly use the promo.",
                  },
                  {
                    title: "Protects meme quality",
                    body: "If forcing the offer would ruin the joke, the system keeps the meme broader.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs font-medium text-stone-300">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-stone-400">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.12] via-sky-500/[0.06] to-transparent p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-indigo-200">
                Quality bar
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Use exact discount, freebie, launch, or deadline details if relevant.",
                  "Skip vague promo language unless you want vague output.",
                  "Leave it blank if you want broader brand-aware memes instead.",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-200" />
                    <p className="text-sm leading-relaxed text-stone-200">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
