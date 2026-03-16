import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function MemesPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          My memes
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Browse and manage your saved meme library.
        </p>
        <div className="mt-6 rounded-2xl border border-stone-200/70 bg-white p-6 shadow-sm shadow-black/[0.03]">
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-stone-200 bg-stone-50/30">
            <p className="text-sm text-stone-400">No memes yet</p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
