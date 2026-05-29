import { AnimatedHero } from "@/components/ui/animated-hero";
import { BUSINESS } from "@/data/config";
import {
  ctaDescription,
  ctaEyebrow,
  ctaHeading,
  ctaRotatingTitles,
  ctaTitlePrefix,
} from "@/data/ctaSection";

export default function CTABanner({
  eyebrow = ctaEyebrow,
  title = ctaHeading,
  titlePrefix = ctaTitlePrefix,
  rotatingTitles = ctaRotatingTitles,
  subtitle = ctaDescription,
  primaryLabel = "Get Free Quote",
  primaryTo = "/get-quote",
  secondaryLabel = "Call Our Team",
  secondaryTo = `tel:${BUSINESS.phoneTel}`,
  staticTitle = false,
}) {
  const useStaticTitle = staticTitle || title !== ctaHeading;

  return (
    <section className="relative overflow-hidden bg-black" aria-labelledby="cta-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <AnimatedHero
        eyebrow={eyebrow}
        titlePrefix={titlePrefix}
        rotatingTitles={useStaticTitle ? [] : rotatingTitles}
        staticTitle={useStaticTitle ? title : undefined}
        subtitle={subtitle}
        primaryLabel={primaryLabel}
        primaryTo={primaryTo}
        secondaryLabel={secondaryLabel}
        secondaryTo={secondaryTo}
      />
    </section>
  );
}
