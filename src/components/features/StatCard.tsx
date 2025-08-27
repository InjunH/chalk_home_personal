import OptimizedImage from "../ui/OptimizedImage";
import { Stat } from "@/types/feature";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div
      className="group relative transition-all duration-300 flex-1 min-w-[280px] max-w-[605px]"
      style={{
        height: "542px",
        backgroundColor: "rgba(255, 255, 255, 0.04)", // Figma: 4% 투명도
        borderRadius: "32px", // Figma: 32px
        padding: "46px", // 적절한 내부 패딩
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* 통계 숫자 영역 */}
      <div>
        <div className="flex items-baseline">
          <span
            className="text-white font-bold"
            style={{
              fontFamily: "Pretendard",
              fontWeight: 900,
              fontSize: "clamp(6rem, 6vw, 10rem)",
              letterSpacing: "-0.05em",
              lineHeight: "0.9",
            }}
          >
            {stat.value}
          </span>
          <span
            className="text-white/60 ml-2"
            style={{
              fontFamily: "Pretendard",
              fontWeight: 900,
              fontSize: "clamp(2rem, 3vw, 4rem)",
              letterSpacing: "-0.05em",
              lineHeight: "0.9",
            }}
          >
            {stat.unit}
          </span>
        </div>
      </div>

      {/* 하단 영역: 아이콘 + 라벨 */}
      <div className="flex flex-col items-start justify-start">
        {/* 아이콘 */}
        <div className="mb-4">
          <OptimizedImage
            src={stat.icon}
            alt={stat.label}
            className="w-[clamp(54px,8vw,108px)] h-[clamp(54px,8vw,108px)] opacity-70" // Figma: 108x108
          />
        </div>

        {/* 라벨 */}
        <div className="flex flex-col items-start">
          <p
            className="text-white"
            style={{
              fontFamily: "Pretendard",
              fontSize: "clamp(18px, 3vw, 32px)", // Figma에서 본 것처럼 큰 사이즈
              fontWeight: 700,
              letterSpacing: "-0.32px",
              marginBottom: "8px",
            }}
          >
            {stat.label}
          </p>
          <div className="h-[13px]">
            {stat.sub_label && (
              <p
                className="text-white/40"
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "-0.39px",
                }}
              >
                {stat.sub_label}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}