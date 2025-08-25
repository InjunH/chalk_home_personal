import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ReviewSection from "@/components/sections/ReviewSection";
import FeatureSection1 from "@/components/sections/FeatureSection1";
import FeatureSection2 from "@/components/sections/FeatureSection2";
import FeatureSection3 from "@/components/sections/FeatureSection3";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main>
        <HeroSection />
        <IntroSection />
        <ReviewSection />
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
