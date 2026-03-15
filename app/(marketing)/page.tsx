import Link from "next/link";

export default function MarketingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
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

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Generate memes fast</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Pick a template, add your copy, and get a shareable meme in
              seconds.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Add promo context</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Layer in campaign messaging and CTAs so memes work for your
              marketing.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-6">
            <h3 className="font-semibold text-lg">Manage your meme library</h3>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Organize, tag, and reuse memes across channels from one place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
