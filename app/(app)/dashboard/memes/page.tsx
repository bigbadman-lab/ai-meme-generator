import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const MEMES = [
  {
    id: "productivity-chaos",
    title: "Productivity chaos",
    format: "Drake format",
    accent: "from-indigo-500/30 via-sky-500/10 to-transparent",
    topText: "Posting generic brand content",
    bottomText: "Posting memes your audience actually shares",
  },
  {
    id: "discount-drop",
    title: "Weekend discount push",
    format: "Change My Mind",
    accent: "from-emerald-500/25 via-transparent to-transparent",
    topText: "50% off this weekend only",
    bottomText: "People who wait until Monday missed the meme and the sale",
  },
  {
    id: "feature-launch",
    title: "Feature launch angle",
    format: "Two buttons",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    topText: "Announce the feature normally",
    bottomText: "Turn the launch into a meme and get engagement too",
  },
  {
    id: "audience-pain",
    title: "Audience pain point",
    format: "Distracted Boyfriend",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    topText: "Busy professionals trying to stay consistent",
    bottomText: "Finding a coach that fits real life",
  },
  {
    id: "seasonal-moment",
    title: "Seasonal opportunity",
    format: "Surprised Pikachu",
    accent: "from-sky-500/25 via-indigo-500/10 to-transparent",
    topText: "Brands that ignore seasonal moments",
    bottomText: "When competitors win the meme cycle",
  },
  {
    id: "caption-hook",
    title: "Caption-first concept",
    format: "POV format",
    accent: "from-teal-500/20 via-cyan-500/10 to-transparent",
    topText: "POV: your coach finally makes fitness feel doable",
    bottomText: "Caption hook ready to post",
  },
];

function getDownloadHref(title: string, topText: string, bottomText: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
      </defs>
      <rect width="1080" height="1080" rx="44" fill="url(#bg)" />
      <rect x="40" y="40" width="1000" height="1000" rx="32" fill="#020617" stroke="#334155" />
      <text x="540" y="146" text-anchor="middle" fill="#f8fafc" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="700">
        ${topText}
      </text>
      <text x="540" y="944" text-anchor="middle" fill="#e2e8f0" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700">
        ${bottomText}
      </text>
      <text x="540" y="540" text-anchor="middle" fill="#64748b" font-family="Arial, Helvetica, sans-serif" font-size="36">
        ${title}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function MemesPage() {
  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Your memes are ready
            </h1>
            <p className="mt-1 text-sm text-stone-400">
              Review your generated set and download the ones you want to post.
            </p>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
            {MEMES.length} memes generated
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {MEMES.map((meme) => (
            <div
              key={meme.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div
                className={`relative aspect-square w-full bg-gradient-to-br ${meme.accent} p-5`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-300">
                      {meme.format}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="max-w-[18ch] text-lg font-semibold leading-tight text-white sm:text-xl">
                      {meme.topText}
                    </p>
                    <p className="max-w-[22ch] text-sm leading-relaxed text-stone-300">
                      {meme.bottomText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-white">{meme.title}</h2>
                    <p className="mt-1 text-xs text-stone-300">
                      1080 x 1080 meme export
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-stone-300">
                        <svg
                          className="h-3.5 w-3.5 text-[#1877F2]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.027 1.792-4.699 4.533-4.699 1.313 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.931-1.955 1.887v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.099 24 12.073z" />
                        </svg>
                        Facebook ready
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-stone-300">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id={`instagram-gradient-${meme.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#feda75" />
                              <stop offset="30%" stopColor="#fa7e1e" />
                              <stop offset="60%" stopColor="#d62976" />
                              <stop offset="100%" stopColor="#4f5bd5" />
                            </linearGradient>
                          </defs>
                          <rect x="3" y="3" width="18" height="18" rx="5" fill={`url(#instagram-gradient-${meme.id})`} />
                          <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8" />
                          <circle cx="17.2" cy="6.8" r="1.2" fill="white" />
                        </svg>
                        Instagram ready
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={getDownloadHref(meme.title, meme.topText, meme.bottomText)}
                    download={`${meme.id}.svg`}
                    className="cta-funky inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:bg-indigo-400"
                  >
                    Download meme
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
