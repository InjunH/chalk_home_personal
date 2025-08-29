import SectionTitle from "@/components/ui/SectionTitle";

// 상단 타이틀 섹션 컴포넌트 (Figma node 5094:7008)
export default function GLMSMotivationTitleSection() {
  return (
    <>
      {/* 모바일 버전 */}
      <div className="block md:hidden w-full text-left">
        <h2 className="glms-gamification-title-mobile font-bold text-white">
          IMMERSIVE
          <br />
          MOTIVATION
          <br />
          SYSTEM
        </h2>
      </div>
      <div className="hidden md:block">
        <SectionTitle
          variant="section"
          lines={["IMMERSIVE", "MOTIVATION SYSTEM"]}
          iconSrc="/images/g-lms/motivation-icon.svg"
          iconPosition="inline"
          iconInlineAfter={0}
        />
      </div>
    </>
  );
}
