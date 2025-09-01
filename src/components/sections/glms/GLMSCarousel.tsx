// "use client";

// import { useState, useEffect } from "react";
// import OptimizedImage from "@/components/ui/OptimizedImage";

// const SLIDE_IMAGES = [
//   "/images/g-lms/pad_image_1.png", // 첫 번째 슬라이드 이미지
//   "/images/g-lms/pad_image_2.png", // 두 번째 슬라이드 이미지
//   "/images/g-lms/pad_image_3.png", // 세 번째 슬라이드 이미지
//   "/images/g-lms/pad_image_4.png", // 네 번째 슬라이드 이미지
// ];

// export default function GLMSCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = SLIDE_IMAGES.length;

//   // 자동 슬라이드 기능 (5초마다 자동 전환)
//   useEffect(() => {
//     const autoSlideInterval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);

//     return () => clearInterval(autoSlideInterval);
//   }, [totalSlides]);

//   return (
//     <div className="relative w-full flex flex-col items-center">
//       <div className="relative z-10">
//         {/* 캐러셀 컨테이너 - 완성된 pad.png 이미지 사용 */}
//         <div className="relative w-full max-w-md mx-auto">
//           <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
//             <OptimizedImage
//               src="/images/g-lms/pad.png"
//               alt="Unlock Your Potential IN CHALK WORLD"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* 캐러셀 인디케이터 (Figma Node: 5202:1882) */}
//       <div
//         className="flex items-center justify-center mt-8"
//         style={{ gap: "4px" }}
//       >
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`rounded-full transition-all duration-200 ${
//               index === currentSlide ? "bg-white" : "bg-white/40"
//             }`}
//             style={{
//               width: index === currentSlide ? "30px" : "8px",
//               height: "8px",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function GLMSCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 인디케이터 3개 기준

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative z-10">
        {/* 캐러셀 컨테이너 - 완성된 pad.png 이미지 사용 */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <OptimizedImage
            src="/images/g-lms/pad.png"
            alt="Unlock Your Potential IN CHALK WORLD"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 캐러셀 인디케이터 (Figma Node: 5202:1882) */}
      <div
        className="flex items-center justify-center mt-8"
        style={{ gap: "4px" }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            style={{
              width: index === currentSlide ? "30px" : "8px",
              height: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
