import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Card-style mega menu panel (desktop). Parent controls open state and hover handlers.
 */
export default function NavFlyout({ isOpen, leftPanel, gridItems = [], align = "center" }) {
  const alignClass = align === "start" ? "left-0" : "left-1/2 -translate-x-1/2";
  const items = gridItems.slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="region"
          aria-hidden={!isOpen}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`absolute top-full z-50 pt-3 ${alignClass}`}
        >
          <div className="relative min-w-[600px] max-w-[720px]">
            <span
              className="pointer-events-none absolute -top-2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-neutral-200 bg-accent-yellow"
              aria-hidden="true"
            />
            <motion.div
              className="flex overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <motion.div
                className="flex w-[38%] shrink-0 flex-col justify-between bg-accent-yellow p-6 text-navy"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04, duration: 0.2 }}
              >
                <motion.div>
                  <h3 className="text-lg font-bold leading-snug">{leftPanel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/80">{leftPanel.description}</p>
                </motion.div>
                <Link
                  to={leftPanel.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy underline-offset-2 transition-colors hover:text-primary-dark hover:underline"
                >
                  {leftPanel.linkLabel ?? "Learn more"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>

              <div className="grid flex-1 grid-cols-2 gap-3 bg-white p-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item.href + item.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="group block h-full rounded-lg p-3 transition-colors hover:bg-primary-light"
                    >
                      <span className="text-sm font-semibold text-navy group-hover:text-primary">
                        {item.title}
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
