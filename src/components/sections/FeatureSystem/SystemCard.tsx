import { CardBaseProps } from './types';
import { LAYOUT_CONFIG } from './styles';

export default function SystemCard({ 
  children, 
  className = "", 
  height = LAYOUT_CONFIG.cardHeight,
  padding = LAYOUT_CONFIG.cardInnerPadding
}: CardBaseProps) {
  return (
    <div
      className={`flex-1 ${className}`}
      style={{
        height,
        borderRadius: LAYOUT_CONFIG.cardBorderRadius,
        padding,
      }}
    >
      {children}
    </div>
  );
}