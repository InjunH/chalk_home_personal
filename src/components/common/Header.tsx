import { siteContent } from "@/lib/content";
import Link from "next/link";

export default function Header() {
  const { navigation } = siteContent;

  return (
    <header className="bg-transparent header-container">
      <div className="flex items-center justify-between h-full">
        {/* Logo - 좌측 */}
        <div className="text-white font-semibold header-logo">
          CHALK
        </div>

 {/* Right Menu - 우측 */}
        <div className="flex items-center header-menu-gap">
          {/* Menu Items */}
          <div className="flex items-center header-items-gap">
            {navigation.right_menu.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-white/80 transition-colors header-menu-item"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language - KR */}
          <div className="flex items-center justify-center header-lang">
            <span className="header-lang-text">
              {navigation.language}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
