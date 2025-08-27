interface ExperienceDescriptionProps {
  description: string;
}

export default function ExperienceDescription({ description }: ExperienceDescriptionProps) {
  return (
    <div className="text-center">
      <p 
        className="text-white"
        style={{
          fontFamily: "Pretendard",
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "-0.18px",
          lineHeight: "1.2",
          whiteSpace: "pre-line" // 줄바꿈 처리
        }}
      >
        {description}
      </p>
    </div>
  );
}