import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function CreatePage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          Create meme
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Choose a template and add your text to generate a new meme.
        </p>
        <div className="mt-6 rounded-2xl border border-stone-200/70 bg-white p-6 shadow-sm shadow-black/[0.03]">
          <p className="text-sm text-stone-400">Template picker coming soon.</p>
        </div>
      </div>
    </DashboardShell>
  );
}
