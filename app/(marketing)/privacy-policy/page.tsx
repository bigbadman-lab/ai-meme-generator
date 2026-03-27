"use client";

import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { FramedSection } from "@/components/marketing/framed-section";
import { HeroNav } from "@/components/marketing/hero-nav";
import { FooterSection } from "@/components/marketing/footer-section";

const LAST_UPDATED = "March 27, 2026";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="marketing-copy mx-auto mt-5 max-w-2xl">
              This page explains what data Mimly collects, how we use it, and the controls you have.
            </p>
            <p className="mt-3 text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </FramedSection>

      <FramedSection variant="default" backgroundVariant="gallery" className="w-full">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200/80 bg-white/85 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] md:p-8">
          <div className="space-y-7 text-stone-700">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">1. Information we collect</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                We collect account information you provide, such as your name, email address, and profile details.
                We also collect workspace content and prompts you submit in order to generate outputs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">2. How we use information</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                We use information to operate Mimly, improve product quality, secure the service, and communicate
                account or support updates. We may use aggregated and de-identified usage data for analytics and
                product improvements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">3. Sharing and processors</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                We share data with trusted infrastructure and service providers that help us run Mimly, such as cloud
                hosting, authentication, analytics, and payment vendors. These providers are only given access needed
                to perform their services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">4. Data retention</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                We retain information for as long as your account is active or as needed to provide the service,
                resolve disputes, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">5. Your choices</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                You can request account updates or deletion by contacting us. Where required by law, you may have
                additional rights to access, correct, or export your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">6. Contact</h2>
              <p className="marketing-copy mt-2 leading-relaxed">
                For privacy questions, contact us through the <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </FramedSection>

      <FooterSection />
    </PageShell>
  );
}
