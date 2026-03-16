"use client";

import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-stone-100/90 text-stone-900",
        // Equal top, side, and bottom padding, slightly tighter on desktop
        "px-3 pt-3 pb-3 sm:px-4 sm:pt-4 sm:pb-4 md:px-5 md:pt-5 md:pb-5 lg:px-4 lg:pt-6 lg:pb-6",
        "flex flex-col items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20",
        className
      )}
    >
      {children}
    </div>
  );
}
