import {
  Shield,
  Camera,
  Calendar,
  Building2,
  Home,
  Users,
  Sparkles,
} from "lucide-react";

export const homeServicesBento = [
  {
    id: "security-guard-services",
    slug: "/services/security-guard-services",
    icon: Shield,
    title: "Security guard services",
    description:
      "PSARA-licensed, police-verified armed & unarmed guards deployed 24/7 across Bangalore — for corporates, apartments, malls, and more.",
    badge: "Most popular",
    tags: ["Armed guards", "Unarmed guards", "24/7 deployment", "Pan Bangalore"],
    variant: "blue",
    gridClass: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    id: "cctv-surveillance",
    slug: "/services/cctv-surveillance",
    icon: Camera,
    title: "CCTV & surveillance",
    description:
      "Installation, monitoring & remote surveillance across Bengaluru premises.",
    variant: "white",
    gridClass: "lg:col-span-1",
  },
  {
    id: "event-security",
    slug: "/services/event-security",
    icon: Calendar,
    title: "Event security",
    description:
      "Crowd management, bouncers & VIP security for events across Bangalore.",
    variant: "white",
    gridClass: "lg:col-span-1",
  },
  {
    id: "corporate-security",
    slug: "/services/corporate-security",
    icon: Building2,
    title: "Corporate security",
    description:
      "IT parks, offices & tech campuses — access control, perimeter patrol & guard management.",
    badge: "New",
    variant: "navy",
    gridClass: "lg:col-span-2",
  },
  {
    id: "residential-security",
    slug: "/services/residential-security",
    icon: Home,
    title: "Residential security",
    description:
      "Gated communities, apartments & villas — trusted guards for housing societies in Bangalore.",
    variant: "white",
    gridClass: "lg:col-span-1",
  },
  {
    id: "bouncer-services",
    slug: "/services/bouncer-services",
    icon: Users,
    title: "Bouncer services",
    description:
      "Professional bouncers for clubs, pubs, lounges & private events in Bangalore.",
    variant: "yellow",
    gridClass: "lg:col-span-1",
  },
  {
    id: "housekeeping-services",
    slug: "/get-quote",
    icon: Sparkles,
    title: "Housekeeping services",
    description:
      "Trained housekeeping staff for offices, apartments, hotels & commercial spaces — daily cleaning, deep cleaning & facility upkeep across Bangalore.",
    variant: "teal",
    gridClass: "lg:col-span-2",
  },
];
