import { Link } from "react-router-dom";
import {
  homeIndustries,
  industriesProtectBanner,
  industriesProtectHeading,
  industriesProtectStat,
  industriesProtectSubheading,
} from "@/data/homeIndustries";

function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <Link
      to={`/industries#${industry.id}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white p-[30px] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={industry.image}
          alt={`${industry.title} security — Eagle Eye Watch Bangalore`}
          className="size-full object-cover object-top transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
          <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{industry.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function IndustriesProtectSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 md:py-24" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-14">
          <div>
            <h2
              id="industries-heading"
              className="text-3xl font-normal leading-tight text-navy md:text-5xl"
            >
              {industriesProtectHeading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              {industriesProtectSubheading}
            </p>
            <p className="mt-6 inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              {industriesProtectStat}
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm">
            <img
              src={industriesProtectBanner}
              alt="Professional security guards on duty — Eagle Eye Watch Bangalore"
              className="aspect-[16/10] w-full object-cover lg:aspect-[5/3]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homeIndustries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/industries"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
