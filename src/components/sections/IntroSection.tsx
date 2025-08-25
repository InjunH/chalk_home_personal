import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function IntroSection() {
  const { intro, review } = siteContent

  return (
    <section id="intro" className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Main Copy */}
          <div className="space-y-6">
            <h2 className="font-bold leading-tight bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent" 
                style={{
                  fontSize: '72px',
                  lineHeight: '72px',
                  fontFamily: 'Pretendard',
                  fontWeight: 700,
                  textAlign: 'center'
                }}>
              {intro.description}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Review Section */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* First Quote */}
            <div className="text-white">
              <p className="font-bold uppercase" 
                 style={{
                   fontSize: '36px',
                   lineHeight: '39.6px',
                   letterSpacing: '-0.36px',
                   fontFamily: 'Pretendard',
                   fontWeight: 700,
                   textAlign: 'center'
                 }}>
                {review.testimonial.quote1}
              </p>
            </div>

            {/* Second Quote */}
            <div className="text-white opacity-70">
              <p className="font-bold" 
                 style={{
                   fontFamily: 'Pretendard',
                   fontWeight: 700,
                   textAlign: 'center'
                 }}>
                {review.testimonial.quote2}
              </p>
            </div>

            {/* Reviewer Info */}
            <div className="text-white/70 text-center space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide">
                {review.testimonial.reviewer.title}
              </p>
              <p className="text-lg font-medium">
                {review.testimonial.reviewer.name}
              </p>
            </div>
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