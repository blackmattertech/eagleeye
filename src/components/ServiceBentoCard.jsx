import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variantStyles = {
  blue: {
    card: "bento-blue",
    iconWrap: "bg-navy/30 text-accent-yellow",
    link: "text-accent-yellow hover:text-white",
    tag: "bg-white/15 text-white",
    badge: "bg-accent-yellow text-navy",
  },
  white: {
    card: "bento-white",
    iconWrap: "bg-primary-light text-primary",
    link: "text-primary hover:text-primary-dark",
    tag: "bg-neutral-100 text-navy",
    badge: "bg-primary text-white",
  },
  navy: {
    card: "bento-navy",
    iconWrap: "bg-white/10 text-accent-teal",
    link: "text-accent-teal hover:text-white",
    tag: "bg-white/10 text-white/90",
    badge: "bg-accent-yellow text-navy",
  },
  yellow: {
    card: "bento-yellow",
    iconWrap: "bg-navy/10 text-navy",
    link: "text-navy hover:text-primary",
    tag: "bg-navy/10 text-navy",
    badge: "bg-navy text-white",
  },
  teal: {
    card: "bento-teal",
    iconWrap: "bg-navy/10 text-navy",
    link: "text-navy hover:text-primary",
    tag: "bg-navy/10 text-navy",
    badge: "bg-navy text-white",
  },
};

export default function ServiceBentoCard({ service }) {
  const Icon = service.icon;
  const styles = variantStyles[service.variant] || variantStyles.white;

  return (
    <article
      className={`bento-card group flex flex-col p-6 ${styles.card} ${service.gridClass} ${
        service.featured ? "min-h-[280px] lg:min-h-full" : "min-h-[220px]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.iconWrap}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        {service.badge && (
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}
          >
            {service.badge}
          </span>
        )}
      </div>

      <h3
        className={`mt-4 font-bold leading-tight ${
          service.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
        }`}
      >
        {service.title}
      </h3>

      <p className={`mt-2 flex-1 text-sm leading-relaxed opacity-90 ${service.featured ? "md:text-base" : ""}`}>
        {service.description}
      </p>

      {service.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${styles.tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={service.slug}
        className={`mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold ${styles.link}`}
      >
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
