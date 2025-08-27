import OptimizedImage from "./OptimizedImage";

interface VideoThumbnailCardProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  className?: string;
}

export default function VideoThumbnailCard({
  imageSrc,
  imageAlt,
  badgeText,
  className = "",
}: VideoThumbnailCardProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: "276px", // Figma: 276px
        height: "220px", // Figma: 220px
      }}
    >
      {/* 썸네일 카드 배경 */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundColor: "#151515", // Figma: r: 0.084, g: 0.084, b: 0.084
          borderRadius: "8px", // Figma: 8px
          padding: "14px 12px 8px 12px", // Figma: T:14, R:12, B:8, L:12
          backdropFilter: "blur(80px)", // Figma: BACKGROUND_BLUR 80px
        }}
      >
        {/* 썸네일 이미지 영역 */}
        <div
          className="relative mb-2"
          style={{ width: "252px", height: "156px" }}
        >
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{
              borderRadius: "4px", // Figma: 4px
              opacity: 0.3, // Figma: 0.3
            }}
          />

          {/* 플레이 아이콘 */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "52px", // Figma: 52px
              height: "52px", // Figma: 52px
              backgroundColor: "rgba(255, 255, 255, 0.04)", // Figma: rgba(255,255,255,0.04)
              borderRadius: "50%", // Figma: 999px (circle)
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(32px)", // Figma: BACKGROUND_BLUR 32px
            }}
          >
            <OptimizedImage
              src="/images/play_icon.svg"
              alt="Play Icon"
              className="w-6 h-6"
              style={{
                opacity: 0.7, // Figma: 0.7
              }}
            />
          </div>
        </div>

        {/* INTRO Badge */}
        <div
          style={{
            padding: "8px 4px", // Figma: T:8, R:4, B:8, L:4
          }}
        >
          <span
            style={{
              fontFamily: "Suisse Intl", // Figma: Suisse Intl Bold
              fontSize: "16px", // Figma: 16px
              fontWeight: 700, // Figma: 700
              letterSpacing: "-0.32px", // Figma: -0.32px
              color: "#D9D9D9", // Figma: r: 0.85, g: 0.85, b: 0.85
              opacity: 0.7, // Figma: 0.7
            }}
          >
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  );
}