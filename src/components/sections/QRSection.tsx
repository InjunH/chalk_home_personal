"use client";

import { siteContent } from "@/lib/content";
import Image from "next/image";

// 스타일 상수들
const STYLES = {
  qr: {
    title: {
      fontFamily: "Suisse Intl",
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "-0.8px",
      lineHeight: "100%",
    },
    subtitle: {
      fontFamily: "Suisse Intl",
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "-0.8px",
      lineHeight: "100%",
    },
  },
} as const;

// QR 코드 섹션 컴포넌트
export default function QRSection() {
  const { app_info } = siteContent.footer;

  return (
    <section
      className="relative overflow-hidden bg-[#0C0C0C]"
      style={{
        paddingTop: "270px", // 상단 여백
        paddingBottom: "354px", // 하단 여백 (Footer까지의 간격)
        height: "894px", // 전체 섹션 높이
      }}
    >
      {/* Light SVG 배경 - 하단에만 위치 */}
      <div
        className="absolute"
        style={{
          left: "0",
          bottom: "0",
          width: "100%",
          height: "30%", // 하단 30%만
        }}
      >
        <Image
          src="/images/light.svg"
          alt="Light Background"
          fill
          className="object-contain"
          style={{ objectPosition: "bottom" }}
        />
      </div>

      {/* QR 코드 + 텍스트 - 중앙 정렬, Figma 간격 적용 */}
      <div
        className="flex flex-col items-center relative z-10"
        style={{ gap: "20px" }}
      >
        {/* QR 코드 이미지 - 207x210px */}
        <div className="relative w-[207px] h-[210px]">
          <Image
            src="/images/section_8_qr.svg"
            alt="CHALK QR Code"
            fill
            className="object-contain"
          />
        </div>

        {/* 텍스트 - 40px 높이 */}
        <div
          className="flex flex-col items-center"
          style={{ gap: "0px", height: "40px" }}
        >
          <h3 className="text-white text-center" style={STYLES.qr.title}>
            {app_info.title}
          </h3>
          <p className="text-white text-center" style={STYLES.qr.subtitle}>
            {app_info.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
