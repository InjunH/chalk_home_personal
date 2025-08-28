import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import {
  GLMSHeroSection,
  GLMSVisionSection,
  GLMSGamificationSection,
  GLMSProgressSection,
  GLMSMotivationSection,
} from "@/components/sections/glms";

export const metadata: Metadata = {
  title: "G-LMS - 글로벌 학습 관리 시스템",
  description:
    "CHALK의 혁신적인 글로벌 학습 관리 시스템(G-LMS)을 통해 개인 맞춤형 학습을 경험하세요.",
};

export default function GLMSPage() {
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
