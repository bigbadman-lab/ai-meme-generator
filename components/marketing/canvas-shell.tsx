import { CanvasBackground } from "./canvas-background";

export function CanvasShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CanvasBackground />
      <div className="relative min-h-screen pb-24 text-[var(--canvas-heading)] scroll-smooth">
        {children}
      </div>
    </>
  );
}
