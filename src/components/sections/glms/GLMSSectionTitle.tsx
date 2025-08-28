import OptimizedImage from "@/components/ui/OptimizedImage";

interface GLMSSectionTitleProps {
  lines: string[];  // 타이틀 라인들 배열
  iconSrc?: string;  // 아이콘 이미지 경로 (optional)
  iconPosition?: "right" | "inline";  // 아이콘 위치
  iconInlineAfter?: number;  // inline일 경우 몇 번째 라인 뒤에 넣을지
}

// 공통 섹션 타이틀 컴포넌트
export default function GLMSSectionTitle({
  lines,
  iconSrc,
  iconPosition = "right",
  iconInlineAfter = 0,
}: GLMSSectionTitleProps) {
  const titleStyle = {
    fontFamily: "Suisse Intl, sans-serif",
    fontSize: "80px",
    letterSpacing: "-3.2px",
    lineHeight: "100%",
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
    <div
      className="w-full flex flex-row items-center justify-between"
      style={{ gap: "460px" }}
    >
      {/* 왼쪽: 타이틀 영역 */}
      <div className="flex flex-col" style={{ gap: lines.length > 1 ? "8px" : "0" }}>
        {lines.map((line, index) => (
          <div key={index} className="flex flex-row items-center">
            <h2
              className="text-white font-bold uppercase"
              style={titleStyle}
            >
              {line}
            </h2>
            {/* inline 아이콘 (특정 라인 뒤에) */}
            {iconPosition === "inline" && index === iconInlineAfter && renderInlineIcon()}
          </div>
        ))}
      </div>

      {/* 오른쪽: 아이콘 (right position) */}
      {renderRightIcon()}
    </div>
  );
}