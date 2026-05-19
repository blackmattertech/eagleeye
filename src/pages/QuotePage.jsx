import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { services } from "../data/services";
import { inputClass, labelClass } from "../utils/formStyles";

const steps = ["Service", "Location", "Contact", "Confirm"];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: "",
    location: "",
    duration: "",
    guards: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const selectedService = services.find((s) => s.id === form.service);

  return (
    <>
      <SEOHead
        title="Free Security Quote Bangalore | Eagle Eye"
        description="Request a free security quote in Bangalore. Guards, CCTV, events & corporate security — Eagle Eye Watch Security responds within 24hrs."
        path="/get-quote"
      />
      <PageHero
        title="Get a Free Security Quote"
        subtitle="Tell us about your requirements — our Bangalore team will respond within 24 hours."
        breadcrumb="Quote"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
          <nav aria-label="Quote form progress" className="mb-10">
            <ol className="flex justify-between">
              {steps.map((label, i) => (
                <li
                  key={label}
                  className={`flex flex-1 flex-col items-center text-xs font-semibold uppercase tracking-wider ${
                    i <= step ? "text-primary" : "text-gray-400"
                  }`}
                >
                  <span
                    className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      i <= step ? "border-primary bg-primary-light text-primary" : "border-neutral-200 text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="hidden sm:block">{label}</span>
                </li>
              ))}
            </ol>
          </nav>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-navy">Select Service Type</h2>
                <div className="mt-6 grid gap-3">
                  {services.map((s) => (
                    <label
                      key={s.id}
                      className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-colors ${
                        form.service === s.id
                          ? "border-primary bg-primary-light"
                          : "border-neutral-200 hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        checked={form.service === s.id}
                        onChange={() => update("service", s.id)}
                        className="accent-primary"
                      />
                      <span className="font-medium text-navy">{s.title}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-navy">Location & Duration</h2>
                <div>
                  <label htmlFor="location" className={labelClass}>Site Location in Bangalore *</label>
                  <input
                    id="location"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    required
                    placeholder="e.g. Whitefield, Koramangala"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="duration" className={labelClass}>Contract Duration *</label>
                  <select
                    id="duration"
                    value={form.duration}
                    onChange={(e) => update("duration", e.target.value)}
                    required
                    className={inputClass}
                  >
                    <option value="">Select duration</option>
                    <option value="1-day">Single Day / Event</option>
                    <option value="1-month">1 Month</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12+ Months</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guards" className={labelClass}>Number of Guards / Personnel</label>
                  <input
                    id="guards"
                    value={form.guards}
                    onChange={(e) => update("guards", e.target.value)}
                    placeholder="e.g. 4 guards, 2 shifts"
                    className={inputClass}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-navy">Your Contact Details</h2>
                <div>
                  <label htmlFor="qname" className={labelClass}>Full Name *</label>
                  <input id="qname" value={form.name} onChange={(e) => update("name", e.target.value)} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="qphone" className={labelClass}>Phone *</label>
                  <input id="qphone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="qemail" className={labelClass}>Email</label>
                  <input id="qemail" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="qnotes" className={labelClass}>Additional Notes</label>
                  <textarea id="qnotes" value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={4} className={`${inputClass} py-3`} />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-navy">Confirm Your Request</h2>
                <dl className="mt-6 space-y-3 rounded-2xl border border-neutral-200 bg-neutral-100 p-6 text-sm">
                  {[
                    ["Service", selectedService?.title || "—"],
                    ["Location", form.location || "—"],
                    ["Duration", form.duration || "—"],
                    ["Personnel", form.guards || "—"],
                    ["Contact", `${form.name} · ${form.phone}`],
                  ].map(([dt, dd]) => (
                    <div key={dt} className="flex justify-between gap-4">
                      <dt className="text-gray-500">{dt}</dt>
                      <dd className="text-right font-medium text-navy">{dd}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm text-gray-600">
                  By submitting, you agree to be contacted by Eagle Eye Watch Security regarding your
                  security requirements in Bangalore.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 flex gap-4">
            {step > 0 && (
              <button type="button" onClick={back} className="btn-secondary min-h-[44px] flex-1">
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={step === 0 && !form.service}
                className="btn-primary min-h-[44px] flex-1 disabled:opacity-50"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={() => alert("Quote request submitted! Our team will contact you within 24 hours.")}
                className="btn-primary min-h-[44px] flex-1"
              >
                Submit Quote Request
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
