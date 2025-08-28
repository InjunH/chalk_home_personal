import OptimizedImage from "@/components/ui/OptimizedImage";
import { GLMS_FEATURE_TITLE_STYLE, GLMS_FEATURE_DESC_STYLE } from "./styles";

interface GLMSFeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean; // 좌우 순서 반전
}

export default function GLMSFeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: GLMSFeatureCardProps) {
  return (
    <div
      className={`flex items-center w-full ${
        isReversed ? "flex-row-reverse" : "flex-row"
      }`}
      style={{
        gap: "64px", // ChalkAI와 동일한 간격
      }}
    >
      {/* 텍스트 콘텐츠 섹션 */}
      <div
        className="flex-1 flex flex-col justify-start"
        style={{ gap: "46px" }}
      >
        {/* 타이틀 (Figma Node: I5201:1731;5014:617 등) */}
        <h3 className="font-bold text-white" style={GLMS_FEATURE_TITLE_STYLE}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h3>

        {/* 설명 (Figma Node: I5201:1731;5014:618 등) */}
        <p className="font-bold text-white" style={GLMS_FEATURE_DESC_STYLE}>
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      {/* 이미지 섹션 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ height: "582px" }} // Figma 높이 유지
          />
        </div>
      </div>
    </div>
  );
}
