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
      // ipadMockupReal: '/images/hero/ipad-mockup-real.png',
      ipadMockupReal: "/images/hero/ipad-mockup-realx4.png",
      appScreenshot: "/images/hero/app-screenshot.png",
      placeholder: "/images/hero/placeholder-hero.svg",
    },
    intro: {
      introImg1: "/images/intro/intro-img-1.png",
      introImg2: "/images/intro/intro-img-2.png",
      preview1: "/images/intro/preview-1.svg",
      preview2: "/images/intro/preview-2.svg",
      preview3: "/images/intro/preview-3.svg",
    },
    features: {
      featureImg1: "/images/features/feature-img-1.png",
      featureImg2: "/images/features/feature-img-2.png",
    },
    review: {
      reviewImg1: "/images/review/review-img-1.png",
      reviewImg2: "/images/review/review-img-2.png",
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
