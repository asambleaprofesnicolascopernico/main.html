import ClaimsSection from "../components/claims-section";
import ClaimsDetailSection from "../components/claims-detail-section";
import ContactSection from "../components/contact-section";
import HeroSection from "../components/hero-section";
import NewsSection from "../components/news-section";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import SupportCallout from "../components/support-callout";

export default function Home() {
  return (
    <>
      <a
        className="sr-only z-50 rounded-md bg-white p-3 text-[#123f38] focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        href="#novedades"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <div className="relative z-10 mx-auto -mt-14 w-[calc(100%-32px)] max-w-6xl">
          <SupportCallout />
        </div>
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-6xl gap-10 py-12 md:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.95fr)] md:gap-14 md:py-14">
          <NewsSection />
          <ClaimsSection />
        </div>
        <ClaimsDetailSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
