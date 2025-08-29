import { GLMS_GAMIFICATION_TITLE_STYLE } from "./styles";

export default function GLMSGamificationTitle() {
  return (
    <>
      {/* 모바일 버전 */}
      <div className="block md:hidden w-full text-center">
        <h2 className="glms-gamification-title-mobile font-bold text-white">
          GAMIFICATION :<br />
          CHALK WORLD
        </h2>
      </div>

      {/* PC 버전 (기존 그대로) */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        {/* 좌측 - 타이틀 텍스트 (Figma Node: 5201:1815) */}
        <div className="flex-1">
          <h2 className="font-bold" style={GLMS_GAMIFICATION_TITLE_STYLE}>
            GAMIFICATION :<br />
            CHALK WORLD
          </h2>
        </div>
      </div>
    </>
  );
}
