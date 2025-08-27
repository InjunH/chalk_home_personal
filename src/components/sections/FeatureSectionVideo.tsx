import { siteContent } from "@/lib/content";
import Image from "next/image";

// 스타일 상수들
const STYLES = {
  header: {
    subtitle: {
      fontFamily: "Suisse Intl",
      fontSize: "24px",
      letterSpacing: "-0.48px",
    },
    mainTitle: {
      fontFamily: "Suisse Intl",
      fontSize: "96px",
      letterSpacing: "-2.88px",
      lineHeight: "67%",
    },
    highlightTitle: {
      fontFamily: "'NN Konrad', serif",
      fontSize: "94px",
      letterSpacing: "-2.82px",
      lineHeight: "100%",
    },
  },
  feature: {
    title: {
      fontFamily: "Pretendard",
      fontSize: "42px",
      letterSpacing: "0px",
      lineHeight: "92%",
    },
    description: {
      fontFamily: "Pretendard",
      fontSize: "18px",
      letterSpacing: "-0.18px",
      lineHeight: "94%",
    },
  },
} as const;

// 헤더 컴포넌트
function SectionHeader() {
  const { features } = siteContent;

  return (
    <div className="text-center flex flex-col" style={{ gap: "54px" }}>
      <p
        className="text-white/60 text-center opacity-60 font-semibold"
        style={STYLES.header.subtitle}
      >
        {features.video.title}
      </p>

      <h2
        className="text-white font-bold uppercase text-center"
        style={STYLES.header.mainTitle}
      >
        BE READY FOR THE
      </h2>

      <h3
        className="text-white font-bold text-center"
        style={STYLES.header.highlightTitle}
      >
        Next Big Thing
      </h3>
    </div>
  );
}

// 피처 카드 컴포넌트
interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  index: number;
}

function FeatureCard({ title, description, image, index }: FeatureCardProps) {
  return (
    <div
      className="flex flex-row items-start justify-between"
      style={{ gap: "120px" }}
    >
      {/* 텍스트 영역 */}
      <div className="flex-1 flex flex-col" style={{ gap: "24px" }}>
        <h3
          className="text-white font-bold uppercase"
          style={STYLES.feature.title}
        >
          {title}
        </h3>

        <p
          className="text-white/80 font-bold"
          style={STYLES.feature.description}
        >
          {description}
        </p>
      </div>

      {/* 이미지 영역 */}
      {image && (
        <div className="flex-1">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="w-full h-auto"
            priority={index < 2} // 첫 2개 이미지는 우선 로딩
          />
        </div>
      )}
    </div>
  );
}

// 메인 컴포넌트
export default function FeatureSectionVideo() {
  const { features } = siteContent;

  return (
    <section className="min-h-screen py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto">
        <div className="space-y-32">
          <SectionHeader />

          <div className="w-full flex flex-col" style={{ gap: "120px" }}>
            {features.video.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
