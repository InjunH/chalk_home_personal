interface TestimonialData {
  quote1: string;
  quote2: string;
  quote3: string;
  reviewer: {
    title: string;
    name: string;
  };
}

interface IntroTestimonialProps {
  testimonial: TestimonialData;
  className?: string;
}

export default function IntroTestimonial({
  testimonial,
  className = "",
}: IntroTestimonialProps) {
  // Figma 기반 정확한 스타일
  const quoteStyle = {
    fontSize: "36px", // Figma: 36px
    lineHeight: "33.18px", // Figma: 92.1767578125% of 36px
    letterSpacing: "-0.36px", // Figma: -0.36px
    fontFamily: "Pretendard",
    fontWeight: 700,
    textAlign: "center" as const,
  };

  const reviewerStyle = {
    fontFamily: "ABC Monument Grotesk Semi-Mono", // Figma 정확한 폰트
    fontSize: "12px", // Figma: 12px
    fontWeight: 400,
    letterSpacing: "0.12px", // Figma: 0.12px
    lineHeight: "10.4px", // Figma: 86.70520782470703% of 12px
  };

  const reviewerNameStyle = {
    fontFamily: "Pretendard",
    fontSize: "13px", // Figma: 13px
    fontWeight: 400,
    letterSpacing: "-0.39px", // Figma: -0.39px
    lineHeight: "10.9px", // Figma: 83.79705047607422% of 13px
  };

  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px", // 간격 축소
      }}
    >
      {/* Text Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px", // Figma: 24px gap
        }}
      >
        {/* Quote Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px", // Figma: 0px gap
          }}
        >
          {/* First Quote */}
          <div className="text-white">
            <p style={quoteStyle}>&ldquo;{testimonial.quote1}&rdquo;</p>
          </div>

          {/* Second Quote */}
          <div className="text-white">
            <p style={quoteStyle}>{testimonial.quote2}</p>
            <p style={quoteStyle}>{testimonial.quote3}</p>
          </div>
        </div>

        {/* Reviewer Info - Figma 정확한 위치 */}
        <div className="text-white/70 text-center space-y-1">
          <p style={reviewerStyle}>{testimonial.reviewer.title}</p>
          <p style={reviewerNameStyle}>{testimonial.reviewer.name}</p>
        </div>
      </div>
    </div>
  );
}
