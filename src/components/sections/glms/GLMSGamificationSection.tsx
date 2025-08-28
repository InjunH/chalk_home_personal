import GLMSGamificationTitle from "./GLMSGamificationTitle";
import GLMSCarousel from "./GLMSCarousel";
import GLMSCityBuildingCard from "./GLMSCityBuildingCard";
import { GLMS_GAMIFICATION_LAYOUT_CONFIG } from "./styles";
import FeatureCard from "@/components/ui/FeatureCard";

export default function GLMSGamificationSection() {
  // 첫 번째 feature card (일반 레이아웃)
  const firstFeatureCard = {
    title: "학습 완료 후\n즉시 포인트 보상",
    description:
      "나의 강점, 목표, 학습 상태가 한눈에 정리된 \n나만의 대시보드에서 나의 학습 흐름을 확인해 보세요.",
    imageSrc: "/images/g-lms/glms-points-dashboard.png", // 별도 제공 예정
    imageAlt: "포인트 대시보드",
    isReversed: false,
  };

  // 두 번째 feature card (특별한 도시 건설 레이아웃)
  const cityBuildingCard = {
    title: "나만의 도시를 \n건설하세요",
    description:
      "공부할수록 나의 도시가 발전해가요. 학업적 성취도를 한눈에 확인할 수 있어요.",
    imageSrc: "/images/glms-city-building-feature.jpg", // 별도 제공 예정
    imageAlt: "도시 건설 기능",
  };

  return (
    <section
      className="relative py-20 px-6"
      style={{
        backgroundColor: GLMS_GAMIFICATION_LAYOUT_CONFIG.sectionBackground,
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className="flex flex-col"
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
