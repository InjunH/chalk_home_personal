import Image from "next/image";
// 스타일 상수들

// Feature Card 컴포넌트 Props
export interface GLMSProgressFeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

// Feature Card 컴포넌트
export default function GLMSProgressFeatureCard({
  title,
  description,
  imageSrc,
}: GLMSProgressFeatureCardProps) {
  return (
    <div className="flex flex-row items-start justify-between gap-120">
      <div className="flex-1 flex flex-col gap-24">
        <h3 className="text-white font-bold uppercase feature-video-card-title">
          {title}
        </h3>

        <p className="text-white/80 font-bold feature-video-card-description">
          {description}
        </p>
      </div>

      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
