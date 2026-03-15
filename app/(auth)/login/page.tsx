import { AuthCard } from "@/components/auth/auth-card";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <AuthCard
        title="Log in"
        description="Sign in to your Meme Builder account."
      >
        <p className="text-sm text-[var(--foreground-muted)]">
          Auth form will go here.
        </p>
      </AuthCard>
    </main>
  );
}
