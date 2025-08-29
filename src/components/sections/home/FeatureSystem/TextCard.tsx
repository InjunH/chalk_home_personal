import SystemCard from "./SystemCard";

interface TextCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  hasSubtitle?: boolean;
}

export default function TextCard({
  title,
  description,
  subtitle,
  hasSubtitle = false,
}: TextCardProps) {
  return (
    <SystemCard>
      {/* 모바일: 간소한 레이아웃 */}
      <div className="block md:hidden flex flex-col gap-4">
        {/* 타이틀 섹션 */}
        <div className="flex flex-col gap-2">
          <h2 className="leading-none gradient-title-mobile">{title}</h2>
          {subtitle && (
            <div className="text-white/40 subtitle-text-mobile">{subtitle}</div>
          )}
        </div>

        {/* 설명 */}
        <div className="text-white/70 leading-relaxed text-card-description">
          {description}
        </div>
      </div>

      {/* PC: 기존 레이아웃 그대로 유지 */}
      <div className="hidden md:flex flex-col title-gap">
        {/* 타이틀 섹션 */}
        <div className="flex flex-col mb-6">
          <h2 className="leading-none gradient-title">{title}</h2>
          {subtitle && (
            <div className="text-white/40 mt-[0.625rem] subtitle-text">
              {subtitle}
            </div>
          )}
        </div>

        {/* 설명 */}
        <div className="text-white/70 text-card-description">{description}</div>
      </div>
    </SystemCard>
  );
}
