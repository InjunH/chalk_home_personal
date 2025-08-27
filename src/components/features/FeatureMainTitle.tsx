import OptimizedImage from "../ui/OptimizedImage";
import { ASSETS } from "@/lib/assets";

export default function FeatureMainTitle() {
  return (
    <div className="relative">
      {/* "The" + light 효과 + "New" */}
      <div className="flex flex-row items-center justify-center relative">
        {/* "The" - Suisse Intl */}
        <span
          className="text-white"
          style={{
            fontFamily: "Suisse Intl",
            fontWeight: 700,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "-2.88px",
            lineHeight: "67px", // Figma: 67.07786560058594
          }}
        >
          The{" "}
        </span>

        {/* Light 효과 영역 (백그라운드) */}
        <div 
          className="absolute" 
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(400px, 60vw, 654px)",
            height: "clamp(60px, 8vw, 95px)",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)",
            borderRadius: "50px",
            zIndex: 0
          }}
        />

        {/* "New" - NN Konrad + 그라데이션 */}
        <span
          className="bg-gradient-to-r from-[#b4b4b4] via-white to-[#9a9a9a] bg-clip-text text-transparent relative z-10"
          style={{
            fontFamily: "'NN Konrad', serif",
            fontWeight: 700,
            fontSize: "clamp(47px, 8vw, 94px)",
            letterSpacing: "-2.82px",
            lineHeight: "100px", // Figma: 100
          }}
        >
          New
        </span>
      </div>

      {/* "Paradigm" + 아이콘 */}
      <div className="flex flex-row items-center justify-center">
        <span
          className="text-white"
          style={{
            fontFamily: "Suisse Intl",
            fontWeight: 700,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "-2.88px",
            lineHeight: "67px",
          }}
        >
          Paradigm
        </span>
        <OptimizedImage
          src={ASSETS.images.features.mainImg}
          alt="feature"
          className="w-[clamp(54px,8vw,108px)] h-[clamp(54px,8vw,108px)] ml-2" // Figma: 108x108
        />
      </div>
    </div>
  );
}