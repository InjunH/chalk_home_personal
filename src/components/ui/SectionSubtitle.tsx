interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionSubtitle({ children, className = "" }: SectionSubtitleProps) {
  return (
    <p
      className={`text-white ${className}`}
      style={{
        fontFamily: "Suisse Intl",
        fontWeight: 600,
        fontSize: "24px",
        letterSpacing: "-0.48px",
        textAlign: "center",
        lineHeight: "1.2",
        opacity: 0.6,
      }}
    >
      {children}
    </p>
  );
}