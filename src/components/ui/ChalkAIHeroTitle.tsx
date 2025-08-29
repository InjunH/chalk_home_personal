import OptimizedImage from "./OptimizedImage";

interface ChalkAIHeroTitleProps {
  className?: string;
}

export default function ChalkAIHeroTitle({
  className = "",
}: ChalkAIHeroTitleProps) {
  return (
    <>
      {/* 모바일 버전 */}
      <div
        className={`block md:hidden text-center space-y-6 min-h-[400px] flex flex-col justify-center ${className}`}
      >
        <h1 className="chalk-ai-hero-title-mobile font-bold text-left leading-tight">
          <span className="text-white">Hyper-</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-purple-600 bg-clip-text text-transparent">
            Personalized
          </span>
          <br />
          <span className="text-white">Solutions.</span>
        </h1>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <OptimizedImage
              src="/images/chalk-ai/ai.svg"
              alt="CHALK AI Logo"
              className="w-120 h-120"
            />
          </div>
        </div>
      </div>

      {/* PC 버전 (기존 그대로) */}
      <div
        className={`hidden md:grid lg:grid-cols-2 gap-12 items-center min-h-[500px] ${className}`}
      >
        {/* Left Side - Hyper-Personalized Solutions Text */}
        <div className="text-left space-y-2">
          <h1 className="chalk-ai-hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="text-white">Hyper-</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-purple-600 bg-clip-text text-transparent">
              Personalized
            </span>
            <br />
            <span className="text-white">Solutions.</span>
          </h1>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <OptimizedImage
              src="/images/chalk-ai/ai.svg"
              alt="CHALK AI Logo"
              className="w-80 h-80 lg:w-120 lg:h-120"
            />
          </div>
        </div>
      </div>
    </>
  );
}
