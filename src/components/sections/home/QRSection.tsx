"use client";

import { siteContent } from "@/lib/content";
import Image from "next/image";


// QR 코드 섹션 컴포넌트
export default function QRSection() {
  const { app_info } = siteContent.footer;

  return (
    <section className="relative overflow-hidden bg-[#0C0C0C] qr-section">
      {/* Light SVG 배경 - 하단에만 위치 */}
      <div className="absolute qr-light-bg">
        <Image
          src="/images/light.svg"
          alt="Light Background"
          fill
          className="object-contain object-position-bottom"
        />
      </div>

      {/* QR 코드 + 텍스트 - 중앙 정렬, Figma 간격 적용 */}
      <div className="flex flex-col items-center relative z-10 flex-col-gap-20">
        {/* QR 코드 이미지 - 207x210px */}
        <div className="relative qr-image">
          <Image
            src="/images/section_8_qr.svg"
            alt="CHALK QR Code"
            fill
            className="object-contain"
          />
        </div>

        {/* 텍스트 - 40px 높이 */}
        <div className="flex flex-col items-center qr-text-container">
          <h3 className="text-white text-center qr-text">
            {app_info.title}
          </h3>
          <p className="text-white text-center qr-text">
            {app_info.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
