import { siteContent } from '@/lib/content'

export default function FeatureSection1() {
  const { features } = siteContent

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              {features.section1.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80">
              {features.section1.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.section1.stats.map((stat, index) => (
              <div key={index} className="group space-y-6">
                {/* Stat Number - 대형 숫자 */}
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {index === 0 ? '87%' : index === 1 ? '4.2h' : '+32'}
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 group-hover:animate-pulse"></div>
                </div>

                {/* Stat Description */}
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-white">
                    {stat.label}
                  </p>
                  {stat.note && (
                    <p className="text-sm text-white/60">
                      {stat.note}
                    </p>
                  )}
                </div>

                {/* Progress bar visual */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: index === 0 ? '87%' : index === 1 ? '70%' : '85%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}