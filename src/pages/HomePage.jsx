import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import TextType from "../components/TextType";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import StatsBar from "../components/StatsBar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTABanner from "../components/CTABanner";
import Logos3 from "../components/ui/logos3";
import SectionHeading from "../components/SectionHeading";
import HeroVideoBackground from "../components/HeroVideoBackground";
import AboutMarqueeSection from "../components/AboutMarqueeSection";
import GallerySection from "../components/GallerySection";
import IndustriesProtectSection from "../components/IndustriesProtectSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ServiceShowcaseRow from "../components/ServiceShowcaseRow";
import { homeServiceShowcase, servicesSectionHeading, servicesSectionSubheading } from "../data/homeServiceShowcase";
import { blogPosts } from "../data/blogPosts";
import { KEYWORDS } from "../data/config";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroVideoBackground
        alt="PSARA licensed security agency in Bengaluru — Eagle Eye Watch patrol team"
      />

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
          <SectionHeading
            id="services-heading"
            title={servicesSectionHeading}
            subtitle={servicesSectionSubheading}
          />
          <div className="section-divider" />
          <div className="mt-12 space-y-16 md:space-y-24">
            {homeServiceShowcase.map((item) => (
              <ServiceShowcaseRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <AboutMarqueeSection />

      <WhyChooseSection />

      <GallerySection />

      <IndustriesProtectSection />

      <TestimonialsCarousel />
      <CTABanner />

      <section className="bg-neutral-100 px-4 py-16 md:py-24" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Security Insights &" highlight="Resources" />
          <div className="section-divider" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3)
              .map((post, i) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div
                    className={`flex aspect-video items-center justify-center overflow-hidden ${
                      ["bg-primary", "bg-accent-yellow", "bg-accent-teal"][i % 3]
                    }`}
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <Shield
                        className={`h-12 w-12 ${i === 1 ? "text-navy/40" : "text-white/40"}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </Link>
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

      <Logos3 />
    </>
  );
}
