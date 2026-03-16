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
          <label htmlFor="manual-email" className={labelClass}>Email address</label>
          <input id="manual-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="manual-brand" className={labelClass}>Brand name</label>
          <input id="manual-brand" type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="manual-sell" className={labelClass}>What do you sell?</label>
          <input id="manual-sell" type="text" value={whatYouSell} onChange={(e) => setWhatYouSell(e.target.value)} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="manual-audience" className={labelClass}>Who is your audience?</label>
          <input id="manual-audience" type="text" value={audience} onChange={(e) => setAudience(e.target.value)} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="manual-country" className={labelClass}>Country / region</label>
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
