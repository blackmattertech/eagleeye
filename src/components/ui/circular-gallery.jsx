import { useState, useEffect, useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * @typedef {Object} GalleryItem
 * @property {string} common
 * @property {string} binomial
 * @property {{ url: string; text: string; pos?: string; by: string }} photo
 */

/**
 * @typedef {Object} CircularGalleryProps
 * @property {GalleryItem[]} items
 * @property {number} [radius]
 * @property {number} [autoRotateSpeed]
 * @property {import('react').RefObject<HTMLElement>} [scrollRootRef] - Tall section wrapper; scroll progress is scoped to this element when set.
 */

/**
 * @param {CircularGalleryProps & import('react').HTMLAttributes<HTMLDivElement>} props
 */
const CircularGallery = forwardRef(function CircularGallery(
  { items, className, radius = 600, autoRotateSpeed = 0.02, scrollRootRef, ...props },
  ref
) {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  /** @type {import('react').MutableRefObject<ReturnType<typeof setTimeout> | null>} */
  const scrollTimeoutRef = useRef(null);
  /** @type {import('react').MutableRefObject<number | null>} */
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const root = scrollRootRef?.current;
      let scrollRotation = 0;

      if (root) {
        const rect = root.getBoundingClientRect();
        const scrollSpan = Math.max(1, root.offsetHeight - window.innerHeight);
        // Sticky pin: rect.top goes 0 → -scrollSpan while the section is locked; maps 0→1 progress.
        const progress = Math.min(1, Math.max(0, -rect.top / scrollSpan));
        // Full carousel rotation (0→360°) across the pinned section; each item spans 360° / N.
        scrollRotation = progress * 360;
      } else {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        scrollRotation = scrollProgress * 360;
      }

      setRotation(scrollRotation);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollRootRef, items.length]);

  useEffect(() => {
    const autoRotate = () => {
      if (!isScrolling) {
        setRotation((prev) => prev + autoRotateSpeed);
      }
      animationFrameRef.current = requestAnimationFrame(autoRotate);
    };

    animationFrameRef.current = requestAnimationFrame(autoRotate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isScrolling, autoRotateSpeed]);

  if (!items?.length) {
    return null;
  }

  const anglePerItem = 360 / items.length;

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Circular 3D Gallery"
      className={cn("relative flex h-full w-full items-center justify-center", className)}
      style={{ perspective: "2000px" }}
      {...props}
    >
      <div
        className="relative h-full w-full"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, i) => {
          const itemAngle = i * anglePerItem;
          const totalRotation = rotation % 360;
          const relativeAngle = (itemAngle + totalRotation + 360) % 360;
          const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
          const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

          return (
            <div
              key={item.photo.url}
              role="group"
              aria-label={item.common}
              className="absolute h-[400px] w-[300px]"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                left: "50%",
                top: "50%",
                marginLeft: "-150px",
                marginTop: "-200px",
                opacity,
                transition: "opacity 0.3s linear",
              }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-lg border border-border bg-card/70 shadow-2xl backdrop-blur-lg">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: item.photo.pos || "center" }}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-xl font-bold">{item.common}</h3>
                  <em className="text-sm italic opacity-80">{item.binomial}</em>
                  <p className="mt-2 text-xs opacity-70">Photo by: {item.photo.by}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
