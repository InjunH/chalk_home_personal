import OptimizedImage from "@/components/ui/OptimizedImage";
import { GLMS_FEATURE_TITLE_STYLE, GLMS_FEATURE_DESC_STYLE } from "./styles";

interface GLMSCityBuildingCardProps {
  title: string;
  description: string;
}

// 4개 기능 카드 데이터
const CITY_FEATURES = [
  {
    id: 1,
    title: "실시간 미션 해결",
    description: "매일 학습 목표를 정해 미션이 주어지고, 이를 수행하세요.",
    imageSrc: "/images/g-lms/city-feature-1.png", // 미션 완료 100P 이미지
    imageAlt: "실시간 미션 해결",
  },
  {
    id: 2,
    title: "도시 건설",
    description:
      "미션을 수행할 때마다 골덴 코인을 지급받아 도시건설에 투자 모임을거나 수집을 진행하세요.",
    imageSrc: "/images/g-lms/city-feature-2.png", // 도시 건설 이미지
    imageAlt: "도시 건설",
  },
  {
    id: 3,
    title: "나만의 도시 완성",
    description:
      "건물을 건설하면 도시가 완료되고, 미션을 수행하면 다른 도시를 해금하고 미션사하는 드러움을 수 있어요.",
    imageSrc: "/images/g-lms/city-feature-3.png", // 완성된 도시 이미지
    imageAlt: "나만의 도시 완성",
  },
  {
    id: 4,
    title: "관광객 방문",
    description:
      "도시가 완성되면 AI 사람들이 관광을 와서 힘든있어 도시가 상황 드럽다.",
    imageSrc: "/images/g-lms/city-feature-4.png", // 관광객 방문 이미지
    imageAlt: "관광객 방문",
  },
];

export default function GLMSCityBuildingCard({
  title,
  description,
}: GLMSCityBuildingCardProps) {
  return (
    <>
      {/* 모바일 버전 */}
      <div className="block md:hidden w-full flex flex-col items-center space-y-8 py-[2rem]">
        {/* 상단 텍스트 섹션 */}
        {/* <div className="flex flex-col w-full space-y-4">
          
          <h3 className="glms-grid-item-title-mobile font-bold text-white">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>

          <p className="glms-grid-item-desc-mobile font-bold text-white">
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div> */}

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
