interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`absolute hero-bg-circle ${className}`} />
  );
}