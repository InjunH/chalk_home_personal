export default function GLMSVisionSection() {
  return (
    <section className="py-[6.25rem] md:py-[22.5rem] px-6">
      <div className="container mx-auto">
        {/* 모바일 버전 */}
        <div className="block md:hidden text-center">
          <h2 className="glms-vision-title-mobile py-[5rem]">
            <span>
              이제 교육은 게임처럼 상호작용
              <br />
              <span className="opacity-70">
                이 가능하고 <br />
              </span>
            </span>
            <span className="opacity-70">몰입감과 성취감이 있어야 합니다</span>
          </h2>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:block text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span>
              이제 교육은 게임처럼 상호작용
              <span className="opacity-70">
                이 가능하고 <br />
              </span>
            </span>
            <span className="opacity-70">몰입감과 성취감이 있어야 합니다</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
