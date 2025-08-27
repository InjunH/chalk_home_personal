import { ASSETS } from "@/lib/assets";
import OptimizedImage from "../ui/OptimizedImage";
import { siteContent } from "@/lib/content";

interface SystemCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  media?: string;
  type: "image" | "video";
}

export default function FeatureSystem() {
  const { system } = siteContent.features;

  // 공통 스타일
  const titleStyle = {
    fontFamily: "Pretendard",
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
    letterSpacing: "-0.02em",
  };

  const subtitleStyle = {
    fontFamily: "Pretendard",
    fontSize: "12px",
  };

  const descriptionStyle = {
    fontFamily: "Pretendard",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const renderCard = (card: SystemCard) => {
    const isVideoCard = card.type === "video";
    const content = (
      <div className="space-y-4">
        <h2 className="text-white font-bold leading-tight" style={titleStyle}>
          {card.title}
          {card.subtitle && (
            <>
              <br />
              {card.subtitle}
            </>
          )}
        </h2>

        {isVideoCard && (
          <p className="text-white/60 text-sm" style={subtitleStyle}>
            {card.subtitle}
          </p>
        )}

        <p className="text-white/70 leading-relaxed" style={descriptionStyle}>
          {card.description}
        </p>
      </div>
    );

    const media =
      card.type === "image" && card.image ? (
        <div className="relative flex justify-center">
          <OptimizedImage
            src={ASSETS.images.features.featureSystemImg}
            alt={card.title}
            className="w-full max-w-md h-auto object-cover rounded-2xl"
          />
        </div>
      ) : card.media ? (
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="relative w-64 h-80 bg-black rounded-3xl overflow-hidden border border-white/20">
              <video
                src={ASSETS.images.features.featureVideo}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      ) : null;

    return (
      <div
        key={card.id}
        className="backdrop-blur-sm border border-white/10 rounded-3xl p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {isVideoCard ? (
            <>
              {content}
              {media}
            </>
          ) : (
            <>
              {media}
              {content}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {system.cards.map((card) => renderCard(card))}
        </div>
      </div>
    </section>
  );
}
