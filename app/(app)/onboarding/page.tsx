import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

export default function OnboardingPage() {
  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold">Welcome to Meme Builder</h1>
      <p className="mt-2 text-[var(--foreground-muted)]">
        Complete a few steps to set up your account and start creating memes.
      </p>
    </OnboardingShell>
  );
}
