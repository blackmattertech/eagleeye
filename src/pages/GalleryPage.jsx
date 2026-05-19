import { Shield, Camera, Users } from "lucide-react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

const placeholders = [
  { icon: Shield, label: "Guard patrol at corporate site" },
  { icon: Camera, label: "CCTV monitoring control room" },
  { icon: Users, label: "Event security team deployment" },
  { icon: Shield, label: "Residential gate security" },
  { icon: Camera, label: "Surveillance installation" },
  { icon: Users, label: "VIP protection detail" },
  { icon: Shield, label: "Mobile patrol vehicle" },
  { icon: Camera, label: "Night surveillance operations" },
  { icon: Users, label: "Corporate lobby security" },
];

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Security Gallery | Eagle Eye Watch Security Bangalore"
        description="View our security operations gallery — guard deployments, CCTV installations, event security, and corporate protection across Bangalore."
        path="/gallery"
      />
      <PageHero
        title="Gallery"
        subtitle="A glimpse of our security operations, deployments, and professional teams across Bangalore."
        breadcrumb="Gallery"
      />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <p className="mx-auto max-w-2xl text-center text-gray-600">
            Photos from our field operations will be added soon. Below are placeholders representing the
            types of security work we deliver daily.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((item, i) => {
              const Icon = item.icon;
              return (
                <figure
                  key={i}
                  className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 p-6"
                >
                  <Icon className="h-12 w-12 text-neutral-300" aria-hidden="true" />
                  <figcaption className="mt-4 text-center text-sm font-medium text-gray-500">
                    {item.label}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </main>

      <CTABanner />
    </>
  );
}
