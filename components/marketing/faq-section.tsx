"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "What kind of memes can I create?",
    answer: "You can create image-based memes using popular templates (e.g. Drake, Change My Mind, Two Buttons). Add your own captions and branding. We focus on formats that work for launches, promos, and social.",
  },
  {
    question: "Is it suitable for my brand?",
    answer: "Yes. Meme Builder is built for businesses. You control the tone, add promo context, and keep everything in a library so your memes stay on brand.",
  },
  {
    question: "How fast can I get a meme?",
    answer: "Pick a template, add your text, and generate. Most memes are ready in seconds. You can tweak and re-download as needed.",
  },
  {
    question: "Can my team use it?",
    answer: "Pro and Enterprise plans include team seats. Share templates, manage a shared library, and keep campaigns consistent across the team.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section
      id="faq-heading"
      className="scroll-mt-24 px-6 py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="faq-heading"
          className="text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl"
        >
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[var(--canvas-muted)]">
          Quick answers to common questions.
        </p>
        <div className="mt-10 space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--canvas-border)] bg-[var(--canvas-surface)] shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openId === i}
              >
                <span className="font-medium text-[var(--canvas-heading)]">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[var(--canvas-muted)] transition-transform",
                    openId === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all",
                  openId === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="border-t border-[var(--canvas-border)] px-5 py-4 text-sm leading-relaxed text-[var(--canvas-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
