interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className = "" }: HeroTitleProps) {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl hero-title-position ${className}`}
    >
      <div className="text-center px-4">
        {/* 모바일: 3행 / 태블릿 이상: 2행 레이아웃 */}
        <div className="flex flex-col items-center">
          {/* 첫 번째 행: WE ALL Dream (항상 한 줄) */}
          <div className="mb-1 sm:mb-2">
            <h1 className="inline text-white font-bold uppercase hero-title-main">
              WE ALL
            </h1>
            <h1 className="inline font-bold bg-gradient-to-r from-green-400 via-green-300 to-blue-400 bg-clip-text text-transparent hero-title-dream ml-4">
              Dream
            </h1>
          </div>

          {/* 마지막 행: DIFFERENTLY */}
          <div className="mb-0">
            <h1 className="text-white font-bold uppercase hero-title-main">
              DIFFERENTLY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
