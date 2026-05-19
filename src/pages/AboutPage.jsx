import { Award, Shield, Target, Eye } from "lucide-react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

const team = [
  { name: "Col. Ravi Shankar (Retd.)", role: "Founder & CEO", bio: "30+ years in defence and private security operations across South India." },
  { name: "Anita Rao", role: "Director of Operations", bio: "Expert in guard deployment, training standards, and client SLA management." },
  { name: "Karthik Menon", role: "Head of Technology", bio: "Leads CCTV integration, control room systems, and digital reporting." },
  { name: "Suresh Babu", role: "Chief Training Officer", bio: "Designs curriculum for guard certification and armed response protocols." },
];

const certifications = [
  "PSARA License — Karnataka",
  "ISO 9001:2015 Quality Management",
  "Fire Safety & First Aid Certified Personnel",
  "Armed Guard Licensing — State Approved",
  "GST Registered Security Services Provider",
];

const milestones = [
  { year: "2014", event: "Eagle Eye Watch Security founded in Bangalore with 25 guards." },
  { year: "2016", event: "Expanded to corporate security for IT parks in Whitefield and ORR." },
  { year: "2018", event: "Launched CCTV division — 100+ installations across Karnataka." },
  { year: "2020", event: "Crossed 300 deployed guards; opened 24/7 control room." },
  { year: "2022", event: "Event security division secured 50+ major Bangalore events." },
  { year: "2024", event: "500+ guards deployed; 200+ active client contracts statewide." },
];

const awards = [
  "Excellence in Corporate Security — Bangalore Business Awards 2023",
  "Best Security Training Program — Karnataka Safety Summit 2022",
  "Top Rated Security Agency — Client Choice Awards 2024",
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="Best Security Company in Bangalore | About Eagle Eye"
        description="Trusted security agency in Bangalore since 2014. PSARA licensed security agency Bangalore with 10+ years experience. Meet our leadership team."
        path="/about"
      />
      <PageHero
        title="Best Security Company in Bangalore"
        subtitle="A trusted security agency built on discipline, integrity, and operational excellence across Bengaluru."
        breadcrumb="About Us"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <section id="story" className="mb-20">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Our Story</h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Eagle Eye Watch Security & Services was founded in Bangalore with a single mission: deliver
                military-grade discipline and corporate-grade professionalism to every client site. As a
                PSARA licensed security agency Bangalore businesses trust, we have grown from 25 guards to
                one of the city&apos;s most respected security company in Bangalore portfolios.
              </p>
              <p>
                For more than 10 years, we have served corporate campuses, retail chains, residential
                societies, hospitals, banks, and event venues with integrated solutions — security guards,
                CCTV surveillance, mobile patrol, and personal protection officers under one accountable
                command structure.
              </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-neutral-200 bg-neutral-100 p-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-xl font-bold text-navy">Our Mission</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Protect people, property, and peace of mind through trained personnel and intelligent technology.
                  </p>
                </article>
                <article className="rounded-2xl border border-neutral-200 bg-primary-light p-6">
                  <Eye className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-xl font-bold text-navy">Our Vision</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    To be South India&apos;s most trusted name in security services — synonymous with reliability.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section id="team" className="mb-20 bg-neutral-100 -mx-4 px-4 py-16 md:mx-0 md:rounded-2xl md:px-8">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Leadership Team</h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <article key={member.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light">
                    <Shield className="h-8 w-8 text-primary/50" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="mb-20">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Licenses & Certifications</h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                  <Award className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-gray-600">{cert}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="milestones" className="mb-20">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Company Timeline</h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <div className="space-y-6 border-l-2 border-primary/30 pl-8">
              {milestones.map((m) => (
                <article key={m.year} className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary" />
                  <time className="text-2xl font-black text-primary">{m.year}</time>
                  <p className="mt-1 text-gray-600">{m.event}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-3xl font-bold text-navy md:text-4xl">
              Awards & Recognition
            </h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={award} className="flex gap-3 rounded-2xl border border-neutral-200 bg-accent-yellow/20 p-4 text-gray-700">
                  <Award className="h-6 w-6 shrink-0 text-navy" />
                  {award}
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
