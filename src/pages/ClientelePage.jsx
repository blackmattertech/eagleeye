import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

const clients = ["TechPark", "Prestige", "MallCorp", "EventPro", "BankSecure", "HealthFirst"];

export default function ClientelePage() {
  return (
    <>
      <SEOHead
        title="Our Clientele | Eagle Eye Watch Security Bangalore"
        description="Trusted by leading organizations across Bangalore — IT parks, retail, events, banking, and healthcare sectors."
        path="/clientele"
      />
      <PageHero
        title="Our Clientele"
        subtitle="Leading organizations across Bangalore trust Eagle Eye Watch Security for professional protection."
        breadcrumb="Clientele"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <p className="mx-auto max-w-2xl text-center text-gray-600">
            From IT parks and retail malls to banks and healthcare facilities, we protect diverse sectors
            with trained guards, CCTV systems, and event security teams.
          </p>
          <section className="mt-12 border-y border-neutral-200 py-12" aria-label="Trusted clients">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 px-4">
              {clients.map((name) => (
                <span key={name} className="text-2xl font-bold text-neutral-200 md:text-3xl">
                  {name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <CTABanner />
    </>
  );
}
