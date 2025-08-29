import OptimizedImage from "@/components/ui/OptimizedImage";
import { siteContent } from "@/lib/content";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

export default function HomeShowcaseSection() {
  const { features } = siteContent;
  return (
    <section className="text-white overflow-hidden pt-12 md:pt-20 lg:pt-[15rem]">
      <div className="space-y-16 md:space-y-24 lg:space-y-32">
        <div className="container pb-24 md:pb-20 lg:pb-24">
          {/* 타이틀 영역 */}
          <div className="text-center space-y-4 md:space-y-12 lg:space-y-16">
            {/* Just Chalk it up - 서브타이틀 */}
            <SectionSubtitle className="text-sm md:text-base">
              Just Chalk it up
            </SectionSubtitle>

            {/* Experience - 메인 타이틀 */}
            <>
              {/* 모바일: 간단한 레이아웃 */}
              <div className="block md:hidden">
                <h2 className="mobile-feature-title">
                  {features.experience.content.top}
                </h2>

                <div className="flex justify-center">
                  <OptimizedImage
                    src={features.experience.content.middle_image}
                    alt="feature"
                    width={1000}
                    height={1000}
                    className="h-48 w-auto"
                  />
                </div>

                <NNKonradTitle variant="silver">
                  {features.experience.content.bottom}
                </NNKonradTitle>
              </div>

              {/* PC: 기존 스타일 그대로 유지 */}
              <div className="hidden md:block space-y-4 md:space-y-6 lg:space-y-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight">
                  {features.experience.content.top}
                </h2>

                <div className="flex justify-center">
                  <OptimizedImage
                    src={features.experience.content.middle_image}
                    alt="feature"
                    width={1000}
                    height={1000}
                    className="h-24 md:h-32 lg:h-40 w-auto"
                  />
                </div>

                <NNKonradTitle
                  variant="silver"
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  {features.experience.content.bottom}
                </NNKonradTitle>
              </div>
            </>
          </div>
        </div>

        {/* 비디오 썸네일 영역 */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full">
            <OptimizedImage
              src="/images/video-thumbnail.png"
              alt="CHALK Experience Video"
              width={1920}
              height={1080}
              className="w-full h-screen object-cover md:h-auto md:object-contain rounded-lg md:rounded-xl lg:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
