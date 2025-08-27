import { GradientTextStyle, TextStyle } from './types';

// Figma에서 추출한 정확한 스타일 정의

export const GRADIENT_TITLE_STYLE: GradientTextStyle = {
  fontFamily: "Suisse Intl",
  fontSize: "72px",
  fontWeight: 700,
  letterSpacing: "-2.88px",
  lineHeight: "1.07",
  background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const SUBTITLE_STYLE: TextStyle = {
  fontFamily: "Suisse Intl",
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "-0.96px",
  lineHeight: "1.5",
};

export const DESCRIPTION_STYLE: TextStyle = {
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: 700,
  letterSpacing: "-0.18px",
  lineHeight: "1.4",
};

export const BUBBLE_TEXT_STYLE: TextStyle = {
  fontFamily: "ABC Monument Grotesk Semi-Mono",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "0.12px",
  lineHeight: "1.2",
};

export const AI_TEXT_STYLE = {
  fontSize: "72px",
};

// 레이아웃 관련 상수
export const LAYOUT_CONFIG = {
  sectionPadding: "120px",
  containerPadding: "114px", 
  cardGap: "28px",
  rowGap: "24px",
  cardHeight: "560px",
  cardBorderRadius: "32px",
  cardInnerPadding: "54px",
  titleGap: "44px",
  subtitleGap: "10px",
} as const;