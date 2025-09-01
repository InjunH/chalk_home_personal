import { CardBaseProps } from "./types";

export default function SystemCard({
  children,
  className = "",
  height,
  padding,
}: CardBaseProps) {
  return (
    <div
      className={`flex-1 
        h-auto min-h-[20rem] rounded-[1rem] p-6
        md:h-[var(--card-height)] md:rounded-[var(--card-border-radius)] md:p-[3.375rem]
        border-[0.1625rem] border-white/[0.04] ${className}`}
      style={{
        ...(height && { height }),
        ...(padding && { padding }),
      }}
    >
      {children}
    </div>
  );
}
