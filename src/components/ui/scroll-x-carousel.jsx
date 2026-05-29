import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollXCarouselContext = React.createContext(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error("useScrollXCarousel must be used within a ScrollXCarousel");
  }
  return context;
}

export function ScrollXCarousel({ children, className, ...props }) {
  const carouselRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn("relative w-full max-w-[100vw]", className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({ className, ...props }) {
  return (
    <div
      className={cn("sticky top-0 left-0 w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRange = ["0%", "-80%"],
  ...props
}) {
  const { scrollYProgress } = useScrollXCarousel();
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <motion.div className={cn("flex w-max", className)} style={{ x, ...style }} {...props} />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn("max-w-full overflow-hidden", className)} {...props}>
      <motion.div
        className={cn("h-full origin-left", progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}
