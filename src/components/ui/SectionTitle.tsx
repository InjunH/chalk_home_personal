import OptimizedImage from "@/components/ui/OptimizedImage";

// 타이틀 변형 타입
type TitleVariant = "hero" | "section" | "subsection";
type FontFamily = "nn-konrad" | "suisse" | "pretendard";

interface SectionTitleProps {
  variant?: TitleVariant;
  fontFamily?: FontFamily;
  lines: string[];
  iconSrc?: string;
  iconPosition?: "right" | "inline";
  iconInlineAfter?: number;
  className?: string;
  gap?: "small" | "medium" | "large"; // 460px, 320px, 240px
}

// 범용 섹션 타이틀 컴포넌트 (G-LMS GLMSSectionTitle 기반 확장)
export default function SectionTitle({
  variant = "section",
  fontFamily = "suisse",
  lines,
  iconSrc,
  iconPosition = "right",
  iconInlineAfter = 0,
  className = "",
  gap = "large",
}: SectionTitleProps) {
  // 변형별 스타일 설정 (반응형)
  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return {
          fontSize: fontFamily === "nn-konrad" ? "96px" : "182px",
          letterSpacing: fontFamily === "nn-konrad" ? "-2.88px" : "-1.82px",
          lineHeight: fontFamily === "nn-konrad" ? "100%" : "90%",
        };
      case "section":
        return {
          fontSize: "80px",
          letterSpacing: "-3.2px",
          lineHeight: "100%",
        };
      case "subsection":
        return {
          fontSize: "42px",
          letterSpacing: "0px",
          lineHeight: "92%",
        };
      default:
        return {
          fontSize: "80px",
          letterSpacing: "-3.2px",
          lineHeight: "100%",
        };
    }
  };

  // 모바일 스타일 설정
  const getMobileVariantClass = () => {
    switch (variant) {
      case "hero":
        return fontFamily === "nn-konrad" ? "mobile-title-nn" : "mobile-title";
      case "section":
        return "glms-progress-title-mobile";
      case "subsection":
        return "glms-feature-desc-mobile";
      default:
        return "glms-progress-title-mobile";
    }
  };

  // 폰트 패밀리 설정
  const getFontFamily = () => {
    switch (fontFamily) {
      case "nn-konrad":
        return "NN Konrad, serif";
      case "suisse":
        return "Suisse Intl, sans-serif";
      case "pretendard":
        return "Pretendard, sans-serif";
      default:
        return "Suisse Intl, sans-serif";
    }
  };

  // Gap 크기 CSS 클래스 설정
  const getGapClass = () => {
    switch (gap) {
      case "small":
        return "gap-4xl"; // 240px / 15rem
      case "medium":
        return "gap-20"; // 320px / 20rem (커스텀)
      case "large":
        return "gap-section-title"; // 460px / 28.75rem
      default:
        return "gap-section-title";
    }
  };

  const titleStyle = {
    fontFamily: getFontFamily(),
    ...getVariantStyles(),
  };

  // inline 아이콘 렌더링
  const renderInlineIcon = () => {
    if (!iconSrc || iconPosition !== "inline") return null;

    return (
      <div className="relative w-20 h-20 ml-2">
        <OptimizedImage
          src={iconSrc}
          alt="Section Icon"
          fill
          className="object-contain"
        />
      </div>
    );
  };

  // 오른쪽 아이콘 렌더링
  const renderRightIcon = () => {
    if (!iconSrc || iconPosition !== "right") return null;

    return (
      <div className="relative w-20 h-20">
        <OptimizedImage
          src={iconSrc}
          alt="Section Icon"
          fill
          className="object-contain"
        />
      </div>
    );
  };

  return (
    <>
      {/* 모바일 버전 */}
      <div className="block md:hidden w-full flex flex-col items-center text-center space-y-4">
        <div className={`flex flex-col ${lines.length > 1 ? "space-y-2" : ""}`}>
          {lines.map((line, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start"
            >
              <h2
                className={`text-white font-bold uppercase ${getMobileVariantClass()}`}
              >
                {line}
              </h2>
              {/* inline 아이콘 (특정 라인 뒤에) */}
              {iconPosition === "inline" && index === iconInlineAfter && (
                <div className="relative w-8 h-8 ml-2">
                  <OptimizedImage
                    src={iconSrc!}
                    alt="Section Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* right position 아이콘 */}
        {iconPosition === "right" && iconSrc && (
          <div className="relative w-16 h-16">
            <OptimizedImage
              src={iconSrc}
              alt="Section Icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* PC 버전 (기존 그대로) */}
      <div
        className={`hidden md:flex w-full flex-row items-center justify-between ${getGapClass()} ${className}`}
      >
        {/* 왼쪽: 타이틀 영역 */}
        <div className={`flex flex-col ${lines.length > 1 ? "gap-2xs" : ""}`}>
          {lines.map((line, index) => (
            <div key={index} className="flex flex-row items-center">
              <h2 className="text-white font-bold uppercase" style={titleStyle}>
                {line}
              </h2>
              {/* inline 아이콘 (특정 라인 뒤에) */}
              {iconPosition === "inline" &&
                index === iconInlineAfter &&
                renderInlineIcon()}
            </div>
          ))}
        </div>

        {/* 오른쪽: 아이콘 (right position) */}
        {renderRightIcon()}
      </div>
    </>
  );
}
