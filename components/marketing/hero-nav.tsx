"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#features-heading", label: "Product" },
  { href: "/#pricing-heading", label: "Pricing" },
  { href: "/#faq-heading", label: "FAQ" },
];

interface HeroNavProps {
  onFixedChange?: (fixed: boolean) => void;
}

export function HeroNav({ onFixedChange }: HeroNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const fixed = window.scrollY > 16;
      setIsFixed(fixed);
      onFixedChange?.(fixed);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onFixedChange]);

  return (
    <header
      className={cn(
        "w-full transition-transform duration-200",
        isFixed ? "fixed top-0 left-0 right-0 z-[100]" : "relative z-20"
      )}
      aria-label="Main navigation"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-4xl items-center justify-between gap-4",
          "rounded-full border border-white/40 bg-white/40 px-4 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md",
          "sm:px-5 sm:py-2"
        )}
      >
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/Mimly.png"
            alt="Mimly"
            width={80}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-stone-900 px-3 py-1.5 text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 hover:bg-white/80 sm:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className={cn(
            "absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:hidden"
          )}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-stone-200 pt-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full border border-stone-200 py-2.5 text-center text-sm font-medium text-stone-700"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-stone-900 py-2.5 text-center text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
