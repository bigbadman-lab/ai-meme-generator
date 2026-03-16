import Link from "next/link";
import { FramedSection } from "./framed-section";
import { FloatingNote } from "./floating-note";

const FREE_FEATURES = [
  "Generate 1 meme per day",
  "AI selects the best meme template",
  "Memes tailored to your brand profile",
  "Caption suggestion included",
  "Memes adapt to trending topics",
  "Uses global events and seasonal moments",
  "Promotion input supported",
  "Download ready-to-post meme images",
];

const PRO_FEATURES = [
  "Unlimited meme generation",
  "AI automatically chooses viral meme formats",
  "Memes tailored to your brand and audience",
  "Caption suggestions included",
  "Automatically adapts to trending topics",
  "Uses global events and internet culture",
  "Add promotions, deals or launches",
  "Priority access to new meme templates",
  "Faster generation speeds",
  "Ideal for daily social media posting",
];

const PLANS = [
  {
    name: "Free",
    price: "£0",
    period: "",
    subtext: "1 meme per day",
    features: FREE_FEATURES,
    cta: "Get Started Free",
    href: "/onboarding",
    featured: false,
  },
  {
    name: "Pro",
    price: "£19",
    period: "/ month",
    subtext: "Unlimited meme generation",
    features: PRO_FEATURES,
    cta: "Upgrade to Pro",
    href: "/onboarding",
    featured: true,
    badge: "Most Popular",
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
        className="text-center text-2xl font-bold tracking-tight text-stone-900 md:text-3xl"
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
              {plan.badge && (
                <span className="inline-flex items-center rounded-full bg-stone-900 px-3 py-1 text-[11px] font-medium !text-white">
                  {plan.badge}
                </span>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-1">
              <span className="text-3xl font-bold text-stone-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-stone-500">{plan.period}</span>
              )}
            </div>
            {plan.subtext && (
              <p className="mt-1 text-sm text-stone-500">{plan.subtext}</p>
            )}
            <ul className="mt-6 flex flex-col gap-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-stone-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className="cta-funky mt-8 block w-full rounded-full bg-stone-900 px-3 py-2.5 text-center text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
            >
              {plan.cta}
            </Link>
          </FloatingNote>
        ))}
      </div>
    </FramedSection>
  );
}
