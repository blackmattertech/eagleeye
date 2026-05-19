import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import { industries } from "../data/industries";
import { services } from "../data/services";
import { BENTO_CLASS, getBentoVariant } from "../utils/bentoVariants";

export default function IndustriesPage() {
  return (
    <>
      <SEOHead
        title="Industry Security Bangalore | IT, Banks, Hospitals"
        description="Security for IT companies, banks, hospitals, schools, retail, malls, warehouses & hotels in Bangalore. Eagle Eye Watch Security."
        path="/industries"
      />
      <PageHero
        title="Industries We Serve"
        subtitle="Sector-specific security for IT parks, banks, hospitals, schools, retail, malls, warehouses, factories, and hotels across Bangalore."
        breadcrumb="Industries"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <p className="mb-12 max-w-3xl text-lg text-gray-600">
            Eagle Eye Watch Security designs programs for every vertical — from corporate and IT company
            campuses to bank branches, hospital wards, school gates, retail floors, mall atriums, warehouse
            yards, construction sites, factory floors, and hotel lobbies.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind, i) => {
              const variant = getBentoVariant(i);
              return (
                <article
                  key={ind.id}
                  id={ind.id}
                  className={`bento-card bento-brackets scroll-mt-28 p-8 ${BENTO_CLASS[variant]}`}
                >
                  <h2 className="text-2xl font-bold md:text-3xl">{ind.title}</h2>
                  <p className="mt-4 leading-relaxed opacity-90">{ind.description}</p>
                  <Link
                    to="/get-quote"
                    className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold underline opacity-90 hover:opacity-100"
                  >
                    Get Industry Quote →
                  </Link>
                </article>
              );
            })}
          </div>

          <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-100 p-8">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Matching Security Services</h2>
            <p className="mt-4 text-gray-600">Explore our core offerings for your industry vertical:</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.slug}
                    className="inline-block rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <CTABanner />
    </>
  );
}
