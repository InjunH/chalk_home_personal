import FeatureTitleSection from "../ui/FeatureTitleSection";
import NNKonradTitle from "../ui/NNKonradTitle";
import OptimizedImage from "../ui/OptimizedImage";
import { ASSETS } from "@/lib/assets";

export default function FeatureMainTitle() {
  return (
    <div className="relative">
      <FeatureTitleSection layout="horizontal" gap="gap-2">
        <span className="text-white feature-title-the">The</span>
        <NNKonradTitle variant="silver">New</NNKonradTitle>
      </FeatureTitleSection>

      <FeatureTitleSection layout="horizontal" gap="gap-0">
        <span className="text-white feature-title-paradigm">Paradigm</span>
        <OptimizedImage
          src={ASSETS.images.features.mainImg}
          alt="feature"
          className="w-[clamp(54px,8vw,108px)] h-[clamp(54px,8vw,108px)]"
        />
      </FeatureTitleSection>
    </div>
  );
}
