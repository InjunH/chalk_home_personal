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
      className={`absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-0 md:top-auto md:-translate-y-0 ipad-container ${className}`}
    >
      {/* iPad 목업 이미지 */}
      <div className="relative w-full h-full flex items-center justify-center md:items-end">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          className="h-auto object-contain ipad-image"
        />
      </div>
    </div>
  );
}
