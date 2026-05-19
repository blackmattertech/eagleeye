import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { BUSINESS } from "../data/config";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      body: `By accessing eagleeyewatchsecurity.com or engaging ${BUSINESS.name}, you agree to these Terms & Conditions.`,
    },
    {
      title: "2. Services",
      body: "We provide private security services including manned guarding, CCTV, event security, mobile patrol, and personal protection in Bangalore and Karnataka. Scope is defined in individual agreements.",
    },
    {
      title: "3. Quotes & Contracts",
      body: "Online quote requests are non-binding until confirmed in writing. Service commencement requires site assessment and signed contract terms.",
    },
    {
      title: "4. Governing Law",
      body: "These terms are governed by the laws of India and Karnataka. Disputes are subject to courts in Bangalore.",
    },
    {
      title: "5. Contact",
      body: `${BUSINESS.name} — ${BUSINESS.email} — ${BUSINESS.phone}`,
    },
  ];

  return (
    <>
      <SEOHead
        title="Terms & Conditions | Eagle Eye Security"
        description="Terms and conditions for Eagle Eye Watch Security & Services."
        path="/terms-and-conditions"
      />
      <PageHero title="Terms & Conditions" breadcrumb="Legal" />

      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="text-sm text-gray-500">Last updated: March 2025</p>
          <section className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold text-navy">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-gray-600">{s.body}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
