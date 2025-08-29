"use client";
import GLMSMotivationTitleSection from "./GLMSMotivationTitleSection";
import FeatureCard from "@/components/ui/FeatureCard";

import { useLanguage } from "@/contexts/LanguageContext";

// 메인 섹션 컴포넌트
export default function GLMSMotivationSection() {
  const { text } = useLanguage();

  return (
    <section className="min-h-screen py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden w-full flex flex-col space-y-12">
          <div className="justify-start">
            <GLMSMotivationTitleSection />
          </div>

          {/* Feature 카드들 - 모바일에서는 좌우 전환 없이 수직 배치 */}
          {text.gLMS.motivation.features.map((feature, index) => (
            <FeatureCard
              key={index + 1}
              title={feature.title}
              description={feature.description}
              image={`/images/g-lms/immersive_${index + 1}.png`}
              index={index}
            />
          ))}
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:flex w-full flex-col gap-3xl">
          {/* 상단 타이틀 섹션 */}
          <GLMSMotivationTitleSection />

          {/* Feature 카드들 */}
          {text.gLMS.motivation.features.map((feature, index) => (
            <FeatureCard
              key={index + 1}
              title={feature.title}
              description={feature.description}
              image={`/images/g-lms/immersive_${index + 1}.png`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
