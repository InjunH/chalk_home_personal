import { siteContent } from "@/lib/content";
import Image from "next/image";
import FeatureTitleSection from "@/components/ui/FeatureTitleSection";
import NNKonradTitle from "@/components/ui/NNKonradTitle";

import SectionSubtitle from "../ui/SectionSubtitle";

// 헤더 컴포넌트
function SectionHeader() {
  const { features } = siteContent;

  return (
    <>
      <SectionSubtitle className="mb-[3.8rem]">
        {features.video.title}
      </SectionSubtitle>
      <FeatureTitleSection layout="vertical">
        <h2 className="text-white font-bold uppercase text-center feature-video-main-title">
          BE READY FOR THE
        </h2>

        <NNKonradTitle variant="gold" className="text-cta-subtitle">
          Next Big Thing
        </NNKonradTitle>
      </FeatureTitleSection>
    </>
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
    <div className="flex flex-row items-start justify-between gap-120">
      {/* 텍스트 영역 */}
      <div className="flex-1 flex flex-col gap-24">
        <h3 className="text-white font-bold uppercase feature-video-card-title">
          {title}
        </h3>

        <p className="text-white/80 font-bold feature-video-card-description">
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
    <section className="min-h-screen py-20 bg-[#0C0C0C] overflow-hidden">
      <div className="container mx-auto">
        <div className="space-y-32">
          <SectionHeader />

          <div className="w-full flex flex-col gap-120">
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
