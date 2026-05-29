import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import GalleryScrollCarousel from "../components/GalleryScrollCarousel";
import GalleryFooterText from "../components/GalleryFooterText";
import { galleryHeading, gallerySubheading, gallerySlides } from "@/data/gallerySlides";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function GalleryPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasSlides = gallerySlides.length > 0;

  return (
    <>
      <SEOHead
        title="Security Gallery | Eagle Eye Watch Security Bangalore"
        description="View our security operations gallery — guard deployments, CCTV installations, event security, and corporate protection across Bangalore."
        path="/gallery"
      />
      <PageHero
        title={galleryHeading}
        subtitle={hasSlides ? gallerySubheading : undefined}
        breadcrumb="Gallery"
      />

      <main className="bg-white">
        {hasSlides ? (
          <>
            <GalleryScrollCarousel prefersReducedMotion={prefersReducedMotion} />
            <GalleryFooterText />
          </>
        ) : (
          <p className="px-4 py-12 text-center text-gray-500">
            Place images in public/media/servicescards/ and run npm run dev to regenerate the gallery.
          </p>
        )}
      </main>

      <CTABanner />
    </>
  );
}
