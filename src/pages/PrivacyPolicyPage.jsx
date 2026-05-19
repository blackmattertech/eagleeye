import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { BUSINESS } from "../data/config";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Eagle Eye Watch Security"
        description="Privacy policy for Eagle Eye Watch Security — a PSARA licensed security company in Bangalore."
        path="/privacy-policy"
      />
      <PageHero title="Privacy Policy" breadcrumb="Legal" />

      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="text-sm text-gray-500">Last updated: March 2025</p>
          <section className="prose-section mt-8 space-y-8 text-gray-600">
            {[
              {
                title: "1. Introduction",
                body: `${BUSINESS.name}, a security company in Bangalore, operates eagleeyewatchsecurity.com. This Privacy Policy explains how we collect, use, and safeguard your information when you enquire about our security services.`,
              },
              {
                title: "2. Information We Collect",
                body: "We may collect name, phone, email, location details, service requirements, and career application data you voluntarily submit.",
              },
              {
                title: "3. How We Use Information",
                body: "To respond to enquiries, provide quotes, process applications, improve our website, and comply with legal obligations.",
              },
              {
                title: "4. Contact",
                body: `${BUSINESS.name}, ${BUSINESS.address}. Phone: ${BUSINESS.phone}. Email: ${BUSINESS.email}`,
              },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold text-navy">{s.title}</h2>
                <p className="mt-4 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
