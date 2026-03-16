import Link from "next/link";
import { FramedSection } from "./framed-section";
import { FloatingNote } from "./floating-note";

const PLANS = [
  {
    name: "Free",
    description: "1 meme per day for individuals getting started.",
    price: "$0",
    period: "/mo",
    cta: "Get started free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    description: "Unlimited memes for teams who ship content daily.",
    price: "$29",
    period: "/mo",
    cta: "Start free trial",
    href: "/signup",
    featured: true,
  },
];

export function PricingSection() {
  return (
    <FramedSection
      variant="default"
      backgroundVariant="pricing"
      id="pricing-heading"
      aria-labelledby="pricing-heading"
      className="w-full"
    >
      <h2
        id="pricing-heading"
        className="text-center text-2xl font-bold text-stone-900 md:text-3xl"
      >
        Pricing
      </h2>
      <p className="marketing-copy mx-auto mt-2 max-w-xl text-center">
        Free gives you 1 meme per day. Pro unlocks unlimited memes.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <FloatingNote
            key={plan.name}
            accent="white"
            rotate={0}
            className={`flex h-full flex-col p-6 md:p-8 ${
              plan.featured ? "ring-2 ring-stone-900" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-stone-900">
                {plan.name}
              </h3>
              {plan.featured && (
                <span className="inline-flex items-center rounded-full bg-stone-900 px-3 py-1 text-[11px] font-medium !text-white">
                  Popular
                </span>
              )}
            </div>
            <p className="marketing-copy mt-2 text-sm">
              {plan.description}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-stone-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-stone-500">{plan.period}</span>
              )}
            </div>
            <Link
              href={plan.href}
              className="mt-8 block w-full rounded-full bg-stone-900 px-3 py-2.5 text-center text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
            >
              {plan.cta}
            </Link>
          </FloatingNote>
        ))}
      </div>
    </FramedSection>
  );
}
