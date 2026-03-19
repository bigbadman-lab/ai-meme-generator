"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Brain, CheckCircle2, ImageIcon, Sparkles, Wand2 } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { generateMockMemes } from "@/lib/actions/memes";

const inflightGenerationRuns = new Map<
  string,
  Promise<{ error: string | null }>
>();

const STEPS = [
  {
    title: "Reading your brand context",
    body: "Loading your audience, positioning, and meme brief.",
    icon: Brain,
  },
  {
    title: "Matching the best meme formats",
    body: "Filtering templates and choosing the right angles.",
    icon: Sparkles,
  },
  {
    title: "Writing tailored captions",
    body: "Generating concise captions that fit each template cleanly.",
    icon: Wand2,
  },
  {
    title: "Preparing your download-ready memes",
    body: "Rendering image outputs so the set is ready to review.",
    icon: ImageIcon,
  },
];

export default function GeneratingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const promotion = searchParams.get("promotion");
  const hasPromotion = Boolean(promotion?.trim());
  const generationKey = `promotion:${promotion?.trim() ?? "__none__"}`;

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const existingRun = inflightGenerationRuns.get(generationKey);
      const runPromise =
        existingRun ??
        generateMockMemes(promotion ?? undefined).finally(() => {
          inflightGenerationRuns.delete(generationKey);
        });

      if (!existingRun) {
        inflightGenerationRuns.set(generationKey, runPromise);
      }

      const { error: err } = await runPromise;
      if (cancelled) return;
      if (err) {
        setError(err);
        return;
      }
      router.replace("/dashboard/memes");
    })();

    return () => {
      cancelled = true;
    };
  }, [generationKey, router, promotion]);

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-indigo-400/20 bg-indigo-500/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-indigo-300">
                Step 2 of 2
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400">
                Generating now
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Building your meme set
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Mimly is turning your brand context into a tailored batch of memes and
              ready-to-review image outputs.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                  Brief status
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {hasPromotion ? "Promo-aware generation" : "Brand-led generation"}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-400">
                  {hasPromotion
                    ? "Your promo details are included where they improve the meme."
                    : "No promo attached, so the set stays broader and brand-aware."}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                  Output target
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Caption + image render
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-400">
                  Each template is being written and prepared for download-ready review.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                  Quality bar
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Meme first, promo second
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-400">
                  The generator keeps character limits and meme quality ahead of forced promo copy.
                </p>
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-500/[0.08] p-4 text-sm text-rose-300">
                {error}
              </div>
            )}

            <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                    Pipeline status
                  </p>
                  <p className="mt-2 text-sm text-stone-300">
                    The set is being assembled in stages so you land on a ready-to-review result page.
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-stone-400">
                  Live run
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-stone-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-stone-500">
                              0{index + 1}
                            </span>
                            <p className="text-sm font-medium text-white">{step.title}</p>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-stone-400">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                What the AI is doing
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Matching templates that work with your brand context.",
                  "Using your promo only when it fits the meme naturally.",
                  "Keeping captions concise enough to render cleanly on each meme.",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-relaxed text-stone-200">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.12] via-sky-500/[0.06] to-transparent p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-indigo-200">
                Up next
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                You&apos;ll land on your meme gallery automatically
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                Once generation finishes, we&apos;ll take you straight to the results page so
                you can review and download your favorites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
