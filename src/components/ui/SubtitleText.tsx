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
      className={`text-right subtitle-text ${className}`}
style={style}
    >
      {text}
    </p>
  );
}