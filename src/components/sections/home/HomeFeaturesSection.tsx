"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import FeatureTitleSection from "@/components/ui/FeatureTitleSection";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

import SectionSubtitle from "@/components/ui/SectionSubtitle";
import FeatureCard from "@/components/ui/FeatureCard";

// 메인 컴포넌트
export default function HomeFeaturesSection() {
  const { text } = useLanguage();
  const { features } = text;

  return (
    <section className="min-h-screen py-12 md:py-20 overflow-hidden">
      <div className="container">
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          <div className="text-center space-y-8 md:space-y-12">
            <SectionSubtitle className="text-sm md:text-base">
              {features.video.title}
            </SectionSubtitle>
            <FeatureTitleSection layout="vertical">
              <h2
                className="text-white font-bold uppercase text-center 
                text-[2.25rem] md:text-[6rem]
                tracking-tight leading-none
                font-['Suisse_Intl']"
              >
                BE READY FOR THE
              </h2>

              <NNKonradTitle
                variant="gold"
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl
                tracking-tight overflow-visible"
              >
                Next Big Thing
              </NNKonradTitle>
            </FeatureTitleSection>
          </div>

          <div className="w-full flex flex-col gap-16 md:gap-24 lg:gap-32">
            {features.video.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
