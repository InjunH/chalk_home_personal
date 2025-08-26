import { siteContent } from "@/lib/content";

export default function Header() {
  const { navigation } = siteContent;

  return (
    <header 
      className="bg-transparent"
      style={{
        height: "99px", // Figma: 99px
        paddingLeft: "114px", // Figma: 114px
        paddingRight: "114px", // Figma: 114px  
        paddingTop: "16px", // Figma: 16px
        paddingBottom: "16px" // Figma: 16px
      }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo - 좌측 */}
        <div 
          className="text-white font-semibold"
          style={{
            fontFamily: "Suisse Intl", // Figma에서 확인된 폰트
            fontSize: "20px", // 로고 크기에 맞춘 적절한 크기
            fontWeight: 600,
            letterSpacing: "-0.2px"
          }}
        >
          CHALK
        </div>

        {/* Right Menu - 우측 */}
        <div 
          className="flex items-center"
          style={{ gap: "88px" }} // Figma: 88px gap between menu items
        >
          {/* Menu Items */}
          <div 
            className="flex items-center"
            style={{ gap: "72px" }} // Figma: 72px gap between CHALK AI and G-LMS
          >
            {navigation.right_menu.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                style={{
                  fontFamily: "Suisse Intl", // Figma: Suisse Intl
                  fontSize: "20px", // Figma: 20px
                  fontWeight: 600, // Figma: 600
                  letterSpacing: "-0.2px" // Figma: -0.2px
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language - KR */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: "84px", // Figma: 84px width
              height: "67px", // Figma: 67px height
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Figma: 흰색 10% 투명도
              borderRadius: "16px", // 기존 둥근 모서리 유지
              padding: "24px 28px" // Figma: 패딩 28px(좌우), 24px(상하)
            }}
          >
            <span 
              className="text-white"
              style={{
                fontFamily: "Suisse Intl", // Figma: Suisse Intl
                fontSize: "20px", // Figma: 20px
                fontWeight: 600, // Figma: 600
                letterSpacing: "-0.8px", // Figma: -0.8px
                color: "#D9D9D9" // Figma RGB (0.85, 0.85, 0.85) → #D9D9D9
              }}
            >
              {navigation.language}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
