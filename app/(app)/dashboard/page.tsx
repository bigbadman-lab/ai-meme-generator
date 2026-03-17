import Image from "next/image";
import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const RECENT_MEMES = [
  {
    id: "discount-drop",
    title: "Weekend discount push",
    format: "Change My Mind",
  },
  {
    id: "feature-launch",
    title: "Feature launch angle",
    format: "Two buttons",
  },
  {
    id: "seasonal-moment",
    title: "Seasonal opportunity",
    format: "Surprised Pikachu",
  },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.95fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  Recent memes
                </h1>
                <p className="mt-1 text-sm text-stone-400">
                  Your latest meme outputs, ready to review or download.
                </p>
              </div>
              <Link
                href="/dashboard/memes"
                className="text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {RECENT_MEMES.map((meme) => (
                <Link
                  key={meme.id}
                  href="/dashboard/memes"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="aspect-square bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                    <div className="flex h-full flex-col justify-between">
                      <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-stone-300">
                        {meme.format}
                      </span>
                      <p className="max-w-[12ch] text-base font-semibold leading-tight text-white">
                        {meme.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    Brand context
                  </h2>
                  <p className="mt-1 text-sm text-stone-400">
                    These details shape your meme style, tone, and captions.
                  </p>
                </div>
                <Link
                  href="/settings"
                  className="text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  Edit
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
                    Brand
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Acme Fitness
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
                    Audience
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Busy professionals
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
                    Country
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    United States
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:mt-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <Image
                    src="/founder/mLwsIoTp_400x400.jpg"
                    alt="Alex Attinger"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Got a question?
                  </h2>
                  <p className="mt-1 text-sm text-stone-400">
                    Ask Alex about memes, strategy, or how to get better results.
                  </p>
                </div>
              </div>

              <a
                href="https://x.com/alexattinger"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-stone-200 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                Message Alex on X
              </a>
            </section>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
