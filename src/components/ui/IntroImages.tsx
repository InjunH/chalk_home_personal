import OptimizedImage from "@/components/ui/OptimizedImage";

interface ImageData {
  src: string;
  alt: string;
  position: string;
}

interface IntroImagesProps {
  images: ImageData[];
  className?: string;
}

export default function IntroImages({
  images,
  className = "",
}: IntroImagesProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 모바일: 작은 크기로 조정, 단순 중앙 배치 */}
      <div className="block md:hidden">
        {/* Light Background Effect */}
        <div className="absolute intro-light-effect" />

        {/* Device Images - 모바일에서는 중앙에 하나만 표시 */}
        <div className="relative flex justify-center items-center h-48">
          {images.map((image, index) => (
            <div key={index} className={image.position}>
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-40 h-auto drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PC: 기존 스타일 그대로 유지 */}
      <div className="hidden md:block">
        {/* Light Background Effect - Figma 정확한 위치 */}
        <div className="absolute intro-light-effect" />

        {/* Overlapping Device Images - Figma 구조 */}
        <div className="relative flex justify-center items-center h-96 intro-images-container">
          {images.map((image, index) => (
            <div key={index} className={image.position}>
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-64 h-auto drop-shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
