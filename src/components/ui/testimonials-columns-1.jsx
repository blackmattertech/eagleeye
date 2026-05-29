import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full max-w-xs rounded-3xl border border-neutral-200 bg-white p-10 shadow-lg shadow-primary/10">
      <p className="text-sm leading-relaxed text-gray-700 md:text-base">{testimonial.text}</p>
      <div className="mt-5 flex items-center gap-2">
        <img
          width={40}
          height={40}
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex flex-col">
          <div className="font-medium leading-5 tracking-tight text-navy">{testimonial.name}</div>
          <div className="leading-5 tracking-tight text-gray-500 opacity-80">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn({ className, testimonials, duration = 10, animate = true }) {
  if (!testimonials.length) return null;

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={animate ? { translateY: "-50%" } : undefined}
        transition={
          animate
            ? {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
            : undefined
        }
        className="flex flex-col gap-6 bg-white pb-6"
      >
        {[0, 1].map((pass) => (
          <Fragment key={pass}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${pass}-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsStaticGrid({ testimonials }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
