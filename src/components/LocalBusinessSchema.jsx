import { Helmet } from "react-helmet-async";
import { BUSINESS, SITE_URL } from "../data/config";
import { services } from "../data/services";

export default function LocalBusinessSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      "Leading security agency in Bangalore offering security guards, CCTV surveillance, event security, corporate and residential security across Karnataka.",
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    image: `${SITE_URL}/media/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560003",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: {
      "@type": "State",
      name: "Karnataka",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/media/logo.png`,
    sameAs: Object.values(BUSINESS.social).filter((s) => s && !s.includes("PLACEHOLDER")),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneTel,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };

  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    url: `${SITE_URL}${service.slug}`,
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, organization, ...serviceSchemas],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
