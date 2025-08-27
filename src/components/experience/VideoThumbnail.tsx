import OptimizedImage from "@/components/ui/OptimizedImage";

interface VideoThumbnailProps {
  thumbnailSrc: string;
  altText: string;
  onPlayClick?: () => void;
}

export default function VideoThumbnail({ thumbnailSrc, altText, onPlayClick }: VideoThumbnailProps) {
  return (
    <div className="relative flex justify-center items-center">
      {/* 비디오 썸네일 이미지 */}
      <div className="relative">
        <OptimizedImage
          src={thumbnailSrc}
          alt={altText}
          width={620}
          height={400}
          className="rounded-lg"
        />
        
        {/* 플레이 버튼 오버레이 */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={onPlayClick}
        >
          <div className="w-[118px] h-[118px] bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            {/* 플레이 아이콘 */}
            <div 
              className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}