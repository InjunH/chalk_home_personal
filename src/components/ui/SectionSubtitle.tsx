interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionSubtitle({ children, className = "" }: SectionSubtitleProps) {
  return (
    <p className={`text-white text-center opacity-60 experience-subtitle ${className}`}>
      {children}
    </p>
  );
}