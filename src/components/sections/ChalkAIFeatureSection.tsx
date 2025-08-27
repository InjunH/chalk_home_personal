import ChalkAITitleSection from "./ChalkAITitleSection";
import ChalkAIFeatureCard from "./ChalkAIFeatureCard";

// Feature 데이터 (Figma CHALK PC sub 인스턴스 기반)
const FEATURES = [
  {
    id: 1,
    title: "나만을 위한 질의응답과\n실시간 피드백",
    description:
      "완성도 높은 학습 프로세스로 놓치기 쉬운 개념을 정확히 짚어주고, 데이터 분석을 통해 시기별 약점과 부족한 사고 과정을 파악해 필요한 콘텐츠를 적시에 제공합니다.",
    imageRef: "9f0981c82b1a8806f70865ba8ed29da5f0b2c576",
  },
  {
    id: 2,
    title: "내 수준과 스타일에 딱 맞는\n맞춤형 강의",
    description:
      "AI 선생님의 페르소나를 다양하게 설계하고, 학습자의 성향에 맞는\n다양한 강의 스타일을 제공하여 초개인화 맞춤형 학습 경험을 제공합니다.",
    imageRef: "9737cebb2baf2b17eb633b9227a289dda41c7fec",
  },
  {
    id: 3,
    title: "나만을 위한 최적의 경로,\n패스트 트랙 파인더",
    description:
      "초등학교 4학년부터 대입까지— 사용자 데이터 기반의 최적의 학습 트랙을 설계하고,\n실시간 학습 진행 상황과 성적을 추적하여 지속적으로 맞춤형 경로를 제시합니다.",
    imageRef: "b0878e6b4d02db5bc75a8ffcfc013db424657828",
  },
];

// 메인 섹션 컴포넌트
export default function ChalkAIFeatureSection() {
  return (
    <section className="min-h-screen py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="w-full flex flex-col" style={{ gap: "120px" }}>
          {/* 상단 타이틀 섹션 */}
          <ChalkAITitleSection />

          {/* Feature 카드들 */}
          {FEATURES.map((feature, index) => (
            <ChalkAIFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageRef={feature.imageRef}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}