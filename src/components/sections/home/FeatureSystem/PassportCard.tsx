import { ASSETS } from "@/lib/assets";
import SystemCard from "./SystemCard";
import BubbleComponent from "./BubbleComponent";

export default function PassportCard() {
  return (
    <SystemCard className="relative overflow-hidden" padding="0">
      <div className="relative w-full h-full">
        {/* 모바일: 말풍선 위치 및 크기 조정 */}
        <div className="block md:hidden">
          <BubbleComponent
            text={
              <div className="flex items-center gap-1">
                {/* 코스 아이콘 */}
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="text-xs">
                  Finish the course,
                  <br />
                  earn rewards!
                </div>
              </div>
            }
            position={{ top: "40px", left: "20px" }}
            width="130px"
            height="45px"
          />
        </div>

        {/* PC: 기존 말풍선 그대로 유지 */}
        <div className="hidden md:block">
          <BubbleComponent
            text={
              <div className="flex items-center gap-1">
                {/* 코스 아이콘 */}
                <div className="w-5 h-5 bg-yellow-400 rounded-full" />
                <div>
                  Finish the course,
                  <br />
                  earn rewards!
                </div>
              </div>
            }
            position={{ top: "160px", left: "160px" }}
            width="165px"
            height="59px"
          />
        </div>

        {/* Passport 이미지/비디오 */}
        <div className="relative">
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
          <div className="hidden md:block relative passport-video-container">
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
      </div>
    </SystemCard>
  );
}
