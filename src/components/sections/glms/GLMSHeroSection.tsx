import OptimizedImage from "@/components/ui/OptimizedImage";

export default function GLMSHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* 모바일 버전 */}
        <div className="block md:hidden text-center space-y-8 min-h-[400px] h-screen flex flex-col justify-center">
          <h1 className="glms-hero-title-mobile text-white text-left leading-tight">
            <span className="block">Gamified</span>
            <span className="block">Learning</span>
            <span className="block">Management</span>
            <span className="block">System.</span>
          </h1>

          <div className="flex justify-center">
            <div className="relative">
              <OptimizedImage
                src="/images/g-lms/lms_main.png"
                alt="G-LMS Main Background"
                className="w-120 h-120 object-cover rounded-lg"
                style={{
                  mixBlendMode: "lighten",
                }}
              />
            </div>
          </div>
        </div>

        {/* PC 버전 (기존 그대로) */}
        <div className="hidden md:grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Side - Gamified Learning Management System Text */}
          <div className="text-left space-y-2">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              style={{ fontFamily: "Suisse Intl, sans-serif" }}
            >
              <span className="text-white">Gamified</span>
              <br />
              <span className="text-white">Learning</span>
              <br />
              <span className="text-white">Management</span>
              <br />
              <span className="text-white">System.</span>
            </h1>
          </div>

          {/* Right Side - G-LMS Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <OptimizedImage
                src="/images/g-lms/lms_main.png"
                alt="G-LMS Main Background"
                className="w-80 h-80 lg:w-240 lg:h-240 object-cover rounded-lg"
                style={{
                  mixBlendMode: "lighten",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
