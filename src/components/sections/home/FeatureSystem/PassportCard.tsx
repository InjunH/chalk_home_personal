import { ASSETS } from "@/lib/assets";
import SystemCard from "./SystemCard";

export default function PassportCard() {
  return (
    <SystemCard className="relative overflow-hidden border-none" padding="0">
      <div className="relative w-full h-full">
        {/* 모바일: 작은 비디오 컨테이너 */}
        <div className="absolute left-1/2 -translate-x-1/2  flex items-center justify-center block md:hidden relative w-120 h-120">
          <video
            src={ASSETS.images.features.featureVideo}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* PC: 기존 비디오 컨테이너 유지 */}
        <div className="hidden md:block relative w-full h-full">
          <video
            src={ASSETS.images.features.featureVideo}
            className="w-full h-full object-cover min-h-[500px]"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </SystemCard>
  );
}
