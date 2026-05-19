import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTABanner({
  title = "Secure Your Premises Today — Get a Free Security Audit",
  subtitle = "Our security experts will assess your site and recommend a tailored protection plan.",
  primaryLabel = "Get Free Quote",
  primaryTo = "/get-quote",
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-primary px-4 py-16 md:py-20">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-normal text-white md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to={primaryTo} className="btn-yellow min-w-[200px]">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
