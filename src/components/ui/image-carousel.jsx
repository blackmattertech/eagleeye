import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CARD_GAP = 24;

export function ImageCarouselCard({ image, category, title, className }) {
  return (
    <div
      data-carousel-card
      className={cn(
        "relative h-[420px] w-[min(85vw,280px)] shrink-0 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:h-[480px] sm:w-[356px]",
        className
      )}
    >
      <img src={image} alt={title} className="size-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        {category && (
          <span className="text-xs font-medium uppercase tracking-widest text-white/80">{category}</span>
        )}
        <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{title}</h3>
      </div>
    </div>
  );
}

function CarouselCardWrapper({ item, children }) {
  if (item.href) {
    return (
      <Link to={item.href} className="shrink-0 cursor-pointer">
        {children}
      </Link>
    );
  }

  if (item.onClick) {
    return (
      <button type="button" onClick={item.onClick} className="shrink-0 cursor-pointer text-left">
        {children}
      </button>
    );
  }

  return children;
}

export function ImageCarousel({ items = [], className, prefersReducedMotion = false, durationMultiplier = 3 }) {
  const containerRef = useRef(null);
  const [stride, setStride] = useState(380);

  useEffect(() => {
    const measure = () => {
      const card = containerRef.current?.querySelector("[data-carousel-card]");
      if (card) {
        setStride(card.offsetWidth + CARD_GAP);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  if (!items.length) return null;

  const loopItems = [...items, ...items];
  const scrollDistance = items.length * stride;
  const duration = Math.max(items.length * durationMultiplier, 12);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "flex gap-6 overflow-x-auto pb-4 pl-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]",
          className
        )}
      >
        {items.map((item, index) => (
          <CarouselCardWrapper key={item.id ?? index} item={item}>
            <ImageCarouselCard image={item.image} category={item.category} title={item.title} />
          </CarouselCardWrapper>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden py-12 md:py-16", className)}
      aria-label="Image carousel"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[150px] bg-gradient-to-r from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[150px] bg-gradient-to-l from-white to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="flex items-center pl-6"
        style={{ gap: `${CARD_GAP}px` }}
        animate={{ x: [0, -scrollDistance] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {loopItems.map((item, index) => (
          <CarouselCardWrapper key={`${item.id ?? item.title}-${index}`} item={item}>
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ImageCarouselCard image={item.image} category={item.category} title={item.title} />
            </motion.div>
          </CarouselCardWrapper>
        ))}
      </motion.div>
    </div>
  );
}
