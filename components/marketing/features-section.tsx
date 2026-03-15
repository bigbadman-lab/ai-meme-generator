import { FloatingNote } from "./floating-note";

const FEATURES = [
  {
    title: "Brand-aware meme generation",
    description: "AI that gets your tone. Create memes that fit your brand and campaign goals.",
    accent: "white" as const,
  },
  {
    title: "Fast meme creation",
    description: "Pick a template, add your copy, get a shareable meme in seconds—no design skills needed.",
    accent: "white" as const,
  },
  {
    title: "Reusable templates",
    description: "Save and reuse your best formats. Keep launches and promos consistent.",
    accent: "white" as const,
  },
  {
    title: "Captions included",
    description: "AI suggests captions and variations so you can ship to social faster.",
    accent: "white" as const,
  },
  {
    title: "Business-friendly workflow",
    description: "From draft to approval to library. Built for teams and campaigns.",
    accent: "white" as const,
  },
  {
    title: "Content for launches & promos",
    description: "Launch memes, promo cards, and social content from one place.",
    accent: "white" as const,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features-heading"
      className="scroll-mt-24 px-6 py-20 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="features-heading"
          className="text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl"
        >
          Features
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[var(--canvas-muted)]">
          Everything you need to create and manage memes for your business.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FloatingNote
              key={f.title}
              accent={f.accent}
              rotate={i % 4 === 0 ? 0 : i % 4 === 1 ? 1 : i % 4 === 2 ? -1 : 0}
              className="p-6"
            >
              <h3 className="font-semibold text-[var(--canvas-heading)]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--canvas-muted)]">
                {f.description}
              </p>
            </FloatingNote>
          ))}
        </div>
      </div>
    </section>
  );
}
