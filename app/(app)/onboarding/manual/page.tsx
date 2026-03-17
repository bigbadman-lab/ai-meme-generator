"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";
import { COUNTRY_OPTIONS } from "@/lib/countries";

export default function OnboardingManualPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [whatYouSell, setWhatYouSell] = useState("");
  const [audience, setAudience] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/onboarding/complete");
  }

  const inputClass = "mt-1 w-full rounded-xl border border-stone-200 bg-white/90 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400";
  const labelClass = "block text-sm font-medium text-stone-700";

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
        Set up your meme engine
      </h1>
      <p className="marketing-copy mt-2">
        Tell us about your brand so we can tailor your memes.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="manual-email" className={labelClass}>
            Email address <span className="text-amber-700">*</span>
          </label>
          <input id="manual-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="manual-brand" className={labelClass}>
            Brand name <span className="text-stone-400">(optional)</span>
          </label>
          <input id="manual-brand" type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} className={inputClass} />
        </div>
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-200/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
              Important
            </span>
            <p className="text-xs font-medium text-stone-800 sm:text-[13px]">
              These answers shape your memes.
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            The more specific you are here, the better Mimly can tailor meme
            ideas, tone, and captions to your business.
          </p>
        </div>
        <div>
          <label htmlFor="manual-sell" className={labelClass}>
            What do you sell? <span className="text-amber-700">*</span>
          </label>
          <input
            id="manual-sell"
            type="text"
            value={whatYouSell}
            onChange={(e) => setWhatYouSell(e.target.value)}
            className={inputClass + " border-amber-200/80 focus:border-amber-400 focus:ring-amber-300"}
            placeholder="e.g. 1:1 online fitness coaching for busy professionals"
            required
          />
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            Be specific about your product or service, not just the industry.
          </p>
        </div>
        <div>
          <label htmlFor="manual-audience" className={labelClass}>
            Who is your audience? <span className="text-amber-700">*</span>
          </label>
          <input
            id="manual-audience"
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className={inputClass + " border-amber-200/80 focus:border-amber-400 focus:ring-amber-300"}
            placeholder="e.g. Working parents trying to get fit with limited time"
            required
          />
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            Describe the exact people you want to reach rather than saying
            “everyone”.
          </p>
        </div>
        <div>
          <label htmlFor="manual-country" className={labelClass}>
            Country / region <span className="text-amber-700">*</span>
          </label>
          <select
            id="manual-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={inputClass + " cursor-pointer pr-8"}
            required
          >
            <option value="">Select country</option>
            <optgroup label="United Kingdom & United States">
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
            </optgroup>
            <optgroup label="All countries">
              {COUNTRY_OPTIONS.filter((c) => c !== "United Kingdom" && c !== "United States").map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </optgroup>
          </select>
        </div>
        <button type="submit" className="cta-funky mt-2 w-full rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display">
          Create my meme engine
        </button>
      </form>
    </OnboardingShell>
  );
}
