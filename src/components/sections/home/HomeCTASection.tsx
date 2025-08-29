"use client";

import { useState } from "react";
import Image from "next/image";
import FeatureTitleSection from "@/components/ui/FeatureTitleSection";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

export default function HomeCTASection() {
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
      className="py-12 md:py-20 lg:py-24 text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto container">
        {/* Join Section */}
        <div className="flex flex-col text-center space-y-16 md:space-y-20 lg:space-y-24">
          {/* Title Section */}
          <FeatureTitleSection gap="gap-0">
            {/* "follow the path" */}
            <h2 className="text-white font-bold uppercase text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              follow the path
            </h2>

            {/* "Find the New" */}
            <NNKonradTitle
              variant="silver"
              as="h3"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Find the New
            </NNKonradTitle>
          </FeatureTitleSection>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center px-4"
          >
            <div
              className="flex items-center bg-[#121212] rounded-full w-full max-w-md md:max-w-lg lg:max-w-xl px-4 md:px-6 py-3 md:py-4"
              style={{
                boxShadow: `
                  0 0 80px rgba(255, 255, 255, 0.2),
                  0 0 150px rgba(255, 255, 255, 0.15),
                  0 0 200px rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-transparent text-white placeholder-white/50 font-bold text-sm md:text-base lg:text-lg border-none outline-none"
                style={{
                  fontFamily: "Suisse Intl",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-full px-4 md:px-6 py-2 md:py-3 ml-2 text-sm md:text-base hover:bg-gray-100 transition-colors"
                style={{
                  fontFamily: "Suisse Intl",
                  fontWeight: 700,
                }}
              >
                JOIN
              </button>
            </div>
          </form>

          {/* Stream Section - 모바일/PC 반응형 */}
          <div className="w-full max-w-[1200px] mx-auto">
            {/* 모바일: 첫 번째 이미지만 표시 */}
            <div className="block md:hidden">
              <div className="bg-black relative overflow-hidden rounded-2xl aspect-[4/5]">
                <Image
                  src="/images/feature1.png"
                  alt="The Optimal Path for Me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* PC: 2행 2열 레이아웃 - 비율 기반 */}
            <div className="hidden md:flex flex-col gap-4">
              {/* Row 1 */}
              <div className="flex gap-4">
                {/* Feature 1 - 작은 카드 (36% 너비) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden"
                  style={{ flex: "0 0 36%" }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "133.5%" }}
                  >
                    {" "}
                    {/* 412/550 비율 */}
                    <Image
                      src="/images/feature1.png"
                      alt="The Optimal Path for Me"
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                </div>

                {/* Feature 2 - 큰 카드 (64% 너비) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden"
                  style={{ flex: "0 0 64%" }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "75%" }}
                  >
                    {" "}
                    {/* 550/733 비율 */}
                    <Image
                      src="/images/feature2.png"
                      alt="The Future of Learning"
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-4">
                {/* Feature 3 - 큰 카드 (64% 너비) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden"
                  style={{ flex: "0 0 64%" }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "75%" }}
                  >
                    {" "}
                    {/* 550/733 비율 */}
                    <Image
                      src="/images/feature3.png"
                      alt="The Future of Learning"
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                </div>

                {/* Feature 4 - 작은 카드 (36% 너비) */}
                <div
                  className="bg-[#111111] rounded-[28px] relative overflow-hidden"
                  style={{ flex: "0 0 36%" }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "133.5%" }}
                  >
                    {" "}
                    {/* 412/550 비율 */}
                    <Image
                      src="/images/feature4.png"
                      alt="We all Dream differently"
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
