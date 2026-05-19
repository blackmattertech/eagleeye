import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Security Services Bangalore | All Services"
        description="Full range of security services Bangalore — guards, CCTV, events, corporate, residential, patrol & personal protection."
        path="/services"
      />
      <PageHero
        title="Security Services in Bangalore"
        subtitle="From manned guarding to CCTV surveillance and mobile patrol — Eagle Eye Watch Security delivers end-to-end protection."
        breadcrumb="Services"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <p className="mb-12 max-w-3xl text-lg text-gray-600">
            Eagle Eye Watch delivers private security services Bangalore businesses and communities trust —
            eight core service lines for corporate, residential, retail, and event environments across
            Karnataka. Select a service below for detailed information, or{" "}
            <Link to="/get-quote" className="font-semibold text-primary hover:text-primary-dark">
              request a free quote
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </main>

      <CTABanner />
    </>
  );
}
