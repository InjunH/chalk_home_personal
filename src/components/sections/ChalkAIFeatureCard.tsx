import OptimizedImage from "@/components/ui/OptimizedImage";

// 스타일 상수들
const STYLES = {
  feature: {
    title: {
      fontFamily: "Suisse Intl",
      fontSize: "80px",
      letterSpacing: "-3.2px",
      lineHeight: "100%",
    },
    subtitle: {
      fontFamily: "Pretendard",
      fontSize: "42px",
      letterSpacing: "0px",
      lineHeight: "92%",
    },
    description: {
      fontFamily: "Pretendard",
      fontSize: "18px",
      letterSpacing: "-0.18px",
      lineHeight: "94%",
      wordBreak: "keep-all",
    },
  },
} as const;

// Feature Card 컴포넌트 Props
export interface ChalkAIFeatureCardProps {
  title: string;
  description: string;
  imageRef: string;
  index: number;
}

// Feature Card 컴포넌트
export default function ChalkAIFeatureCard({
  title,
  description,
  imageRef,
  index,
}: ChalkAIFeatureCardProps) {
  return (
    <div
      className={`flex flex-row`}
      style={{
        gap: "64px",
      }}
    >
      <div className="flex-1 flex flex-col " style={{ gap: "46px" }}>
        <h2 className="text-white font-bold" style={STYLES.feature.subtitle}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p
          className="text-white/70 font-bold"
          style={STYLES.feature.description}
        >
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      {/* 이미지 영역 - 실제 section 이미지 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <OptimizedImage
            src={`/images/chalk-ai/section_${index + 1}.png`}
            alt={`${title} 기능 이미지`}
            className="w-full h-full object-fit"
          />
        </div>
      </div>
    </div>
  );
}
