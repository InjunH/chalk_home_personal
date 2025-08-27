interface ExperienceDescriptionProps {
  description: string;
}

export default function ExperienceDescription({ description }: ExperienceDescriptionProps) {
  return (
    <div className="text-center">
      <p className="text-white whitespace-pre-line experience-desc-text">
        {description}
      </p>
    </div>
  );
}