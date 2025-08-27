// FeatureSystem 컴포넌트 모듈 내보내기

export { default as AILogoCard } from './AILogoCard';
export { default as TextCard } from './TextCard';
export { default as PassportCard } from './PassportCard';
export { default as SystemCard } from './SystemCard';
export { default as BubbleComponent } from './BubbleComponent';

export type { 
  GradientTextStyle, 
  TextStyle, 
  BubbleProps, 
  CardBaseProps 
} from './types';

export { 
  GRADIENT_TITLE_STYLE,
  SUBTITLE_STYLE, 
  DESCRIPTION_STYLE,
  BUBBLE_TEXT_STYLE,
  AI_TEXT_STYLE,
  LAYOUT_CONFIG 
} from './styles';