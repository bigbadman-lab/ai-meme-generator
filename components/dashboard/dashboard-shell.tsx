import Link from "next/link";

export function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-56 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--background-alt)] p-4">
        <nav className="flex flex-row md:flex-col gap-2">
          <Link
            href="/dashboard"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/create"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Create
          </Link>
          <Link
            href="/dashboard/memes"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Memes
          </Link>
          <Link
            href="/settings"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Settings
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-[var(--border)] flex items-center px-4">
          <span className="text-sm font-medium text-[var(--foreground-muted)]">
            Meme Builder
          </span>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
