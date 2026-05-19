import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative border-b border-neutral-200 bg-primary-light px-4 pb-16 pt-20 md:pb-20 md:pt-24">
      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {breadcrumb && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {breadcrumb}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-normal text-navy md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-lg text-gray-600 md:text-xl">{subtitle}</p>}
      </motion.div>
    </section>
  );
}
