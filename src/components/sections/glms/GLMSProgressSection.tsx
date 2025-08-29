"use client";

import GLMSProgressTitleSection from "./GLMSProgressTitleSection";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";

// 메인 섹션 컴포넌트
export default function GLMSProgressSection() {
  const { text } = useLanguage();
  const progressFeatures = text.gLMS.progress.features;

  return (
    <section className="min-h-screen py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden w-full flex flex-col space-y-12">
          {/* <GLMSProgressTitleSection /> */}
          <div className="justify-start">
            <h2 className="glms-gamification-title-mobile text-white">
              ALL IN ONE
              <br />
              PROGRESS
              <br />
              TRACKER
            </h2>
          </div>

          {/* Feature 카드들 - 모바일에서는 좌우 전환 없이 수직 배치 */}
          {progressFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.imageSrc}
              index={index}
            />
          ))}
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:flex w-full flex-col gap-3xl">
          {/* 상단 타이틀 섹션 */}
          <GLMSProgressTitleSection />

          {/* Feature 카드들 */}
          {progressFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
