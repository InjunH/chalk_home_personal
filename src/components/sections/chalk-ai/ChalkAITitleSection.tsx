import OptimizedImage from "@/components/ui/OptimizedImage";

// 상단 타이틀 섹션 컴포넌트 (Figma node 5052:6417)
export default function ChalkAITitleSection() {
  return (
    <div className="w-full flex flex-row items-center justify-between chalk-ai-section-gap-large">
      {/* 왼쪽: 24/7 MANAGEMENT 타이틀 */}
      <div className="flex flex-col chalk-ai-section-gap-small">
        <div className="flex flex-row items-center chalk-ai-section-gap-small">
          <h2 className="chalk-ai-title-large uppercase">
            24/7
          </h2>

          <div className="relative flex items-center">
            {[1, 2, 3].map((i, index) => (
              <div
                key={i}
                className={`w-16 h-16 overflow-hidden relative ${index > 0 ? 'chalk-ai-avatar-container' : ''}`}
                style={{
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
        <h2 className="chalk-ai-title-large uppercase">
          MANAGEMENT
        </h2>
      </div>
    </div>
  );
}