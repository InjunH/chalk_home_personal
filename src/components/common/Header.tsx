import { ASSETS } from '@/lib/assets'
import { siteContent } from '@/lib/content'
import OptimizedImage from '@/components/ui/OptimizedImage'

export default function Header() {
  const { navigation } = siteContent

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <OptimizedImage 
              src={ASSETS.logos.chalk} 
              alt="CHALK" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.main_menu.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <span className="text-white/60 text-sm">{navigation.language}</span>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}