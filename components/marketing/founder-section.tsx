import Image from "next/image";
import { FloatingNote } from "./floating-note";

export function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      <h2
        id="founder-heading"
        className="text-center text-2xl font-bold text-stone-900 md:text-3xl"
      >
        A note from our founder
      </h2>
      <div className="mt-10 flex justify-center md:mt-12">
        <FloatingNote
          accent="white"
          rotate={0}
          className="w-full max-w-xl p-6 md:p-8"
        >
          <div className="flex h-full flex-col items-center text-center md:items-start md:text-left">
            {/* Founder image at top of note */}
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full border border-stone-200 bg-stone-100 shadow-sm shadow-black/5 md:h-20 md:w-20 overflow-hidden">
                <Image
                  src="/founder/mLwsIoTp_400x400.jpg"
                  alt="Founder portrait"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="hidden md:flex md:flex-col">
                <div className="text-sm font-medium text-stone-900">
                  Alex
                </div>
                <div className="text-xs text-stone-500">
                  Founder, Meme Builder
                </div>
              </div>
            </div>

            <div className="mt-5 w-full border-t border-dashed border-stone-200/70 pt-4">
              <p className="marketing-copy text-left">
                Twelve years ago I discovered the power of memes when a Facebook
                page I ran grew to more than two million followers. Over the years
                I’ve worked with some of the largest social media players in the
                world and watched memes become one of the internet’s most powerful
                ways to communicate.
              </p>
              <p className="marketing-copy mt-4 text-left">
                I built this platform so every business can tap into that same
                power.
              </p>
            </div>

            <div className="mt-6 w-full text-left">
              <div className="text-base font-semibold italic text-stone-800">
                Alex
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Founder &amp; CEO, Meme Builder
              </div>
              <a
                href="https://x.com/alexattinger"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800"
              >
                Follow me on X
              </a>
            </div>
          </div>
        </FloatingNote>
      </div>
    </section>
  );
}
