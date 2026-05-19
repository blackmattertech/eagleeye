import { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { BUSINESS } from "../data/config";
import { services } from "../data/services";
import { inputClass, labelClass } from "../utils/formStyles";
import { serviceAreas } from "../data/serviceAreas";
import { contactFaqs as faqs } from "../data/faqs";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Security Agency in Bangalore Contact | Eagle Eye"
        description="Contact our security agency in Bangalore for quotes, deployments & consultations. Phone, WhatsApp & email."
        path="/contact"
      />
      <PageHero
        title="Security Agency in Bangalore — Contact Us"
        subtitle="Looking for security services near me in Bengaluru? Reach our team for quotes, guard deployments, and site assessments."
        breadcrumb="Contact"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <section aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-navy md:text-3xl">
                Send Us a Message
              </h2>
              {submitted ? (
                <p className="mt-6 rounded-2xl border border-primary/20 bg-primary-light p-6 text-gray-600">
                  Thank you for contacting Eagle Eye Watch Security. Our team will respond within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input id="phone" name="phone" type="tel" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>Service Required</label>
                    <select id="service" name="service" className={inputClass}>
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea id="message" name="message" rows={5} className={`${inputClass} py-3`} />
                  </div>
                  <button type="submit" className="btn-primary w-full">Submit Enquiry</button>
                </form>
              )}
            </section>

            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-2xl font-bold text-navy md:text-3xl">
                Get in Touch
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  {BUSINESS.address}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${BUSINESS.phoneTel}`} className="text-gray-600 hover:text-primary">
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-gray-600 hover:text-primary">
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  {BUSINESS.hours}
                </li>
              </ul>
              <a
                href={`https://wa.me/${BUSINESS.whatsappTel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[#25D366] px-6 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10"
              >
                WhatsApp: {BUSINESS.whatsapp}
              </a>
              <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-neutral-200">
                <iframe
                  title="Eagle Eye Watch Security office location on Google Maps"
                  src="https://maps.google.com/maps?q=Bangalore%2C%20Karnataka&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>

          <section className="mt-20" aria-labelledby="service-areas-heading">
            <h2 id="service-areas-heading" className="text-2xl font-bold text-navy md:text-3xl">
              Service Areas Across Bangalore
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600">
              Searching security guards near me Bangalore or security agency near me? Eagle Eye deploys
              trained teams across every major zone below — with local supervisors for faster response
              and 24/7 backup from our command centre.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <li
                  key={area.split("—")[0].trim()}
                  className="rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-gray-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-navy md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-2">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <button
                    type="button"
                    className="flex min-h-[44px] w-full items-center justify-between px-5 py-3 text-left font-medium text-navy"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="border-t border-neutral-100 px-5 py-3 text-sm text-gray-600">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
