import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { 
  GLMSHeroSection, 
  GLMSDescriptionSection, 
  GLMSGamificationSection,
  GLMSProgressSection,
  GLMSMotivationSection 
} from "@/components/sections/glms";

export const metadata: Metadata = {
  title: "G-LMS - 글로벌 학습 관리 시스템",
  description:
    "CHALK의 혁신적인 글로벌 학습 관리 시스템(G-LMS)을 통해 개인 맞춤형 학습을 경험하세요.",
};

export default function GLMSPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="pt-20"> {/* Header 높이만큼 상단 여백 추가 */}
        {/* Figma 기반 G-LMS Hero Section (Node ID: 5094:6987) */}
        <GLMSHeroSection />
        
        {/* G-LMS Description Section */}
        <GLMSDescriptionSection />

        {/* Figma 기반 G-LMS Gamification Section (Node ID: 5193:7295) */}
        <GLMSGamificationSection />

        {/* Figma 기반 G-LMS Progress Section (Node ID: 5094:6995) */}
        <GLMSProgressSection />

        {/* Figma 기반 G-LMS Motivation Section (Node ID: 5094:6995) */}
        <GLMSMotivationSection />

        {/* 추가 섹션들은 여기에 구현 예정 */}
      </main>
      
      <Footer />
    </div>
  );
}