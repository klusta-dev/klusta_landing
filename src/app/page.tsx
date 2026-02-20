import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DiscoverSection } from "@/components/DiscoverSection";
import { EaseSection } from "@/components/EaseSection";
import { WhyKlusta } from "@/components/WhyKlusta";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <div className="max-w-7xl mx-auto bg-white min-h-screen overflow-visible">
        <Hero />
        <DiscoverSection />
        <EaseSection />
        <WhyKlusta />
        <HowItWorks />
        <Testimonials />
        <TrustedBy />
      </div>
      <Footer />
    </main>
  );
}
