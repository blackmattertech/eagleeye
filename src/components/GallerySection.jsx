import { useMemo, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { CircularGallery } from "@/components/ui/circular-gallery";
import { galleryData } from "@/data/galleryData";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

/** Pin scroll distance: one viewport height per gallery image (full 360° rotation). */
export function galleryPinScrollHeightVh(itemCount, prefersReducedMotion) {
  if (itemCount <= 0) return 0;
  if (prefersReducedMotion) {
    return Math.max(200, itemCount * 40);
  }
  return itemCount * 100;
}

export default function GallerySection() {
  const scrollRootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const itemCount = galleryData.length;
  const hasImages = itemCount > 0;

  const pinHeightVh = useMemo(
    () => galleryPinScrollHeightVh(itemCount, prefersReducedMotion),
    [itemCount, prefersReducedMotion]
  );

  return (
    <section
      ref={scrollRootRef}
      className="relative w-full bg-white"
      style={hasImages ? { height: `${pinHeightVh}vh` } : undefined}
      aria-labelledby="gallery-heading"
    >
      <div
        className={
          hasImages
            ? "sticky top-0 flex h-screen w-full flex-col items-center gap-8 overflow-hidden px-4 pt-16"
            : "flex min-h-[40vh] w-full flex-col items-center justify-center px-4 py-16"
        }
      >
        <div className="z-10 w-full shrink-0 px-4">
          <div className="mx-auto max-w-7xl text-center">
            <SectionHeading id="gallery-heading" title="Gallery" />
            <div className="section-divider" />
            <p className="mt-4 text-muted-foreground">
              {hasImages
                ? "Scroll to explore our security services"
                : "Gallery images will appear here once added to public/media/servicescards/"}
            </p>
          </div>
        </div>
        {hasImages ? (
          <div className="min-h-0 w-full flex-1">
            <CircularGallery
              items={galleryData}
              scrollRootRef={scrollRootRef}
              autoRotateSpeed={prefersReducedMotion ? 0 : 0.02}
              radius={520}
              className="h-full min-h-[50vh]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
