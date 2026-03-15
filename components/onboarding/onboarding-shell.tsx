export function OnboardingShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-8">
        {children}
      </div>
    </main>
  );
}
