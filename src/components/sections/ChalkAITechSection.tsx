import OptimizedImage from "@/components/ui/OptimizedImage";

export default function ChalkAITechSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* 배경 그라디언트 효과 */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-white/[0.02] to-gray-600/[0.02] rounded-[48px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="space-y-20">
          {/* 상단 텍스트 */}
          <div className="text-center">
            <p
              className="text-white text-xs font-normal"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontSize: "11px",
                letterSpacing: "-0.22px",
                lineHeight: "140%",
              }}
            >
              👀 퍼스트해빗의 기술에 대해 더 알고싶다면?
            </p>
          </div>

          {/* 메인 콘텐츠 영역 */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ gap: "44px" }}
          >
            <div className="relative flex-1">
              <h2
                className="text-center font-bold uppercase transform"
                style={{
                  fontFamily: "Suisse Intl, sans-serif",
                  fontSize: "80px",
                  letterSpacing: "-3.2px",
                  lineHeight: "100%",
                  background:
                    "linear-gradient(90deg, #B4B4B4 0%, #FFFFFF 34.5%, #9A9A9A 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                <span className="block">UNLOCK THE</span>
                <span className="block">TECHNOLOGY</span>
              </h2>
            </div>

            <div className="flex flex-row" style={{ gap: "32px" }}>
              {/* FIRSTHABIT TECH PAGE 버튼 */}
              <a href="#" className="group">
                <div
                  className="bg-white rounded-full px-9 py-5 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300"
                  style={{
                    borderRadius: "3212px",
                    paddingLeft: "25px",
                    paddingRight: "36px",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                  }}
                >
                  {/* 로고 아이콘 */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-8 h-9 bg-black rounded-sm" />
                  </div>

                  <span
                    className="text-black font-bold"
                    style={{
                      fontFamily: "Suisse Intl, sans-serif",
                      fontSize: "28px",
                      letterSpacing: "-1.12px",
                      lineHeight: "103%",
                    }}
                  >
                    FIRSTHABIT TECH PAGE
                  </span>
                </div>
              </a>

              {/* FIRSTHABIT TECH BLOG 버튼 */}
              <a href="#" className="group">
                <div
                  className="bg-white rounded-full px-9 py-5 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300"
                  style={{
                    borderRadius: "3212px",
                    paddingLeft: "25px",
                    paddingRight: "36px",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                  }}
                >
                  {/* 네이버 로고 아이콘 */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <span
                    className="text-black font-bold"
                    style={{
                      fontFamily: "Suisse Intl, sans-serif",
                      fontSize: "28px",
                      letterSpacing: "-1.12px",
                      lineHeight: "103%",
                    }}
                  >
                    FIRSTHABIT TECH BLOG
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* 하단 이미지 영역 (플레이스홀더) */}
          <div className="relative h-96 mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent rounded-3xl overflow-hidden">
              {/* 이미지 마스킹 효과 */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-50" />

              {/* Product 3.0 메인 포스터 이미지 */}
              <div className="w-full h-full flex items-center justify-center">
                <OptimizedImage
                  src="/images/chalk-ai/Product 3.0(CHALK)_Main Poster_02.png"
                  alt="CHALK Product 3.0 메인 포스터"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
