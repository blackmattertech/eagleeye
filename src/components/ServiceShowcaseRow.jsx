import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceShowcaseRow({ item }) {
  const [imgError, setImgError] = useState(false);

  const imageBlock = (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-primary-light shadow-sm">
      {imgError ? (
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-neutral-100 lg:min-h-[320px]">
          <span className="text-sm font-medium text-gray-400">Add {item.image.split("/").pop()}</span>
        </div>
      ) : (
        <img
          src={item.image}
          alt={`${item.title} — Eagle Eye Watch Security Bangalore`}
          className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[320px]"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center px-0 lg:px-4">
      {item.badge && (
        <span className="mb-3 w-fit rounded-full bg-accent-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
          {item.badge}
        </span>
      )}
      <h3 className="text-2xl font-bold text-navy md:text-4xl">{item.title}</h3>
      <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
      <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">{item.description}</p>
      {item.tags?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Service highlights">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Link
        to={item.slug}
        className="btn-primary mt-8 w-fit gap-2"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {item.imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </article>
  );
}
