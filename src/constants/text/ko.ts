// 한국어 텍스트 상수 (CONTENT_DATA.json 기반)
export const ko = {
  // 공통 텍스트
  common: {
    language: "KR",
    menuToggle: "메뉴 열기",
    download: "Download",
  },

  // 네비게이션
  navigation: {
    home: "HOME",
    chalkAI: "CHALK AI",
    gLMS: "G-LMS",
    rightMenu: ["CHALK AI", "G-LMS"],
    language: "KR",
  },

  // Hero 섹션 (CONTENT_DATA.json)
  hero: {
    mainTitle: {
      line1: "WE ALL",
      highlight: "Dream",
      line2: "DIFFERENTLY",
    },
    subTitle: "Hyper-Personalized Learning Solution",
    introBadge: "INTRO : INTO THE CHALK",
  },

  // Intro 섹션 (CONTENT_DATA.json)
  intro: {
    mainCopy: "대치동에서도 볼 수 없던 최고의 선생님을 만나보세요.",
    description1: "대치동에서도 볼 수 없던",
    description2: "최고의 선생님을",
    description3: "만나보세요.",
  },

  // Review 섹션 (CONTENT_DATA.json)
  review: {
    testimonial: {
      quote1: "인터넷 강의의 다음은 다 이렇게 만들어지지 않을까요?",
      quote2: "현재로서는 이 제품이 가장 발전된 형태가 아닐까 싶어요. 아이들이",
      quote3:
        "좋아하는 강의라든지, 문제를 풀때 필요한 모든 정보가 다 담겨있다든지.",
      reviewer: {
        title: "REVIEWER",
        name: "베타 학부모",
      },
    },
  },

  // Features 섹션 (CONTENT_DATA.json)
  features: {
    value: {
      title: "The New Paradigm",
      subtitle: "Your new Companion",
      stats: [
        {
          label: "CHALK 사용시 완강률",
          note: "*기존학원 완강률 10%",
          value: "76.4",
          unit: "%",
          subLabel: "*기존학원 완강률 10%",
          icon: "/images/section_3_icon_1.svg",
        },
        {
          label: "하루평균 공부시간",
          value: "110",
          unit: "h",
          icon: "/images/section_3_icon_2.svg",
        },
        {
          label: "2개월 내 평균상승 점수",
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
      subtitle: "Be Ready for the Next Big Thing",
      features: [
        {
          title: "나만을 위한 최적의 경로,\n패스트 트랙 파인더",
          description:
            "사용자 데이터를 기반으로 학습 패턴과 수준을 분석해,\n목표까지의 가장 효율적인 경로를 설계하여 제시합니다.",
          image: "/images/section_6_image_1.png",
        },
        {
          title: "이제 강의도 맞춤형으로,\n수준과 스타일에 맞춘 강의",
          description:
            "학습자의 성향과 패턴을 데이터로 분석해, 최적의 강의 스타일을 제공합니다.\n또한, 원하는 강사의 목소리를 설정해 학습자의 취향에 맞춘 맞춤형 학습을 경험합니다.",
          image: "/images/section_6_image_2.png",
        },
        {
          title: "완벽한 데이터 분석 엔진",
          description:
            "학습자의 시기별 약점 개념, 유형 그리고 사고 과정에서의 부족한 부분을 데이터로 분석해 현재 필요한 학습 콘텐츠를 적시에 제공합니다.",
          image: "/images/section_6_image_3.png",
        },
        {
          title: "해야하는 공부에서,\n하고싶은 공부로 만드는 비결",
          description:
            "스스로 쌓아가는 지식과 그 과정에서 얻는\n성취의 보상을 눈으로 확인하는 경험을 제공합니다.",
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
            "초개인화로 학생의 상태와 목표, 성향과 선호도를 정확히 파악하고 개개인의 수준과 선호에 맞는 맞춤형 콘텐츠를 제작합니다.",
          image: "featureSystemImg",
          type: "image",
        },
        {
          id: "glms",
          title: "G-LMS",
          subtitle: "Gamified Learning Management System",
          description:
            "공부는 머릿속에 지식을 쌓아가는 과정입니다. 초크를 통해 우리는 성취를 눈으로 보고, 지식을 쌓아갑니다. 쌓여가는 지식과 성취되는 보상속에서, 공부는 ‘해야 하는 것’에서 ‘하고 싶은 것’이 됩니다.",
          media: "featureVideo",
          type: "video",
        },
      ],
    },
  },

  // CTA 섹션 (CONTENT_DATA.json)
  cta: {
    title: {
      line1: "follow the path",
      line2: "Find the New",
    },
    emailPlaceholder: "ENTER YOUR EMAIL",
    buttonText: "JOIN",
    carousel: [
      {
        title: "The Optimal Path for Me",
        subtitle: "게임과 결합한 학습, G-LMS.",
      },
      {
        title: "We all Dream differently",
        subtitle: "The Future of Learning Starts Here.",
        description: "게임과 결합한 학습, G-LMS.",
      },
    ],
  },

  // Footer (CONTENT_DATA.json)
  footer: {
    copyright: "© 2025 Copyright firsthabit All Rights Reserved.",
    company: {
      addressKr: "[KR] 서울시 강남구 학동로 33길 31, 패스워드빌딩",
      addressUs: "[US] 177 Huntington Ave Boston, MA 02115 United States",
      registration: "사업자등록번호 231-81-11681",
      ceo: "대표자명 장다겸",
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

  // CHALK AI 페이지 (CONTENT_DATA.json 기반)
  chalkAI: {
    hero: {
      mainTitle: {
        line1: "Hyper-",
        highlight: "Personalized",
        line2: "Solutions.",
      },
      logo: "/images/chalk-ai/ai.svg",
    },
    description: [
      "개인의 다양하고 심도있는 질문을 위한",
      "맞춤형 교육의 혁신",
      "끝없는 질문을 위한",
      "확실한 가이드",
    ],
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
        title: "나만을 위한 질의응답과\n실시간 피드백",
        description:
          "완성도 높은 학습 프로세스로 놓치기 쉬운 개념을 정확히 짚어주고, 데이터 분석을 통해\n시기별 약점과 부족한 사고 과정을 파악해 필요한 콘텐츠를 적시에 제공합니다.",
        image: "/images/chalk-ai/section_1.png",
      },
      {
        id: 2,
        title: "내 수준과 스타일에 딱 맞는\n맞춤형 강의",
        description:
          "AI 선생님의 페르소나를 다양하게 설계하고, 학습자의 성향에 맞는\n다양한 강의 스타일을 제공하여 초개인화 맞춤형 학습 경험을 제공합니다.",
        image: "/images/chalk-ai/section_2.png",
      },
      {
        id: 3,
        title: "나만을 위한 최적의 경로,\n패스트 트랙 파인더",
        description:
          "초등학교 4학년부터 대입까지— 사용자 데이터 기반의 최적의 학습 트랙을 설계하고,\n실시간 학습 진행 상황과 성적을 추적하여 지속적으로 맞춤형 경로를 제시합니다.",
        image: "/images/chalk-ai/section_3.png",
      },
    ],
    ontology: {
      title: "온톨로지 기반 검색으로 정확하고 완벽한 답변을 제공합니다",
      subtitle: "지식 온톨로지를 설계하고 이를 활용하여",
      image: "/images/chalk-ai/ontolos.png",
      features: [
        { id: 1, title: "정확한 답변 제공", icon: "+" },
        { id: 2, title: "유연한 대응", icon: "+" },
        { id: 3, title: "고난도 문제 해결", icon: "+" },
      ],
    },
    techCTA: {
      preTitle: "👀 퍼스트해빗의 기술에 대해 더 알고싶다면?",
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
      subtitle: "게이미피케이션 학습 관리 시스템",
      description:
        "게임의 재미와 교육의 가치를 결합한\n혁신적인 학습 관리 플랫폼",
    },
    gamification: {
      features: [
        {
          title: "학습 완료 후\n즉시 포인트 보상",
          description:
            "나의 강점, 목표, 학습 상태가 한눈에 정리된 \n나만의 대시보드에서 나의 학습 흐름을 확인해 보세요.",
          imageSrc: "/images/g-lms/glms-points-dashboard.png",
          imageAlt: "포인트 대시보드",
        },
        {
          title: "나만의 도시를 \n건설하세요",
          description:
            "공부할수록 나의 도시가 발전해가요. 학업적 성취도를 한눈에 확인할 수 있어요.",
          imageSrc: "/images/glms-city-building-feature.jpg",
          imageAlt: "도시 건설 기능",
        },
      ],
      cityBuilding: {
        cards: [
          {
            title: "실시간 미션 해결",
            description:
              "매일 학습 목표에 맞춘 미션이 도착하고, 이를 수행해요.",
            imageAlt: "실시간 미션 해결",
          },
          {
            title: "도시 건설",
            description:
              "미션을 수행할 때마다 공부한 지역의 랜드마크와 주변 인프라가 건설돼요.",
            imageAlt: "도시 건설",
          },
          {
            title: "나만의 도시 완성",
            description:
              "진도를 달성하면 도시가 완성돼요. 미션을 수행하며 더욱 도시를 멋지게 업그레이드할 수 있어요.",
            imageAlt: "나만의 도시 완성",
          },
          {
            title: "관광객 방문",
            description:
              "도시가 활성화될수록 사람들이 많이 방문해서 더 많은 수입을 얻어요.",
            imageAlt: "관광객 방문",
          },
        ],
      },
    },
    progress: {
      features: [
        {
          id: 1,
          title: "나만의 목표,\n나만의 대시보드",
          description:
            "나의 강점, 목표, 학습 상태가 한눈에 정리된 \n나만의 대시보드에서 나의 학습 흐름을 확인해 보세요.",
          imageSrc: "/images/g-lms/oll_in_one_1.png",
          imageAlt: "나만의 대시보드",
          isReversed: false,
        },
        {
          id: 2,
          title: "나의 성취를 한눈에 보는\n그래픽 시스템",
          description:
            "주간 리포트를 통해 나의 학습 성취와 진행 상황을 한눈에 확인하고,\nCHALK와 함께 성장하는 변화를 경험해 보세요.",
          imageSrc: "/images/g-lms/oll_in_one_2.png",
          imageAlt: "그래픽 시스템",
          isReversed: true,
        },
        {
          id: 3,
          title: "내게 딱 맞는 코스를 찾아주는\n진로 선생님같은 솔루션",
          description:
            "나의 학습 데이터를 기반으로, \n오직 나만을 위해 설계된 맞춤형 경로를 경험해 보세요.",
          imageSrc: "/images/g-lms/oll_in_one_3.png",
          imageAlt: "진로 솔루션",
          isReversed: false,
        },
      ],
    },
    motivation: {
      features: [
        {
          title: "보상의 재미,\n배움의 즐거움",
          description:
            "학습을 통해 쌓아가는 스스로의 지식과 그 과정에서 얻는 \n매력적인 성취의 보상을 통해 배움의 즐거움을 경험해 보세요.",
        },
        {
          title: "친구와 그룹과 함께 더 오래,\n소셜과 매치 이벤트",
          description:
            "친구와 함께하는 성장에 자연스러운 동기를 얻고,\n목표를 향해 꾸준히 나아갈 수 있는 동력이 됩니다.",
        },
      ],
    },
  },

  // G-LMS Vision 섹션
  gLMSVision: {
    title: {
      line1: "이제 교육은 게임처럼 상호작용",
      line2: "이 가능하고",
      line3: "몰입감과 성취감이 있어야 합니다",
    },
  },

  // 에러 메시지
  errors: {
    required: "필수 입력 항목입니다",
    invalidEmail: "올바른 이메일 주소를 입력해주세요",
    networkError: "네트워크 오류가 발생했습니다",
    tryAgain: "다시 시도해주세요",
  },

  // 성공 메시지
  success: {
    subscribed: "구독이 완료되었습니다",
    submitted: "제출이 완료되었습니다",
    saved: "저장되었습니다",
  },
};

export type TextContent = typeof ko;
