import OptimizedImage from "../ui/OptimizedImage";
import { Stat } from "@/types/feature";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="group relative transition-all duration-300 flex-1 min-w-[280px] max-w-[605px] stat-card-container flex flex-col justify-between">
      {/* 통계 숫자 영역 */}
      <div>
        <div className="flex items-baseline">
          <span className="text-white font-bold stat-card-value">
            {stat.value}
          </span>
          <span className="text-white/60 ml-2 stat-card-unit">
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
          <p className="text-white stat-card-label-main">
            {stat.label}
          </p>
          <div className="h-[13px]">
            {stat.sub_label && (
              <p className="text-white/40 stat-card-label-sub">
                {stat.sub_label}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}