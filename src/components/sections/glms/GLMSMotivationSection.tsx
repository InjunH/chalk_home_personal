import GLMSMotivationTitleSection from "./GLMSMotivationTitleSection";
import FeatureCard from "@/components/ui/FeatureCard";

// Motivation System 섹션 데이터 (Figma CHALK PC sub 인스턴스 기반)
const MOTIVATION_FEATURES = [
  {
    id: 1,
    title: "보상의 재미,\n배움의 즐거움",
    description:
      "학습을 통해 쌓아가는 스스로의 지식과 그 과정에서 얻는 \n매력적인 성취의 보상을 통해 배움의 즐거움을 경험해 보세요.",
    imageSrc: "/images/g-lms/immersive_1.png",
  },
  {
    id: 2,
    title: "친구와 그룹과 함께 더 오래,\n소셜과 매치 이벤트",
    description:
      "친구와 함께하는 성장에 자연스러운 동기를 얻고,\n목표를 향해 꾸준히 나아갈 수 있는 동력이 됩니다.",
    imageSrc: "/images/g-lms/immersive_2.png",
  },
];

// 메인 섹션 컴포넌트
export default function GLMSMotivationSection() {
  return (
    <section className="min-h-screen py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="w-full flex flex-col gap-3xl">
          {/* 상단 타이틀 섹션 */}
          <GLMSMotivationTitleSection />

          {/* Feature 카드들 */}
          {MOTIVATION_FEATURES.map((feature, index) => (
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
