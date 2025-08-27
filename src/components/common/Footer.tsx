import { siteContent } from "@/lib/content";
import Image from "next/image";
import QRSection from "../sections/home/QRSection";

// Footer 컴포넌트
export default function Footer() {
  const { company, links, menu, copyright } = siteContent.footer;

  return (
    <>
      <QRSection />
      <footer className="py-12 footer-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-row justify-between">
            {/* 좌측 - 로고 + 저작권 */}
            <div className="flex flex-col justify-between">
              {/* CHALK 로고 */}
              <div className="flex flex-col">
                <Image
                  src="/images/chalk_logo.svg"
                  alt="CHALK Logo"
                  width={292}
                  height={61}
                  className="text-white w-72"
                />
              </div>

              {/* 저작권 */}
              <p className="text-white footer-copyright">{copyright}</p>
            </div>

            {/* 중앙 - 회사 정보 */}
            <div className="flex flex-row footer-gap-60">
              {/* 첫 번째 컬럼 - 주소, 회사정보, 다운로드 */}
              <div className="flex flex-col footer-gap-36">
                {/* 주소 정보 */}
                <div className="flex flex-col footer-gap-8">
                  <h4 className="text-white footer-heading">ADDRESS</h4>
                  <div className="flex flex-col footer-gap-12">
                    <p className="text-white footer-body">
                      {company.address_kr}
                    </p>
                    <p className="text-white footer-body">
                      {company.address_us}
                    </p>
                  </div>
                </div>

                {/* 회사 정보 */}
                <div className="flex flex-col footer-gap-8">
                  <h4 className="text-white footer-heading">INFO</h4>
                  <div className="text-white footer-korean">
                    {company.registration}
                    <br />
                    {company.ceo}
                  </div>
                </div>

                {/* 회사 소개 + 다운로드 */}
                <div className="flex flex-col footer-gap-12">
                  <h4 className="text-white footer-heading">
                    {links.company_intro}
                  </h4>
                  <div className="px-5 py-3.5 bg-white/5 rounded-lg backdrop-blur-lg inline-flex justify-start items-center gap-2">
                    <div className="justify-start text-zinc-300 text-xs font-normal font-['Suisse_Intl'] leading-none">
                      {links.download}
                    </div>
                    <div className="w-3 h-3 relative overflow-hidden">
                      <Image
                        src="/icons/download.svg"
                        alt="Download"
                        width={12}
                        height={12}
                        className="text-zinc-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 두 번째 컬럼 - 연락처 + 소셜 */}
              <div className="flex flex-col footer-gap-32">
                {/* 연락처 */}
                <div className="flex flex-col footer-gap-8">
                  <h4 className="text-white footer-heading">CONTACT</h4>
                  <p className="text-white footer-body">{company.email}</p>
                </div>

                {/* 소셜 미디어 */}
                <div className="flex flex-col footer-gap-8">
                  <h4 className="text-white footer-heading">FOLLOW US</h4>
                  <div className="flex flex-row footer-gap-12">
                    <p className="text-white footer-body">{links.linkedin}</p>
                  </div>
                </div>
              </div>

              {/* 세 번째 컬럼 - 메뉴 */}
              <div className="flex flex-col footer-gap-12 footer-menu-width">
                {menu.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white footer-menu"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
