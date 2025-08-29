"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

// QR 코드 섹션 컴포넌트
export default function HomeQRSection() {
  const { text } = useLanguage();
  const { appInfo } = text.footer;

  return (
    <section className="relative overflow-hidden">
      {/* 모바일: 간소한 레이아웃 */}
      <div className="block md:hidden pt-48 pb-24">
        {/* Light SVG 배경 - 하단에만 위치, 확대됨 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2">
          <Image
            src="/images/light.svg"
            alt="Light Background"
            fill
            className="object-cover object-bottom scale-120"
          />
        </div>

        {/* QR 코드 + 텍스트 - 중앙 정렬 */}
        <div className="container">
          <div className="flex flex-col items-center relative z-10 space-y-4">
            {/* QR 코드 이미지 */}
            <div className="relative w-40 h-40">
              <Image
                src="/images/section_8_qr.svg"
                alt="CHALK QR Code"
                fill
                className="object-contain"
              />
            </div>

            {/* 텍스트 */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <h3 className="text-white text-base font-medium">
                {appInfo.title}
              </h3>
              <p className="text-white/80 text-sm">{appInfo.availability}</p>
            </div>
          </div>
        </div>
      </div>

      {/* PC: 기존 레이아웃 그대로 유지 */}
      <div className="hidden md:block py-16 md:py-24 lg:py-32">
        {/* Light SVG 배경 - 하단에만 위치 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-2/3">
          <Image
            src="/images/light.svg"
            alt="Light Background"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* QR 코드 + 텍스트 - 중앙 정렬 */}
        <div className="container">
          <div className="flex flex-col items-center relative z-10 space-y-6 md:space-y-8">
            {/* QR 코드 이미지 */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Image
                src="/images/section_8_qr.svg"
                alt="CHALK QR Code"
                fill
                className="object-contain"
              />
            </div>

            {/* 텍스트 */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium">
                {appInfo.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {appInfo.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
