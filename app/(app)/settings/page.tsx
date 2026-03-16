"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

/** Default values – in a real app these would come from auth/session or API after onboarding */
const DEFAULT_VALUES = {
  email: "alex@acmefitness.com",
  brandName: "Acme Fitness",
  description: "Online fitness coaching",
  audience: "Busy professionals",
  country: "United States",
};

export default function SettingsPage() {
  const [email, setEmail] = useState(DEFAULT_VALUES.email);
  const [brandName, setBrandName] = useState(DEFAULT_VALUES.brandName);
  const [description, setDescription] = useState(DEFAULT_VALUES.description);
  const [audience, setAudience] = useState(DEFAULT_VALUES.audience);
  const [country, setCountry] = useState(DEFAULT_VALUES.country);

  const inputClass =
    "mt-1 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-300";
  const labelClass = "block text-sm font-medium text-stone-700";

  return (
    <DashboardShell>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Manage your account and brand details from onboarding.
        </p>

        <form
          className="mt-6 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="rounded-2xl border border-stone-200/70 bg-white p-5 shadow-sm shadow-black/[0.03] sm:p-6">
            <h2 className="text-base font-semibold text-stone-900">
              Account
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Email used for your account.
            </p>
            <div className="mt-4">
              <label htmlFor="settings-email" className={labelClass}>
                Email address
              </label>
              <input
                id="settings-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/70 bg-white p-5 shadow-sm shadow-black/[0.03] sm:p-6">
            <h2 className="text-base font-semibold text-stone-900">
              Brand
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Details from onboarding used to tailor your memes.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <label htmlFor="settings-brand" className={labelClass}>
                  Brand name
                </label>
                <input
                  id="settings-brand"
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="settings-desc" className={labelClass}>
                  What you do
                </label>
                <input
                  id="settings-desc"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Online fitness coaching"
                  required
                />
              </div>
              <div>
                <label htmlFor="settings-audience" className={labelClass}>
                  Target audience
                </label>
                <input
                  id="settings-audience"
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Busy professionals"
                  required
                />
              </div>
              <div>
                <label htmlFor="settings-country" className={labelClass}>
                  Country / region
                </label>
                <input
                  id="settings-country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. United States"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="cta-funky rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
