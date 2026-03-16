"use client";

import Link from "next/link";
import Image from "next/image";
import { FramedSection } from "@/components/marketing/framed-section";

export function OnboardingShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={
        "min-h-screen flex flex-col items-center justify-center " +
        "px-3 pt-3 pb-3 sm:px-4 sm:pt-4 sm:pb-4 md:px-5 md:pt-5 md:pb-5 lg:px-4 lg:pt-6 lg:pb-6"
      }
    >
      <Link
        href="/"
        className="mb-4 shrink-0 hover:opacity-80 transition-opacity sm:mb-5"
        aria-label="Mimly home"
      >
        <Image
          src="/Mimly.png"
          alt="Mimly"
          width={100}
          height={30}
          className="h-7 w-auto sm:h-8"
          priority
        />
      </Link>
      <FramedSection
        variant="default"
        backgroundVariant="features"
        className="w-full max-w-lg"
      >
        <div className="w-full px-5 py-6 sm:px-6 sm:py-8">
          {children}
        </div>
      </FramedSection>
    </div>
  );
}
