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
      <div className="flex flex-col title-gap">
        {/* 타이틀 섹션 */}
        <div className={`flex flex-col mb-6`}>
          <h2 className="leading-none gradient-title-mobile md:gradient-title ">
            {title}
          </h2>
          {subtitle && (
            <div className="text-white/40 mt-[0.625rem] subtitle-text-mobile md:subtitle-text ">
              {subtitle}
            </div>
          )}
        </div>

        {/* 설명 */}
        <div className="text-white/70 description-text">{description}</div>
      </div>
    </SystemCard>
  );
}
