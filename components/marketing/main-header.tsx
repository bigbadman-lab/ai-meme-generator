import Link from "next/link";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          Meme Builder
        </Link>
        <nav
          className="flex items-center gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--foreground-muted)] hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
