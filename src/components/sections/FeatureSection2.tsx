import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function FeatureSection2() {
  const { features } = siteContent

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-purple-700 font-semibold">
                {features.section2.intro.badge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              {features.section2.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              {features.section2.subtitle}
            </p>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto whitespace-pre-line">
              {features.section2.intro.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-24">
            {features.section2.features.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <p className="text-xl text-purple-600 font-semibold">
                        {feature.subtitle}
                      </p>
                    )}
                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Bubble */}
                  <div className="relative inline-block">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-100">
                      <p className="text-purple-600 font-medium text-sm">
                        💬 {feature.bubble}
                      </p>
                    </div>
                    <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/80 transform rotate-45 border-r border-b border-purple-100"></div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <OptimizedImage 
                        src={index === 0 ? ASSETS.images.features.featureImg1 : ASSETS.images.content.contentImg1} 
                        alt={`${feature.title} Preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                      <span className="text-white font-bold text-xl">✨</span>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
                    
                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 text-white">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">실시간 학습 중</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}