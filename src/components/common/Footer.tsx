import { siteContent } from "@/lib/content";
import Image from "next/image";
import HomeQRSection from "../sections/home/HomeQRSection";

// Footer 컴포넌트
export default function Footer() {
  const { company, links, menu, copyright } = siteContent.footer;

  return (
    <>
      <HomeQRSection />
      <footer className="py-8 md:py-12 lg:py-16 bg-black">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* 좌측 - CHALK 로고 + 저작권 (데스크톱에서만) */}
            <div className="hidden lg:flex lg:flex-col lg:justify-between lg:max-w-sm lg:min-h-[400px]">
              {/* CHALK 로고 - 상단 */}
              <div className="mb-auto">
                <Image
                  src="/images/chalk_logo.svg"
                  alt="CHALK Logo"
                  width={292}
                  height={61}
                  className="text-white w-48 md:w-60 lg:w-72 h-auto"
                />
              </div>

              {/* 저작권 - 하단 */}
              <p className="text-white/60 text-xs md:text-sm font-normal mt-auto">
                {copyright}
              </p>
            </div>

            {/* 우측 - 메뉴 + 회사 정보 (3열 구조) */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* 첫 번째 컬럼 - 주소, 회사정보, 다운로드 */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                {/* 주소 정보 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
                    ADDRESS
                  </h4>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                      {company.address_kr}
                    </p>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                      {company.address_us}
                    </p>
                  </div>
                </div>

                {/* 회사 정보 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
                    INFO
                  </h4>
                  <div className="text-white/80 text-xs md:text-sm leading-relaxed">
                    {company.registration}
                    <br />
                    {company.ceo}
                  </div>
                </div>

                {/* 회사 소개 + 다운로드 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
                    {links.company_intro}
                  </h4>
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white/80 text-xs md:text-sm font-medium">
                      {links.download}
                    </span>
                    <Image
                      src="/icons/download.svg"
                      alt="Download"
                      width={12}
                      height={12}
                      className="opacity-80"
                    />
                  </div>
                </div>
              </div>

              {/* 두 번째 컬럼 - 연락처 + 소셜 */}
              <div className="space-y-6 md:space-y-8 order-3 lg:order-2">
                {/* 연락처 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
                    CONTACT
                  </h4>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    {company.email}
                  </p>
                </div>

                {/* 소셜 미디어 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
                    FOLLOW US
                  </h4>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-xs md:text-sm leading-relaxed transition-colors"
                  >
                    {links.linkedin}
                  </a>
                </div>
              </div>

              {/* 세 번째 컬럼 - 메뉴 */}
              <div className="space-y-3 md:space-y-4 order-1 lg:order-3">
                {menu.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-white text-sm md:text-base font-bold hover:text-white/80 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 모바일에서만 표시 - 저작권 + CHALK 로고 (제일 하단) */}
          <div className="lg:hidden mt-8 space-y-4 text-left">
            {/* CHALK 로고 */}
            <div className="flex justify-start">
              <Image
                src="/images/chalk_logo.svg"
                alt="CHALK Logo"
                width={292}
                height={61}
                className="text-white w-48 md:w-60 h-auto"
              />
            </div>

            {/* 저작권 - 제일 하단 */}
            <p className="text-white/60 text-xs md:text-sm font-normal">
              {copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
