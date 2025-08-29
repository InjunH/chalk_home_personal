"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import FeatureMainTitle from "@/components/features/FeatureMainTitle";
import StatCardList from "@/components/features/StatCardList";

export default function HomeStatsSection() {
  const { text } = useLanguage();
  const { features } = text;

  return (
    <section id="features" className="text-white overflow-hidden">
      <div className="features-container">
        {/* 반응형 수직 간격 */}
        <div className="space-y-8 md:space-y-24 lg:space-y-32">
          {/* 첫 번째 섹션: 타이틀 + 통계 카드 */}
          <div className="space-y-6 md:space-y-16 lg:space-y-20">
            {/* 타이틀 영역 */}
            <div className="text-center space-y-4 md:space-y-8 lg:space-y-10">
              {/* 서브타이틀 */}
              <SectionSubtitle>{features.value.subtitle}</SectionSubtitle>

              {/* 메인 타이틀 */}
              <FeatureMainTitle />
            </div>

            {/* 통계 카드 목록 */}
            <StatCardList stats={features.value.stats} />
          </div>
        </div>
      </div>
    </section>
  );
}
