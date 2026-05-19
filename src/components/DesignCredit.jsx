const CREDIT_URL = "https://blackmattertech.com";

export default function DesignCredit() {
  return (
    <a
      href={CREDIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto fixed bottom-20 left-4 z-30 block font-sans uppercase text-accent-yellow transition-opacity hover:opacity-90 sm:bottom-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.15)]"
      aria-label="Design by BlackMatter Technologies — visit blackmattertech.com"
    >
      <span className="block text-[10px] font-bold tracking-wide">Design by</span>
      <span className="mt-0.5 block text-[11px] font-bold leading-snug tracking-tight md:text-xs">
        <span className="block sm:inline">BlackMatter</span>
        <span className="block sm:inline">
          <span className="hidden sm:inline"> </span>
          Technologies
        </span>
      </span>
    </a>
  );
}
