import {
  Shield,
  Camera,
  Calendar,
  Building2,
  Home,
  Users,
  Car,
  UserCheck,
} from "lucide-react";

const sharedFeatures = [
  "Licensed & PSARA-compliant operations",
  "Background-verified personnel",
  "24/7 control room support",
  "Customized security assessment",
];

export const services = [
  {
    id: "security-guard-services",
    slug: "/services/security-guard-services",
    icon: Shield,
    title: "Security Guard Services",
    shortTitle: "Security Guards",
    heroTitle: "Security Guard Services in Bangalore",
    pageH1: "Security Guard Services in Bangalore",
    metaTitle: "Security Guard Services Bangalore | Eagle Eye",
    metaDescription:
      "Trained security guards for hire in Bangalore — armed & unarmed, background verified, 24/7. PSARA-licensed Eagle Eye Watch Security.",
    keywords:
      "security guard services in Bangalore, trained security guards for hire Bangalore, armed security guards Bangalore, 24/7 security guards Bangalore, background verified security guards Bangalore",
    overview:
      "Hire trained, background-verified security guards in Bangalore — unarmed and armed posts for corporate, retail, residential, and industrial sites, deployed 24/7.",
    features: [
      "Unarmed & armed guard deployment",
      "Gate & access control management",
      "Visitor log & ID verification",
      "Incident reporting & escalation",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Professional Security Guards in Bangalore",
        body: `When your property, people, and reputation are on the line, you need more than a uniform at the gate. Eagle Eye Watch Security & Services is a leading security agency in Bangalore, delivering professionally trained security guards in Bangalore who understand access control, emergency response, and customer-facing professionalism.

Our security guard services cover corporate offices, retail outlets, warehouses, educational campuses, and residential communities across Karnataka. Every guard undergoes rigorous background verification, physical fitness assessment, and scenario-based training before deployment. Whether you require unarmed posts or armed security guards Bangalore clients trust for high-risk environments, we customize manpower to your threat profile and operating hours.`,
      },
      {
        heading: "Why Businesses Choose Our Guard Services",
        body: `As a full-service security company Karnataka businesses rely on, we provide supervisors who conduct regular site audits, digital attendance logs, and real-time incident reporting. Our guards are briefed on your SOPs, emergency contacts, and evacuation plans before their first shift.

From single-post deployments to multi-location contracts with 50+ personnel, Eagle Eye Watch Security scales without compromising quality. We replace absent guards within hours and maintain a reserve bench for surge requirements during events or heightened threat periods.`,
      },
      {
        heading: "Industries & Deployment Models",
        body: `Our security services Bangalore portfolio includes static guarding, lobby reception security, parking lot patrols, and loading dock monitoring. We integrate with your existing CCTV surveillance Bangalore infrastructure and can coordinate with facility management teams for seamless operations.

Contact Eagle Eye Watch Security today for a free site assessment and discover why we are ranked among the top providers of security guards in Bangalore for reliability, compliance, and operational excellence.`,
      },
    ],
  },
  {
    id: "cctv-surveillance",
    slug: "/services/cctv-surveillance",
    icon: Camera,
    title: "CCTV & Surveillance",
    shortTitle: "CCTV",
    heroTitle: "CCTV Surveillance Bangalore",
    pageH1: "CCTV Surveillance Services Bangalore",
    metaTitle: "CCTV Surveillance Services Bangalore | Eagle Eye",
    metaDescription:
      "CCTV installation and monitoring Bangalore — HD cameras, remote CCTV monitoring & security camera setup by Eagle Eye Watch.",
    keywords: "CCTV surveillance services Bangalore, CCTV installation and monitoring Bangalore, remote CCTV monitoring Bangalore, security camera installation Bangalore",
    overview:
      "End-to-end CCTV surveillance services Bangalore — security camera installation, NVR setup, and optional remote CCTV monitoring with guard integration.",
    features: [
      "HD / IP camera installation",
      "NVR & cloud storage setup",
      "Night vision & motion alerts",
      "Remote mobile monitoring",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "CCTV Surveillance Bangalore — Complete Solutions",
        body: `Modern property protection demands intelligent CCTV surveillance Bangalore property owners can access from anywhere. Eagle Eye Watch Security & Services delivers end-to-end surveillance solutions — from site survey and camera placement strategy to installation, configuration, and optional 24/7 monitoring from our control room.

We design systems for corporate campuses, retail stores, residential societies, construction sites, and event venues. Our technicians specify the right mix of fixed cameras, PTZ units, license plate recognition, and perimeter sensors based on blind spots, lighting conditions, and storage requirements.`,
      },
      {
        heading: "Integration With Guard Services",
        body: `CCTV alone cannot intercept threats in real time — which is why we recommend pairing surveillance with professional security guards in Bangalore. Our integrated approach links camera feeds to guard posts and supervisor dashboards, enabling faster response to motion alerts, tailgating, and after-hours intrusions.

As part of our broader security services Bangalore offering, we maintain and service installed systems, upgrade legacy analog setups to IP networks, and ensure compliance with local privacy guidelines for common areas versus private zones.`,
      },
      {
        heading: "Monitoring & Maintenance",
        body: `Choose self-monitored systems with mobile app access or subscribe to professional monitoring where our team verifies alerts before dispatching patrol units. Scheduled maintenance visits keep lenses clean, firmware updated, and storage healthy.

Eagle Eye Watch Security is your partner for CCTV surveillance Bangalore businesses and communities trust — contact us for a free security audit and custom quote.`,
      },
    ],
  },
  {
    id: "event-security",
    slug: "/services/event-security",
    icon: Calendar,
    title: "Event Security",
    shortTitle: "Events",
    heroTitle: "Event Security Services Bangalore",
    pageH1: "Event Security Services Bangalore",
    metaTitle: "Event Security Services Bangalore | Eagle Eye",
    metaDescription:
      "Event security services Bangalore — weddings, concerts, crowd management & event bouncers for hire.",
    keywords: "event security services Bangalore, wedding security services Bangalore, concert security services Bangalore, crowd management security Bangalore",
    overview:
      "Scalable event security teams for weddings, concerts, corporate functions, and exhibitions across Bangalore.",
    features: [
      "Crowd management & flow planning",
      "VIP & backstage access control",
      "Bag checks & metal detection coordination",
      "Emergency evacuation support",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Event Security Services Bangalore — Flawless Execution",
        body: `Every successful event in Bangalore depends on invisible, professional security working behind the scenes. Eagle Eye Watch Security & Services specializes in event security Bangalore organizers trust for weddings, product launches, political rallies, sporting events, and private celebrations.

We begin with a pre-event risk assessment: venue layout, expected attendance, alcohol service, VIP requirements, and local regulations. From that blueprint, we deploy the right mix of security guards, supervisors, and bouncer services Bangalore venues need for crowd control at entry points, stage barriers, and parking areas.`,
      },
      {
        heading: "Crowd Control & VIP Protection",
        body: `Our teams manage queues, wristband verification, green room access, and media zones without disrupting guest experience. For high-profile attendees, we coordinate personal protection officers and secure transport protocols.

Large-scale event security requires communication discipline — our supervisors use radio networks and liaison with local authorities when required. Eagle Eye has secured events from 200-guest corporate dinners to 5,000+ attendee outdoor festivals across Karnataka.`,
      },
      {
        heading: "Plan Your Next Event With Confidence",
        body: `Don't leave safety to volunteers or untrained staff. As a premier security agency in Bangalore for events, we provide insurance-compliant deployments, briefed personnel, and post-event debrief reports. Request a quote for your upcoming event security Bangalore assignment today.`,
      },
    ],
  },
  {
    id: "corporate-security",
    slug: "/services/corporate-security",
    icon: Building2,
    title: "Corporate Security",
    shortTitle: "Corporate",
    heroTitle: "Corporate Security Bangalore",
    metaTitle: "Corporate Security Bangalore | Eagle Eye Watch",
    metaDescription:
      "Corporate security Bangalore for IT parks & offices. Access control, executive protection & 24/7 guarding by Eagle Eye Watch Security.",
    keywords:
      "corporate security solutions Bangalore, security services Bangalore",
    overview:
      "Comprehensive corporate security for IT parks, BPOs, banks, and headquarters with layered access control.",
    features: [
      "Lobby & reception security",
      "Executive & boardroom protection",
      "Vendor & contractor screening",
      "Data centre & server room posts",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Corporate Security Bangalore — Solutions That Scale",
        body: `Bangalore's corporate landscape demands security that matches global standards. Eagle Eye Watch Security & Services delivers corporate security solutions Bangalore enterprises use to protect employees, intellectual property, and brand reputation across tech parks, standalone offices, and co-working spaces.

Our corporate programs combine manned guarding with policy-driven access control, visitor management systems, and integration with building management. We work with HR and admin teams to align security protocols with workplace culture — firm on safety, professional in every interaction.`,
      },
      {
        heading: "Layered Protection for Modern Workplaces",
        body: `From basement parking to executive floors, we assign trained security guards in Bangalore who understand corporate environments: NDAs, badge policies, tailgating prevention, and after-hours contractor access. Optional armed security guards Bangalore clients request are deployed with full licensing and legal compliance.

We support multi-tenant buildings with tenant-specific SOPs and central command reporting. CCTV surveillance Bangalore integration, fire alarm coordination, and emergency drill participation are standard in our corporate contracts.`,
      },
      {
        heading: "Partner With a Proven Security Company",
        body: `Eagle Eye Watch Security is the security company Karnataka corporates choose for scalability, audit-ready documentation, and consistent service quality. Schedule a consultation for corporate security solutions Bangalore tailored to your footprint and risk profile.`,
      },
    ],
  },
  {
    id: "residential-security",
    slug: "/services/residential-security",
    icon: Home,
    title: "Residential Security",
    shortTitle: "Residential",
    heroTitle: "Residential Security Bangalore",
    pageH1: "Residential Security Services Bangalore",
    metaTitle: "Residential Security Bangalore | Apartments",
    metaDescription:
      "Residential security services Bangalore — apartment security guards, gated community & housing society security programs.",
    keywords: "residential security services Bangalore, apartment security guards Bangalore, gated community security Bangalore, housing society security Bangalore, villa security services Bangalore",
    overview:
      "Residential security services Bangalore for apartments, gated communities, and housing societies — gate security, patrols, and visitor management.",
    features: [
      "Gate & boom barrier management",
      "Domestic staff & delivery verification",
      "Night patrol & perimeter checks",
      "Society incident reporting",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Residential Security Bangalore Communities Deserve",
        body: `Your home should be a sanctuary. Eagle Eye Watch Security & Services provides residential security Bangalore housing societies, villa communities, and apartment complexes depend on for daily peace of mind.

Our residential programs start with a community needs assessment: number of towers, entry/exit points, amenity areas, parking structures, and resident expectations. We deploy courteous, alert security guards in Bangalore who manage visitor logs, delivery personnel, cab entries, and contractor access without creating unnecessary friction.`,
      },
      {
        heading: "Gate Management & Patrol Operations",
        body: `Effective residential security combines fixed gate posts with randomised patrol routes covering basements, terraces, clubhouses, and perimeter walls. We train guards on conflict de-escalation, child safety near play areas, and coordination with RWA committees.

Integration with CCTV surveillance Bangalore systems allows supervisors to verify incidents and support guards in real time. Many societies add 24/7 security patrol Bangalore-style mobile units for larger layouts or multi-phase developments.`,
      },
      {
        heading: "Trusted by RWAs Across Karnataka",
        body: `As a licensed security agency in Bangalore, we provide transparent billing, replacement guarantees, and monthly performance reviews for committee meetings. Elevate your community's safety with Eagle Eye Watch Security — request a proposal for residential security Bangalore today.`,
      },
    ],
  },
  {
    id: "bouncer-services",
    slug: "/services/bouncer-services",
    icon: Users,
    title: "Bouncer & Crowd Control",
    shortTitle: "Bouncers",
    heroTitle: "Bouncer Services in Bangalore",
    metaTitle: "Bouncer Services in Bangalore | Eagle Eye",
    metaDescription:
      "Bouncer services Bangalore for pubs, clubs & private events. Professional crowd control & door security by Eagle Eye Watch Security.",
    keywords: "bouncer services Bangalore, event security Bangalore",
    overview:
      "Professional bouncers and crowd control specialists for nightlife venues, private parties, and VIP events.",
    features: [
      "Door & entry management",
      "Intoxication & conflict handling",
      "Dress code & guest list enforcement",
      "Coordination with venue management",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Bouncer Services Bangalore — Professional, Not Aggressive",
        body: `Nightlife venues, lounges, and private celebrations require security that is assertive yet diplomatic. Eagle Eye Watch Security & Services provides bouncer services Bangalore establishments book for consistent, professional crowd control without the reputational risk of untrained hires.

Our bouncers are physically fit, communication-trained, and briefed on venue policies, capacity limits, and local laws. They manage entry queues, ID checks, guest lists, and removal procedures with minimal disruption to paying customers and guests.`,
      },
      {
        heading: "Crowd Control for Events & Venues",
        body: `Beyond clubs and bars, our teams support weddings, college festivals, and corporate parties where alcohol service and large gatherings increase risk. We work alongside event security Bangalore coordinators to secure perimeters, stage areas, and VIP sections.

Every deployment includes a supervisor with direct contact to Eagle Eye command and optional backup personnel for peak hours. This is the same disciplined approach we bring to all security services Bangalore clients expect from a top-tier agency.`,
      },
      {
        heading: "Book Reliable Door Security",
        body: `Protect your license, guests, and staff with licensed bouncer services Bangalore trusts. Eagle Eye Watch Security — where strength meets professionalism. Contact us for short-term or recurring venue contracts.`,
      },
    ],
  },
  {
    id: "mobile-patrol",
    slug: "/services/mobile-patrol",
    icon: Car,
    title: "Mobile Patrol & Response",
    shortTitle: "Patrol",
    heroTitle: "Mobile Patrol Security Bangalore",
    metaTitle: "Mobile Patrol Security Bangalore | Eagle Eye",
    metaDescription:
      "Mobile patrol security Bangalore — 24/7 units, alarm response & site checks. Eagle Eye Watch rapid response services.",
    keywords: "24/7 security patrol Bangalore, security services Bangalore",
    overview:
      "GPS-tracked mobile patrol units for warehouses, construction sites, and multi-property portfolios.",
    features: [
      "Scheduled & random patrol routes",
      "Alarm response & lock-up checks",
      "GPS-logged visit reports",
      "Construction & vacant property coverage",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Mobile Patrol Security Bangalore — Always Moving",
        body: `Static guards cannot cover every acre of a warehouse district or construction spread. Eagle Eye Watch Security & Services offers 24/7 security patrol Bangalore businesses use to extend protection across multiple sites, parking lots, and after-hours facilities.

Our mobile patrol units follow documented routes with GPS verification, photographic check-ins, and incident logs delivered to your dashboard. Randomised visit times deter theft, vandalism, and unauthorised occupation on vacant properties.`,
      },
      {
        heading: "Alarm Response & Site Inspections",
        body: `When your alarm triggers, our response team verifies the cause, coordinates with police if needed, and secures the premises. We perform lock-up checks, perimeter inspections, and equipment verification for clients who need eyes on site without full-time posts.

Mobile patrol complements security guards in Bangalore deployments — reducing cost for low-traffic hours while maintaining visible deterrence. Construction sites, logistics yards, and film shoot locations across Karnataka benefit from flexible patrol contracts.`,
      },
      {
        heading: "Scalable Coverage Across Karnataka",
        body: `As a leading security agency in Bangalore with statewide reach, Eagle Eye customizes patrol frequency, vehicle marking, and reporting to your insurance and compliance requirements. Request a patrol route design and quote today.`,
      },
    ],
  },
  {
    id: "personal-protection",
    slug: "/services/personal-protection",
    icon: UserCheck,
    title: "Personal Protection Officers",
    shortTitle: "PPO",
    heroTitle: "Personal Protection Officer Bangalore",
    metaTitle: "Personal Protection Officer Bangalore | Eagle Eye",
    metaDescription:
      "Personal protection officers Bangalore for executives, celebrities & VIPs. Discreet, trained close protection by Eagle Eye Watch Security.",
    keywords:
      "armed security guards Bangalore, corporate security solutions Bangalore",
    overview:
      "Discreet close protection for executives, celebrities, and high-net-worth individuals in Bangalore.",
    features: [
      "Executive & celebrity protection",
      "Secure transport coordination",
      "Threat assessment & route planning",
      "Residential & travel security",
      ...sharedFeatures,
    ],
    sections: [
      {
        heading: "Personal Protection Officers Bangalore",
        body: `High-profile individuals face unique threats in a growing metropolis. Eagle Eye Watch Security & Services provides personal protection officers Bangalore clients require for executives, political figures, celebrities, and visiting dignitaries who need discreet, professional close protection.

Our PPOs are selected for experience, situational awareness, and communication skills — not just physical presence. We conduct advance security surveys of venues, plan secure routes, and coordinate with drivers, event teams, and family offices to maintain low visibility while maximum safety.`,
      },
      {
        heading: "Executive & Family Protection Programs",
        body: `Corporate security solutions Bangalore often extend to C-suite protection during transit, shareholder meetings, and public appearances. We offer short-term assignments for single events or ongoing residential and travel security for families.

Where threat levels justify, armed security guards Bangalore licensed for close protection are assigned with full legal compliance and coordination with local authorities. All operations respect privacy and cultural sensitivities.`,
      },
      {
        heading: "Confidential Consultation",
        body: `Personal security demands trust. Eagle Eye Watch Security handles every enquiry with strict confidentiality. Contact our team for a private assessment of your personal protection officers Bangalore requirements.`,
      },
    ],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);

export const homeServiceCards = services.slice(0, 6);
