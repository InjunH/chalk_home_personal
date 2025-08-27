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
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: "300px", // Figma 크기
          height: "115px", // Figma 크기
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(45deg, rgba(22, 207, 107, 0.3), rgba(0, 150, 255, 0.2))",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      
      {/* Overlapping Device Images - Figma 구조 */}
      <div 
        className="relative flex justify-center items-center h-96"
        style={{
          zIndex: 10,
        }}
      >
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