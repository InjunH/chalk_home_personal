import { BubbleProps } from './types';

export default function BubbleComponent({ 
  text, 
  position = { top: "-40px", right: "-20px" },
  width = "241px",
  height = "56px" 
}: BubbleProps) {
  return (
    <div
      className="absolute bg-white/12 z-10 bubble-standard"
      style={{
        ...position,
        width,
        height,
      }}
    >
      <div className="text-white text-center bubble-text">
        {text}
      </div>
    </div>
  );
}