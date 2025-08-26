export interface HeroContent {
  main_title: {
    line1: string;
    highlight: string;
    line2: string;
  };
  sub_title: string;
  intro_badge: string;
}

export interface IntroContent {
  main_copy: string;
  description1: string;
  description2: string;
  description3: string;
}

export interface ReviewContent {
  testimonial: {
    quote1: string;
    quote2: string;
    quote3: string;
    reviewer: {
      title: string;
      name: string;
    };
  };
}

export interface FeatureContent {
  section1: {
    title: string;
    subtitle: string;
    stats: Array<{
      label: string;
      note?: string;
      value: string;
      unit: string;
      sub_label?: string;
      icon: string;
    }>;
  };
  section2: {
    title: string;
    content: {
      top: string;
      middle_image: string;
      bottom: string;
    };
    features: Array<{
      title: string;
      subtitle?: string;
      description: string;
      bubble: string;
    }>;
  };
  section3: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  system: {
    cards: Array<{
      id: string;
      title: string;
      subtitle?: string;
      description: string;
      image?: string;
      media?: string;
      type: "image" | "video";
    }>;
  };
}

export interface CTAContent {
  title: {
    line1: string;
    line2: string;
  };
  email_placeholder: string;
  button_text: string;
  carousel: Array<{
    title: string;
    subtitle: string;
    description?: string;
  }>;
}

export interface FooterContent {
  copyright: string;
  company: {
    address_kr: string;
    address_us: string;
    registration: string;
    ceo: string;
    email: string;
  };
  app_info: {
    title: string;
    availability: string;
  };
  links: {
    company_intro: string;
    download: string;
    linkedin: string;
  };
  menu: string[];
}

export interface NavigationContent {
  right_menu: string[];
  language: string;
}

export interface SiteContent {
  hero: HeroContent;
  intro: IntroContent;
  review: ReviewContent;
  features: FeatureContent;
  cta: CTAContent;
  footer: FooterContent;
  navigation: NavigationContent;
}
