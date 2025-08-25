import { siteContent } from "@/lib/content";

export default function Header() {
  const { navigation } = siteContent;

  return (
    <header className="bg-transparent fix">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - 좌측 */}
          <div className="text-white text-lg font-medium">CHALK</div>

          {/* Right Menu - 우측 */}
          <div className="flex items-center space-x-8">
            {navigation.right_menu.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white text-sm font-medium hover:text-white/80 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Language - Figma 명세: 20px, Semibold, -0.8 letter-spacing, #D9D9D9 */}
            <div className="bg-gray-800 rounded-[16px] px-4 py-2">
              <span className="text-gray-200 text-sm font-semibold tracking-tight">
                {navigation.language}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
