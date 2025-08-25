import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function IntroSection() {
  const { intro } = siteContent

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Main Copy */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {intro.main_copy}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Preview Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <OptimizedImage 
                  src={ASSETS.images.intro.introImg1} 
                  alt="CHALK Preview 1"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <OptimizedImage 
                  src={ASSETS.images.intro.introImg2} 
                  alt="CHALK Preview 2"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <OptimizedImage 
                  src={ASSETS.images.intro.preview1} 
                  alt="CHALK Preview 3"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line">
              {intro.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}