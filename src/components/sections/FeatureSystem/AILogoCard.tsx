import { ASSETS } from "@/lib/assets";
import OptimizedImage from "../../ui/OptimizedImage";
import BubbleComponent from './BubbleComponent';
import SystemCard from './SystemCard';
import { AI_TEXT_STYLE } from './styles';

export default function AILogoCard() {
  return (
    <SystemCard className="relative" padding="0">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* AI 로고 */}
        <div className="relative" style={{ width: "391px", height: "340px" }}>
          {/* 배경 원 */}
          <div
            className="absolute inset-0 bg-white/7 rounded-full"
            style={{
              width: "253px",
              height: "253px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* AI 텍스트 */}
          <div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: "209px",
              height: "209px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-white font-bold" style={AI_TEXT_STYLE}>
              AI
            </span>
          </div>
          {/* 말풍선 */}
          <BubbleComponent
            text={
              <>
                Try checking this out!
                <br />
                It&apos;s just what you need right now!
              </>
            }
            position={{ top: "-40px", right: "-20px" }}
            width="241px"
            height="56px"
          />
        </div>
      </div>
      {/* 배경 이미지 - hyper.png */}
      <OptimizedImage
        src={ASSETS.images.features.hyperPersonalized}
        alt="Hyper-Personalized AI Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </SystemCard>
  );
}