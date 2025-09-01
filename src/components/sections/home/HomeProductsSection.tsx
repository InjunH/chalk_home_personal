"use client";

import AILogoCard from "@/components/sections/home/FeatureSystem/AILogoCard";
import TextCard from "@/components/sections/home/FeatureSystem/TextCard";
import PassportCard from "@/components/sections/home/FeatureSystem/PassportCard";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeProductsSection() {
  const { text } = useLanguage();

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1920px] mx-auto container pt-[9.375rem] md:pt-[9.375rem]">
        {/* 모바일: 세로 스택 레이아웃 */}
        <div className="block md:hidden space-y-8">
          <AILogoCard />

          <TextCard
            title={
              <>
                Hyper-Personalized
                <br />
                Learning Solution
              </>
            }
            description={
              <>
                {text.features.system.cards[0].description
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </>
            }
          />

          <PassportCard />
          <TextCard
            title="G-LMS"
            subtitle={
              <>
                Gamified Learning Management
                <br />
                System
              </>
            }
            description={
              <>
                {text.features.system.cards[1].description
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </>
            }
            hasSubtitle={true}
          />
        </div>

        {/* PC: 기존 2행 레이아웃 그대로 유지 */}
        <div className="hidden md:block">
          {/* 첫 번째 행 - AI 로고 카드 + Hyper-Personalized Learning Solution */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <AILogoCard />

            <TextCard
              title={
                <>
                  Hyper-Personalized
                  <br />
                  Learning Solution
                </>
              }
              description={
                <>
                  {text.features.system.cards[0].description
                    .split("\n")
                    .map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                </>
              }
            />
          </div>

          {/* 두 번째 행 - G-LMS + Passport 이미지 */}
          <div className="grid grid-cols-2 gap-8">
            <TextCard
              title={text.features.system.cards[1].title}
              subtitle={<>{text.features.system.cards[1].subtitle}</>}
              description={
                <>
                  {text.features.system.cards[1].description
                    .split("\n")
                    .map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                </>
              }
              hasSubtitle={true}
            />

            <PassportCard />
          </div>
        </div>
      </div>
    </section>
  );
}
