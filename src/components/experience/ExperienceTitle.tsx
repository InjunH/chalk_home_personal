interface ExperienceTitleProps {
  subtitle: string;
  title: string;
}

export default function ExperienceTitle({ subtitle, title }: ExperienceTitleProps) {
  return (
    <div className="text-center" style={{ display: "flex", flexDirection: "column", gap: "54px" }}>
      {/* Just Chalk it up - 서브타이틀 */}
      <p 
        className="text-white/60"
        style={{
          fontFamily: "Suisse Intl",
          fontSize: "24px", 
          fontWeight: 600,
          letterSpacing: "-0.48px",
          lineHeight: "1.2"
        }}
      >
        {subtitle}
      </p>

      {/* Experience - 메인 타이틀 */}
      <h2
        className="text-white/50"
        style={{
          fontFamily: "Suisse Intl",
          fontSize: "96px",
          fontWeight: 700,
          letterSpacing: "-2.88px",
          lineHeight: "1.0",
          textAlign: "center"
        }}
      >
        {title}
      </h2>
    </div>
  );
}