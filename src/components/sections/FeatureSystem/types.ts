// FeatureSystem 컴포넌트에서 사용되는 타입 정의

export interface GradientTextStyle {
  fontFamily: string;
  fontSize: string | number;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string | number;
  background: string;
  WebkitBackgroundClip: "text";
  WebkitTextFillColor: "transparent";
  backgroundClip: "text";
}

export interface TextStyle {
  fontFamily: string;
  fontSize: string | number;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string | number;
}

export interface BubbleProps {
  text: string | React.ReactNode;
  position?: {
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
  };
  width?: string;
  height?: string;
}

export interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  padding?: string;
}