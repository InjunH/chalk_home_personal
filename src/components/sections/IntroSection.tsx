import { ASSETS } from "@/lib/assets";
import { siteContent } from "@/lib/content";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function IntroSection() {
  const { intro, review } = siteContent;

  // 공통 스타일
  const mainHeadingStyle = {
    fontSize: "72px",
    lineHeight: "72px",
    fontFamily: "Pretendard",
    fontWeight: 700,
    textAlign: "center" as const,
  };

  const quoteStyle = {
    fontSize: "36px",
    lineHeight: "39.6px",
    letterSpacing: "-0.36px",
    fontFamily: "Pretendard",
    fontWeight: 700,
    textAlign: "center" as const,
  };

  // 겹쳐진 이미지 공통 스타일
  const imageCommonClass = "w-64 h-auto drop-shadow-2xl";

  // 메인 제목들
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
    <section
      id="intro"
      className="min-h-[80vh] max-h-[100vh] py-20 bg-[#0d0d0d] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Main Copy */}
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            {descriptions.map((description, index) => (
              <h2
                key={index}
                className="font-bold leading-tight bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
                style={mainHeadingStyle}
              >
                {description}
              </h2>
            ))}
          </div>

          {/* Review Section */}
          <div className="mx-auto">
            {/* First Quote */}
            <div className="text-white">
              <p className="font-bold uppercase" style={quoteStyle}>
                &ldquo;{review.testimonial.quote1}&rdquo;
              </p>
            </div>

            {/* Second Quote */}
            <div className="text-white opacity-70">
              <p className="font-bold" style={quoteStyle}>
                {review.testimonial.quote2}
              </p>
              <p className="font-bold" style={quoteStyle}>
                {review.testimonial.quote3}
              </p>
            </div>

            {/* Reviewer Info */}
            <div className="text-white/70 text-center space-y-2 mt-10">
              <p className="text-sm font-semibold uppercase tracking-wide">
                {review.testimonial.reviewer.title}
              </p>
              <p className="text-lg font-medium">
                {review.testimonial.reviewer.name}
              </p>
            </div>
          </div>

          {/* Overlapping Device Images */}
          <div className="relative flex justify-center items-center h-96">
            {previewImages.map((image, index) => (
              <div key={index} className={image.position}>
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className={imageCommonClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
