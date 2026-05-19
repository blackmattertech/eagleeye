import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StickyMobileCTA from "./components/StickyMobileCTA";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const GuardServicesPage = lazy(() => import("./pages/GuardServicesPage"));
const CCTVPage = lazy(() => import("./pages/CCTVPage"));
const EventSecurityPage = lazy(() => import("./pages/EventSecurityPage"));
const CorporateSecurityPage = lazy(() => import("./pages/CorporateSecurityPage"));
const ResidentialSecurityPage = lazy(() => import("./pages/ResidentialSecurityPage"));
const BouncerServicesPage = lazy(() => import("./pages/BouncerServicesPage"));
const PatrolServicesPage = lazy(() => import("./pages/PatrolServicesPage"));
const PersonalProtectionPage = lazy(() => import("./pages/PersonalProtectionPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const QuotePage = lazy(() => import("./pages/QuotePage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white pb-[68px] md:pb-0">
        <Navbar />
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/security-guard-services" element={<GuardServicesPage />} />
              <Route path="/services/cctv-surveillance" element={<CCTVPage />} />
              <Route path="/services/event-security" element={<EventSecurityPage />} />
              <Route path="/services/corporate-security" element={<CorporateSecurityPage />} />
              <Route path="/services/residential-security" element={<ResidentialSecurityPage />} />
              <Route path="/services/bouncer-services" element={<BouncerServicesPage />} />
              <Route path="/services/mobile-patrol" element={<PatrolServicesPage />} />
              <Route path="/services/personal-protection" element={<PersonalProtectionPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/get-quote" element={<QuotePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileCTA />
      </div>
    </BrowserRouter>
  );
}
