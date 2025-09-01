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
    <div className="max-w-[150px] md:max-w-full">
      <p className={`subtitle-text ${className}`} style={style}>
        {text}
      </p>
    </div>
  );
}
