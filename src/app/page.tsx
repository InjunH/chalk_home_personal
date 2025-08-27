import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import FeatureExperience from "@/components/sections/home/FeatureExperience";
import CTASection from "@/components/sections/home/CTASection";
import QRSection from "@/components/sections/home/QRSection";

import FeatureSectionVideo from "@/components/sections/home/FeatureSectionVideo";
import FeatureValue from "@/components/sections/home/FeatureValue";
import FeatureSystem from "@/components/sections/home/FeatureSystem";

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
        {/* Hyper-Personalized Learning Solution */}
        <FeatureSystem />
        {/* Video Case */}
        <FeatureSectionVideo />

        {/* follow the path */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
