import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function MemesPage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-bold">My memes</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Browse and manage your saved meme library.
      </p>
    </DashboardShell>
  );
}
