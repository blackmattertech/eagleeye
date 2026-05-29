import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { whyChooseCards, whyChooseHeading, whyChooseSubheading } from "@/data/whyChooseUs";

export default function WhyChooseSection() {
  return (
    <AuroraBackground
      as="section"
      aria-labelledby="why-heading"
      className="px-4 py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeInOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-4 text-center"
        >
          <h2
            id="why-heading"
            className="text-3xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl"
          >
            {whyChooseHeading}
          </h2>
          <p className="max-w-3xl text-base font-light leading-relaxed text-gray-600 md:text-xl lg:text-2xl">
            {whyChooseSubheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeInOut" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-neutral-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                <card.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.text}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
