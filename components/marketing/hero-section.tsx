import { EngagementCard } from "./engagement-card";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-24"
      aria-labelledby="hero-heading"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Copy + CTA */}
        <div className="relative max-w-2xl text-center lg:text-left">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-[var(--canvas-heading)] sm:text-5xl md:text-6xl"
          >
            Memes move faster
            <br />
            than marketing.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--canvas-muted)] lg:mx-0">
            While brands plan campaigns, the internet shares memes.
            <br />
            Our AI helps brands create memes people actually share.
          </p>
          <form
            action="/signup"
            method="get"
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center lg:mx-0"
          >
            <label htmlFor="hero-website-url" className="sr-only">
              Your website URL
            </label>
            <input
              id="hero-website-url"
              type="url"
              name="website"
              placeholder="yourcompany.com"
              className="min-w-0 flex-1 rounded-lg border border-[var(--canvas-border)] bg-[var(--canvas-surface)] px-4 py-3 text-base text-[var(--canvas-heading)] placeholder:text-[var(--canvas-muted)] focus:border-[var(--canvas-heading)] focus:outline-none focus:ring-1 focus:ring-[var(--canvas-heading)]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-[var(--canvas-heading)] px-5 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Get started
            </button>
          </form>
        </div>

        {/* Engagement card – supports the message without competing */}
        <div className="flex shrink-0 justify-center lg:justify-end">
          <EngagementCard className="lg:-rotate-1" />
        </div>
      </div>
    </section>
  );
}
