import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import {
  GLMSHeroSection,
  GLMSVisionSection,
  GLMSGamificationSection,
  GLMSProgressSection,
  GLMSMotivationSection,
} from "@/components/sections/glms";
import { useLanguage } from "@/contexts/LanguageContext";
import { text as fallbackText } from "@/constants/text";

// metadata는 서버사이드에서 실행되므로 fallback text 사용
export const metadata: Metadata = {
  title: `${fallbackText.gLMS.hero.title} - ${fallbackText.gLMS.hero.subtitle}`,
  description: `CHALK의 혁신적인 ${fallbackText.gLMS.hero.description}`,
};

export default function GLMSPage() {
  // 클라이언트사이드에서는 useLanguage hook 사용 (향후 컴포넌트에서 사용)
  return (
    <PageLayout>
      {/* Figma 기반 G-LMS Hero Section (Node ID: 5094:6987) */}
      <GLMSHeroSection />
      {/* G-LMS Vision Section - 게임화 학습의 비전 */}
      <GLMSVisionSection />
      {/* Figma 기반 G-LMS Gamification Section (Node ID: 5193:7295) */}
      <GLMSGamificationSection />
      {/* Figma 기반 G-LMS Progress Section (Node ID: 5094:6995) */}
      <GLMSProgressSection />
      {/* Figma 기반 G-LMS Motivation Section (Node ID: 5094:6995) */}
      <GLMSMotivationSection />
      {/* 추가 섹션들은 여기에 구현 예정 */}
    </PageLayout>
  );
}
