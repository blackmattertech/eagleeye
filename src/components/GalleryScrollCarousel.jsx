import { ImageCarousel } from "@/components/ui/image-carousel";
import { gallerySlides } from "@/data/gallerySlides";

export default function GalleryScrollCarousel({ slides = gallerySlides, prefersReducedMotion = false }) {
  if (!slides.length) return null;

  const carouselItems = slides.map((slide) => ({
    id: slide.id,
    image: slide.imageUrl,
    category: slide.type?.toUpperCase(),
    title: slide.title,
    href: slide.href,
  }));

  return <ImageCarousel items={carouselItems} prefersReducedMotion={prefersReducedMotion} />;
}
