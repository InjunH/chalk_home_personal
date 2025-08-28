interface IntroMainTitleProps {
  descriptions: string[];
  className?: string;
}

export default function IntroMainTitle({
  descriptions,
  className = "",
}: IntroMainTitleProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center max-w-4xl mx-auto ${className}`}
    >
      {/* 모바일: 2줄 처리 */}
      <div className="block md:hidden text-[1.5rem]">
        <h2 className="font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent leading-tight mb-2 text-center">
          {descriptions[0]}
        </h2>
        <h2 className="font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent leading-tight mb-2 text-center">
          {descriptions[1]} {descriptions[2]}
        </h2>
      </div>

      {/* PC: 기존 3줄 처리 그대로 유지 */}
      <div className="hidden md:block">
        {descriptions.map((description, index) => (
          <h2
            key={index}
            className="font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent intro-main-heading leading-tight mb-2 md:mb-4 text-center"
          >
            {description}
          </h2>
        ))}
      </div>
    </div>
  );
}
