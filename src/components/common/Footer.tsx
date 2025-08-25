import { siteContent } from "@/lib/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="relative bg-[#0C0C0C] text-white overflow-hidden">
      <div className="flex flex-row justify-between mx-auto px-6 py-16">
        {/* CHALK Logo - Figma 기반 */}
        <div className="mb-12 flex flex-col justify-between">
          <div className="text-white text-[74px] font-bold">CHALK</div>
          <div className="text-white text-xs font-normal text-gray-500 tracking-tight leading-relaxed mt-auto">
            {footer.copyright}
          </div>
        </div>

        {/* Main Footer Content - Figma 정확한 구조 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* ADDRESS Section - Figma 명세: 14px Semibold, -0.42px spacing */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-tight">
              ADDRESS
            </h3>
            <div className="space-y-2">
              {/* Figma 명세: 12px Regular, -0.24px spacing */}
              <p className="text-xs font-normal text-gray-400 leading-relaxed tracking-tight">
                {footer.company.address_kr.split(' ').slice(0, 3).join(' ')} <br />
                {footer.company.address_kr.split(' ').slice(3).join(' ')}
              </p>
              <p className="text-xs font-normal text-gray-400 leading-relaxed tracking-tight">
                {footer.company.address_us.split(',')[0]} <br />
                {footer.company.address_us.split(',').slice(1).join(',')}
              </p>
            </div>
          </div>
          {/* CONTACT Section - Figma 명세: 14px Semibold, -0.42px spacing */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-tight">
              CONTACT
            </h3>
            <div className="space-y-3">
              {/* Figma 명세: 12px Regular, -0.24px spacing */}
              <a
                href={`mailto:${footer.company.email}`}
                className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
              >
                {footer.company.email}
              </a>
              {/* <a
                href="#"
                className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
              >
                COMPANY INTRODUCTION
              </a>
              <a
                href="#"
                className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
              >
                Download
              </a> */}
            </div>
            {/* FOLLOW US Section - Figma 명세: 14px Semibold, -0.42px spacing */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                FOLLOW US
              </h3>
              <div className="space-y-2">
                {/* Figma 명세: 12px Regular, -0.24px spacing */}
                <a
                  href="#"
                  className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
                >
                  {footer.links.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* FOLLOW US Section - Figma 명세: 14px Semibold, -0.42px spacing */}
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Figma 명세: 12px Regular, -0.24px spacing */}
              {footer.menu.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* INFO Section - Figma 명세: 14px Semibold, -0.42px spacing */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-tight">
              INFO
            </h3>
            <div className="space-y-2">
              {/* Figma 명세: 12px Regular, -0.24px spacing */}
              <p className="text-xs font-normal text-gray-400 leading-relaxed tracking-tight">
                {footer.company.registration}
              </p>
              <p className="text-xs font-normal text-gray-400 leading-relaxed tracking-tight">
                {footer.company.ceo}
              </p>
            </div>
            <h3 className="text-sm font-semibold text-white tracking-tight">
              {footer.links.company_intro}
            </h3>
            <div className="bg-gray-900 rounded-[8px] px-4 py-2 flex justify-center">
              <a
                href="#"
                className="block text-xs font-normal text-gray-400 hover:text-white transition-colors leading-relaxed tracking-tight"
              >
                {footer.links.download}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
