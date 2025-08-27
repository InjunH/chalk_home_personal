interface ExperienceTitleProps {
  subtitle: string;
  title: string;
}

export default function ExperienceTitle({ subtitle, title }: ExperienceTitleProps) {
  return (
    <div className="text-center flex flex-col gap-54">
      {/* Just Chalk it up - 서브타이틀 */}
      <p className="text-white/60 experience-subtitle">
        {subtitle}
      </p>

      {/* Experience - 메인 타이틀 */}
      <h2 className="text-white/50 experience-main-title">
        {title}
      </h2>
    </div>
  );
}