"use client";

import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { FramedSection } from "@/components/marketing/framed-section";
import { HeroNav } from "@/components/marketing/hero-nav";
import { FooterSection } from "@/components/marketing/footer-section";

const LAST_UPDATED = "March 27, 2026";

export default function TermsOfServicePage() {
  return (
    <PageShell>
      <FramedSection variant="hero" backgroundVariant="hero" className="w-full">
        <div className="flex min-h-[52vh] flex-col gap-10 md:gap-14">
          <div className="w-full">
            <HeroNav />
          </div>

          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pb-4 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="marketing-copy mx-auto mt-5 max-w-2xl">
              These terms govern your access to and use of Mimly and related services.
            </p>
            <p className="mt-3 text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </FramedSection>

      <FramedSection variant="default" backgroundVariant="gallery" className="w-full">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200/80 bg-white/85 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] md:p-8">
          <div className="space-y-7 text-stone-700">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">1. Use of Mimly</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                You agree to use Mimly in compliance with applicable laws and these terms. You are responsible for
                prompts, content requests, and outputs you publish or distribute.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">2. Accounts and access</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                You are responsible for safeguarding your account credentials and activities under your account. We may
                suspend or terminate access for violations, abuse, fraud, or service risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">3. Billing and plans</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                Paid features may require a subscription. Fees, billing intervals, and cancellation details are
                provided in-product at purchase time. Unless otherwise stated, fees are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">4. Intellectual property</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                Mimly and its software, branding, and site content are protected by intellectual property laws. You
                retain rights to your original inputs and are responsible for reviewing generated outputs before use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">5. Disclaimers and liability</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                Mimly is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law,
                we disclaim warranties and limit liability for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">6. Contact</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                Questions about these terms can be sent through the <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </FramedSection>

      <FooterSection />
    </PageShell>
  );
}
