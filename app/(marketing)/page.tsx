import Link from "next/link";

/**
 * Homepage sections (SEO: one H1, one H2 per section, H3 for subsections).
 * 1. Hero
 * 2. Gallery slider
 * 3. Features
 * 4. Founder note
 * 5. Pricing
 * 6. FAQ
 * 7. Footer
 */
export default function MarketingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1. Hero — single H1 for the page */}
      <section
        className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl"
        >
          Turn your business into better memes
        </h1>
        <p className="mt-4 text-lg text-white/70 max-w-xl">
          AI-powered meme generation for brands. Create on-trend memes, add your
          promo context, and manage a library that stays on brand.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-colors"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
          >
            Log in
          </Link>
        </div>
      </section>

      {/* 2. Gallery slider — H2 */}
      <section className="px-6 py-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="text-2xl font-bold text-center">
          Gallery
        </h2>
        <p className="mt-2 text-center text-[var(--foreground-muted)] max-w-xl mx-auto">
          Placeholder: meme gallery slider.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-4xl h-48 rounded-lg border border-dashed border-[var(--border)] bg-[var(--background-alt)] flex items-center justify-center text-[var(--foreground-muted)] text-sm">
            Gallery slider content
          </div>
        </div>
      </section>

      {/* 3. Features — H2 + H3 per feature */}
      <section className="px-6 py-16" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-bold text-center">
          Features
        </h2>
        <div className="mt-8 max-w-4xl mx-auto grid gap-6 sm:grid-cols-3">
          <article className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Generate memes fast</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Pick a template, add your copy, and get a shareable meme in
              seconds.
            </p>
          </article>
          <article className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Add promo context</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Layer in campaign messaging and CTAs so memes work for your
              marketing.
            </p>
          </article>
          <article className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Manage your meme library</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Organize, tag, and reuse memes across channels from one place.
            </p>
          </article>
        </div>
      </section>

      {/* 4. Founder note — H2 */}
      <section className="px-6 py-16" aria-labelledby="founder-heading">
        <h2 id="founder-heading" className="text-2xl font-bold text-center">
          A note from our founder
        </h2>
        <p className="mt-4 text-center text-[var(--foreground-muted)] max-w-2xl mx-auto">
          Placeholder: founder message or short personal note.
        </p>
      </section>

      {/* 5. Pricing — H2 */}
      <section className="px-6 py-16" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold text-center">
          Pricing
        </h2>
        <p className="mt-2 text-center text-[var(--foreground-muted)] max-w-xl mx-auto">
          Placeholder: plans and pricing.
        </p>
      </section>

      {/* 6. FAQ — H2 + H3 per question (placeholder) */}
      <section className="px-6 py-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-center">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-center text-[var(--foreground-muted)] max-w-xl mx-auto">
          Placeholder: FAQ items.
        </p>
      </section>

      {/* 7. Footer — nav only */}
      <footer className="border-t border-[var(--border)] px-6 py-8 mt-auto">
        <nav
          className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center text-sm text-[var(--foreground-muted)]"
          aria-label="Site footer"
        >
          <Link href="/login" className="hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="hover:text-white transition-colors">
            Sign up
          </Link>
        </nav>
      </footer>
    </main>
  );
}
