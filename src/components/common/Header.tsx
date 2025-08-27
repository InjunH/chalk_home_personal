import { siteContent } from "@/lib/content";
import Link from "next/link";

export default function Header() {
  const { navigation } = siteContent;

  return (
    <header className="bg-transparent header-container">
      <div className="flex items-center justify-between h-full">
        {/* Logo - 좌측 */}
        <div className="text-white font-semibold header-logo">
          <Link href="/">CHALK</Link>
        </div>

        <div className="flex items-center header-menu-gap">
          {/* Menu Items */}
          <div className="flex items-center header-items-gap">
            {navigation.right_menu.map((item) => {
              const href = item === "CHALK AI" ? "/chalk-ai" : "/g-lms";
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-white text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Language - KR */}
          <div className="flex items-center justify-center header-lang">
            <span className="header-lang-text">{navigation.language}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
