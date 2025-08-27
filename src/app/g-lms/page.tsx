import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "G-LMS - 글로벌 학습 관리 시스템",
  description:
    "CHALK의 혁신적인 글로벌 학습 관리 시스템(G-LMS)을 통해 개인 맞춤형 학습을 경험하세요.",
};

export default function GLMSPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="min-h-screen bg-black text-white">
        {/* G-LMS Hero Section */}
        <section className="py-[22.5rem] px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              G-LMS
            </h1>
            <p className="text-xl text-white/80">
              글로벌 학습 관리 시스템
            </p>
          </div>
        </section>

        {/* 추가 섹션들은 여기에 구현 예정 */}
      </main>
      
      <Footer />
    </div>
  );
}