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
    <div className={`relative video-thumbnail-card ${className}`}>
      {/* 썸네일 카드 배경 */}
      <div className="relative w-full h-full video-thumbnail-bg">
        {/* 썸네일 이미지 영역 */}
        <div className="relative mb-2 video-thumbnail-image">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover video-thumbnail-image"
          />

          {/* 플레이 아이콘 */}
          <div className="absolute-center video-play-button flex-center">
            <OptimizedImage
              src="/images/play_icon.svg"
              alt="Play Icon"
              className="w-6 h-6 video-play-icon"
            />
          </div>
        </div>

        {/* INTRO Badge */}
        <div className="video-badge">
          <span>
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  );
}