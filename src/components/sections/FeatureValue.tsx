import { siteContent } from "@/lib/content";
import SectionSubtitle from "../ui/SectionSubtitle";
import FeatureMainTitle from "../features/FeatureMainTitle";
import StatCardList from "../features/StatCardList";

export default function FeatureValue() {
  const { features } = siteContent;

  return (
    <section
      id="features"
      className="bg-[#0d0d0d] text-white overflow-hidden"
      style={{
        paddingTop: "120px", // Figma: 섹션 간격
        paddingBottom: "120px",
      }}
    >
      <div className="px-6">
        {/* Figma 스펙: VERTICAL gap: 240px */}
        <div style={{ display: "flex", flexDirection: "column", gap: "240px" }}>
          {/* 첫 번째 섹션: 타이틀 + 통계 카드 - Figma gap: 120px */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "120px" }}
          >
            {/* 타이틀 영역 - Figma 높이: 267px */}
            <div
              className="text-center"
              style={{ gap: "54px", display: "flex", flexDirection: "column" }}
            >
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
