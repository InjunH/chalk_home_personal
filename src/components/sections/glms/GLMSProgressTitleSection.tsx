import GLMSSectionTitle from "./GLMSSectionTitle";

// 상단 타이틀 섹션 컴포넌트 (Figma node 5094:6997)
export default function GLMSProgressTitleSection() {
  return (
    <GLMSSectionTitle
      lines={["ALL IN ONE", "PROGRESS TRACKER"]}
      iconSrc="/images/g-lms/progress-icon.svg"
      iconPosition="inline"
      iconInlineAfter={0}
    />
  );
}
