import { services } from "./services";
import { blogPosts } from "./blogPosts";

const pickService = (id) => services.find((s) => s.id === id);

const serviceFlyoutIds = [
  "security-guard-services",
  "cctv-surveillance",
  "event-security",
  "corporate-security",
];

export const navFlyoutConfig = {
  services: {
    href: "/services",
    leftPanel: {
      title: "Our Services",
      description:
        "End-to-end security for Bangalore — trained guards, CCTV, events, corporate sites, and more under one PSARA-licensed team.",
      href: "/services",
      linkLabel: "Learn more",
    },
    gridItems: serviceFlyoutIds.map((id) => {
      const s = pickService(id);
      return {
        title: s.shortTitle,
        description: s.overview.slice(0, 90) + (s.overview.length > 90 ? "…" : ""),
        href: s.slug,
      };
    }),
  },
  about: {
    href: "/about",
    leftPanel: {
      title: "About Eagle Eye",
      description:
        "Bangalore's trusted security partner since 2014 — PSARA licensed, 500+ guards deployed, and a leadership team built on discipline.",
      href: "/about",
      linkLabel: "Learn more",
    },
    gridItems: [
      {
        title: "Our Story",
        description: "Mission, vision, and how we grew from 25 guards to a city-wide operation.",
        href: "/about#story",
      },
      {
        title: "Leadership",
        description: "Meet the founders and executives behind Eagle Eye Watch Security.",
        href: "/about#team",
      },
      {
        title: "Certifications",
        description: "PSARA license, ISO standards, and compliance you can verify.",
        href: "/about#certifications",
      },
      {
        title: "Timeline",
        description: "Key milestones from 2014 to today across Karnataka.",
        href: "/about#milestones",
      },
    ],
  },
  gallery: {
    href: "/gallery",
    leftPanel: {
      title: "Gallery",
      description:
        "See our guard deployments, CCTV installations, event teams, and corporate protection in action across Bangalore.",
      href: "/gallery",
      linkLabel: "View gallery",
    },
    gridItems: [
      {
        title: "Guard Operations",
        description: "Corporate, residential, and industrial site deployments.",
        href: "/gallery",
      },
      {
        title: "CCTV & Surveillance",
        description: "Installations, control rooms, and monitoring setups.",
        href: "/gallery",
      },
      {
        title: "Event Security",
        description: "Crowd management and VIP protection at major events.",
        href: "/gallery",
      },
      {
        title: "Mobile Patrol",
        description: "Patrol vehicles and rapid response coverage.",
        href: "/gallery",
      },
    ],
  },
  clientele: {
    href: "/clientele",
    leftPanel: {
      title: "Our Clientele",
      description:
        "IT parks, retail, banking, healthcare, and events — leading organizations trust Eagle Eye across Bangalore.",
      href: "/clientele",
      linkLabel: "Learn more",
    },
    gridItems: [
      {
        title: "Trusted Clients",
        description: "Organizations that rely on our guards and systems daily.",
        href: "/clientele",
      },
      {
        title: "Industries We Serve",
        description: "Sector-specific security programs across Karnataka.",
        href: "/industries",
      },
      {
        title: "Corporate Security",
        description: "IT parks, BPOs, and headquarters protection.",
        href: "/services/corporate-security",
      },
      {
        title: "Request a Proposal",
        description: "Tell us about your site and get a tailored quote.",
        href: "/get-quote",
      },
    ],
  },
  jobs: {
    href: "/careers",
    leftPanel: {
      title: "Careers at Eagle Eye",
      description:
        "Join a disciplined, growing security team — competitive pay, training, uniforms, and paths to supervisor roles.",
      href: "/careers",
      linkLabel: "View openings",
    },
    gridItems: [
      {
        title: "Security Guard",
        description: "Deploy at corporate, residential, or retail sites across Bangalore.",
        href: "/careers",
      },
      {
        title: "Supervisor",
        description: "Lead guard teams, audits, and incident reporting in the field.",
        href: "/careers",
      },
      {
        title: "CCTV Operator",
        description: "Monitor feeds and coordinate with patrol teams from our control room.",
        href: "/careers",
      },
      {
        title: "Apply Now",
        description: "Submit your application and join our next training cohort.",
        href: "/careers",
      },
    ],
  },
  contact: {
    href: "/contact",
    leftPanel: {
      title: "Contact Us",
      description:
        "Quotes, deployments, and site assessments — reach our Bangalore team by phone, WhatsApp, or the form below.",
      href: "/contact",
      linkLabel: "Get in touch",
    },
    gridItems: [
      {
        title: "Send a Message",
        description: "Enquiry form for guards, CCTV, events, or corporate security.",
        href: "/contact",
      },
      {
        title: "Free Quote",
        description: "Fast estimate tailored to your property and risk profile.",
        href: "/get-quote",
      },
      {
        title: "Service Areas",
        description: "Coverage across Bengaluru and major Karnataka corridors.",
        href: "/contact",
      },
      {
        title: "FAQs",
        description: "Common questions on licensing, deployment, and contracts.",
        href: "/contact",
      },
    ],
  },
  blogs: {
    href: "/blog",
    leftPanel: {
      title: "Security Blog",
      description:
        "Expert guides for Bangalore businesses — choosing agencies, guards vs CCTV, and corporate safety best practices.",
      href: "/blog",
      linkLabel: "All articles",
    },
    gridItems: blogPosts.slice(0, 4).map((post) => ({
      title: post.title.length > 42 ? post.title.slice(0, 42) + "…" : post.title,
      description: post.excerpt.slice(0, 85) + (post.excerpt.length > 85 ? "…" : ""),
      href: `/blog/${post.slug}`,
    })),
  },
};

export const flyoutNavKeys = Object.keys(navFlyoutConfig);
