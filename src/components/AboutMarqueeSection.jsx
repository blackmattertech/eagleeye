import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const MARQUEE_LINES = [
  {
    text: "Police Verified Guards • Trusted Across Bangalore • 24/7 Security Operations",
    variant: "outline-navy",
    direction: "ltr",
  },
  {
    text: "Professional Security Guards • Event Bouncers • Housekeeping & Facility Management Services",
    variant: "outline-white",
    direction: "rtl",
  },
  {
    text: "Protecting Apartments, Offices & Events Across Bangalore with Discipline, Trust & Experience",
    variant: "outline-navy",
    direction: "ltr",
  },
];

function textClass(variant) {
  if (variant === "outline-white") {
    return "marquee-text-outline marquee-text-outline-white";
  }
  if (variant === "outline-navy") {
    return "marquee-text-outline marquee-text-outline-navy";
  }
  return "marquee-text-outline marquee-text-outline-navy";
}

function MarqueeRow({ text, variant, direction }) {
  const textClassName = textClass(variant);
  const animClass =
    direction === "rtl" ? "marquee-animate-rtl" : "marquee-animate-ltr";

  return (
    <div className="marquee-row" aria-hidden="true">
      <div className={`marquee-track ${animClass}`}>
        <span className={textClassName}>{text}</span>
        <span className={textClassName}>{text}</span>
      </div>
    </div>
  );
}

function StaticLine({ text, variant }) {
  return (
    <p className={`${textClass(variant)} marquee-text-static`}>{text}</p>
  );
}

function MarqueeHeroImage() {
  return (
    <div className="about-marquee-hero pointer-events-none" aria-hidden="true">
      <img
        src="/media/servicescards/marquee.png"
        alt=""
        className="about-marquee-hero-img"
        width={640}
        height={380}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function AboutMarqueeSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [topLine, middleLine, bottomLine] = MARQUEE_LINES;

  return (
    <section
      id="about"
      className="about-marquee-section relative box-border overflow-hidden px-4 py-16 md:py-24 h-[38.5rem] min-h-[38.5rem] max-h-[38.5rem] md:h-auto md:min-h-[53rem] md:max-h-none"
      aria-label="About Eagle Eye Watch"
    >
      <div className="about-dot-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div className="sr-only">
        {MARQUEE_LINES.map((line) => (
          <p key={line.text}>{line.text}</p>
        ))}
      </div>

      <div className="about-marquee-text pointer-events-none" aria-hidden="true">
        {prefersReducedMotion ? (
          <div className="about-marquee-static flex flex-col items-center justify-center gap-0.5 h-full w-full text-center">
            <StaticLine {...topLine} />
            <StaticLine {...middleLine} />
            <StaticLine {...bottomLine} />
          </div>
        ) : (
          <div className="about-marquee-animated flex h-full w-full flex-col justify-center gap-0.5">
            <MarqueeRow {...topLine} />
            <MarqueeRow {...middleLine} />
            <MarqueeRow {...bottomLine} />
          </div>
        )}
      </div>

      <MarqueeHeroImage />
    </section>
  );
}
