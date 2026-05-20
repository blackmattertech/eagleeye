import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../data/config";
import { services } from "../data/services";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clientele", label: "Clientele" },
  { to: "/careers", label: "Jobs" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
  { to: "/get-quote", label: "Get a Quote" },
];

export default function Footer() {
  const social = [
    { Icon: FaFacebookF, href: BUSINESS.social.facebook, label: "Facebook" },
    { Icon: FaInstagram, href: BUSINESS.social.instagram, label: "Instagram" },
    { Icon: FaLinkedinIn, href: BUSINESS.social.linkedin, label: "LinkedIn" },
    { Icon: FaYoutube, href: BUSINESS.social.youtube, label: "YouTube" },
    {
      Icon: FaWhatsapp,
      href: `https://wa.me/${BUSINESS.whatsappTel}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-navy text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-h-[72px] items-center md:min-h-[84px]">
            <img
              src="/media/logo.png"
              alt="Eagle Eye Watch Security"
              className="h-[72px] w-auto md:h-[84px]"
              width={84}
              height={84}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Eagle Eye Watch is a leading security agency in Bangalore — and a trusted security company in
            Bangalore and Bengaluru for guards, CCTV, events, and corporate protection. We deliver professional
            security services Bangalore businesses and communities rely on across Karnataka.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-accent-yellow">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-accent-yellow">Our Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={s.slug} className="text-sm hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-accent-yellow">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
              <span>{BUSINESS.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-yellow" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent-yellow" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {social.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent-yellow hover:text-accent-yellow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#060F24] px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-gray-400 md:flex-row md:items-center md:gap-4 md:text-left">
          <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-1">
            <p>© 2025 {BUSINESS.name}. All rights reserved.</p>
            <p>
              Website made by{" "}
              <a
                href="https://blackmattertech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                BlackMatter Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
