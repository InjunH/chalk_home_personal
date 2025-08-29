"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";
import { GLMS_FEATURE_TITLE_STYLE, GLMS_FEATURE_DESC_STYLE } from "./styles";

import { useLanguage } from "@/contexts/LanguageContext";

interface GLMSCityBuildingCardProps {
  title: string;
  description: string;
}

export default function GLMSCityBuildingCard({
  title,
  description,
}: GLMSCityBuildingCardProps) {
  const { text } = useLanguage();

  // 4개 기능 카드 데이터 (Context에서 동적으로 가져오기)
  const CITY_FEATURES = text.gLMS.gamification.cityBuilding.cards.map(
    (card, index) => ({
      id: index + 1,
      ...card,
      imageSrc: `/images/g-lms/city-feature-${index + 1}.png`,
    })
  );
  return (
    <>
      {/* 모바일 버전 */}
      <div className="block md:hidden w-full flex flex-col items-center space-y-8 py-[2rem]">
        {/* 모바일 2x2 그리드 */}
        <div className="grid grid-cols-1 gap-4 w-full">
          {CITY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-xl overflow-hidden border border-gray-700/30 aspect-square"
            >
              {/* 텍스트 콘텐츠 (모바일용 작은 패딩) */}
              <div className=" p-[1.5rem]">
                <div className="flex flex-col space-y-2">
                  {/* 기능 타이틀 */}
                  <h4 className="text-white font-bold text-sm leading-tight text-[1.125rem]">
                    {feature.title}
                  </h4>

                  {/* 기능 설명 - 모바일에서는 숨김 */}
                  <p className="text-white/70 font-medium text-xs leading-relaxed text-[0.875rem]">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="p-2">
                <OptimizedImage
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PC 버전 (기존 그대로) */}
      <div
        className="hidden md:flex w-full flex-col items-center"
        style={{ gap: "60px" }}
      >
        {/* 상단 텍스트 섹션 */}
        <div className="flex flex-col w-full" style={{ gap: "24px" }}>
          {/* 메인 타이틀 */}
          <h3 className="font-bold text-white" style={GLMS_FEATURE_TITLE_STYLE}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>

          {/* 설명 */}
          <p className="font-bold text-white" style={GLMS_FEATURE_DESC_STYLE}>
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* 2x2 그리드 섹션 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          style={{
            gap: "32px",
          }}
        >
          {CITY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-2xl overflow-hidden border border-gray-700/30 aspect-square"
            >
              {/* 텍스트 콘텐츠 (하단 배치) */}
              <div className="p-6">
                <div className="flex flex-col" style={{ gap: "12px" }}>
                  {/* 기능 타이틀 */}
                  <h4
                    className="text-white font-bold"
                    style={{
                      fontSize: "24px",
                      letterSpacing: "-0.24px",
                      lineHeight: "120%",
                    }}
                  >
                    {feature.title}
                  </h4>

                  {/* 기능 설명 */}
                  <p
                    className="text-white/90 font-medium"
                    style={{
                      fontSize: "14px",
                      letterSpacing: "-0.14px",
                      lineHeight: "140%",
                      wordBreak: "keep-all",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <OptimizedImage
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
