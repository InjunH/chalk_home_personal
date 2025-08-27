import SystemCard from './SystemCard';
import { GRADIENT_TITLE_STYLE, DESCRIPTION_STYLE, LAYOUT_CONFIG } from './styles';

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
  hasSubtitle = false 
}: TextCardProps) {
  return (
    <SystemCard>
      <div className="flex flex-col" style={{ gap: LAYOUT_CONFIG.titleGap }}>
        {/* 타이틀 섹션 */}
        <div className="flex flex-col" style={{ gap: hasSubtitle ? LAYOUT_CONFIG.subtitleGap : "0" }}>
          <h2 className="leading-none" style={GRADIENT_TITLE_STYLE}>
            {title}
          </h2>
          {subtitle && (
            <div className="text-white" style={{
              fontFamily: "Suisse Intl",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-0.96px",
              lineHeight: "1.5",
            }}>
              {subtitle}
            </div>
          )}
        </div>
        
        {/* 설명 */}
        <div className="text-white" style={DESCRIPTION_STYLE}>
          {description}
        </div>
      </div>
    </SystemCard>
  );
}