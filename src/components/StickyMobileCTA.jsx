import { BUSINESS } from "../data/config";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-40 flex gap-2 border-t border-neutral-200 bg-white p-2 md:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
      >
        📞 Call Now
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsappTel}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
