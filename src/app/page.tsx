import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { WhyKlusta } from "@/components/WhyKlusta";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { BottomCTA } from "@/components/BottomCTA";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-section-light">
      <Header />
      <div className="max-w-7xl mx-auto min-h-screen overflow-visible">
        <Hero />
        <BenefitsSection />
        <GetStartedSection />
        <WhyKlusta />
        <HowItWorks />
        <Testimonials />
        <BottomCTA />
        <TrustedBy />
      </div>
      <Footer />
    </main>
  );
}
