import { CardBaseProps } from "./types";

export default function SystemCard({
  children,
  className = "",
  height,
  padding,
}: CardBaseProps) {
  return (
    <div
      className={`flex-1 system-card-mobile md:system-card-base border-[0.1625rem] border-white/[0.04] ${className}`}
      style={{
        ...(height && { height }),
        ...(padding && { padding }),
      }}
    >
      {children}
    </div>
  );
}
