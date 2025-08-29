import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ChalkAIHeroSection from "@/components/sections/chalk-ai/ChalkAIHeroSection";
import ChalkAIBenefitsSection from "@/components/sections/chalk-ai/ChalkAIBenefitsSection";
import ChalkAIFeatureSection from "@/components/sections/chalk-ai/ChalkAIFeatureSection";
import ChalkAIOntologySection from "@/components/sections/chalk-ai/ChalkAIOntologySection";
import ChalkAITechSection from "@/components/sections/chalk-ai/ChalkAITechSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { text as fallbackText } from "@/constants/text";

// metadata는 서버사이드에서 실행되므로 fallback text 사용
export const metadata: Metadata = {
  title: `CHALK AI - ${fallbackText.chalkAI.description.title}`,
  description: `CHALK AI의 혁신적인 ${fallbackText.chalkAI.description.title}을 만나보세요. ${fallbackText.intro.mainCopy}`,
};

export default function ChalkAiPage() {
  // 클라이언트사이드에서는 useLanguage hook 사용 (향후 컴포넌트에서 사용)
  return (
    <PageLayout>
      {/* Hero Section */}
      <ChalkAIHeroSection />
      {/* Benefits Section - 개인 맞춤형 교육의 혁신 */}
      <ChalkAIBenefitsSection />
      {/* Feature Section */}
      <ChalkAIFeatureSection />
      {/* Ontology Section */}
      <ChalkAIOntologySection />
      {/* Tech Section - UNLOCK THE TECHNOLOGY */}
      <ChalkAITechSection />
    </PageLayout>
  );
}
