import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Overview of your meme activity and recent creations.
      </p>
    </DashboardShell>
  );
}
