"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";
import ChalkAIManagementSection from "./ChalkAIManagementSection";
import FeatureCard from "@/components/ui/FeatureCard";

import { useLanguage } from "@/contexts/LanguageContext";

// 메인 섹션 컴포넌트
export default function ChalkAIFeatureSection() {
  const { text } = useLanguage();
  
  // Feature 데이터 (Context에서 동적으로 가져오기)
  const FEATURES = text.chalkAI.features;
  
  return (
    <section className="min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden w-full flex flex-col gap-2xl">
          {/* 상단 타이틀 섹션 */}
          <div className="w-full flex flex-col justify-start gap-4 mb-8">
            {/* 24/7 타이틀 */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-row items-center gap-2">
                <h2 className="chalk-ai-title-large-mobile uppercase text-white">
                  24/7
                </h2>

                <div className="relative flex items-center">
                  {[1, 2, 3].map((i, index) => (
                    <div
                      key={i}
                      className={`w-8 h-8 overflow-hidden relative ${
                        index > 0 ? "chalk-ai-avatar-container-mobile" : ""
                      }`}
                      style={{
                        zIndex: i === 2 ? 20 : 10 - index,
                      }}
                    >
                      <OptimizedImage
                        src={`/images/chalk-ai/teacher_${i}.png`}
                        alt={`Teacher ${i}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="chalk-ai-title-large-mobile uppercase text-white">
                MANAGEMENT
              </h2>
            </div>
          </div>

          {/* Feature 카드들 */}
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index}
            />
          ))}
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:flex w-full flex-col gap-3xl">
          {/* 상단 타이틀 섹션 */}
          <ChalkAIManagementSection />

          {/* Feature 카드들 */}
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
