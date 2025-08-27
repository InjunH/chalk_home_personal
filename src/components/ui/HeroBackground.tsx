interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: "50%",
        top: "10%",
        width: "60vw",
        height: "60vw",
        maxWidth: "1169px",
        maxHeight: "1169px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(22, 207, 107, 0.3) 0%, transparent 70%)",
        filter: "blur(100px)",
        transform: "translateX(-50%)",
      }}
    />
  );
}