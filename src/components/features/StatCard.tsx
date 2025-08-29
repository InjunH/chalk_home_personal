import OptimizedImage from "../ui/OptimizedImage";
import { Stat } from "@/types/feature";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <>
      {/* 모바일: 작은 크기 및 중앙 정렬 */}
      <div className="block md:hidden bg-white/5 rounded-lg p-4 text-center">
        {/* 통계 숫자 영역 */}
        <div className="mb-3">
          <div className="flex items-baseline justify-start">
            <span className="text-white font-bold text-[3.875rem]">
              {stat.value}
            </span>
            <span className="text-white/60 ml-1 text-sm">{stat.unit}</span>
          </div>
        </div>

        {/* 아이콘 */}
        <div className="mt-12">
          <OptimizedImage
            src={stat.icon}
            alt={stat.label}
            className="w-12 h-12 opacity-70"
          />
        </div>

        {/* 라벨 */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-white text-lg font-bold">{stat.label}</p>
          {stat.sub_label && (
            <p className="text-white/40 text-xs mt-1">{stat.sub_label}</p>
          )}
        </div>
      </div>

      {/* PC: 기존 스타일 그대로 유지 */}
      <div className="hidden md:flex justify-between group relative transition-all duration-300 flex-1 min-w-[280px] max-w-[605px] stat-card-container flex flex-col justify-between">
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
            <p className="text-white stat-card-label-main">{stat.label}</p>
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
    </>
  );
}
