import OptimizedImage from "@/components/ui/OptimizedImage";
import { 
  GLMS_GRID_ITEM_TITLE_STYLE, 
  GLMS_GRID_ITEM_DESC_STYLE,
  GLMS_GAMIFICATION_LAYOUT_CONFIG 
} from "./styles";

interface GridItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  hasSpecialContent?: boolean; // 포인트 카드 같은 특별 콘텐츠
}

function GridItem({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  hasSpecialContent = false 
}: GridItemProps) {
  return (
    <div 
      className="relative bg-black rounded-2xl overflow-hidden"
      style={{
        width: GLMS_GAMIFICATION_LAYOUT_CONFIG.gridItemSize,
        height: GLMS_GAMIFICATION_LAYOUT_CONFIG.gridItemSize
      }}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* 텍스트 오버레이 */}
      <div 
        className="absolute z-10 text-white"
        style={{
          left: "54px", // Figma 패딩
          top: "54px",
          width: "617px" // Figma width
        }}
      >
        <div className="flex flex-col" style={{ gap: "20px" }}>
          {/* 타이틀 */}
          <h4 
            className="font-bold"
            style={GLMS_GRID_ITEM_TITLE_STYLE}
          >
            {title}
          </h4>

          {/* 설명 */}
          <p 
            className="font-bold"
            style={GLMS_GRID_ITEM_DESC_STYLE}
          >
            {description}
          </p>
        </div>
      </div>

      {/* 특별 콘텐츠 (포인트 카드 등) */}
      {hasSpecialContent && (
        <div className="absolute bottom-16 right-16 z-20">
          {/* 포인트 카드 영역 - 별도 이미지로 제공 예정 */}
          <div 
            className="bg-white rounded-xl p-4"
            style={{
              width: "308px",
              height: "411px"
            }}
          >
            {/* 포인트 카드 내용은 별도 컴포넌트로 분리 가능 */}
            <div className="text-center text-black">
              <div className="text-xl font-bold">획득 포인트</div>
              <div className="text-4xl font-bold mt-4">CLEAR!</div>
              <div className="text-3xl font-bold mt-2">100P</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GLMSGridSection() {
  const gridItems = [
    {
      title: "실시간 미션 해결",
      description: "매일 학습 목표에 맞춘 미션이 도착하고, 이를 수행해요.",
      imageSrc: "/images/glms-mission.jpg", // 별도 제공 예정
      imageAlt: "실시간 미션 해결",
      hasSpecialContent: true
    },
    {
      title: "도시 건설",
      description: "미션을 수행할 때마다 공부한 지역의 랜드마크와 주변 인프라가 건설돼요.",
      imageSrc: "/images/glms-city-building.jpg", // 별도 제공 예정
      imageAlt: "도시 건설"
    },
    {
      title: "나만의 도시 완성",
      description: "진도를 달성하면 도시가 완성돼요. 미션을 수행하며 더욱 도시를 멋지게 업그레이드할 수 있어요.",
      imageSrc: "/images/glms-city-complete.jpg", // 별도 제공 예정
      imageAlt: "나만의 도시 완성"
    },
    {
      title: "관광객 방문",
      description: "도시가 활성화될수록 사람들이 많이 방문해서 더 많은 수입을 얻어요.",
      imageSrc: "/images/glms-visitors.jpg", // 별도 제공 예정
      imageAlt: "관광객 방문"
    }
  ];

  return (
    <div 
      className="grid grid-cols-2 place-items-center"
      style={{ 
        gap: GLMS_GAMIFICATION_LAYOUT_CONFIG.gridGap,
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto"
      }}
    >
      {gridItems.map((item, index) => (
        <GridItem
          key={index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          hasSpecialContent={item.hasSpecialContent}
        />
      ))}
    </div>
  );
}