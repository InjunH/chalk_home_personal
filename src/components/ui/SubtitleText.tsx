interface SubtitleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SubtitleText({
  text,
  className = "",
  style = {},
}: SubtitleTextProps) {
  return (
    <p
      className={`text-right ${className}`}
      style={{
        fontFamily: "Suisse Intl", // Figma: Suisse Intl Semibold
        fontSize: "16px", // Figma: 16px
        fontWeight: 600, // Figma: 600
        letterSpacing: "-0.64px", // Figma: -0.64px
        color: "#FFFFFF", // Figma: r: 1, g: 1, b: 1
        opacity: 0.7, // Figma: 0.7
        ...style,
      }}
    >
      {text}
    </p>
  );
}