import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Manage your account and preferences.
      </p>
    </DashboardShell>
  );
}
