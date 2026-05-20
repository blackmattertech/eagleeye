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
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import TextType from "../components/TextType";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import StatsBar from "../components/StatsBar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTABanner from "../components/CTABanner";
import SectionHeading from "../components/SectionHeading";
import AboutMarqueeSection from "../components/AboutMarqueeSection";
import GallerySection from "../components/GallerySection";
import ServiceShowcaseRow from "../components/ServiceShowcaseRow";
import { homeServiceShowcase } from "../data/homeServiceShowcase";
import { blogPosts } from "../data/blogPosts";
import { KEYWORDS } from "../data/config";

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
    <section className="relative min-h-screen overflow-hidden">
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

      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TextType
          as="h1"
          text="Eagle Eye is On — Security Services in Bangalore You Can Count On, Round the Clock"
          className="max-w-4xl px-4 text-center font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] text-3xl md:text-5xl lg:text-6xl leading-tight"
          typingSpeed={40}
          pauseDuration={2500}
          deletingSpeed={30}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-white"
          startOnVisible={true}
          textColors={["#ffffff"]}
        />
      </motion.div>
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

      <section
        id="services"
        className="bg-white px-4 py-16 md:py-24"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading id="services-heading" title="Our" highlight="Services" />
          <div className="section-divider" />
          <div className="mt-12 space-y-16 md:space-y-24">
            {homeServiceShowcase.map((item) => (
              <ServiceShowcaseRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <AboutMarqueeSection />

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

      <GallerySection />

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
