import StatCard from "./StatCard";
import { Stat } from "@/types/feature";

interface StatCardListProps {
  stats: Stat[];
}

export default function StatCardList({ stats }: StatCardListProps) {
  return (
    <div className="w-full">
      {/* 모바일: 세로 배치 */}
      <div className="block md:hidden space-y-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* PC: 기존 스타일 그대로 유지 */}
      <div className="hidden md:block stat-cards-list">
        <div className="flex stat-cards-flex">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}