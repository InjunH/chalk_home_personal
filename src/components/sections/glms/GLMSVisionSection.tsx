"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function GLMSVisionSection() {
  const { text } = useLanguage();
  const { title } = text.gLMSVision;

  return (
    <section className="py-[6.25rem] md:py-[22.5rem] px-6">
      <div className="container mx-auto">
        {/* 모바일 버전 */}
        <div className="block md:hidden text-center">
          <h2 className="glms-vision-title-mobile py-[5rem]">
            <span>
              {title.line1}
              <br />
              <span className="opacity-70">
                {title.line2} <br />
              </span>
            </span>
            <span className="opacity-70">{title.line3}</span>
          </h2>
        </div>

        {/* PC 버전 */}
        <div className="hidden md:block text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span>
              {title.line1}
              <span className="opacity-70">
                {title.line2} <br />
              </span>
            </span>
            <span className="opacity-70">{title.line3}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
