import OptimizedImage from "./OptimizedImage";

interface HeroBottomLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function HeroBottomLogo({
  src,
  alt,
  className = "",
}: HeroBottomLogoProps) {
  return (
    <div className={` ${className}`}>
      <OptimizedImage src={src} alt={alt} className="w-auto h-6 md:h-8" />
    </div>
  );
}
