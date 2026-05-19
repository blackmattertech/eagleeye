import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getBentoVariant, BENTO_CLASS } from "../utils/bentoVariants";

const linkStyles = {
  blue: "text-white/90 hover:text-white",
  yellow: "text-navy/80 hover:text-navy",
  white: "text-primary hover:text-primary-dark",
  coral: "text-white/90 hover:text-white",
  teal: "text-navy/80 hover:text-navy",
};

const iconStyles = {
  blue: "text-white/90",
  yellow: "text-navy",
  white: "text-primary",
  coral: "text-white/90",
  teal: "text-navy",
};

export default function ServiceCard({ service, index = 0, featured = false, className = "" }) {
  const variant = getBentoVariant(index);
  const Icon = service.icon;
  const bentoClass = BENTO_CLASS[variant];

  return (
    <article
      className={`bento-card bento-brackets group flex flex-col p-6 md:p-8 ${bentoClass} ${className}`}
    >
      <Icon className={`h-10 w-10 ${iconStyles[variant]}`} aria-hidden="true" />
      <h3 className="mt-4 text-xl font-bold md:text-2xl">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed opacity-90">{service.overview}</p>
      <Link
        to={service.slug}
        className={`mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold ${linkStyles[variant]}`}
      >
        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
