import { siteContent } from "@/lib/content";
import { ASSETS } from "@/lib/assets";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function FeatureSectionVideo() {
  const { features } = siteContent;

  return (
    <section className="min-h-screen py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 
              className="text-white font-bold leading-tight"
              style={{
                fontFamily: "Suisse Intl, Pretendard",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              {features.section3.title}
            </h2>
            <p 
              className="text-white/60"
              style={{
                fontFamily: "Suisse Intl, Pretendard",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              {features.section3.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.section3.features.map((feature, index) => (
              <div key={index} className="space-y-6">
                {/* Feature Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-4">
                  <h3 
                    className="text-white font-bold leading-tight"
                    style={{
                      fontFamily: "Pretendard",
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      fontWeight: 700,
                    }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="text-white/70 leading-relaxed"
                    style={{
                      fontFamily: "Pretendard",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      fontWeight: 400,
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Small decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-green-500/20 rounded-full px-6 py-3">
              <span 
                className="text-green-300 font-semibold"
                style={{
                  fontFamily: "Suisse Intl, Pretendard",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                혁신적인 학습 경험을 시작하세요
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
