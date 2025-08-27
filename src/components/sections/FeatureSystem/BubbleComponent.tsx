import { BubbleProps } from './types';
import { BUBBLE_TEXT_STYLE } from './styles';

export default function BubbleComponent({ 
  text, 
  position = { top: "-40px", right: "-20px" },
  width = "241px",
  height = "56px" 
}: BubbleProps) {
  return (
    <div
      className="absolute bg-white/12 z-10"
      style={{
        ...position,
        width,
        height,
        borderRadius: "12px",
        padding: "13px 14px",
      }}
    >
      <div className="text-white text-center" style={BUBBLE_TEXT_STYLE}>
        {text}
      </div>
    </div>
  );
}