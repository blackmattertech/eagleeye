import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AnimatedHero({
  className,
  eyebrow,
  titlePrefix,
  rotatingTitles = [],
  staticTitle,
  subtitle,
  primaryLabel = "Get Free Quote",
  primaryTo = "/get-quote",
  secondaryLabel,
  secondaryTo,
  id = "cta-heading",
}) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => rotatingTitles, [rotatingTitles]);
  const useRotation = !staticTitle && titles.length > 0;

  useEffect(() => {
    if (!useRotation) return undefined;

    const timeoutId = setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, useRotation]);

  const isExternalCall = secondaryTo?.startsWith("tel:");

  return (
    <div className={cn("w-full", className)}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-16 md:py-20 lg:py-24">
          {eyebrow && (
            <Button
              variant="secondary"
              size="sm"
              className="pointer-events-none gap-2 rounded-full border border-white/15 bg-white/5 text-gray-200 hover:bg-white/5"
            >
              {eyebrow} <MoveRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}

          <div className="flex flex-col gap-4">
            {useRotation ? (
              <h2
                id={id}
                className="max-w-5xl text-center font-['Bebas_Neue',sans-serif] text-4xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                <span className="block text-gray-100">{titlePrefix}</span>
                <span className="relative mx-auto mt-3 flex h-[1.15em] w-full max-w-5xl justify-center overflow-hidden text-center md:mt-4">
                  {titles.map((title, index) => (
                    <motion.span
                      key={title}
                      className="absolute font-['Bebas_Neue',sans-serif] text-accent-yellow"
                      initial={{ opacity: 0, y: "-100%" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h2>
            ) : (
              <h2
                id={id}
                className="max-w-5xl text-center font-['Bebas_Neue',sans-serif] text-4xl font-bold uppercase leading-[0.95] tracking-wide text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                {staticTitle}
              </h2>
            )}

            {subtitle && (
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed tracking-tight text-gray-400 md:text-lg md:text-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="yellow" className="min-h-[48px] min-w-[200px]">
              <Link to={primaryTo}>
                {primaryLabel} <MoveRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[48px] min-w-[200px] rounded-full border border-white/30 bg-transparent text-gray-100 hover:bg-white/10 hover:text-white"
              >
                {isExternalCall ? (
                  <a href={secondaryTo}>
                    {secondaryLabel} <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link to={secondaryTo}>
                    {secondaryLabel} <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
