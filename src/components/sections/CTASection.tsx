"use client";

import { useState } from "react";
import Image from "next/image";
import FeatureTitleSection from "@/components/ui/FeatureTitleSection";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-[#0C0C0C] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Figma 레이아웃: VERTICAL, gap: 10px */}
        {/* Join Section - Figma 스펙 (VERTICAL, gap: 120px) */}
        <div className="flex flex-col text-center flex-col-gap-120">
          {/* Title Section - Figma 스펙 (VERTICAL, gap: -13px) */}
          <FeatureTitleSection gap="gap-0">
            {/* "follow the path" - Figma 스펙: Suisse Intl 700 96px */}
            <h2 className="text-white font-bold uppercase text-cta-title">
              follow the path
            </h2>

            {/* "Find the New" - Figma 스펙: NN Konrad 700 94px */}
            <NNKonradTitle
              variant="silver"
              as="h3"
              className="text-cta-subtitle"
            >
              Find the New
            </NNKonradTitle>
          </FeatureTitleSection>

          {/* Email Form - Figma 스펙: 검은 배경, 둥근 모서리 */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <div className="flex items-center bg-[#121212] rounded-full cta-form-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 px-8 bg-transparent text-white placeholder-white font-bold text-lg border-none outline-none text-cta-input"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-full mr-4 cta-button text-cta-input"
              >
                JOIN
              </button>
            </div>
          </form>

          {/* Stream Section - Figma 스펙: 2행, 각 행에 2개 카드 */}
          <div className="w-full max-w-[1160px] mx-auto">
            {/* Figma 레이아웃: VERTICAL, gap: 15px */}
            <div className="flex flex-col feature-rows-gap">
              {/* Row 1 - Figma 스펙: HORIZONTAL, gap: 14.66px */}
              <div className="flex feature-cards-gap">
                {/* Feature 1 - "The Optimal Path for Me" (412 x 550) */}
                <div className="bg-black relative overflow-hidden flex-shrink-0 feature-card-small">
                  <Image
                    src="/images/feature1.png"
                    alt="The Optimal Path for Me"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature 2 - Large card (733 x 550) */}
                <div className="bg-black relative overflow-hidden flex-shrink-0 feature-card-large">
                  <Image
                    src="/images/feature2.png"
                    alt="The Future of Learning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Row 2 - Figma 스펙: HORIZONTAL, gap: 14.66px */}
              <div className="flex feature-cards-gap">
                {/* Feature 3 - Large card (733 x 550) */}
                <div className="bg-black relative overflow-hidden flex-shrink-0 feature-card-large">
                  <Image
                    src="/images/feature3.png"
                    alt="The Future of Learning"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature 4 - "We all Dream differently" (412 x 550) */}
                <div className="bg-[#111111] relative overflow-hidden flex-shrink-0 feature-card-small">
                  <Image
                    src="/images/feature4.png"
                    alt="We all Dream differently"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
