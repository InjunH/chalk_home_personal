import OptimizedImage from "@/components/ui/OptimizedImage";
import { siteContent } from "@/lib/content";
import SectionSubtitle from "../ui/SectionSubtitle";

export default function FeatureExperience() {
  const { features } = siteContent;
  return (
    <section
      className="bg-[#0d0d0d] text-white overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div>
        <div
          className="container mx-auto px-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "120px",
            alignItems: "center",
          }}
        >
          {/* 타이틀 영역 */}
          <div
            className="text-center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Just Chalk it up - 서브타이틀 */}
            <SectionSubtitle className="mb-[3.8rem]">
              Just Chalk it up
            </SectionSubtitle>

            {/* Experience - 메인 타이틀 */}
            <h2
              style={{
                fontFamily: "Suisse Intl",
                fontSize: "96px",
                fontWeight: 700,
                letterSpacing: "-2.88px",
                lineHeight: "1.0",
                textAlign: "center",
              }}
            >
              {features.experience.content.top}
            </h2>
            <OptimizedImage
              src={features.experience.content.middle_image}
              alt="feature"
              width={1000}
              height={1000}
              className="h-[10rem]"
            />
            <h2
              className="text-white/60"
              style={{
                fontFamily: "'NN Konrad', serif",
                fontSize: "96px",
                fontWeight: 700,
                letterSpacing: "-2.88px",
                lineHeight: "1.0",
                textAlign: "center",
              }}
            >
              {features.experience.content.bottom}
            </h2>
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

        {/* <div className="text-center" style={{ marginTop: "60px" }}>
            <p
              className="text-white"
              style={{
                fontFamily: "Pretendard",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.18px",
                lineHeight: "1.2",
                whiteSpace: "pre-line",
              }}
            >
              CHALK만의 학습 효율의 차이를{"\n"}1분 만에 경험하세요🔥
            </p>
          </div> */}
      </div>
    </section>
  );
}
