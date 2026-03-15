export function AuthCard({
  title,
  description,
  children,
}: Readonly<{
  title: string;
  description: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-8 shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-[var(--foreground-muted)]">{description}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
