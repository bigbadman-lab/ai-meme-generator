import Link from "next/link";

export function FooterSection() {
  return (
    <footer
      className="border-t border-[var(--canvas-border)] px-6 py-10"
      aria-label="Site footer"
    >
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 text-sm text-[var(--canvas-muted)]">
        <Link
          href="/login"
          className="hover:text-[var(--canvas-heading)] transition-colors"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="hover:text-[var(--canvas-heading)] transition-colors"
        >
          Sign up
        </Link>
      </nav>
    </footer>
  );
}
