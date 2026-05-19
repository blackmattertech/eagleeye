import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-navy px-4 py-16 md:py-20" aria-label="Client testimonials">
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          title="What Our"
          highlight="Clients Say"
          dark
          subtitle="Trusted by businesses and communities across Bangalore."
        />

        <div className="relative mt-12 rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md md:p-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-white/95 md:text-xl">
                &ldquo;{current.text}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-accent-yellow">{current.name}</p>
                  <p className="text-sm text-white/70">
                    {current.role}, {current.company}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    i === index ? "bg-accent-yellow" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
