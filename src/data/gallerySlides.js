/**
 * Scroll gallery slides — images from galleryManifest + copy from services where available.
 */
import manifest from "./galleryManifest.json";
import { services } from "./services";

export const galleryHeading = "Our security operations in action — Bangalore";
export const gallerySubheading =
  "Real deployments. Real locations. See how we protect corporates, residential complexes, hospitals, malls, and events across Bangalore every day.";
export const galleryFooterIntro =
  "We are a trusted security agency in Bangalore serving 200+ clients across IT parks, residential societies, hospitals, malls, and events. Our gallery documents real field operations — security guard deployments in Bangalore, CCTV control rooms, professional housekeeping services, and event security management.";
export const galleryFooterOutro =
  "Every image represents a live contract, a trained team, and a secured location. Looking for reliable security services in Bangalore for your office, apartment complex, mall, or event?";

function filenameToTitle(filename) {
  const base = filename.replace(/\.[^.]+$/, "");
  return `Security Service ${base}`;
}

export function buildGallerySlides() {
  return manifest.map((entry, index) => {
    const service = services[index % services.length];
    const fallbackTitle = filenameToTitle(entry.filename);

    return {
      id: `gallery-${entry.filename}`,
      title: service?.shortTitle ?? service?.title ?? fallbackTitle,
      description: service?.overview ?? "Professional security services in Bangalore by Eagle Eye Watch Security.",
      type: service?.shortTitle ?? "Security",
      services: service?.features?.slice(0, 3) ?? ["Guards", "Patrol", "CCTV"],
      imageUrl: entry.url,
      href: service?.slug ?? "/services",
    };
  });
}

export const gallerySlides = buildGallerySlides();
