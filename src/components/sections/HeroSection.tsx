import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src={ASSETS.graphics.heroGradient} 
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src={ASSETS.graphics.lightOverlay} 
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Intro Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <OptimizedImage src={ASSETS.icons.intro} alt="" className="w-4 h-4" />
              <span className="text-white/90 text-sm font-medium">
                {hero.intro_badge}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {hero.main_title.line1}{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {hero.main_title.highlight}
                </span>{' '}
                {hero.main_title.line2}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                {hero.sub_title}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                체험해보기
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                더 알아보기
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative flex justify-center">
            {/* iPad Mockup */}
            <div className="relative">
              <OptimizedImage 
                src={ASSETS.images.hero.ipadMockupReal} 
                alt="CHALK App on iPad"
                className="w-full max-w-lg lg:max-w-2xl h-auto drop-shadow-2xl"
              />
              
              {/* Floating Animation */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute top-3/4 -right-6 w-4 h-4 bg-pink-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll</span>
          <div className="w-px h-8 bg-white/30"></div>
        </div>
      </div>
    </section>
  )
}