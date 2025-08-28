import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import FeatureExperience from "@/components/sections/home/FeatureExperience";
import CTASection from "@/components/sections/home/CTASection";
import FeatureSectionVideo from "@/components/sections/home/FeatureSectionVideo";
import FeatureValue from "@/components/sections/home/FeatureValue";
import FeatureSystem from "@/components/sections/home/FeatureSystem";

export default function HomePage() {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}
