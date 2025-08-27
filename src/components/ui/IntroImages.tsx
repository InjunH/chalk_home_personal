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
  // 겹쳐진 이미지 공통 스타일
  const imageCommonClass = "w-64 h-auto drop-shadow-2xl";

  return (
    <div className={`relative ${className}`}>
      {/* Light Background Effect - Figma 정확한 위치 */}
      <div className="absolute intro-light-effect" />
      
      {/* Overlapping Device Images - Figma 구조 */}
      <div className="relative flex justify-center items-center h-96 intro-images-container">
        {images.map((image, index) => (
          <div key={index} className={image.position}>
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className={imageCommonClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
}