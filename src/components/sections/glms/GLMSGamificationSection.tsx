"use client";

import GLMSGamificationTitle from "./GLMSGamificationTitle";
import GLMSCarousel from "./GLMSCarousel";
import GLMSCityBuildingCard from "./GLMSCityBuildingCard";
import { GLMS_GAMIFICATION_LAYOUT_CONFIG } from "./styles";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GLMSGamificationSection() {
  const { text } = useLanguage();
  
  // 첫 번째 feature card (일반 레이아웃)
  const firstFeatureCard = {
    title: text.gLMS.gamification.features[0].title,
    description: text.gLMS.gamification.features[0].description,
    imageSrc: text.gLMS.gamification.features[0].imageSrc,
    imageAlt: text.gLMS.gamification.features[0].imageAlt,
    isReversed: false,
  };

  // 두 번째 feature card (특별한 도시 건설 레이아웃)
  const cityBuildingCard = {
    title: text.gLMS.gamification.features[1].title,
    description: text.gLMS.gamification.features[1].description,
    imageSrc: text.gLMS.gamification.features[1].imageSrc,
    imageAlt: text.gLMS.gamification.features[1].imageAlt,
  };

  return (
    <section
      className="relative"
      style={{
        backgroundColor: GLMS_GAMIFICATION_LAYOUT_CONFIG.sectionBackground,
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden flex flex-col space-y-12">
          <div className="justify-start">
            <GLMSGamificationTitle />
          </div>

          {/* 모바일에서는 캐러셀을 간단하게 표시 */}
          <div className="w-full flex justify-center">
            <GLMSCarousel />
          </div>

          {/* 기능 설명 카드들 */}
          <div className="flex flex-col w-full gap-8 py-[2.5rem]">
            <FeatureCard
              title={firstFeatureCard.title}
              description={firstFeatureCard.description}
              image={firstFeatureCard.imageSrc}
              index={0}
            />

            <GLMSCityBuildingCard
              title={cityBuildingCard.title}
              description={cityBuildingCard.description}
            />
          </div>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div
          className="hidden md:flex flex-col"
          style={{ gap: GLMS_GAMIFICATION_LAYOUT_CONFIG.sectionGap }}
        >
          <div
            className="w-full"
            style={{ height: GLMS_GAMIFICATION_LAYOUT_CONFIG.titleHeight }}
          >
            <GLMSGamificationTitle />
          </div>

          <div
            className="w-full px-[17rem]"
            style={{
              minHeight: GLMS_GAMIFICATION_LAYOUT_CONFIG.carouselHeight,
            }}
          >
            <GLMSCarousel />
          </div>

          {/* 기능 설명 카드들 (Figma Node: 5201:1731, 5214:1611) */}
          <div className="flex flex-col w-full gap-3xl">
            {/* 첫 번째 카드: 일반 레이아웃 */}
            <div className="w-full flex justify-center">
              <FeatureCard
                title={firstFeatureCard.title}
                description={firstFeatureCard.description}
                image={firstFeatureCard.imageSrc}
                index={0}
              />
            </div>

            {/* 두 번째 카드: 특별한 도시 건설 레이아웃 (2x2 그리드) */}
            <div className="w-full flex justify-center">
              <GLMSCityBuildingCard
                title={cityBuildingCard.title}
                description={cityBuildingCard.description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
