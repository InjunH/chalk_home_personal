import { ASSETS } from "@/lib/assets";
import OptimizedImage from "@/components/ui/OptimizedImage";

import SystemCard from "./SystemCard";

export default function AILogoCard() {
  return (
    <SystemCard className="relative border-none" padding="0">
      {/* 배경 이미지 - hyper.png */}
      <OptimizedImage
        src={ASSETS.images.features.hyperPersonalized}
        alt="Hyper-Personalized AI Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </SystemCard>
  );
}
