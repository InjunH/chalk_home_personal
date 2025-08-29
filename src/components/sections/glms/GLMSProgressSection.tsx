import GLMSProgressTitleSection from "./GLMSProgressTitleSection";
import FeatureCard from "@/components/ui/FeatureCard";

// Progress Tracker 섹션 데이터 (Figma CHALK PC sub 인스턴스 기반)
const PROGRESS_FEATURES = [
  {
    id: 1,
    title: "나만의 목표,\n나만의 대시보드",
    description:
      "나의 강점, 목표, 학습 상태가 한눈에 정리된 \n나만의 대시보드에서 나의 학습 흐름을 확인해 보세요.",
    imageSrc: "/images/g-lms/oll_in_one_1.png",
    imageAlt: "나만의 대시보드",
    isReversed: false,
  },
  {
    id: 2,
    title: "나의 성취를 한눈에 보는\n그래픽 시스템",
    description:
      "주간 리포트를 통해 나의 학습 성취와 진행 상황을 한눈에 확인하고,\nCHALK와 함께 성장하는 변화를 경험해 보세요.",
    imageSrc: "/images/g-lms/oll_in_one_2.png",
    imageAlt: "그래픽 시스템",
    isReversed: true,
  },
  {
    id: 3,
    title: "내게 딱 맞는 코스를 찾아주는\n진로 선생님같은 솔루션",
    description:
      "나의 학습 데이터를 기반으로, \n오직 나만을 위해 설계된 맞춤형 경로를 경험해 보세요.",
    imageSrc: "/images/g-lms/oll_in_one_3.png",
    imageAlt: "진로 솔루션",
    isReversed: false,
  },
];

// 메인 섹션 컴포넌트
export default function GLMSProgressSection() {
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
          {PROGRESS_FEATURES.map((feature, index) => (
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
          {PROGRESS_FEATURES.map((feature, index) => (
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
