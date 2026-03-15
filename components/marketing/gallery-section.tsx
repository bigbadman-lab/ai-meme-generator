import { FloatingNote } from "./floating-note";

const MOCK_ITEMS = [
  { id: 1, label: "Template A" },
  { id: 2, label: "Template B" },
  { id: 3, label: "Template C" },
  { id: 4, label: "Template D" },
  { id: 5, label: "Template E" },
  { id: 6, label: "Template F" },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 px-6 py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="gallery-heading"
          className="text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl"
        >
          Gallery
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[var(--canvas-muted)]">
          Example memes from the engine—templates and styles you can use.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {MOCK_ITEMS.map((item, i) => (
            <FloatingNote
              key={item.id}
              accent="white"
              rotate={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : -1}
              className="aspect-[4/3] p-0 overflow-hidden"
            >
              <div className="flex h-full w-full items-center justify-center bg-stone-100 text-sm text-[var(--canvas-muted)]">
                {item.label}
              </div>
            </FloatingNote>
          ))}
        </div>
      </div>
    </section>
  );
}
