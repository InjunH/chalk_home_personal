export const ASSETS = {
  logos: {
    chalk: "/icons/chalk-logo.svg",
  },
  icons: {
    quote: "/icons/quote-icon.svg",
    intro: "/icons/intro-icon.svg",
    ui: {
      arrowLeft: "/icons/ui/arrow-left.svg",
      arrowRight: "/icons/ui/arrow-right.svg",
    },
  },
  images: {
    hero: {
      heroImg1: "/images/hero/hero-img-1.png",
      heroImg2: "/images/hero/hero-img-2.png",
      heroImg3: "/images/hero/hero-img-3.png",
      ipadMockup: "/images/hero/ipad-mockup.svg",
      ipadMockupReal: "/images/hero/ipad-mockup-realx4.png",
      appScreenshot: "/images/hero/app-screenshot.png",
      placeholder: "/images/hero/placeholder-hero.svg",
    },
    intro: {
      // 기존 이미지들
      introImg1: "/images/intro/intro-img-1.png",
      introImg2: "/images/intro/intro-img-2.png",
      preview1: "/images/intro/preview-1.svg",
      preview2: "/images/intro/preview-2.svg",
      preview3: "/images/intro/preview-3.svg",
      // Figma에서 다운로드한 새 이미지들
      figmaImg1: "/images/intro/intro_img_1.png",
      figmaImg2: "/images/intro/intro_img_2.png",
      figmaImg3: "/images/intro/intro_img_3.png",
    },
    features: {
      mainImg: "/images/section_3_main_icon.svg",
      featureImg1: "/images/section_3_icon_1.svg",
      featureImg2: "/images/section_3_icon_2.svg",
      featureImg3: "/images/section_3_icon_3.svg",
      featureVideo: "/images/section_5_video.mp4",
      featureSystemImg: "/images/section_5_icon.svg",
      hyperPersonalized: "/images/hyper.png",
    },

    content: {
      contentImg1: "/images/content/content-img-1.png",
      contentImg2: "/images/content/content-img-2.png",
    },
  },
  graphics: {
    heroGradient: "/graphics/hero-gradient.svg",
    lightOverlay: "/graphics/light-overlay.svg",
  },
} as const;

export type AssetPath = typeof ASSETS;
