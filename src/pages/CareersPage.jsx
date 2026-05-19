import { useState } from "react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { Shield, Users, Camera } from "lucide-react";
import { inputClass, labelClass } from "../utils/formStyles";

const jobs = [
  {
    id: "security-guard",
    title: "Security Guard",
    location: "Bangalore — Multiple Sites",
    type: "Full-time",
    icon: Shield,
    description:
      "Deploy at corporate, residential, or retail sites. Prior security or defence experience preferred. Training provided.",
  },
  {
    id: "supervisor",
    title: "Security Supervisor",
    location: "Bangalore — Field Operations",
    type: "Full-time",
    icon: Users,
    description:
      "Supervise guard teams, conduct site audits, and manage incident reporting. Minimum 3 years security experience required.",
  },
  {
    id: "cctv-operator",
    title: "CCTV Operator",
    location: "Bangalore — Control Room",
    type: "Full-time / Shift",
    icon: Camera,
    description:
      "Monitor CCTV feeds, verify alerts, and coordinate with patrol teams. Technical aptitude and attention to detail essential.",
  },
];

const benefits = [
  "Competitive salary with overtime pay",
  "Uniform and equipment provided",
  "Professional training & certification",
  "Career growth to supervisor roles",
  "PF & statutory benefits as applicable",
  "Respectful, disciplined work culture",
];

const jobVariants = ["bento-blue", "bento-yellow", "bento-teal"];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Careers | Security Jobs Bangalore"
        description="Join Eagle Eye Watch Security — security guard, supervisor & CCTV operator jobs in Bangalore. Apply today."
        path="/careers"
      />
      <PageHero
        title="Careers at Eagle Eye Watch Security"
        subtitle="Build a respected career in Bangalore's premier private security force."
        breadcrumb="Careers"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Open Positions</h2>
            <div className="section-divider !mx-0 !mt-3 !mb-8" />
            <div className="grid gap-6 md:grid-cols-3">
              {jobs.map((job, i) => {
                const Icon = job.icon;
                return (
                  <article key={job.id} className={`bento-card p-6 ${jobVariants[i]}`}>
                    <Icon className="h-10 w-10 opacity-90" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold">{job.title}</h3>
                    <p className="mt-1 text-sm font-semibold opacity-80">{job.location}</p>
                    <p className="text-xs uppercase tracking-wider opacity-70">{job.type}</p>
                    <p className="mt-3 text-sm opacity-90">{job.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mb-16 rounded-2xl bg-neutral-100 p-8">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Why Work With Us</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl bg-white p-4 text-gray-600 shadow-sm">
                  <Shield className="h-5 w-5 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="apply-heading">
            <h2 id="apply-heading" className="text-2xl font-bold text-navy md:text-3xl">
              Apply Now
            </h2>
            {submitted ? (
              <p className="mt-6 rounded-2xl border border-primary/20 bg-primary-light p-6 text-gray-600">
                Thank you for your application. Our HR team will review and contact shortlisted candidates.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
                <div>
                  <label htmlFor="applicant-name" className={labelClass}>Full Name *</label>
                  <input id="applicant-name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="applicant-phone" className={labelClass}>Phone *</label>
                  <input id="applicant-phone" type="tel" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="position" className={labelClass}>Position *</label>
                  <select id="position" required className={inputClass}>
                    <option value="">Select position</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.id}>{j.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className={labelClass}>Years of Experience</label>
                  <input id="experience" className={inputClass} />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Application
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
