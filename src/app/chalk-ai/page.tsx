import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ChalkAIHeroSection from "@/components/sections/chalk-ai/ChalkAIHeroSection";
import ChalkAIDescriptionSection from "@/components/sections/chalk-ai/ChalkAIDescriptionSection";
import ChalkAIFeatureSection from "@/components/sections/chalk-ai/ChalkAIFeatureSection";
import ChalkAIOntologySection from "@/components/sections/chalk-ai/ChalkAIOntologySection";
import ChalkAITechSection from "@/components/sections/chalk-ai/ChalkAITechSection";

export const metadata: Metadata = {
  title: "CHALK AI - 개인 맞춤형 AI 학습 솔루션",
  description:
    "CHALK AI의 혁신적인 개인 맞춤형 AI 학습 솔루션을 만나보세요. 대치동에서도 볼 수 없던 최고의 AI 선생님과 함께하세요.",
};

export default function ChalkAiPage() {
  return (
    <PageLayout mainClassName="min-h-screen">
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
    </PageLayout>
  );
}
