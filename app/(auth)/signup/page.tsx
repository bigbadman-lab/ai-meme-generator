import { AuthCard } from "@/components/auth/auth-card";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <AuthCard
        title="Create account"
        description="Get started with Meme Builder."
      >
        <p className="text-sm text-[var(--foreground-muted)]">
          Signup form will go here.
        </p>
      </AuthCard>
    </main>
  );
}
