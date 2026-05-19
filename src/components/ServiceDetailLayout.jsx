import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import SEOHead from "./SEOHead";
import PageHero from "./PageHero";
import CTABanner from "./CTABanner";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { SITE_URL } from "../data/config";

export default function ServiceDetailLayout({ service }) {
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview,
    provider: {
      "@type": "LocalBusiness",
      name: "Eagle Eye Watch Security & Services",
    },
    areaServed: "Bangalore",
    url: `${SITE_URL}${service.slug}`,
  };

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        path={service.slug}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <PageHero
        title={service.pageH1 || service.heroTitle || service.title}
        subtitle={service.overview}
        breadcrumb="Services"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <article>
            {service.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-2xl font-bold text-navy md:text-3xl">{section.heading}</h2>
                <div className="section-divider !mx-0 !mt-3 !mb-6" />
                {section.body.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-gray-600">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <section className="rounded-2xl border border-neutral-200 bg-primary-light p-8">
              <h2 className="text-2xl font-bold text-navy">What&apos;s Included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Related Security Services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link to="/services" className="font-semibold text-primary hover:text-primary-dark">
                View all security services in Bangalore →
              </Link>
            </p>
          </section>
        </div>
      </main>

      <CTABanner
        title={`Request ${service.shortTitle} — Free Quote`}
        subtitle="Tell us about your site and we'll deploy the right team within 48 hours."
      />
    </>
  );
}
