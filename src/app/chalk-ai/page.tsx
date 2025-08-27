import { Metadata } from "next";
import Header from "@/components/common/Header";
import ChalkAIHeroSection from "@/components/sections/chalk-ai/ChalkAIHeroSection";
import ChalkAIDescriptionSection from "@/components/sections/chalk-ai/ChalkAIDescriptionSection";
import ChalkAIFeatureSection from "@/components/sections/chalk-ai/ChalkAIFeatureSection";
import ChalkAIOntologySection from "@/components/sections/chalk-ai/ChalkAIOntologySection";
import ChalkAITechSection from "@/components/sections/chalk-ai/ChalkAITechSection";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "CHALK AI - 개인 맞춤형 AI 학습 솔루션",
  description:
    "CHALK AI의 혁신적인 개인 맞춤형 AI 학습 솔루션을 만나보세요. 대치동에서도 볼 수 없던 최고의 AI 선생님과 함께하세요.",
};

export default function ChalkAiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <ChalkAIHeroSection />

        {/* Description Section */}
        <ChalkAIDescriptionSection />

        {/* Feature Section */}
        <ChalkAIFeatureSection />

        {/* Ontology Section */}
        <ChalkAIOntologySection />

        {/* Tech Section - UNLOCK THE TECHNOLOGY */}
        <ChalkAITechSection />
      </main>
      <Footer />
    </div>
  );
}
