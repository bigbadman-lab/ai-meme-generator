import { PageShell } from "@/components/marketing/page-shell";
import { HeroSection } from "@/components/marketing/hero-section";
import { GallerySection } from "@/components/marketing/gallery-section";
import { ShowcaseBentoSection } from "@/components/marketing/showcase-bento-section";
import { FounderSection } from "@/components/marketing/founder-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { FooterSection } from "@/components/marketing/footer-section";

/**
 * Homepage sections (order must be preserved for SEO and structure):
 * 1. Hero
 * 2. Gallery
 * 3. Showcase
 * 4. Founder
 * 5. Pricing
 * 6. FAQ
 * 7. Footer
 */
export default function MarketingPage() {
  return (
    <PageShell>
      <HeroSection />
      <GallerySection />
      <ShowcaseBentoSection />
      <FounderSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </PageShell>
  );
}
