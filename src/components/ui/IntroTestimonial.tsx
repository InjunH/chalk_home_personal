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
  return (
    <div className={`mx-auto flex flex-col gap-60 ${className}`}>
      {/* 모바일: 0.875rem (text-sm) 크기 */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-24">
          {/* Quote Section */}
          <div className="flex flex-col gap-0">
            {/* First Quote */}
            <div className="text-white">
              <p className="text-sm text-center leading-relaxed">&ldquo;{testimonial.quote1}&rdquo;</p>
            </div>

            {/* Second Quote */}
            <div className="text-white">
              <p className="text-sm text-center leading-relaxed">{testimonial.quote2}</p>
              <p className="text-sm text-center leading-relaxed">{testimonial.quote3}</p>
            </div>
          </div>

          {/* Reviewer Info */}
          <div className="text-white/70 text-center space-y-1">
            <p className="text-sm font-medium">{testimonial.reviewer.title}</p>
            <p className="text-sm">{testimonial.reviewer.name}</p>
          </div>
        </div>
      </div>

      {/* PC: 기존 스타일 그대로 유지 */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-24">
          {/* Quote Section */}
          <div className="flex flex-col gap-0">
            {/* First Quote */}
            <div className="text-white">
              <p className="testimonial-quote">&ldquo;{testimonial.quote1}&rdquo;</p>
            </div>

            {/* Second Quote */}
            <div className="text-white">
              <p className="testimonial-quote">{testimonial.quote2}</p>
              <p className="testimonial-quote">{testimonial.quote3}</p>
            </div>
          </div>

          {/* Reviewer Info - Figma 정확한 위치 */}
          <div className="text-white/70 text-center space-y-1">
            <p className="testimonial-reviewer">{testimonial.reviewer.title}</p>
            <p className="testimonial-reviewer-name">{testimonial.reviewer.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
