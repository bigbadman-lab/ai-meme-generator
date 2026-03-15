import Link from "next/link";
import { FloatingNote } from "./floating-note";

const PLANS = [
  {
    name: "Starter",
    description: "For small teams and one-off campaigns.",
    price: "Free",
    cta: "Get started",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    description: "Unlimited memes, templates, and team seats.",
    price: "$29",
    period: "/mo",
    cta: "Start free trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Custom templates, SSO, and dedicated support.",
    price: "Custom",
    cta: "Contact sales",
    href: "/signup",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing-heading"
      className="scroll-mt-24 px-6 py-20 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="pricing-heading"
          className="text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl"
        >
          Pricing
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[var(--canvas-muted)]">
          Simple plans. No hidden fees.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <FloatingNote
              key={plan.name}
              accent="white"
              rotate={0}
              className={`p-6 ${plan.featured ? "ring-2 ring-[var(--canvas-heading)]" : ""}`}
            >
              {plan.featured && (
                <span className="mb-3 inline-block rounded-full bg-[var(--canvas-heading)] px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              <h3 className="font-semibold text-[var(--canvas-heading)]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--canvas-muted)]">
                {plan.description}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[var(--canvas-heading)]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[var(--canvas-muted)]">{plan.period}</span>
                )}
              </div>
              <Link
                href={plan.href}
                className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-[var(--canvas-heading)] text-white hover:opacity-90"
                    : "border border-[var(--canvas-border)] text-[var(--canvas-heading)] hover:bg-stone-50"
                }`}
              >
                {plan.cta}
              </Link>
            </FloatingNote>
          ))}
        </div>
      </div>
    </section>
  );
}
