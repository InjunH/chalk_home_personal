"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* 모바일: 작은 크기로 조정, 단순 중앙 배치 */}
      <div className="block md:hidden">
        {/* Light Background Effect */}
        <div className="absolute intro-light-effect" />

        {/* Device Images - 모바일에서는 중앙에 하나만 표시 */}
        <div className="relative flex justify-center items-center h-48">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ease-out ${
                isInView
                  ? index === 0
                    ? "left-0 z-10"
                    : index === 2
                    ? "right-0 z-10"
                    : "z-20"
                  : "left-1/2 -translate-x-1/2 z-10"
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-40 h-auto drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PC: 기존 스타일 그대로 유지 + 애니메이션 추가 */}
      <div className="hidden md:block">
        {/* Light Background Effect - Figma 정확한 위치 */}
        <div className="absolute intro-light-effect" />

        {/* Overlapping Device Images - 초기에는 중앙에 겹쳐져 있다가 펼쳐짐 */}
        <div className="relative flex justify-center items-center h-96 intro-images-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ease-out`}
              style={{
                transform: isInView
                  ? index === 0
                    ? "translateX(-100px)" // 왼쪽으로
                    : index === 2
                    ? "translateX(100px)" // 오른쪽으로
                    : "translateX(0)" // 중앙 유지
                  : "translateX(0)", // 초기: 모두 중앙
                zIndex: index === 1 ? 20 : index === 0 ? 30 : 10, // 레이어링
              }}
            >
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
