'use client'

import { useState } from 'react'
import { siteContent } from '@/lib/content'
import { ASSETS } from '@/lib/assets'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function CTASection() {
  const { cta } = siteContent
  const [email, setEmail] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div className="space-y-12">
            {/* Main Title */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">{cta.title.line1}</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {cta.title.line2}
                </span>
              </h2>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={cta.email_placeholder}
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  {cta.button_text}
                </button>
              </div>
              
              <p className="text-sm text-white/60">
                무료로 시작하여 CHALK의 혁신적인 학습 경험을 만나보세요.
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1000+</div>
                <div className="text-sm text-white/60">베타 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">4.9★</div>
                <div className="text-sm text-white/60">사용자 평점</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">95%</div>
                <div className="text-sm text-white/60">추천율</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="space-y-8">
              {/* Carousel Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {cta.carousel[currentSlide].title}
                    </h3>
                    <p className="text-lg text-white/80">
                      {cta.carousel[currentSlide].subtitle}
                    </p>
                    {cta.carousel[currentSlide].description && (
                      <p className="text-sm text-white/60">
                        {cta.carousel[currentSlide].description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <OptimizedImage 
                    src={ASSETS.graphics.lightOverlay} 
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center space-x-4">
                {cta.carousel.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={() => setCurrentSlide(currentSlide === 0 ? cta.carousel.length - 1 : currentSlide - 1)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto"
                >
                  <OptimizedImage src={ASSETS.icons.ui.arrowLeft} alt="Previous" className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setCurrentSlide(currentSlide === cta.carousel.length - 1 ? 0 : currentSlide + 1)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 pointer-events-auto"
                >
                  <OptimizedImage src={ASSETS.icons.ui.arrowRight} alt="Next" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}