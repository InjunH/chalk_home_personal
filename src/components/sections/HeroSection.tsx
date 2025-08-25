import { ASSETS } from "@/lib/assets";
import { siteContent } from "@/lib/content";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative h-screen max-h-[100vh] overflow-hidden bg-black"
    >
      <div
        className="absolute top-[10%] right-[20%]"
        style={{
          width: "40%",
          height: "40%",
          transform: "rotate(-45deg)",
          borderRadius: "552.04px",
          background:
            "conic-gradient(from 180deg at 50% 50%, #17CF6C 0deg, #17CF6C 43.2deg, #618BFF 136.8deg, #B62FFF 208.8deg, #000000 360deg)",
          filter: "blur(200.03px)",
        }}
      />

      {/* Main Content Layout */}
      <div className="relative z-10 h-screen flex flex-col">
        <div className="absolute left-6 bottom-20 z-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <OptimizedImage
              src={ASSETS.icons.intro}
              alt=""
              className="w-4 h-4"
            />
            <span className="text-white/90 font-bold text-sm tracking-tight">
              {hero.intro_badge}
            </span>
          </div>
          <p className="text-white/80 font-medium text-lg">{hero.sub_title}</p>
        </div>

        {/* Center - Main Title */}
        <div className="absolute w-screen top-20 left-1/2 z-20 transform -translate-x-1/2">
          <div className="flex-1 flex items-center justify-center px-6">
            <h1 className="text-white text-center leading-none">
              {/* WE ALL */}
              <div className="flex flex-row items-center justify-center">
                <div
                  className="font-bold uppercase"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 9rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: "0.9",
                  }}
                >
                  {hero.main_title.line1}
                </div>

                <div
                  className="ml-4 font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "'NN Konrad', serif",
                    fontSize: "clamp(3rem, 10vw, 9rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                  }}
                >
                  {hero.main_title.highlight}
                </div>
              </div>

              {/* DIFFERENTLY */}
              <div
                className="font-bold uppercase"
                style={{
                  fontSize: "clamp(3rem, 10vw, 9rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: "0.9",
                }}
              >
                {hero.main_title.line2}
              </div>
            </h1>
          </div>
        </div>

        {/* Right - iPad Mockup */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-10 w-screen">
          <div className="relative flex justify-center w-full">
            <OptimizedImage
              src={ASSETS.images.hero.ipadMockupReal}
              alt="CHALK App on iPad"
              className="drop-shadow-2xl"
              style={{
                width: "100vw",
                height: "auto",
                maxWidth: "none",
                minWidth: "100vw",
              }}
            />
          </div>
        </div>

        {/* Right Bottom - CHALK Logo */}
        <div className="absolute right-6 bottom-20 z-20">
          <div className="text-white text-4xl font-bold tracking-wider">
            CHALK
          </div>
        </div>

        {/* Bottom Center - Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm">Scroll</span>
            <div className="w-px h-8 bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
