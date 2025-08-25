import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function ReviewSection() {
  const { review } = siteContent

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Review Content */}
            <div className="space-y-8">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <OptimizedImage 
                  src={ASSETS.icons.quote} 
                  alt="Quote" 
                  className="w-8 h-8 text-white"
                />
              </div>

              {/* Testimonial */}
              <div className="space-y-6">
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                  &ldquo;{review.testimonial.quote1}&rdquo;
                </blockquote>
                
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  &ldquo;{review.testimonial.quote2}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                  {review.testimonial.reviewer.title}
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {review.testimonial.reviewer.name}
                </p>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <OptimizedImage 
                      src={ASSETS.images.review.reviewImg1} 
                      alt="Review Visual 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <OptimizedImage 
                      src={ASSETS.images.review.reviewImg2} 
                      alt="Review Visual 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <OptimizedImage 
                      src={ASSETS.images.features.featureImg1} 
                      alt="Feature Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-6 w-6 h-6 bg-pink-400 rounded-full opacity-50 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}