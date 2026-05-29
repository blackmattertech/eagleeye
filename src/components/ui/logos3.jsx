import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { trustedClients, trustedClientsHeading } from "@/data/trustedClients";

export function Logos3({
  heading = trustedClientsHeading,
  logos = trustedClients,
  className,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollLogos = [...logos, ...logos];

  return (
    <section
      className={cn("border-y border-neutral-200 bg-white py-12", className)}
      aria-label="Trusted clients"
    >
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
        {heading}
      </p>

      <div className="relative mx-auto mt-8 flex max-w-5xl items-center justify-center px-4">
        <Carousel
          opts={{ loop: true, align: "start", dragFree: true }}
          plugins={
            prefersReducedMotion
              ? []
              : [
                  AutoScroll({
                    playOnInit: true,
                    speed: 0.8,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                  }),
                ]
          }
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {scrollLogos.map((logo, index) => (
              <CarouselItem
                key={`${logo.id}-${index}`}
                className="flex basis-auto justify-center pl-0"
              >
                <div className="flex shrink-0 items-center justify-center px-8 sm:px-10">
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={cn("h-7 w-auto opacity-60 grayscale", logo.className)}
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className={cn(
                        "whitespace-nowrap text-xl font-bold text-neutral-200 sm:text-2xl",
                        logo.className
                      )}
                    >
                      {logo.label}
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-16"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-16"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default Logos3;
