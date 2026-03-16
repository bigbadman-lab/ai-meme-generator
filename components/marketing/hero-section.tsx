"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FramedSection } from "./framed-section";
import { HeroNav } from "./hero-nav";
import { EngagementCard } from "./engagement-card";

export function HeroSection() {
  const [navFixed, setNavFixed] = useState(false);

  return (
    <div className={cn("w-full", navFixed && "relative z-[100]")}>
      <FramedSection variant="hero" id="hero" aria-labelledby="hero-heading" className="w-full">
        <div className="flex min-h-[70vh] flex-col items-center gap-8 md:gap-12">
          {/* Nav inside hero container */}
          <div className="w-full">
            <HeroNav onFixedChange={setNavFixed} />
          </div>

        {/* Main hero content – stacked on all breakpoints */}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-10 px-4 text-center">
          <div className="relative mt-12 sm:mt-16 md:mt-20">
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight leading-tight text-stone-900 sm:text-5xl md:text-6xl"
            >
              <span className="hero-word-memes inline-block">Memes</span>{" "}
              m<span aria-hidden="true" className="inline-block text-[0.65em] leading-none align-middle">😆</span>ve{" "}
              <span className="hero-word-faster inline-block">faster</span>
              <br />
              than{" "}
              <span className="hero-word-marketing inline-block">
                marketing.
              </span>
            </h1>
            <p className="marketing-copy mx-auto mt-5 max-w-[60ch]">
              While brands plan campaigns, the internet shares memes.
              <br />
              Our AI helps brands create memes people actually share.
            </p>
            <form
              action="/signup"
              method="get"
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center"
            >
              <label htmlFor="hero-website-url" className="sr-only">
                Your website URL
              </label>
              <input
                id="hero-website-url"
                type="url"
                name="website"
                placeholder="Enter your website URL"
                className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-white/90 px-4 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
              >
                Get started
              </button>
            </form>
          </div>

          <div className="mt-6 flex shrink-0 justify-center sm:mt-8">
            <EngagementCard />
          </div>
        </div>
      </div>
    </FramedSection>
    </div>
  );
}
