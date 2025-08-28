"use client";

import { siteContent } from "@/lib/content";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { navigation } = siteContent;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-full py-4">
            {/* Logo - 좌측 */}
            <div className="text-white font-semibold header-logo">
              <Link href="/" className="hover:text-white/80 transition-colors">
                CHALK
              </Link>
            </div>

            {/* Desktop Navigation - 중앙 */}
            <nav className="hidden md:flex items-center header-items-gap">
              {navigation.right_menu.map((item) => {
                const href = item === "CHALK AI" ? "/chalk-ai" : "/g-lms";
                return (
                  <Link
                    key={item}
                    href={href}
                    className="text-white/80 hover:text-white font-medium transition-colors header-menu-item"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section - 우측 */}
            <div className="flex items-center gap-4">
              {/* Language - Desktop & Tablet */}
              <div className="hidden sm:flex items-center justify-center header-lang">
                <span className="header-lang-text">{navigation.language}</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white p-2 relative z-50"
                aria-label="메뉴 열기"
                aria-expanded={isMobileMenuOpen}
              >
                <div
                  className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300`}
                >
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-0"
                        : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Fullscreen Background */}
        <div className="absolute inset-0 bg-black">
          <div className="container h-full flex flex-col justify-center items-start px-8">
            {/* Mobile Navigation - 좌측 정렬 */}
            <nav className="flex flex-col space-y-6 mb-16">
              <h1
                className={`text-white text-4xl font-bold transition-all duration-700 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? "200ms" : "0ms",
                }}
              >
                HOME
              </h1>

              {navigation.right_menu.map((item, index) => {
                const href = item === "CHALK AI" ? "/chalk-ai" : "/g-lms";
                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={toggleMobileMenu}
                    className={`text-white/70 text-4xl font-bold hover:text-white transition-all duration-700 ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${(index + 2) * 100}ms`
                        : "0ms",
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Language Selection - 하단 좌측 */}
            <div
              className={`absolute bottom-8 left-8 flex items-center space-x-4 transition-all duration-700 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? "500ms" : "0ms",
              }}
            >
              <button className="text-white text-lg font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                KR
              </button>
              <button className="text-white/50 text-lg font-medium hover:text-white transition-colors">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Spacer - 고정 헤더로 인한 콘텐츠 밀림 방지 */}
      <div className="h-20 md:h-24" />
    </>
  );
}
