import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import StatsSection from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQs from "@/components/faqs";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoCloud />
      <Features />
      <ContentSection />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CallToAction />
      <FooterSection />
    </main>
  );
}
