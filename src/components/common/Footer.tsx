import { siteContent } from '@/lib/content'

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* App Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {footer.app_info.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {footer.app_info.availability}
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">회사 정보</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{footer.company.address_kr}</p>
              <p>{footer.company.address_us}</p>
              <p>{footer.company.registration}</p>
              <p>{footer.company.ceo}</p>
              <p>{footer.company.email}</p>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">메뉴</h3>
            <div className="space-y-2">
              {footer.menu.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">링크</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {footer.links.company_intro}
              </a>
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {footer.links.download}
              </a>
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {footer.links.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}