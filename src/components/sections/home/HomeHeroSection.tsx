import { ASSETS } from "@/lib/assets";
import { siteContent } from "@/lib/content";
import HeroBackground from "@/components/ui/HeroBackground";
import HeroTitle from "@/components/ui/HeroTitle";
import IPadMockup from "@/components/ui/IPadMockup";
import VideoThumbnailCard from "@/components/ui/VideoThumbnailCard";
import SubtitleText from "@/components/ui/SubtitleText";
import HeroBottomLogo from "@/components/ui/HeroBottomLogo";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative overflow-hidden w-full h-screen max-h-[1000px]"
    >
      {/* 라이트 배경 효과 */}
      <HeroBackground />

      {/* iPad 목업 영역 */}
      <IPadMockup
        imageSrc={ASSETS.images.hero.ipadMockupReal}
        imageAlt="CHALK App on iPad"
      />

      {/* 메인 타이틀 영역 */}
      <HeroTitle />
      {/* 하단 요소들 */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-row justify-center md:justify-between items-end w-full px-6 pb-4">
        {/* 좌측 중앙 - 썸네일 카드 (데스크톱에서만 표시) */}
        <div className="hidden md:block">
          <VideoThumbnailCard
            imageSrc={ASSETS.images.hero.appScreenshot}
            imageAlt="CHALK Preview"
            badgeText={hero.intro_badge}
            className="relative z-20 max-w-[90vw]"
          />
        </div>

        <div className="text-center">
          {/* 우측 하단 - 서브타이틀 */}
          <SubtitleText text="Hyper-Personalized Learning Solution" />
        </div>

        {/* 우측 하단 - CHALK 로고 */}
        <div className="hidden md:block">
          <HeroBottomLogo src="/images/logo_gray.svg" alt="CHALK Logo" />
        </div>
      </div>
    </section>
  );
}
