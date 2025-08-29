import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  index: number;
}

// 통합된 Feature Card 컴포넌트
export default function FeatureCard({ 
  title, 
  description, 
  image, 
  index 
}: FeatureCardProps) {
  return (
    <>
      {/* 모바일: 세로 스택 레이아웃 */}
      <div className="block md:hidden flex flex-col gap-6">
        {/* 텍스트 영역 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold uppercase text-lg leading-tight">
            {title.split(',').map((part, index) => (
              <span key={index}>
                {part.trim()}
                {index < title.split(',').length - 1 && <br />}
              </span>
            ))}
          </h3>

          <p className="text-white/80 font-medium text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* 이미지 영역 */}
        {image && (
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              priority={index < 2} // 첫 2개 이미지는 우선 로딩
            />
          </div>
        )}
      </div>

      {/* PC: 기존 가로 레이아웃 그대로 유지 */}
      <div className="hidden md:flex flex-row items-start justify-between gap-3xl">
        {/* 텍스트 영역 */}
        <div className="flex-1 flex flex-col gap-md">
          <h3 className="text-white font-bold uppercase feature-video-card-title">
            {title.split(',').map((part, index) => (
              <span key={index}>
                {part.trim()}
                {index < title.split(',').length - 1 && <br />}
              </span>
            ))}
          </h3>

          <p className="text-white/80 font-bold feature-video-card-description">
            {description}
          </p>
        </div>

        {/* 이미지 영역 */}
        {image && (
          <div className="flex-1">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="w-full h-auto"
              priority={index < 2} // 첫 2개 이미지는 우선 로딩
            />
          </div>
        )}
      </div>
    </>
  );
}
