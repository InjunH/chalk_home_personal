interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className = "" }: HeroTitleProps) {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl ${className}`}
      style={{
        top: "clamp(2rem, 20vh, 6rem)", // 작은 화면에서는 더 중앙에, 큰 화면에서는 상단에
      }}
    >
      <div className="text-center px-4">
        {/* 첫 번째 행: WE ALL + Dream - 한 줄 유지 */}
        <div className="whitespace-nowrap mb-2">
          <h1
            className="inline text-white font-bold uppercase"
            style={{
              fontFamily: "Suisse Intl", // Figma: Suisse Intl
              fontSize: "clamp(2rem, 8vw, 182px)", // 작은 화면에서도 한 줄 유지
              fontWeight: 700, // Figma: 700
              letterSpacing: "-0.01em", // Figma: -1.82px를 em 단위로
              lineHeight: "0.7", // Figma: lineHeight 69.39%
            }}
          >
            WE ALL{" "}
          </h1>
          <h1
            className="inline font-bold bg-gradient-to-r from-green-400 via-green-300 to-blue-400 bg-clip-text text-transparent"
            style={{
              fontFamily: "NN Konrad", // Figma: NN Konrad
              fontSize: "clamp(2rem, 8vw, 182px)", // 작은 화면에서도 한 줄 유지
              fontWeight: 700, // Figma: 700
              letterSpacing: "-0.02em", // Figma: -3.64px를 em 단위로
              lineHeight: "0.74", // Figma: lineHeight 74.07%
            }}
          >
            Dream
          </h1>
        </div>

        {/* 두 번째 행: dIFFERENTLY */}
        <div className="whitespace-nowrap">
          <h1
            className="text-white font-bold text-center"
            style={{
              fontFamily: "Suisse Intl", // Figma: Suisse Intl
              fontSize: "clamp(2rem, 8vw, 182px)", // 작은 화면에서도 적절한 크기
              fontWeight: 700, // Figma: 700
              letterSpacing: "-0.01em", // Figma: -1.82px를 em 단위로
              lineHeight: "0.7", // Figma: lineHeight 69.39%
            }}
          >
            DIFFERENTLY
          </h1>
        </div>
      </div>
    </div>
  );
}