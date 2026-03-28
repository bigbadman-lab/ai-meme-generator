"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import { unlockWorkspacePlan } from "@/lib/actions/workspace";

type PlanCode = "starter_pack" | "unlimited";

const STARTER_FEATURES = [
  "Unlimited meme generation",
  "Unlimited engagement post generation",
  "Unlimited content for 7 days",
  "No restrictions",
  "No monthly commitment",
] as const;

const PRO_FEATURES = [
  "Unlimited meme generation",
  "Unlimited engagement post generation",
  "Unlimited ongoing access",
  "No restrictions",
  "Monthly subscription",
] as const;

export function BlockedPaymentCard({
  workspaceId,
  onUnlocked,
}: {
  workspaceId: string;
  onUnlocked?: () => void | Promise<void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [activePlan, setActivePlan] = useState<PlanCode | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleUnlock = (planCode: PlanCode) => {
    if (isPending) return;
    setError(null);
    setActivePlan(planCode);
    startTransition(async () => {
      const result = await unlockWorkspacePlan(workspaceId, planCode);
      if (result.error) {
        setError(result.error);
        return;
      }
      if (onUnlocked) {
        await onUnlocked();
      }
    });
  };

  return (
    <div className="w-full max-w-4xl rounded-[1.75rem] border border-stone-200/90 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-stone-100 sm:p-7">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
          Choose a plan
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          Unlock Mimly to continue
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-stone-600">
          Pick a 7-day sprint or go monthly—both include unlimited meme and engagement content. Your
          generation resumes as soon as you unlock.
        </p>
      </div>

      <div className="mt-3 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5">
        {/* Starter Pack — recommended */}
        <div className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-amber-200/90 bg-gradient-to-b from-white via-amber-50/40 to-white p-5 shadow-[0_16px_40px_rgba(245,158,11,0.12)] ring-1 ring-amber-100/80">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-200/20 blur-2xl"
            aria-hidden
          />
          <div className="relative flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-stone-900">Starter Pack</h3>
            <span className="inline-flex shrink-0 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-100 to-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-950">
              Best place to start
            </span>
          </div>
          <p className="relative mt-1 text-xs font-medium text-amber-900/85">
            7 days. Unlimited access. No commitment.
          </p>
          <p className="relative mt-2 text-xs leading-relaxed text-stone-600">
            Ideal for one-off campaigns and testing Mimly without a monthly subscription.
          </p>
          <div className="relative mt-4 flex flex-wrap items-end gap-1">
            <span className="text-4xl font-semibold tracking-tight text-stone-900">£10</span>
          </div>
          <p className="relative mt-0.5 text-xs font-medium text-stone-700">One-off payment</p>
          <p className="relative mt-1 text-xs font-semibold text-amber-950/90">Unlimited access for 7 days</p>
          <ul className="relative mt-4 flex flex-col gap-3 border-t border-amber-200/50 pt-4">
            {STARTER_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-stone-700">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handleUnlock("starter_pack")}
            disabled={isPending}
            className="relative mt-5 w-full rounded-full bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800 disabled:opacity-60"
          >
            {isPending && activePlan === "starter_pack" ? "Unlocking…" : "Get 7 days access"}
          </button>
        </div>

        {/* Pro */}
        <div className="flex flex-col rounded-2xl border border-stone-200/90 bg-white/95 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-stone-200/40">
          <h3 className="text-lg font-semibold text-stone-900">Pro</h3>
          <p className="mt-1 text-xs font-medium text-stone-600">
            For consistent content and ongoing growth
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-600">
            Ongoing creation and regular posting for brands that want Mimly as a monthly engine.
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-1">
            <span className="text-4xl font-semibold tracking-tight text-stone-900">£29.99</span>
          </div>
          <p className="mt-0.5 text-xs font-medium text-stone-700">Per month</p>
          <p className="mt-1 text-xs font-medium text-stone-800">Unlimited monthly access</p>
          <ul className="mt-4 flex flex-col gap-3 border-t border-stone-200 pt-4">
            {PRO_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-stone-700">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-500" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handleUnlock("unlimited")}
            disabled={isPending}
            className="mt-5 w-full rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-50 disabled:opacity-60"
          >
            {isPending && activePlan === "unlimited" ? "Unlocking…" : "Go Pro"}
          </button>
        </div>
      </div>

      {error ? <p className="mt-4 text-center text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}
