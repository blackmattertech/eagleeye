import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Clock,
  Users,
  Building2,
  ShoppingBag,
  Home,
  Calendar,
  Landmark,
  Hospital,
  Radio,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import StatsBar from "../components/StatsBar";
import ServiceCard from "../components/ServiceCard";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTABanner from "../components/CTABanner";
import SectionHeading from "../components/SectionHeading";
import HeroWave from "../components/HeroWave";
import { homeServiceCards } from "../data/services";
import { blogPosts } from "../data/blogPosts";
import { KEYWORDS } from "../data/config";

const heroCards = [
  { icon: Shield, label: "500+ Guards Deployed", variant: "bento-blue" },
  { icon: Radio, label: "24/7 Active Surveillance", variant: "bento-yellow" },
  { icon: Users, label: "200+ Happy Clients", variant: "bento-teal" },
];

const usps = [
  {
    icon: Shield,
    title: "PSARA Licensed & Insured",
    text: "PSARA-licensed private security services in Bengaluru with verified credentials and comprehensive liability coverage.",
  },
  {
    icon: Users,
    title: "Trained & Vetted Guards",
    text: "Every security guard undergoes background checks, physical assessment, and scenario-based training.",
  },
  {
    icon: Clock,
    title: "24/7 Command Support",
    text: "Round-the-clock supervision, rapid guard replacement, and incident escalation from our control room.",
  },
  {
    icon: Award,
    title: "10+ Years of Excellence",
    text: "Trusted security company in Bangalore for 10+ years — corporate, residential, and event protection across Karnataka.",
  },
];

const industries = [
  { icon: Building2, label: "Corporate" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Home, label: "Residential" },
  { icon: Calendar, label: "Events" },
  { icon: Landmark, label: "Banks" },
  { icon: Hospital, label: "Hospitals" },
];

const clients = ["TechPark", "Prestige", "MallCorp", "EventPro", "BankSecure", "HealthFirst"];

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 },
  }),
};

function HeroSection() {
  const videoRef = useRef(null);
  const [usePoster, setUsePoster] = useState(false);

  useEffect(() => {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && (conn.saveData || conn.effectiveType === "slow-2g" || conn.effectiveType === "2g")) {
      setUsePoster(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const timer = setTimeout(() => {
      if (video.readyState < 2) setUsePoster(true);
    }, 3000);

    const onCanPlay = () => clearTimeout(timer);
    const onError = () => {
      setUsePoster(true);
      clearTimeout(timer);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      clearTimeout(timer);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden md:min-h-screen">
      {!usePoster ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/media/hero-poster.jpg"
          alt="PSARA licensed security agency in Bengaluru — Eagle Eye Watch patrol team"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-28 lg:grid-cols-2 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-yellow">
            Eagle Eye Watch Security & Services
          </p>
          <h1 className="mt-4 text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl">
            Security Agency in <span className="font-black">Bangalore</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Eagle Eye Watch is among the best security agency in Bangalore choices for private security
            services — guards, CCTV, events, and corporate protection deployed 24/7 across Bengaluru and
            Karnataka.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/get-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        <div className="hidden flex-col gap-4 lg:flex">
          {heroCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                custom={i}
                variants={cardMotion}
                initial="hidden"
                animate="visible"
                className={`bento-card bento-brackets flex items-center gap-4 p-5 ${card.variant}`}
              >
                <Icon className="h-8 w-8 shrink-0 opacity-90" aria-hidden="true" />
                <span className="text-lg font-bold">{card.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
          {heroCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                custom={i}
                variants={cardMotion}
                initial="hidden"
                animate="visible"
                className={`bento-card flex items-center gap-3 p-4 ${card.variant}`}
              >
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="text-sm font-bold">{card.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <HeroWave />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Security Agency in Bangalore | Eagle Eye Watch"
        description="Professional security services in Bangalore — PSARA-licensed guards, CCTV, events & corporate protection. Eagle Eye Watch Security. Free quote."
        keywords={KEYWORDS}
        path="/"
      />
      <LocalBusinessSchema />

      <HeroSection />
      <StatsBar />

      <section className="bg-white px-4 py-16 md:py-24" aria-labelledby="services-heading">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            id="services-heading"
            title="Security Guard Services in"
            highlight="Bangalore"
            subtitle="Private security services in Bangalore — manned guarding, CCTV, events, and corporate protection across Whitefield, Koramangala, Electronic City, and all major zones."
          />
          <div className="section-divider" />

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
            {homeServiceCards.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                className={
                  i < 2
                    ? "lg:col-span-3"
                    : i < 5
                      ? "lg:col-span-2"
                      : "lg:col-span-6 lg:max-w-2xl lg:justify-self-center lg:w-full"
                }
              />
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link to="/services" className="inline-flex min-h-[44px] items-center font-semibold text-primary hover:text-primary-dark">
              View all security services →
            </Link>
          </p>
        </motion.div>
      </section>

      <section className="bg-neutral-100 px-4 py-16 md:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            id="why-heading"
            title="Why Choose"
            highlight="Eagle Eye Watch"
            subtitle="Military-grade discipline meets corporate professionalism."
          />
          <div className="section-divider" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp) => (
              <article
                key={usp.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                  <usp.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{usp.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{usp.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We" highlight="Serve" />
          <div className="section-divider" />
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {industries.map((ind, i) => (
              <Link
                key={ind.label}
                to="/industries"
                className={`bento-card flex min-w-[160px] snap-start flex-col items-center p-6 ${
                  ["bento-blue", "bento-yellow", "bento-white", "bento-coral", "bento-teal", "bento-blue"][i]
                }`}
              >
                <ind.icon className="h-10 w-10 opacity-90" aria-hidden="true" />
                <span className="mt-3 font-bold">{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <CTABanner />

      <section className="bg-neutral-100 px-4 py-16 md:py-24" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Security Insights &" highlight="Resources" />
          <div className="section-divider" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`flex aspect-video items-center justify-center ${
                    ["bg-primary", "bg-accent-yellow", "bg-accent-teal"][i]
                  }`}
                >
                  <Shield
                    className={`h-12 w-12 ${i === 1 ? "text-navy/40" : "text-white/40"}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <time className="text-xs font-semibold uppercase tracking-wider text-primary" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-lg font-bold text-navy">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-primary"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-12" aria-label="Trusted clients">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by Leading Organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 px-4">
          {clients.map((name) => (
            <span key={name} className="text-xl font-bold text-neutral-200">
              {name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
