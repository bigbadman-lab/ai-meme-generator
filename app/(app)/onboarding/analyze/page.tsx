"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

const STEPS = [
  "Scanning website content",
  "Understanding your brand",
  "Identifying your audience",
  "Preparing your meme engine",
];

export default function OnboardingAnalyzePage() {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => router.replace("/onboarding/confirm"), 3000);
    return () => clearTimeout(t);
  }, [router]);

  useEffect(() => {
    if (visibleCount >= STEPS.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 400);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
        Analyzing your website
      </h1>
      <p className="marketing-copy mt-2">
        We&apos;re preparing your meme engine.
      </p>
      <ul className="mt-6 space-y-3" aria-label="Progress">
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={"flex items-center gap-3 text-sm text-stone-700 transition-opacity duration-300 " + (i < visibleCount ? "opacity-100" : "opacity-0")}
          >
            <span className={"h-2 w-2 shrink-0 rounded-full " + (i < visibleCount ? "bg-stone-900" : "bg-stone-300")} aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </OnboardingShell>
  );
}

