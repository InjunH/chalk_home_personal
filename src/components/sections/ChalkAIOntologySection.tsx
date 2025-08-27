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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-16">
          {/* 타이틀 영역 */}
          <div className="text-center">
            <h2
              className="text-white font-bold uppercase"
              style={{
                fontFamily: "Suisse Intl, sans-serif",
                fontSize: "80px",
                letterSpacing: "-3.2px",
                lineHeight: "100%",
              }}
            >
              <span className="block">ONTOLOGY</span>
              <span className="block mt-2">BASED LEARNING</span>
            </h2>
            {/* 작은 이미지/아이콘 플레이스홀더 - 실제 이미지가 있다면 교체 */}
            <div className="absolute top-0 right-0 w-28 h-28 opacity-50">
              <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-purple-600/20 rounded-lg" />
            </div>
          </div>

          {/* 컨텐츠 영역 */}
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
                    className="bg-white/[0.04] backdrop-blur-sm rounded-[32px] p-14 flex items-center justify-between hover:bg-white/[0.06] transition-colors duration-300"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    {/* 텍스트 */}
                    <h3
                      className="text-white font-bold"
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontSize: "28px",
                        letterSpacing: "-0.28px",
                        lineHeight: "120%",
                      }}
                    >
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
