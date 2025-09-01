// 영어 텍스트 상수 (English text constants)
// TODO: 사용자가 제공할 영문 콘텐츠로 업데이트 예정
export const en = {
  // 공통 텍스트
  common: {
    language: "EN",
    menuToggle: "Open menu",
    download: "Download",
  },

  // 네비게이션
  navigation: {
    home: "HOME",
    chalkAI: "CHALK AI",
    gLMS: "G-LMS",
    rightMenu: ["CHALK AI", "G-LMS"],
    language: "EN",
  },

  // Hero 섹션
  hero: {
    mainTitle: {
      line1: "WE ALL",
      highlight: "Dream",
      line2: "DIFFERENTLY",
    },
    subTitle: "Hyper-Personalized Learning Solution",
    introBadge: "INTRO : INTO THE CHALK",
  },

  // Intro 섹션
  intro: {
    mainCopy: "Meet the Best Teachers\nYou Won't Find Anywhere Else.",
    description1: "Meet the Best Teachers",
    description2: "\nYou Won't Find Anywhere Else.",
    description3: "",
  },

  // Review 섹션
  review: {
    testimonial: {
      quote1: "Isn't this what the future of online learning should look like?",
      quote2:
        "Right now, I hope this product isn't just another version, \nbut the most advanced form of learning. \nWhether it's a class that kids actually enjoy or \none that provides all the information \nthey need when solving problems, it's all here.\"",
      quote3: "",
      reviewer: {
        title: "REVIEWER",
        name: "Parent of a Beta Tester",
      },
    },
  },

  // Features 섹션
  features: {
    value: {
      title: "The New Paradigm",
      subtitle: "Your new Companion",
      stats: [
        {
          label: "Completion Rate with CHALK",
          note: "*Traditional: 10%",
          value: "76.4",
          unit: "%",
          subLabel: "Completion Rate with CHALK",
          icon: "/images/section_3_icon_1.svg",
        },
        {
          label: "Average\nDaily Study Time",
          value: "110",
          unit: "h",
          icon: "/images/section_3_icon_2.svg",
        },
        {
          label: "Average Score Increase in 2 Months",
          value: "15",
          unit: "p",
          icon: "/images/section_3_icon_3.svg",
        },
      ],
    },
    experience: {
      title: "Just Chalk it up",
      content: {
        top: "EXPERIENCE",
        middleImage: "/images/section_4_main_icon.svg",
        bottom: "in Every Way",
      },
    },
    video: {
      title: "Into the New Future",
      subtitle: "Be Ready for the\nNext Big Thing",
      features: [
        {
          title: "Our Fast Track to Success, Tailored Just for You",
          description:
            "We analyze your learning patterns and proficiency using data-driven insights to design the most efficient path to your goals.",
          image: "/images/section_6_image_1.png",
        },
        {
          title: "Personalized Lessons\nfor Your Level & Style",
          description:
            "We analyze your learning patterns to deliver the best lesson style for you. Choose an instructor's voice for a fully customized experience.",
          image: "/images/section_6_image_2.png",
        },
        {
          title: "A Powerful \nData-Driven Engine",
          description:
            "We analyze learners' weak points, misconceptions, and gaps in reasoning at each stage, delivering the right content at the right time.",
          image: "/images/section_6_image_3.png",
        },
        {
          title: "The Secret to Turning Study\ninto Passion",
          description:
            "Experience the joy of seeing your knowledge grow and your \nachievements come to life.",
          image: "/images/section_6_image_4.png",
        },
      ],
    },
    system: {
      cards: [
        {
          id: "hyper_personalized",
          title: "Hyper-Personalized",
          subtitle: "Learning Solution",
          description:
            "Hyper-personalization analyzes each student's status, goals, and preferences to create tailored content that fits their level and interests.",
          image: "featureSystemImg",
          type: "image" as const,
        },
        {
          id: "glms",
          title: "G-LMS",
          subtitle: "Gamified Learning Management System",
          description:
            "With Chalk, you see your progress come to life. As knowledge grows and rewards unfold, studying shifts from a task to a true desire.",
          media: "featureVideo",
          type: "video" as const,
        },
      ],
    },
  },

  // CTA 섹션
  cta: {
    title: {
      line1: "follow the path",
      line2: "Find the New",
    },
    emailPlaceholder: "ENTER YOUR EMAIL",
    buttonText: "JOIN",
    carousel: [
      {
        title: "The Optimal\nPath for Me",
        subtitle: "Try checking this out! \nIt's just what you need right now!",
      },
      {
        title: "We all Dream differently",
        subtitle: "The Future of Learning Starts Here.",
        description: "Finish the course, earn rewards!",
      },
    ],
  },

  // Footer
  footer: {
    copyright: "© 2025 Copyright firsthabit All Rights Reserved.",
    company: {
      addressKr:
        "[KR] 4F, 31, Hakdong-ro 33gil \nGangnam-gu, Seoul,Republic of Korea",
      addressUs: "[US] 177 Huntington Ave Boston, MA 02115 United States",
      registration: "Bussiness No. 231-81-11681\nRepresented by  Da-Gyeom Jang",
      ceo: "Da-Gyeom Jang",
      email: "info@firsthabit.com",
    },
    appInfo: {
      title: "CHALK : Hyper-Personalized Learning Solution",
      availability: "Available on App store",
    },
    links: {
      companyIntro: "COMPANY INTRODUCTION",
      download: "Download",
      linkedin: "LINKED IN",
    },
    menu: ["HOME", "CHALK AI", "G-LMS"],
  },

  // CHALK AI 페이지
  chalkAI: {
    hero: {
      mainTitle: {
        line1: "Hyper-",
        highlight: "Personalized",
        line2: "Solutions.",
      },
      logo: "/images/chalk-ai/ai.svg",
    },
    description: {
      title:
        "A revolution in personalized learning, designed to address deep and diverse questions.",
      subtitle: "Your ultimate guide to endless curiosity.",
    },
    titleSection: {
      mainTitle: "24/7",
      subtitle: "MANAGEMENT",
      images: [
        "/images/chalk-ai/teacher_1.png",
        "/images/chalk-ai/teacher_2.png",
        "/images/chalk-ai/teacher_3.png",
      ],
    },
    features: [
      {
        id: 1,
        title: "Personalized Q&A and \nReal-Time Feedback",
        description:
          "Ensure a smooth learning process by clarifying difficult concepts and identifying weak points through data analysis. Get real-time content tailored to your learning needs, addressing knowledge gaps and reasoning errors instantly.",
        image: "/images/chalk-ai/section_1.png",
      },
      {
        id: 2,
        title: "Lessons Tailored to\nYour Level & Style",
        description:
          "AI-powered instructors adapt their personalities and teaching styles to match your learning preferences, providing a truly customized educational experience.",
        image: "/images/chalk-ai/section_2.png",
      },
      {
        id: 3,
        title: "Your Fast Track to Success",
        description:
          "From elementary school to high school, an AI-driven learning path is designed based on your data. Real-time progress tracking and continuous optimization ensure you stay on the most effective learning journey.",
        image: "/images/chalk-ai/section_3.png",
      },
    ],
    ontology: {
      title: "ONTOLOGY",
      subtitle: "BASED LEARNING",
      image: "/images/chalk-ai/ontolos.png",
      features: [
        { id: 1, title: "BEYOND THE BASE MODEL", icon: "+" },
        { id: 2, title: "FLEXIBLE RESPONSE", icon: "+" },
        { id: 3, title: "ADVANCED PROBLEM SOLVING", icon: "+" },
      ],
    },
    techCTA: {
      preTitle: "👀Deep dive into FIRSTHABIT",
      mainTitle: {
        line1: "UNLOCK THE",
        line2: "TECHNOLOGY",
      },
      buttons: [
        {
          text: "FIRSTHABIT TECH PAGE",
          icon: "/images/chalk-ai/first_habit_logo.png",
          url: "#",
        },
        {
          text: "FIRSTHABIT TECH BLOG",
          icon: "/images/chalk-ai/naver_logo.svg",
          url: "#",
        },
      ],
      backgroundImage: "/images/chalk-ai/Product 3.0(CHALK)_Main Poster_02.png",
    },
  },

  // G-LMS 페이지
  gLMS: {
    hero: {
      title: "G-LMS",
      subtitle: "Gamified Learning Management System",
      description:
        "Transform learning into an engaging adventure with our gamified approach.",
      mainTitle: {
        line1: "Gamification:",
        highlight: "CHALK WORLD",
        line2: "Build Your Own City Through Studying",
      },
    },
    gamification: {
      features: [
        {
          title: "Earn Points Instantly After Learning",
          description:
            "Get immediate rewards for every lesson completed and milestone achieved.",
          imageSrc: "/images/g-lms/glms-points-dashboard.png",
          imageAlt: "Points Dashboard",
        },
        {
          title: "Build Your Own City Through Studying",
          description:
            "Watch your virtual city grow as you progress through your studies.",
          imageSrc: "/images/glms-city-building-feature.jpg",
          imageAlt: "City Building Feature",
        },
      ],
      cityBuilding: {
        cards: [
          {
            title: "Real-time Mission Solving",
            description:
              "Tackle challenges as they appear and earn instant rewards for quick thinking.",
            imageAlt: "Real-time Mission Solving",
          },
          {
            title: "City Building Mechanics",
            description:
              "Create and expand your virtual city with each learning achievement.",
            imageAlt: "City Building",
          },
          {
            title: "Complete Your Own City",
            description:
              "Design and build a unique city that reflects your learning journey and progress.",
            imageAlt: "Complete Your Own City",
          },
          {
            title: "Tourist Visits",
            description:
              "Attract visitors to your city and showcase your academic achievements to the community.",
            imageAlt: "Tourist Visits",
          },
        ],
      },
    },
    motivation: {
      features: [
        {
          title: "Achievement System",
          description:
            "Unlock badges, trophies, and special rewards as you reach new learning milestones.",
        },
        {
          title: "Social Learning",
          description:
            "Connect with peers, share achievements, and compete in friendly academic challenges.",
        },
      ],
    },
    progress: {
      features: [
        {
          id: 1,
          title: "Personal Learning Dashboard",
          description:
            "Track your learning progress, view detailed analytics, and monitor your academic growth in real-time.",
          imageSrc: "/images/g-lms/oll_in_one_1.png",
          imageAlt: "Personal Dashboard",
          isReversed: false,
        },
        {
          id: 2,
          title: "Visual Progress System",
          description:
            "See your knowledge grow through interactive charts, progress bars, and visual representations of your learning journey.",
          imageSrc: "/images/g-lms/oll_in_one_2.png",
          imageAlt: "Graphic System",
          isReversed: true,
        },
        {
          id: 3,
          title: "Career Path Solutions",
          description:
            "Discover personalized career recommendations and skill development paths based on your learning patterns and interests.",
          imageSrc: "/images/g-lms/oll_in_one_3.png",
          imageAlt: "Career Solution",
          isReversed: false,
        },
      ],
    },
  },

  // G-LMS Vision Section
  gLMSVision: {
    title: {
      line1: "Now education can be game-like interactive",
      line2: "and engaging",
      line3: "with immersion and achievement",
    },
  },

  // 에러 메시지
  errors: {
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    networkError: "A network error occurred",
    tryAgain: "Please try again",
  },

  // 성공 메시지
  success: {
    subscribed: "Successfully subscribed",
    submitted: "Successfully submitted",
    saved: "Saved successfully",
  },
};

export type TextContent = typeof en;
