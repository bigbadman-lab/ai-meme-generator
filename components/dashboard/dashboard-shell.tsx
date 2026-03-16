"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/memes", label: "Memes" },
  { href: "/settings", label: "Settings" },
];

export function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-stone-100/60">
      {/* Subtle dot pattern like homepage */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        {/* Sidebar – dark mode, white footer logo */}
        <aside className="flex shrink-0 flex-row items-center gap-2 overflow-x-auto border-b border-stone-700/50 bg-stone-900 px-4 py-3 md:w-52 md:flex-col md:items-stretch md:gap-0.5 md:overflow-visible md:border-b-0 md:border-r md:border-r-stone-700/50 md:px-4 md:py-6">
          <Link
            href="/"
            className="shrink-0 hover:opacity-90 transition-opacity md:mb-5"
            aria-label="Mimly home"
          >
            <Image
              src="/Mimly_footer.png"
              alt="Mimly"
              width={88}
              height={26}
              className="h-6 w-auto"
            />
          </Link>
          {NAV.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "bg-stone-700/80 text-white"
                    : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </aside>

        {/* Main */}
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-stone-200/80 bg-white/90 px-4 backdrop-blur-sm md:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity md:hidden"
              aria-label="Mimly home"
            >
              <Image
                src="/Mimly.png"
                alt="Mimly"
                width={90}
                height={27}
                className="h-6 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              Back to home
            </Link>
          </header>

          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
