"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ChalkAIBenefitsSection() {
  const { text } = useLanguage();
  
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-4xl py-[5rem] md:py-[22.5rem]">
        {/* 모바일 버전 */}
        <div className="block md:hidden text-center">
          <h2 className="chalk-ai-description-title-mobile text-white">
            <span className="text-white">{text.chalkAI.description.title}</span>

            <br />
            <span className="text-white">
              {text.chalkAI.description.subtitle}
            </span>
          </h2>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:block text-center">
          <h2 className="chalk-ai-description-title text-white">
            <span className="text-white">
              {text.chalkAI.description.title}
            </span>
            <br />
            <span className="text-white opacity-70">
              {text.chalkAI.description.subtitle}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
