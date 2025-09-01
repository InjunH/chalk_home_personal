"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

export default function ChalkAIBenefitsSection() {
  const { text } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !containerRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          console.log(rect.top, windowHeight);

          // 섹션이 화면에 들어왔을 때부터 애니메이션 시작
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            // 애니메이션 시작 오프셋 조절 (양수: 늦게 시작, 음수: 일찍 시작)
            const startOffset = windowHeight * -0.5; // 섹션이 화면에 들어오기 전부터 시작

            // 진행률 계산 - 시작 지점을 조절
            const adjustedTop = rect.top + startOffset;
            const progress = Math.max(
              0,
              Math.min(1, -adjustedTop / (windowHeight * 2))
            );

            setScrollProgress(progress);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 상태 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 각 텍스트의 활성화 임계값

  const getTextColor = (index: number) => {
    // PC 3줄 구성에 맞춰 임계값 조정: 0줄/1줄/2,3줄
    let threshold;
    if (index === 0) {
      threshold = 0; // 첫 번째 줄 즉시
    } else if (index === 1) {
      threshold = 0.1; // 두 번째 줄
    } else {
      threshold = 0.2; // 세 번째 줄 (index 2, 3)
    }
    return scrollProgress > threshold ? "text-white" : "text-white/50";
  };

  return (
    <div className="h-[200vh] relative">
      {" "}
      {/* 충분한 높이로 스크롤 가능하게 */}
      <section
        className="sticky top-0 h-screen flex items-center justify-center px-6"
        ref={sectionRef}
      >
        <div className="container mx-auto max-w-4xl" ref={containerRef}>
          {/* 모바일 버전 */}
          <div className="block md:hidden text-center">
            <h2 className="chalk-ai-description-title-mobile">
              {text.chalkAI.description.map((textPart, index) => (
                <span
                  key={index}
                  className={`transition-all duration-500 ${getTextColor(
                    index
                  )}`}
                  // style={{
                  //   opacity: getTextOpacity(index),
                  // }}
                >
                  {textPart}
                  {index < text.chalkAI.description.length - 1 && " "}
                </span>
              ))}
            </h2>
          </div>

          {/* PC 버전 */}
          <div className="hidden md:block text-center">
            <h2 className="chalk-ai-description-title">
              {text.chalkAI.description.map((textPart, index) => (
                <span key={index}>
                  <span
                    className={`transition-all duration-500 ${getTextColor(
                      index
                    )}`}
                    // style={{
                    //   opacity: getTextOpacity(index),
                    // }}
                  >
                    {textPart}
                  </span>
                  {index === 0 && <br />}
                  {index === 1 && <br />}
                  {index === 2 && " "}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
