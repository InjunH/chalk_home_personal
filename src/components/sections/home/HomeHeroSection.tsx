"use client";

import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroBackground from "@/components/ui/HeroBackground";
import HeroTitle from "@/components/ui/HeroTitle";
import IPadMockup from "@/components/ui/IPadMockup";
import VideoThumbnailCard from "@/components/ui/VideoThumbnailCard";
import SubtitleText from "@/components/ui/SubtitleText";
import HeroBottomLogo from "@/components/ui/HeroBottomLogo";

export default function HeroSection() {
  const { text } = useLanguage();
  const { hero } = text;

  return (
    <section
      id="home"
      className="relative overflow-hidden w-full h-screen max-h-[1000px]"
    >
      {/* 라이트 배경 효과 */}
      {/* <HeroBackground /> */}

      {/* iPad 목업 영역 */}
      <IPadMockup
        imageSrc={ASSETS.images.hero.ipadMockupReal}
        imageAlt="CHALK App on iPad"
      />

      {/* 메인 타이틀 영역 */}
      <HeroTitle />
      {/* 하단 요소들 */}

      {/* <div className="absolute top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-full  md:bottom-0 md:left-0 md:right-0 md:z-30 flex flex-row justify-center md:justify-between items-end w-full px-6 pb-4">
        <div className="hidden md:block">
          <VideoThumbnailCard
            imageSrc={ASSETS.images.hero.appScreenshot}
            imageAlt="CHALK Preview"
            badgeText={hero.introBadge}
            className="relative z-20 max-w-[90vw]"
          />
        </div>

        <div className="text-center">
          <SubtitleText text="Hyper-Personalized Learning Solution" />
        </div>

        <div className="hidden md:block">
          <HeroBottomLogo src="/images/logo_gray.svg" alt="CHALK Logo" />
        </div>
      </div> */}
    </section>
  );
}
