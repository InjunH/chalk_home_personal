import OptimizedImage from "@/components/ui/OptimizedImage";

export default function ChalkAIHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Side - Hyper-Personalized Solutions Text */}
          <div className="text-left space-y-2">
            <h1 className="chalk-ai-hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-white">Hyper-</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-purple-600 bg-clip-text text-transparent">
                Personalized
              </span>
              <br />
              <span className="text-white">Solutions.</span>
            </h1>
          </div>

          {/* Right Side - AI Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <OptimizedImage
                src="/images/chalk-ai/ai.svg"
                alt="CHALK AI Logo"
                className="w-80 h-80 lg:w-120 lg:h-120"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
