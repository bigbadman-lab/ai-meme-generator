export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-stone-100/90 scroll-smooth">
      {children}
    </div>
  );
}
