import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function CreatePage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-bold">Create meme</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Choose a template and add your text to generate a new meme.
      </p>
    </DashboardShell>
  );
}
