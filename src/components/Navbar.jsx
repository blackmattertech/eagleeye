import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import { navFlyoutConfig } from "../data/navFlyouts";
import NavFlyout from "./NavFlyout";

const navLinks = [
  { to: "/", label: "Home", flyoutKey: null },
  { to: "/services", label: "Services", flyoutKey: "services" },
  { to: "/about", label: "About Us", flyoutKey: "about" },
  { to: "/gallery", label: "Gallery", flyoutKey: "gallery" },
  { to: "/clientele", label: "Clientele", flyoutKey: "clientele" },
  { to: "/careers", label: "Jobs", flyoutKey: "jobs" },
  { to: "/contact", label: "Contact Us", flyoutKey: "contact" },
  { to: "/blog", label: "Blogs", flyoutKey: "blogs" },
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-accent-yellow ${
    isActive ? "text-accent-yellow" : "text-white"
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `flex min-h-[44px] items-center text-base font-medium transition-colors hover:text-accent-yellow ${
    isActive ? "text-accent-yellow" : "text-white"
  }`;

const flyoutTriggerClass = (isActive, isOpen) =>
  `flex min-h-[44px] items-center gap-0.5 text-sm font-medium transition-colors hover:text-accent-yellow ${
    isActive || isOpen ? "text-accent-yellow" : "text-white"
  }`;

function DesktopFlyoutItem({ flyoutKey, label, to, activeFlyout, setActiveFlyout, location }) {
  const config = navFlyoutConfig[flyoutKey];
  const isOpen = activeFlyout === flyoutKey;
  const isActive =
    flyoutKey === "services"
      ? location.pathname.startsWith("/services")
      : flyoutKey === "blogs"
        ? location.pathname.startsWith("/blog")
        : location.pathname === to || location.pathname.startsWith(`${to}/`);

  const open = () => setActiveFlyout(flyoutKey);
  const close = () => setActiveFlyout((current) => (current === flyoutKey ? null : current));

  return (
    <li
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <Link
        to={to}
        className={flyoutTriggerClass(isActive, isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </Link>
      <NavFlyout isOpen={isOpen} leftPanel={config.leftPanel} gridItems={config.gridItems} />
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setActiveFlyout(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 overflow-visible bg-transparent">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between overflow-visible px-4 py-2 md:py-2.5"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex min-h-[60px] items-center md:min-h-[72px]" aria-label="Eagle Eye Watch Security Home">
          <img
            src="/media/logo.png"
            alt="Eagle Eye Watch Security"
            className="h-[60px] w-auto md:h-[72px]"
            width={72}
            height={72}
          />
        </Link>

        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navLinks.map((link) =>
            link.flyoutKey ? (
              <DesktopFlyoutItem
                key={link.to}
                flyoutKey={link.flyoutKey}
                label={link.label}
                to={link.to}
                activeFlyout={activeFlyout}
                setActiveFlyout={setActiveFlyout}
                location={location}
              />
            ) : (
              <li key={link.to}>
                <NavLink to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <motion.div className="hidden lg:flex">
          <Link to="/get-quote" className="btn-primary text-sm">
            Get Free Quote
          </Link>
        </motion.div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white lg:hidden"
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
              className="fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-navy lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <motion.div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="text-lg font-bold text-white">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </motion.div>
              <ul className="flex-1 overflow-y-auto p-4">
                {navLinks
                  .filter((link) => link.flyoutKey !== "services")
                  .map((link) => (
                    <li key={link.to} className="border-b border-white/10">
                      <NavLink to={link.to} className={mobileNavLinkClass}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                <li className="mt-4">
                  <button
                    type="button"
                    className={`mb-2 flex w-full min-h-[44px] items-center justify-between text-xs font-semibold uppercase tracking-wider transition-colors hover:text-accent-yellow ${
                      mobileServicesOpen ? "text-accent-yellow" : "text-white"
                    }`}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <Link
                          to="/services"
                          className="block min-h-[44px] py-2 text-white transition-colors hover:text-accent-yellow"
                        >
                          All Services
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            to={s.slug}
                            className="block min-h-[44px] py-2 pl-3 text-sm text-white transition-colors hover:text-accent-yellow"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
              <motion.div className="border-t border-white/10 p-4">
                <Link to="/get-quote" className="btn-primary w-full">
                  Get Free Quote
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
