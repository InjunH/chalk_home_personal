"use client";

import { useState } from "react";
import Image from "next/image";

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
        <div className="flex flex-col text-center" style={{ gap: "120px" }}>
          {/* Title Section - Figma 스펙 (VERTICAL, gap: -13px) */}
          <div className="flex flex-col">
            {/* "follow the path" - Figma 스펙: Suisse Intl 700 96px */}
            <h2
              className="text-white font-bold uppercase"
              style={{
                fontFamily: "Suisse Intl",
                fontSize: "96px",
                fontWeight: 700,
                letterSpacing: "-2.88px",
                lineHeight: "67%",
              }}
            >
              follow the path
            </h2>

            {/* "Find the New" - Figma 스펙: NN Konrad 700 94px */}
            <h3
              className="text-white font-bold"
              style={{
                fontFamily: "'NN Konrad', serif",
                fontSize: "94px",
                fontWeight: 700,
                letterSpacing: "-2.82px",
                lineHeight: "100%",
              }}
            >
              Find the New
            </h3>
          </div>

          {/* Email Form - Figma 스펙: 검은 배경, 둥근 모서리 */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <div
              className="flex items-center bg-[#121212] rounded-full"
              style={{ width: "674px", height: "110px" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 px-8 bg-transparent text-white placeholder-white font-bold text-lg border-none outline-none"
                style={{
                  fontFamily: "Suisse Intl",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "-1.12px",
                }}
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-full mr-4"
                style={{
                  width: "174px",
                  height: "74px",
                  fontFamily: "Suisse Intl",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "-1.12px",
                }}
              >
                JOIN
              </button>
            </div>
          </form>

          {/* Stream Section - Figma 스펙: 2행, 각 행에 2개 카드 */}
          <div className="w-full max-w-[1160px] mx-auto">
            {/* Figma 레이아웃: VERTICAL, gap: 15px */}
            <div className="flex flex-col" style={{ gap: "15px" }}>
              {/* Row 1 - Figma 스펙: HORIZONTAL, gap: 14.66px */}
              <div className="flex" style={{ gap: "14.66px" }}>
                {/* Feature 1 - "The Optimal Path for Me" (412 x 550) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden flex-shrink-0"
                  style={{ width: "412px", height: "550px" }}
                >
                  <Image
                    src="/images/feature1.png"
                    alt="The Optimal Path for Me"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature 2 - Large card (733 x 550) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden flex-shrink-0"
                  style={{ width: "733px", height: "550px" }}
                >
                  <Image
                    src="/images/feature2.png"
                    alt="The Future of Learning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Row 2 - Figma 스펙: HORIZONTAL, gap: 14.66px */}
              <div className="flex" style={{ gap: "14.66px" }}>
                {/* Feature 3 - Large card (733 x 550) */}
                <div
                  className="bg-black rounded-[28px] relative overflow-hidden flex-shrink-0"
                  style={{ width: "733px", height: "550px" }}
                >
                  <Image
                    src="/images/feature3.png"
                    alt="The Future of Learning"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature 4 - "We all Dream differently" (412 x 550) */}
                <div
                  className="bg-[#111111] rounded-[28px] relative overflow-hidden flex-shrink-0"
                  style={{ width: "412px", height: "550px" }}
                >
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
