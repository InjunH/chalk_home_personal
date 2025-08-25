import { siteContent } from '@/lib/content'
import { ASSETS } from '@/lib/assets'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function FeatureSection3() {
  const { features } = siteContent

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              {features.section3.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              {features.section3.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.section3.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">
                      {index === 0 ? '🎯' : index === 1 ? '🎨' : index === 2 ? '📊' : '🚀'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Visual Section */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Large Feature Image */}
              <div className="md:col-span-2">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                  <OptimizedImage 
                    src={ASSETS.images.content.contentImg2} 
                    alt="CHALK Platform Overview"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Stats Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-purple-600 mb-2">99%</div>
                  <div className="text-sm font-semibold text-gray-700">만족도</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">10x</div>
                  <div className="text-sm font-semibold text-gray-700">학습 효율</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-green-600 mb-2">24/7</div>
                  <div className="text-sm font-semibold text-gray-700">AI 튜터</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}