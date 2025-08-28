interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionSubtitle({
  children,
  className = "",
}: SectionSubtitleProps) {
  return (
    <div>
      {/* 모바일: 0.75rem 크기 */}
      <p
        className={`block md:hidden text-white text-center opacity-60 ${className}`}
        style={{ fontSize: "0.75rem" }}
      >
        {children}
      </p>

      {/* PC: 기존 스타일 그대로 유지 */}
      <p
        className={`hidden md:block text-white text-center opacity-60 experience-subtitle ${className}`}
      >
        {children}
      </p>
    </div>
  );
}
