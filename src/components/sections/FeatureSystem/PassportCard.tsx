import { ASSETS } from "@/lib/assets";
import SystemCard from './SystemCard';
import BubbleComponent from './BubbleComponent';

export default function PassportCard() {
  return (
    <SystemCard className="relative overflow-hidden" padding="0">
      <div className="relative w-full h-full">
        {/* 말풍선 */}
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

        {/* Passport 이미지/비디오 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: "568px", height: "556px" }}>
            <video
              src={ASSETS.images.features.featureVideo}
              className="w-full h-full object-cover"
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