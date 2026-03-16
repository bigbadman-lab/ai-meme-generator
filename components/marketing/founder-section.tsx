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
        className="text-center text-2xl font-bold tracking-tight text-stone-900 md:text-3xl"
      >
        A note from our founder
      </h2>
      <div className="mt-10 flex justify-center md:mt-12">
        <FloatingNote
          accent="white"
          rotate={0}
          className="w-full max-w-xl overflow-hidden p-6 shadow-lg md:p-8"
        >
          <div className="flex h-full flex-col">
            {/* Note header – looks like a real note */}
            <div className="flex items-start justify-between gap-3 border-b border-stone-200/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100 md:h-14 md:w-14">
                  <Image
                    src="/founder/mLwsIoTp_400x400.jpg"
                    alt="Alex"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Alex</p>
                  <p className="text-xs text-stone-500">Founder, Mimly</p>
                </div>
              </div>
              <p className="text-right text-[11px] uppercase tracking-wider text-stone-400">
                Why Mimly
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <p className="marketing-copy text-stone-700 leading-relaxed">
                More than a decade ago I grew a Facebook page to over two million
                followers by sharing memes.
              </p>
              <p className="marketing-copy text-stone-700 leading-relaxed">
                Over the years I’ve worked with some of the biggest social media
                publishers and seen first-hand how memes have become the
                internet’s most powerful form of communication.
              </p>
              <p className="marketing-copy text-stone-700 leading-relaxed">
                I built Mimly to help every business tap into that same power.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-stone-200/80 pt-4">
              <span className="text-sm font-semibold italic text-stone-800">Alex</span>
              <span className="text-xs text-stone-500">Founder &amp; CEO, Mimly</span>
              <a
                href="https://x.com/alexattinger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-sky-600 underline underline-offset-2 hover:text-sky-700"
              >
                Follow on X
              </a>
            </div>
          </div>
        </FloatingNote>
      </div>
    </section>
  );
}
