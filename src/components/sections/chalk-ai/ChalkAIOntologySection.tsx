import OptimizedImage from "@/components/ui/OptimizedImage";

export default function ChalkAIOntologySection() {
  // 특징 카드 데이터
  const FEATURES = [
    {
      id: 1,
      title: "정확한 답변 제공",
      icon: "+",
    },
    {
      id: 2,
      title: "유연한 대응",
      icon: "+",
    },
    {
      id: 3,
      title: "고난도 문제 해결",
      icon: "+",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden space-y-8">
          {/* 타이틀 영역 */}
          <div className="text-center">
            <h2 className="chalk-ai-ontology-title-mobile text-white uppercase">
              <span className="block">ONTOLOGY</span>
              <span className="block mt-1">BASED LEARNING</span>
            </h2>
          </div>

          {/* 컴텐츠 영역 - 모바일에서는 세로 정렬 */}
          <div className="flex flex-col gap-6">
            {/* 이미지 영역 */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/chalk-ai/ontolos.png"
                alt="온톨로지 시스템 시각화"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 특징 카드 리스트 */}
            <div className="space-y-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="chalk-ai-ontology-card-mobile bg-white/[0.04] backdrop-blur-sm flex items-center justify-between hover:bg-white/[0.06] transition-colors duration-300"
                >
                  {/* 텍스트 */}
                  <h3 className="chalk-ai-ontology-feature-title-mobile text-white">
                    {feature.title}
                  </h3>

                  {/* 아이콘 */}
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <div className="relative">
                      {/* 가로선 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[1px] bg-white" />
                      {/* 세로선 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-[14px] bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:block space-y-16">
          {/* 타이틀 영역 */}
          <div className="text-center">
            <h2 className="chalk-ai-ontology-title text-white uppercase">
              <span className="block">ONTOLOGY</span>
              <span className="block mt-2">BASED LEARNING</span>
            </h2>
          </div>

          {/* 컴텐츠 영역 */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 왼쪽: 이미지 영역 */}
            <div className="relative h-[656px] rounded-3xl overflow-hidden">
              {/* 온톨로지 배경 이미지 */}
              <OptimizedImage
                src="/images/chalk-ai/ontolos.png"
                alt="온톨로지 시스템 시각화"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 오른쪽: 특징 카드 리스트 */}
            <div className="flex flex-col justify-center pl-0 lg:pl-0">
              <div className="space-y-7">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.id}
                    className="chalk-ai-ontology-card bg-white/[0.04] backdrop-blur-sm rounded-[32px] p-14 flex items-center justify-between hover:bg-white/[0.06] transition-colors duration-300"
                  >
                    {/* 텍스트 */}
                    <h3 className="chalk-ai-ontology-feature-title text-white">
                      {feature.title}
                    </h3>

                    {/* 아이콘 */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="relative">
                        {/* 가로선 */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px] h-[2px] bg-white" />
                        {/* 세로선 */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}