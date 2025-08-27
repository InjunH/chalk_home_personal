interface IntroMainTitleProps {
  descriptions: string[];
  className?: string;
}

export default function IntroMainTitle({
  descriptions,
  className = "",
}: IntroMainTitleProps) {
  // Figma 기반 정확한 스타일
  const mainHeadingStyle = {
    fontSize: "72px", // Figma: 72px
    lineHeight: "83.8px", // Figma: 83.79705047607422px
    letterSpacing: "0px", // Figma: 0
    fontFamily: "Pretendard",
    fontWeight: 700,
    textAlign: "center" as const,
  };

  return (
    <div className={`flex flex-col items-center justify-center max-w-4xl mx-auto ${className}`}>
      {descriptions.map((description, index) => (
        <h2
          key={index}
          className="font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
          style={mainHeadingStyle}
        >
          {description}
        </h2>
      ))}
    </div>
  );
}