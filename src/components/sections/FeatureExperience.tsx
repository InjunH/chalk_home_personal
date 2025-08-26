import { ASSETS } from "@/lib/assets";
import { siteContent } from "@/lib/content";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function FeatureExperience() {
  const { features } = siteContent;

  return (
    <section className="min-h-[90vh] max-h-[120vh] py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          <div className="flex flex-col items-center justify-center space-y-12">
            <span
              className="text-white/50"
              style={{
                fontFamily: "Pretendard",
                fontWeight: 400,
                fontSize: "13px",
                letterSpacing: "-0.26px",
              }}
            >
              {features.experience.title}
            </span>
            <span
              className="text-white/50"
              style={{
                fontFamily: "Pretendard",
                fontWeight: 400,
                fontSize: "96px",
                letterSpacing: "-0.26px",
              }}
            >
              {features.experience.content.top}
            </span>

            <OptimizedImage
              src={features.experience.content.middle_image}
              alt="feature"
            />

            <h2
              className="text-white/60"
              style={{
                fontFamily: "'NN Konrad', serif",
                fontWeight: 700,
                fontSize: "96px",
                letterSpacing: "-0.48px",
                textAlign: "center",
              }}
            >
              {features.experience.content.bottom}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
