import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface PageLayoutProps {
  children: ReactNode;
  mainClassName?: string;
}

/**
 * 페이지 공통 레이아웃 컴포넌트
 * - 고정 헤더 (z-50)
 * - 메인 컨텐츠 영역
 * - 푸터
 */
export default function PageLayout({ 
  children, 
  mainClassName = "" 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className={mainClassName}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}