import OptimizedImage from "@/components/ui/OptimizedImage";
import { siteContent } from "@/lib/content";
import SectionSubtitle from "../ui/SectionSubtitle";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

export default function FeatureExperience() {
  const { features } = siteContent;
  return (
    <section className="bg-[#0C0C0C] text-white overflow-hidden feature-experience-section">
      <div>
        <div className="container mx-auto px-6 feature-experience-container">
          {/* 타이틀 영역 */}
          <div className="text-center feature-experience-title">
            {/* Just Chalk it up - 서브타이틀 */}
            <SectionSubtitle className="mb-[3.8rem]">
              Just Chalk it up
            </SectionSubtitle>

            {/* Experience - 메인 타이틀 */}
            <h2 className="feature-experience-main-title">
              {features.experience.content.top}
            </h2>
            <OptimizedImage
              src={features.experience.content.middle_image}
              alt="feature"
              width={1000}
              height={1000}
              className="h-[10rem]"
            />
            <NNKonradTitle variant="silver" className="text-cta-subtitle">
              {features.experience.content.bottom}
            </NNKonradTitle>
          </div>
        </div>
        {/* 비디오 썸네일 영역 */}
        <div className="relative flex justify-center items-center mt-[7.5rem]">
          <div className="relative">
            <OptimizedImage
              src="/images/video-thumbnail.png"
              alt="CHALK Experience Video"
              width={1920}
              height={1080}
              className="w-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
