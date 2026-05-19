import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NumericStat, OperationsStat } from "./AnimatedCounter";

const stats = [
  { type: "numeric", target: 500, suffix: "+", label: "Guards Deployed" },
  { type: "numeric", target: 200, suffix: "+", label: "Clients Served" },
  { type: "numeric", target: 10, suffix: "+", label: "Years Experience" },
  { type: "operations", label: "Operations" },
];

export default function StatsBar() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      className="bg-primary"
      aria-label="Company statistics"
    >
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`px-4 py-10 text-center md:py-12 ${
              i > 0 ? "md:border-l md:border-white/20" : ""
            } ${i % 2 === 1 ? "border-l border-white/20 md:border-l" : ""}`}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <p className="text-4xl font-black tabular-nums text-white md:text-5xl">
              {stat.type === "operations" ? (
                <OperationsStat active={isInView} />
              ) : (
                <NumericStat
                  target={stat.target}
                  suffix={stat.suffix}
                  active={isInView}
                />
              )}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/80">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
