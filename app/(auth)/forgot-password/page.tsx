"use client";

import { useState } from "react";
import Link from "next/link";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet – UI only
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-stone-200 bg-white/90 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400";
  const labelClass = "block text-sm font-medium text-stone-700";

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
        Reset password
      </h1>
      <p className="marketing-copy mt-2">
        Enter your email and we&apos;ll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="forgot-email" className={labelClass}>
            Email
          </label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
        <button
          type="submit"
          className="cta-funky mt-2 w-full rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
        >
          Send reset link
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-stone-500">
        <Link href="/login" className="font-medium text-stone-700 underline underline-offset-2 hover:text-stone-900">
          Back to log in
        </Link>
      </p>
    </OnboardingShell>
  );
}
