interface IntroMainTitleProps {
  descriptions: string[];
  className?: string;
}

export default function IntroMainTitle({
  descriptions,
  className = "",
}: IntroMainTitleProps) {
  return (
    <div className={`flex flex-col items-center justify-center max-w-4xl mx-auto ${className}`}>
      {descriptions.map((description, index) => (
        <h2
          key={index}
          className="font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent intro-main-heading"
        >
          {description}
        </h2>
      ))}
    </div>
  );
}