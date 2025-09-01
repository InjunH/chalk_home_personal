"use client";

import { useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useLanguage } from "@/contexts/LanguageContext";

// 아코디언 카드 컴포넌트
interface AccordionCardProps {
  feature: {
    id: number;
    title: string;
    description: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  isMobile?: boolean;
}

function AccordionCard({ feature, isExpanded, onToggle, isMobile = false }: AccordionCardProps) {
  const cardClasses = isMobile 
    ? "chalk-ai-ontology-card-mobile" 
    : "chalk-ai-ontology-card rounded-[32px]";
  
  const headerClasses = isMobile 
    ? "flex items-center justify-between" 
    : "p-14 flex items-center justify-between";
  
  const titleClasses = isMobile 
    ? "chalk-ai-ontology-feature-title-mobile" 
    : "chalk-ai-ontology-feature-title";
  
  const iconSize = isMobile ? "w-4 h-4" : "w-6 h-6";
  const iconLineSize = isMobile 
    ? { horizontal: "w-[14px] h-[1px]", vertical: "w-[1px] h-[14px]" }
    : { horizontal: "w-[22px] h-[2px]", vertical: "w-[2px] h-[22px]" };
  
  const contentPadding = isMobile ? "mt-4" : "px-14";
  const textSize = isMobile ? "text-sm" : "text-lg";
  const bottomPadding = isMobile ? "pb-6" : "pb-8";

  return (
    <div
      className={`${cardClasses} backdrop-blur-sm transition-all duration-300 cursor-pointer ${
        isExpanded 
          ? `${bottomPadding} bg-white` 
          : 'bg-white/[0.04] hover:bg-white/[0.06]'
      }`}
      onClick={onToggle}
    >
      {/* 상단 헤더 */}
      <div className={headerClasses}>
        {/* 텍스트 */}
        <h3 className={`${titleClasses} transition-colors duration-300 ${
          isExpanded ? 'text-black' : 'text-white'
        }`}>
          {feature.title}
        </h3>

        {/* 아이콘 */}
        <div className={`${iconSize} flex items-center justify-center flex-shrink-0`}>
          <div className="relative">
            {/* 가로선 (항상 표시) */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${iconLineSize.horizontal} transition-colors duration-300 ${
              isExpanded ? 'bg-black' : 'bg-white'
            }`} />
            {/* 세로선 (확장되지 않았을 때만 표시) */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${iconLineSize.vertical} transition-all duration-300 ${
                isExpanded ? 'opacity-0 bg-black' : 'opacity-100 bg-white'
              }`} 
            />
          </div>
        </div>
      </div>

      {/* 확장된 내용 */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? `max-h-40 ${contentPadding}` : 'max-h-0'
      }`}>
        <p className={`text-black/70 ${textSize} leading-relaxed`}>
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function ChalkAIOntologySection() {
  const { text } = useLanguage();
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  
  // 특징 카드 데이터 (Context에서 동적으로 가져오기)
  const FEATURES = text.chalkAI.ontology.features;

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) 
        ? prev.filter(expandedId => expandedId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden space-y-8">
          {/* 타이틀 영역 */}
          <div className="text-center">
            <h2 className="chalk-ai-ontology-title-mobile text-white uppercase">
              <span className="block">ONTOLOGY</span>
              <span className="block mt-1">BASED LEARNING</span>
            </h2>
          </div>

          {/* 컴텐츠 영역 - 모바일에서는 세로 정렬 */}
          <div className="flex flex-col gap-6">
            {/* 이미지 영역 */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/chalk-ai/ontolos.png"
                alt={text.chalkAI.ontology.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 특징 카드 리스트 */}
            <div className="space-y-4">
              {FEATURES.map((feature) => (
                <AccordionCard
                  key={feature.id}
                  feature={feature}
                  isExpanded={expandedIds.includes(feature.id)}
                  onToggle={() => toggleExpand(feature.id)}
                  isMobile={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:block space-y-16">
          {/* 타이틀 영역 */}
          <div className="text-center">
            <h2 className="chalk-ai-ontology-title text-white uppercase">
              <span className="block">ONTOLOGY</span>
              <span className="block mt-2">BASED LEARNING</span>
            </h2>
          </div>

          {/* 컴텐츠 영역 */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 왼쪽: 이미지 영역 */}
            <div className="relative h-[656px] rounded-3xl overflow-hidden">
              {/* 온톨로지 배경 이미지 */}
              <OptimizedImage
                src="/images/chalk-ai/ontolos.png"
                alt={text.chalkAI.ontology.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 오른쪽: 특징 카드 리스트 */}
            <div className="flex flex-col justify-center pl-0 lg:pl-0">
              <div className="space-y-7">
                {FEATURES.map((feature) => (
                  <AccordionCard
                    key={feature.id}
                    feature={feature}
                    isExpanded={expandedIds.includes(feature.id)}
                    onToggle={() => toggleExpand(feature.id)}
                    isMobile={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}