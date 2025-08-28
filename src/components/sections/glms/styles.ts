import { GradientTextStyle } from './types';

// Figma에서 추출한 정확한 스타일 정의 (Node ID: 5094:6987)

export const GLMS_HERO_GRADIENT_STYLE: GradientTextStyle = {
  fontFamily: "Suisse Intl",
  fontSize: "148px", // Figma 원본: 148px
  fontWeight: 600, // Semibold
  letterSpacing: "-5.92px", // Figma 원본: -5.92px
  lineHeight: "92%", // Figma 원본: lineHeightPercentFontSize: 92
  background: "linear-gradient(90deg, #B4B4B4 0%, #FFFFFF 34.5%, #9A9A9A 100%)", 
  // Figma 그라데이션: 0.705 → 1.0 → 0.603 (RGB to HEX 변환)
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// 레이아웃 관련 상수 (Figma 측정값 기반)
export const GLMS_LAYOUT_CONFIG = {
  sectionHeight: "1170px", // Figma 원본 높이
  sectionWidth: "1920px", // Figma 원본 너비
  backgroundColor: "#0C0C0C", // RGB(0.0489, 0.0489, 0.0489) → HEX
  titleRotation: "-90deg", // -1.5707963705062884 라디안 = -90도
  
  // 텍스트 배치 (Figma absoluteBoundingBox 기반)
  titlePosition: {
    left: "114px", // 107496 - 107382 = 114px (상대위치)
    top: "283px", // 41363 - 41080 = 283px (상대위치)
    width: "916px",
    height: "544px"
  },
  
  // 이미지 영역 (Figma absoluteBoundingBox 기반)
  imagePosition: {
    left: "894px", // 108276 - 107382 = 894px
    top: "-152px", // 40928 - 41080 = -152px (섹션 밖으로 넘어감)
    width: "1272px",
    height: "1245px"
  }
} as const;

// 반응형 스타일 설정
export const GLMS_RESPONSIVE_CONFIG = {
  mobile: {
    fontSize: "48px", // 148px → 48px (약 1/3)
    letterSpacing: "-1.92px", // -5.92px → -1.92px
    titleRotation: "0deg", // 모바일에서는 수평 배치
    padding: "24px"
  },
  tablet: {
    fontSize: "72px", // 148px → 72px (약 1/2)
    letterSpacing: "-2.88px", // -5.92px → -2.88px
    titleRotation: "-90deg", // 태블릿에서는 세로 유지
    padding: "48px"
  },
  desktop: {
    fontSize: "148px", // 원본 크기 유지
    letterSpacing: "-5.92px", // 원본 값 유지
    titleRotation: "-90deg", // 원본 회전 유지
    padding: "114px"
  }
} as const;

// Gamification 섹션 스타일 (Node ID: 5193:7295)
export const GLMS_GAMIFICATION_TITLE_STYLE = {
  fontFamily: "Suisse Intl",
  fontSize: "80px", // Figma 원본: 80px
  fontWeight: 700, // Bold
  letterSpacing: "-3.2px", // Figma 원본: -3.2px
  lineHeight: "1.2",
  color: "#FFFFFF"
} as const;

export const GLMS_FEATURE_TITLE_STYLE = {
  fontFamily: "Pretendard",
  fontSize: "42px", // Figma 원본: 42px
  fontWeight: 700,
  letterSpacing: "0px",
  lineHeight: "1.1",
  color: "#FFFFFF"
} as const;

export const GLMS_FEATURE_DESC_STYLE = {
  fontFamily: "Pretendard", 
  fontSize: "18px", // Figma 원본: 18px
  fontWeight: 700,
  letterSpacing: "-0.18px", // Figma 원본: -0.18px
  lineHeight: "1.4",
  color: "#FFFFFF"
} as const;

export const GLMS_GRID_ITEM_TITLE_STYLE = {
  fontFamily: "Pretendard",
  fontSize: "28px", // Figma 원본: 28px
  fontWeight: 700,
  letterSpacing: "-0.28px", // Figma 원본: -0.28px
  lineHeight: "1.1",
  color: "#FFFFFF"
} as const;

export const GLMS_GRID_ITEM_DESC_STYLE = {
  fontFamily: "Pretendard",
  fontSize: "16px", // Figma 원본: 16px
  fontWeight: 700,
  letterSpacing: "0px",
  lineHeight: "1.2",
  color: "#FFFFFF"
} as const;

export const GLMS_GAMIFICATION_LAYOUT_CONFIG = {
  sectionBackground: "#000000", // 검정 배경
  sectionGap: "120px", // VERTICAL gap: 120px
  titleHeight: "165px", // 타이틀 영역 높이
  carouselHeight: "1020px", // 캐러셀 영역 높이
  featureCardHeight: "726px", // 기능 카드 높이
  gridAreaHeight: "1978px", // 그리드 영역 높이
  
  // 캐러셀 설정
  carouselWidth: "1322px",
  carouselImageHeight: "937px",
  carouselGap: "64px",
  
  // 기능 카드 설정
  featureCardGap: "64px",
  featureContentWidth: "746px",
  featureImageWidth: "821px",
  
  // 그리드 설정
  gridGap: "24px",
  gridItemSize: "826px" // 826x826 정사각형
} as const;