import FeatureTitleSection from "../ui/FeatureTitleSection";
import NNKonradTitle from "../ui/NNKonradTitle";
import OptimizedImage from "../ui/OptimizedImage";
import { ASSETS } from "@/lib/assets";

export default function FeatureMainTitle() {
  return (
    <div className="relative">
      {/* 모바일: 단순 텍스트로 처리 */}
      <div className="block md:hidden text-center">
        <FeatureTitleSection layout="horizontal" gap="gap-2">
          <span className="mobile-feature-title">The</span>
          <NNKonradTitle variant="silver">New</NNKonradTitle>
        </FeatureTitleSection>

        <FeatureTitleSection layout="horizontal" gap="gap-0">
          <span className="mobile-feature-title">Paradigm</span>
          <OptimizedImage
            src={ASSETS.images.features.mainImg}
            alt="feature"
            className="w-[clamp(54px,8vw,108px)] h-[clamp(54px,8vw,108px)]"
          />
        </FeatureTitleSection>
      </div>

      {/* PC: 기존 스타일 그대로 유지 */}
      <div className="hidden md:block">
        <FeatureTitleSection layout="horizontal" gap="gap-2">
          <span className="text-white feature-title">The</span>
          <NNKonradTitle variant="silver">New</NNKonradTitle>
        </FeatureTitleSection>

        <FeatureTitleSection layout="horizontal" gap="gap-0">
          <span className="text-white feature-title">Paradigm</span>
          <OptimizedImage
            src={ASSETS.images.features.mainImg}
            alt="feature"
            className="w-[clamp(54px,8vw,108px)] h-[clamp(54px,8vw,108px)]"
          />
        </FeatureTitleSection>
      </div>
    </div>
  );
}
