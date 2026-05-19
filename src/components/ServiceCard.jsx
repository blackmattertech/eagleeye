import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getBentoVariant, BENTO_CLASS } from "../utils/bentoVariants";
import { getServiceCardImage, getServiceCardImageFallback } from "../utils/serviceCardImages";

const iconStyles = {
  blue: "text-white/95",
  yellow: "text-navy",
  white: "text-primary",
  coral: "text-white/95",
  teal: "text-navy",
};

const titleStyles = {
  blue: "text-white",
  yellow: "text-navy",
  white: "text-navy",
  coral: "text-white",
  teal: "text-navy",
};

const descStyles = {
  blue: "text-white/80",
  yellow: "text-navy/75",
  white: "text-gray-600",
  coral: "text-white/80",
  teal: "text-navy/75",
};

export default function ServiceCard({ service, index = 0, className = "" }) {
  const variant = getBentoVariant(index);
  const Icon = service.icon;
  const bentoClass = BENTO_CLASS[variant];
  const [imgSrc, setImgSrc] = useState(getServiceCardImage(index));

  const handleImageError = () => {
    if (!imgSrc.endsWith(".png")) {
      setImgSrc(getServiceCardImageFallback(index));
    }
  };

  return (
    <article className={`service-hover-card group ${bentoClass} ${className}`}>
      <div className={`service-hover-card__front ${bentoClass}`}>
        <Icon className={`service-hover-card__icon ${iconStyles[variant]}`} aria-hidden="true" />
        <h3 className={`mt-4 text-xl font-bold md:text-2xl ${titleStyles[variant]}`}>{service.title}</h3>
        <p className={`service-hover-card__desc mt-2 line-clamp-3 text-sm leading-relaxed ${descStyles[variant]}`}>
          {service.overview}
        </p>
      </div>

      <div className="service-hover-card__image-layer">
        <img
          src={imgSrc}
          alt={`${service.title} — Eagle Eye Watch Security Bangalore`}
          loading="lazy"
          onError={handleImageError}
        />
        <div className="service-hover-card__image-overlay">
          <h3 className="text-lg font-bold text-white md:text-xl">{service.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/85">{service.overview}</p>
          <Link
            to={service.slug}
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-accent-yellow hover:text-white"
          >
            Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
