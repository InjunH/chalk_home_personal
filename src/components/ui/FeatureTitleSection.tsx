import React from "react";

interface FeatureTitleSectionProps {
  children: React.ReactNode;
  gap?: string;
  className?: string;
  layout?: "horizontal" | "vertical";
}

export default function FeatureTitleSection({
  children,
  gap = "gap-4",
  className = "",
  layout = "vertical"
}: FeatureTitleSectionProps) {
  const baseClasses = layout === "horizontal" 
    ? `flex flex-row items-center justify-center ${gap}`
    : `text-center flex flex-col ${gap}`;

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}