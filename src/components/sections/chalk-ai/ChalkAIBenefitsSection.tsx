export default function ChalkAIBenefitsSection() {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-4xl py-[5rem] md:py-[22.5rem]">
        {/* 모바일 버전 */}
        <div className="block md:hidden text-center">
          <h2 className="chalk-ai-description-title-mobile text-white">
            <span className="text-white">
              개인의 다양하고 심도있는 질문을 위한
            </span>
            <span className="text-white opacity-70"> </span>
            <span className="text-white">맞춤형 교육의 혁신</span>
            <br />
            <span className="text-white opacity-70">
              끝없는 질문을 위한 확실한 가이드
            </span>
          </h2>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:block text-center">
          <h2 className="chalk-ai-description-title text-white">
            <span className="text-white">
              개인의 다양하고 심도있는 질문을 위한
            </span>
            <span className="text-white opacity-70"> </span>
            <span className="text-white">맞춤형 교육의 혁신</span>
            <br />
            <span className="text-white opacity-70">
              끝없는 질문을 위한 확실한 가이드
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
