interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className = "" }: HeroTitleProps) {
  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl hero-title-position ${className}`}>
      <div className="text-center px-4">
        {/* 첫 번째 행: WE ALL + Dream - 한 줄 유지 */}
        <div className="whitespace-nowrap mb-2">
          <h1 className="inline text-white font-bold uppercase hero-title-main">
            WE ALL{" "}
          </h1>
          <h1 className="inline font-bold bg-gradient-to-r from-green-400 via-green-300 to-blue-400 bg-clip-text text-transparent hero-title-dream">
            Dream
          </h1>
        </div>

        {/* 두 번째 행: dIFFERENTLY */}
        <div className="whitespace-nowrap">
          <h1 className="text-white font-bold text-center hero-title-main">
            DIFFERENTLY
          </h1>
        </div>
      </div>
    </div>
  );
}