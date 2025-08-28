interface NNKonradTitleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "silver" | "gold" | "highlight";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function NNKonradTitle({
  children,
  className = "",
  variant = "default",
  as: Component = "h2",
}: NNKonradTitleProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "muted":
        return { color: "rgba(255, 255, 255, 0.6)" };
      case "silver":
        return {
          background:
            "linear-gradient(180deg, #b4b4b4 0%, #ffffff 50%, #9a9a9a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        };
      case "gold":
        return {
          background:
            "linear-gradient(90deg, #F8EACA 0%, #FFF6E8 50%, #C2AD89 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        };
      case "highlight":
        return {
          background: "linear-gradient(135deg, #16CF6B 0%, #1E90FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        };
      default:
        return { color: "#ffffff" };
    }
  };

  return (
    <>
      {/* 모바일: 2.25rem 크기 */}
      <Component
        className={`block md:hidden mobile-title-nn ${className}`}
        style={{
          fontFamily: "'NN Konrad', serif",
          ...getVariantStyles(),
        }}
      >
        {children}
      </Component>

      {/* PC: 기존 스타일 그대로 유지 */}
      <Component
        className={`hidden md:block ${className}`}
        style={{
          fontFamily: "'NN Konrad', serif",
          fontSize: "6rem" /* 96px / 16 = 6rem */,
          fontWeight: 700,
          letterSpacing: "-0.18rem" /* -2.88px / 16 = -0.18rem */,
          lineHeight: "1.0",
          textAlign: "center",
          ...getVariantStyles(),
        }}
      >
        {children}
      </Component>
    </>
  );
}
