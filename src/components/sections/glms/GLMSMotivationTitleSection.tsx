import SectionTitle from "@/components/ui/SectionTitle";

// 상단 타이틀 섹션 컴포넌트 (Figma node 5094:7008)
export default function GLMSMotivationTitleSection() {
  return (
    <SectionTitle
      variant="section"
      lines={["IMMERSIVE", "MOTIVATION SYSTEM"]}
      iconSrc="/images/g-lms/motivation-icon.svg"
      iconPosition="inline"
      iconInlineAfter={0}
    />
  );
}
