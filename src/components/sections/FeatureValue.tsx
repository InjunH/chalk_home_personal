import { siteContent } from "@/lib/content";
import SectionSubtitle from "../ui/SectionSubtitle";
import FeatureMainTitle from "../features/FeatureMainTitle";
import StatCardList from "../features/StatCardList";

export default function FeatureValue() {
  const { features } = siteContent;

  return (
    <section
      id="features"
      className="bg-[#0C0C0C] text-white overflow-hidden pb-[120px]"
    >
      <div className="px-6">
        {/* Figma 스펙: VERTICAL gap: 240px */}
        <div className="flex-col-gap-240">
          {/* 첫 번째 섹션: 타이틀 + 통계 카드 - Figma gap: 120px */}
          <div className="flex-col-gap-120">
            {/* 타이틀 영역 - Figma 높이: 267px */}
            <div className="text-center flex-col-gap-54">
              {/* 서브타이틀 - "Your new Companion" */}
              <SectionSubtitle>{features.value.subtitle}</SectionSubtitle>

              {/* 메인 타이틀 - Figma 정확한 구조 */}
              <FeatureMainTitle />
            </div>

            {/* 통계 카드 목록 - Figma: HORIZONTAL gap: 28px, 높이: 542px */}
            <StatCardList stats={features.value.stats} />
          </div>
        </div>
      </div>
    </section>
  );
}
