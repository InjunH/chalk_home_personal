import { siteContent } from "@/lib/content";
import OptimizedImage from "../ui/OptimizedImage";
import { ASSETS } from "@/lib/assets";

export default function FeatureValue() {
  const { features } = siteContent;

  // 공통 스타일
  const numberStyle = {
    fontWeight: 700,
    fontSize: "clamp(3rem, 6vw, 7rem)",
    letterSpacing: "-0.05em",
    lineHeight: "0.9",
  };

  const labelStyle = {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: "18px",
    letterSpacing: "-0.5px",
  };

  return (
    <section
      id="features"
      className="min-h-[80vh] max-h-[100vh] py-20 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Section Header - Figma 스펙 적용 */}
          <div className="space-y-6">
            <p
              className="text-white/60"
              style={{
                fontFamily: "Suisse Intl",
                fontWeight: 600,
                fontSize: "24px",
                letterSpacing: "-0.48px",
                textAlign: "center",
                lineHeight: "1",
              }}
            >
              {features.value.subtitle}
            </p>
            <h2 className="text-center leading-tight">
              <div className="flex flex-row items-center justify-center">
                {/* "The" - 일반 텍스트 */}
                <span
                  className="text-white"
                  style={{
                    fontFamily: "Suisse Intl",
                    fontWeight: 700,
                    fontSize: "96px",
                    letterSpacing: "-2.88px",
                    lineHeight: "1",
                  }}
                >
                  The
                </span>

                {/* "New" - NN Konrad + 그라데이션 */}
                <span
                  className="bg-gradient-to-r from-[#b4b4b4] via-white to-[#9a9a9a] bg-clip-text text-transparent pl-4"
                  style={{
                    fontFamily: "'NN Konrad', serif",
                    fontWeight: 700,
                    fontSize: "94px",
                    letterSpacing: "-2.82px",
                    lineHeight: "1",
                  }}
                >
                  New
                </span>
              </div>

              {/* "Paradigm" - UPPERCASE */}
              <div className="flex flex-row items-center justify-center">
                <span
                  className="text-white uppercase"
                  style={{
                    fontFamily: "Suisse Intl",
                    fontWeight: 700,
                    fontSize: "96px",
                    letterSpacing: "-2.88px",
                    lineHeight: "1",
                  }}
                >
                  Paradigm
                </span>
                <OptimizedImage
                  src={ASSETS.images.features.mainImg}
                  alt="feature"
                  className="w-[96px] h-[96px]"
                />
              </div>
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.value.stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                {/* Number */}
                <div className="text-left mb-6">
                  <span className="text-white font-bold" style={numberStyle}>
                    {stat.value}
                  </span>
                  <span
                    className="text-white/60 ml-2"
                    style={{
                      ...numberStyle,
                      fontSize: "clamp(1.5rem, 3vw, 3rem)",
                    }}
                  >
                    {stat.unit}
                  </span>
                </div>

                <div className="flex flex-col items-start justify-start">
                  <div className="text-4xl opacity-70">
                    <OptimizedImage
                      src={stat.icon}
                      alt={stat.label}
                      className="w-10 h-10"
                    />
                  </div>
                  {/* Label */}
                  <div className="flex flex-row text-center text-sm items-center">
                    <p className="text-white/80" style={labelStyle}>
                      {stat.label}
                    </p>
                    {stat.sub_label && (
                      <p className="text-white/60 ml-2 text-xs">
                        {stat.sub_label}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
