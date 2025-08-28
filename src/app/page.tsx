import PageLayout from "@/components/layout/PageLayout";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import HomeIntroSection from "@/components/sections/home/HomeIntroSection";
import HomeShowcaseSection from "@/components/sections/home/HomeShowcaseSection";
import HomeCTASection from "@/components/sections/home/HomeCTASection";
import HomeFeaturesSection from "@/components/sections/home/HomeFeaturesSection";
import HomeStatsSection from "@/components/sections/home/HomeStatsSection";
import HomeProductsSection from "@/components/sections/home/HomeProductsSection";

export default function HomePage() {
  return (
    <PageLayout>
      {/* WE ALL DREAM DIFFERENTLY */}
      <HomeHeroSection />
      {/* 대치동에서도 볼 수 없던 최고의 선생님을 만나보세요. */}
      <HomeIntroSection />
      {/* THE NEW PARADIGM - 통계/성과 */}
      <HomeStatsSection />
      {/* Experience chalk in everyway - 쇼케이스 */}
      <HomeShowcaseSection />
      {/* Hyper-Personalized Learning Solution - 주요 제품 */}
      <HomeProductsSection />
      {/* Next Big Thing - 핵심 기능들 */}
      <HomeFeaturesSection />
      {/* follow the path - 행동 유도 */}
      <HomeCTASection />
    </PageLayout>
  );
}
