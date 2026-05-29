import SectionHeading from "./SectionHeading";
import GalleryScrollCarousel from "./GalleryScrollCarousel";
import GalleryFooterText from "./GalleryFooterText";
import { galleryHeading, gallerySubheading, gallerySlides } from "@/data/gallerySlides";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function GallerySection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasSlides = gallerySlides.length > 0;

  return (
    <section className="relative w-full bg-white" aria-labelledby="gallery-heading">
      <div className="px-4 pt-16 pb-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            id="gallery-heading"
            title={galleryHeading}
            subtitle={
              hasSlides
                ? gallerySubheading
                : "Add images to public/media/servicescards/ (1.jpeg, 2.png, …) then restart the dev server."
            }
          />
          <div className="section-divider" />
        </div>
      </div>

      {hasSlides ? (
        <>
          <GalleryScrollCarousel prefersReducedMotion={prefersReducedMotion} />
          <GalleryFooterText />
        </>
      ) : (
        <div className="mx-auto max-w-lg px-4 pb-20 text-center text-gray-500">
          <p>No gallery images found yet.</p>
        </div>
      )}
    </section>
  );
}
