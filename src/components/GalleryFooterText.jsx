import { Link } from "react-router-dom";
import { galleryFooterIntro, galleryFooterOutro } from "@/data/gallerySlides";

export default function GalleryFooterText() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-4 text-center md:pb-20">
      <p className="text-base leading-relaxed text-gray-600 md:text-lg">{galleryFooterIntro}</p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        {galleryFooterOutro}{" "}
        <Link to="/contact" className="font-semibold text-primary hover:text-primary-dark">
          Contact us today →
        </Link>
      </p>
    </div>
  );
}
