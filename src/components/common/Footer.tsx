import { siteContent } from "@/lib/content";
import Image from "next/image";

// Footer 스타일 상수들
const STYLES = {
  footer: {
    copyright: {
      fontFamily: "Suisse Intl",
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "-0.24px",
      lineHeight: "120%",
    },
    heading: {
      fontFamily: "Suisse Intl",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "-0.42px",
      lineHeight: "110%",
    },
    body: {
      fontFamily: "Suisse Intl",
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "-0.24px",
      lineHeight: "120%",
    },
    korean: {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "-0.24px",
      lineHeight: "107%",
    },
    menu: {
      fontFamily: "Suisse Intl",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "-0.28px",
      lineHeight: "110%",
    },
  },
} as const;

// Footer 컴포넌트
export default function Footer() {
  const { company, links, menu, copyright } = siteContent.footer;

  return (
    <footer className="py-12" style={{ backgroundColor: "#1C1C1C" }}>
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
            <p className="text-white" style={STYLES.footer.copyright}>
              {copyright}
            </p>
          </div>

          {/* 중앙 - 회사 정보 */}
          <div className="flex flex-row" style={{ gap: "60px" }}>
            {/* 첫 번째 컬럼 - 주소, 회사정보, 다운로드 */}
            <div className="flex flex-col" style={{ gap: "36px" }}>
              {/* 주소 정보 */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                <h4 className="text-white" style={STYLES.footer.heading}>
                  ADDRESS
                </h4>
                <div className="flex flex-col" style={{ gap: "12px" }}>
                  <p className="text-white" style={STYLES.footer.body}>
                    {company.address_kr}
                  </p>
                  <p className="text-white" style={STYLES.footer.body}>
                    {company.address_us}
                  </p>
                </div>
              </div>

              {/* 회사 정보 */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                <h4 className="text-white" style={STYLES.footer.heading}>
                  INFO
                </h4>
                <div className="text-white" style={STYLES.footer.korean}>
                  {company.registration}
                  <br />
                  {company.ceo}
                </div>
              </div>

              {/* 회사 소개 + 다운로드 */}
              <div className="flex flex-col" style={{ gap: "12px" }}>
                <h4 className="text-white" style={STYLES.footer.heading}>
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
            <div className="flex flex-col" style={{ gap: "32px" }}>
              {/* 연락처 */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                <h4 className="text-white" style={STYLES.footer.heading}>
                  CONTACT
                </h4>
                <p className="text-white" style={STYLES.footer.body}>
                  {company.email}
                </p>
              </div>

              {/* 소셜 미디어 */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                <h4 className="text-white" style={STYLES.footer.heading}>
                  FOLLOW US
                </h4>
                <div className="flex flex-row" style={{ gap: "12px" }}>
                  <p className="text-white" style={STYLES.footer.body}>
                    {links.linkedin}
                  </p>
                </div>
              </div>
            </div>

            {/* 세 번째 컬럼 - 메뉴 */}
            <div
              className="flex flex-col"
              style={{ gap: "12px", width: "164px" }}
            >
              {menu.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white"
                  style={STYLES.footer.menu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
