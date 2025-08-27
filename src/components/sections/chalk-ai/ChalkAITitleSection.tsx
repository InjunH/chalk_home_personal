import OptimizedImage from "@/components/ui/OptimizedImage";

// 상단 타이틀 섹션 컴포넌트 (Figma node 5052:6417)
export default function ChalkAITitleSection() {
  return (
    <div
      className="w-full flex flex-row items-center justify-between"
      style={{ gap: "460px" }}
    >
      {/* 왼쪽: 24/7 MANAGEMENT 타이틀 */}
      <div className="flex flex-col" style={{ gap: "8px" }}>
        <div className="flex flex-row items-center" style={{ gap: "8px" }}>
          <h2
            className="text-white font-bold uppercase"
            style={{
              fontFamily: "Suisse Intl, sans-serif",
              fontSize: "80px",
              letterSpacing: "-3.2px",
              lineHeight: "100%",
            }}
          >
            24/7
          </h2>

          <div className="relative flex items-center">
            {[1, 2, 3].map((i, index) => (
              <div
                key={i}
                className="w-16 h-16 overflow-hidden relative"
                style={{
                  marginLeft: index > 0 ? "-20px" : "0",
                  zIndex: i === 2 ? 20 : 10 - index, // teacher_2가 가장 앞으로
                }}
              >
                <OptimizedImage
                  src={`/images/chalk-ai/teacher_${i}.png`}
                  alt={`Teacher ${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <h2
          className="text-white font-bold uppercase"
          style={{
            fontFamily: "Suisse Intl, sans-serif",
            fontSize: "80px",
            letterSpacing: "-3.2px",
            lineHeight: "100%",
          }}
        >
          MANAGEMENT
        </h2>
      </div>
    </div>
  );
}