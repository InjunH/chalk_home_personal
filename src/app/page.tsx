import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";

import FeatureExperience from "@/components/sections/FeatureExperience";
import CTASection from "@/components/sections/CTASection";
import FeatureSection3 from "@/components/sections/FeatureSystem";
import FeatureSectionVideo from "@/components/sections/FeatureSectionVideo";
import FeatureSystem from "@/components/sections/FeatureSystem";
import FeatureValue from "@/components/sections/FeatureValue";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main>
        {/* WE ALL DREAM DIFFERENTLY */}
        <HeroSection />

        {/* 대치동에서도 볼 수 없던 최고의 선생님을 만나보세요. */}
        <IntroSection />

        {/* THE NEW PARADIGM */}
        <FeatureValue />

        {/* Experience chalk in everyway */}
        <FeatureExperience />

        {/* Video Case */}
        <FeatureSectionVideo />

        {/* Hyper-Personalized Learning Solution */}
        <FeatureSystem />

        {/* Next Big Thing  */}
        <FeatureSection3 />

        {/* follow the path */}
        <CTASection />

        {/* QR Code */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
