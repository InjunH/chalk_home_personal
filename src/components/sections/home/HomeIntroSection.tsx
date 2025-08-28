import { ASSETS } from "@/lib/assets";
import { siteContent } from "@/lib/content";
import IntroMainTitle from "@/components/ui/IntroMainTitle";
import IntroTestimonial from "@/components/ui/IntroTestimonial";
import IntroImages from "@/components/ui/IntroImages";

export default function IntroSection() {
  const { intro, review } = siteContent;

  // 메인 제목들 - 기존 데이터 구조 유지
  const descriptions = [
    intro.description1,
    intro.description2,
    intro.description3,
  ];

  // 프리뷰 이미지들 - 겹쳐진 배치 설정
  const previewImages = [
    {
      src: ASSETS.images.intro.figmaImg1,
      alt: "CHALK Preview 1",
      position: "absolute z-30 left-1/3",
    },
    {
      src: ASSETS.images.intro.figmaImg2,
      alt: "CHALK Preview 2",
      position: "relative z-20",
    },
    {
      src: ASSETS.images.intro.figmaImg3,
      alt: "CHALK Preview 3",
      position: "absolute z-10 right-1/3",
    },
  ];

  return (
    <section id="intro" className="py-40 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center flex-col-gap-80">
          {/* Main Copy - IntroMainTitle 컴포넌트 사용 */}
          <IntroMainTitle descriptions={descriptions} />

          {/* Review Section - IntroTestimonial과 IntroImages 컴포넌트 사용 */}
          <div className="mx-auto flex-col-gap-60">
            {/* Testimonial Section */}
            <IntroTestimonial testimonial={review.testimonial} />

            {/* Images Section */}
            <IntroImages images={previewImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
