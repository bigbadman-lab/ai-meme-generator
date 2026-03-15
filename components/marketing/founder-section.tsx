import { FloatingNote } from "./floating-note";

export function FounderSection() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="founder-heading"
          className="text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl"
        >
          A note from our founder
        </h2>
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="shrink-0">
            <FloatingNote accent="white" rotate={-1} className="h-32 w-32 overflow-hidden p-0">
              <div className="flex h-full w-full items-center justify-center bg-stone-100 text-[var(--canvas-muted)] text-xs">
                Photo
              </div>
            </FloatingNote>
          </div>
          <FloatingNote accent="white" rotate={0} className="flex-1 p-6 md:p-8">
            <p className="text-[var(--canvas-muted)] leading-relaxed">
              We built Meme Builder because brands deserve to move at internet speed—without losing their voice. Whether it’s a product launch, a promo, or just staying relevant on social, memes work. Here’s to making that easy.
            </p>
          </FloatingNote>
        </div>
      </div>
    </section>
  );
}
