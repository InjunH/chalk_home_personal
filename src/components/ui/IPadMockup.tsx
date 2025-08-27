import OptimizedImage from "./OptimizedImage";

interface IPadMockupProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function IPadMockup({
  imageSrc,
  imageAlt,
  className = "",
}: IPadMockupProps) {
  return (
    <div
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${className}`}
      style={{
        width: "100%",
        maxWidth: "1200px", // 크기 줄임
        height: "60vh", // 화면의 60% 높이로 줄임
        maxHeight: "750px", // 최대 높이 줄임
        minHeight: "500px", // 최소 높이 줄임
      }}
    >
      {/* 마스킹 그라데이션 */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(13, 13, 13, 0.8) 100%)",
        }}
      />

      {/* iPad 목업 이미지 */}
      <div className="relative w-full h-full flex items-end justify-center">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          className="h-auto object-contain"
          style={{
            width: "clamp(600px, 70vw, 900px)", // 기본 사이즈: 600px ~ 900px
            maxWidth: "900px", // 최대 너비 더 줄임
            maxHeight: "80%", // 부모 높이의 80%로 제한
          }}
        />
      </div>
    </div>
  );
}