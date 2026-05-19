import { Link } from "react-router-dom";
import ServiceBentoCard from "./ServiceBentoCard";
import { homeServicesBento } from "../data/homeServicesBento";

export default function ServicesBentoSection() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              id="services-heading"
              className="text-3xl font-normal leading-tight text-navy md:text-5xl"
            >
              Our Services{" "}
              <span className="font-black text-primary">built for Bangalore</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              From manned guarding to CCTV surveillance — every service tailored to your premises,
              industry, and budget.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View all services →
              </Link>
              <Link to="/get-quote" className="btn-primary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeServicesBento.map((service) => (
            <ServiceBentoCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
