import { FramedSection } from "./framed-section";

const STEPS = [
  {
    number: "1",
    title: "Know your brand",
    description:
      "We learn what your business does so every meme starts with real context.",
  },
  {
    number: "2",
    title: "Watch the world",
    description:
      "Our system tracks trends, global events, and key dates to keep memes timely.",
  },
  {
    number: "3",
    title: "Find the angle",
    description:
      "AI turns brand context and cultural moments into clever meme ideas.",
  },
  {
    number: "4",
    title: "Build the meme",
    description:
      "The right format and copy combine to generate the finished meme.",
  },
  {
    number: "5",
    title: "Ready to post",
    description:
      "Memes and caption suggestions, ready for social.",
  },
] as const;

export function FeaturesSection() {
  return (
    <FramedSection
      variant="default"
      backgroundVariant="features"
      id="features-heading"
      aria-labelledby="features-heading"
      className="w-full"
    >
      <h2
        id="features-heading"
        className="text-center text-2xl font-bold text-stone-900 md:text-3xl"
      >
        Behind the memes
      </h2>
      <p className="marketing-copy mx-auto mt-2 max-w-xl text-center">
        How our system turns brand context and
        <br />
        cultural moments into social-ready memes.
      </p>
      {/* Timeline layout – stacked on all devices */}
      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        <div className="space-y-6">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white text-xs font-semibold text-stone-900">
                  {step.number}
                </span>
                <div className="mt-1 h-full w-px bg-stone-200" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FramedSection>
  );
}
