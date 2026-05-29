import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  TestimonialsStaticGrid,
} from "@/components/ui/testimonials-columns-1";
import { testimonials, testimonialsHeading, testimonialsSubheading } from "@/data/testimonials";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export default function TestimonialsCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative bg-white px-4 py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center"
        >
          <div className="rounded-lg border border-neutral-200 px-4 py-1 text-sm font-medium text-gray-600">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="mt-5 text-3xl font-bold tracking-tighter text-navy md:text-4xl lg:text-5xl"
          >
            {testimonialsHeading}
          </h2>
          <p className="mt-5 max-w-3xl text-base text-gray-600 opacity-75 md:text-lg">
            {testimonialsSubheading}
          </p>
        </motion.div>

        {prefersReducedMotion ? (
          <div className="mt-10">
            <TestimonialsStaticGrid testimonials={testimonials} />
          </div>
        ) : (
          <div className="mx-auto mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        )}
      </div>
    </section>
  );
}
