import OptimizedImage from "@/components/ui/OptimizedImage";


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
    <div className="flex flex-row chalk-ai-feature-card-gap">
      <div className="flex-1 flex flex-col chalk-ai-feature-card-content-gap">
        <h2 className="chalk-ai-feature-subtitle text-white">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="chalk-ai-feature-description text-white/70">
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
