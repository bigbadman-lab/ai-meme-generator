import { MainHeader } from "@/components/marketing/main-header";
import { BottomDockNav } from "@/components/marketing/bottom-dock-nav";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <MainHeader />
      {children}
      <BottomDockNav />
    </div>
  );
}
