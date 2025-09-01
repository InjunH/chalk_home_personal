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
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ipad-container ${className}`}
    >
      {/* 마스킹 그라데이션 */}
      <div className="absolute inset-0 z-10" />

      {/* iPad 목업 이미지 */}
      <div className="relative w-full h-full flex items-end justify-center">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          className="h-auto object-contain ipad-image"
        />
      </div>
    </div>
  );
}
