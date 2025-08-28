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
      <div className="container">
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
            <div className="flex items-center bg-black rounded-full w-full max-w-md md:max-w-lg lg:max-w-xl px-4 md:px-6 py-3 md:py-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-transparent text-white placeholder-white font-bold text-sm md:text-base lg:text-lg border-none outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-full px-4 md:px-6 py-2 md:py-3 ml-2 text-sm md:text-base hover:bg-gray-100 transition-colors"
              >
                JOIN
              </button>
            </div>
          </form>

          {/* Stream Section - 반응형 카드 그리드 */}
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* 모바일: 첫 번째 이미지만 표시 */}
            <div className="block md:hidden">
              <div className="bg-black relative overflow-hidden rounded-lg aspect-[4/5] group">
                <Image
                  src="/images/feature1.png"
                  alt="The Optimal Path for Me"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* PC: 기존 2x2 그리드 그대로 유지 */}
            <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Feature 1 - "The Optimal Path for Me" */}
              <div className="bg-black relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/5] md:aspect-[412/550] group">
                <Image
                  src="/images/feature1.png"
                  alt="The Optimal Path for Me"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Feature 2 - Large card */}
              <div className="bg-black relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/5] md:aspect-[733/550] group">
                <Image
                  src="/images/feature2.png"
                  alt="The Future of Learning"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Feature 3 - Large card */}
              <div className="bg-black relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/5] md:aspect-[733/550] group">
                <Image
                  src="/images/feature3.png"
                  alt="The Future of Learning"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Feature 4 - "We all Dream differently" */}
              <div className="bg-black relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/5] md:aspect-[412/550] group">
                <Image
                  src="/images/feature4.png"
                  alt="We all Dream differently"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
