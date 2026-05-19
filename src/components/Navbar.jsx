import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-gray-600"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "border-b border-neutral-200 shadow-md" : "border-b border-neutral-200"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex min-h-[44px] items-center gap-2" aria-label="Eagle Eye Watch Security Home">
          <Eye className="h-8 w-8 text-accent-gold" strokeWidth={1.5} />
          <span className="hidden text-lg font-bold text-navy sm:block md:text-xl">
            Eagle Eye <span className="text-primary">Watch</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              className="flex min-h-[44px] items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-neutral-200 bg-white py-2 shadow-xl"
                >
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-light"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={s.slug}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-light hover:text-primary"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {navLinks.slice(2).map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Link to="/get-quote" className="btn-primary text-sm">
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-navy lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between border-b border-neutral-200 p-4">
                <span className="text-lg font-bold text-navy">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center text-navy"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto p-4">
                {navLinks.map((link) => (
                  <li key={link.to} className="border-b border-neutral-100">
                    <NavLink
                      to={link.to}
                      className="flex min-h-[44px] items-center text-base font-medium text-navy hover:text-primary"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Services</p>
                  <Link to="/services" className="block min-h-[44px] py-2 text-gray-600 hover:text-primary">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={s.slug}
                      className="block min-h-[44px] py-2 pl-3 text-sm text-gray-600 hover:text-primary"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                </li>
              </ul>
              <div className="border-t border-neutral-200 p-4">
                <Link to="/get-quote" className="btn-primary w-full">
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
