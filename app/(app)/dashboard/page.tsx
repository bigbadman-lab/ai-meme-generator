"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

function BentoCard({
  children,
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={
        "rounded-2xl border border-stone-200/70 bg-white p-5 shadow-sm shadow-black/[0.03] sm:p-6 " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default function DashboardPage() {
  const [promotion, setPromotion] = useState("");

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
            Dashboard
          </h1>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
            Free
          </span>
        </div>
        <p className="mt-1 text-sm text-stone-500">
          Create and manage your memes.
        </p>

        <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Create meme – main bento, mint accent */}
          <BentoCard className="md:col-span-2 border-emerald-200/60 bg-gradient-to-br from-emerald-50/80 to-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </span>
              <h2 className="text-base font-semibold text-stone-900">
                Create a meme
              </h2>
            </div>
            <p className="mt-2 text-sm text-stone-600">
              Add an optional promotion and generate.
            </p>
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="dashboard-promo"
                  className="block text-xs font-medium text-stone-500"
                >
                  Promotion (optional)
                </label>
                <input
                  id="dashboard-promo"
                  type="text"
                  value={promotion}
                  onChange={(e) => setPromotion(e.target.value)}
                  placeholder="e.g. 50% summer sale, Black Friday deal"
                  className="mt-1 w-full rounded-xl border border-emerald-200/80 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
                />
              </div>
              <button
                type="submit"
                className="cta-funky shrink-0 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
              >
                Generate Meme
              </button>
            </form>
          </BentoCard>

          {/* Plan / usage – warm accent */}
          <BentoCard className="border-amber-200/50 bg-gradient-to-br from-amber-50/70 to-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <h2 className="text-base font-semibold text-stone-900">
                Your plan
              </h2>
            </div>
            <p className="mt-2 text-sm text-stone-600">
              Free · 1 meme per day
            </p>
            <div className="mt-3 rounded-xl bg-amber-100/60 px-3 py-2.5 text-sm text-amber-900">
              <span className="font-semibold">1</span> meme left today
            </div>
          </BentoCard>

          {/* Recent memes – soft blue accent */}
          <BentoCard className="md:col-span-2 lg:col-span-3 border-sky-200/50 bg-gradient-to-br from-sky-50/40 to-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              <h2 className="text-base font-semibold text-stone-900">
                Recent memes
              </h2>
            </div>
            <p className="mt-2 text-sm text-stone-600">
              Your latest creations will appear here.
            </p>
            <div className="mt-4 flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-sky-200/80 bg-sky-50/30">
              <p className="text-sm text-stone-500">No memes yet</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </DashboardShell>
  );
}
