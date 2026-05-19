import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Guards Deployed" },
  { value: "200+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Operations" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary" aria-label="Company statistics">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-10 text-center md:py-12 ${
              i > 0 ? "md:border-l md:border-white/20" : ""
            } ${i % 2 === 1 ? "border-l border-white/20 md:border-l" : ""}`}
          >
            <p className="text-4xl font-black text-white md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
