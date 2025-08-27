import StatCard from "./StatCard";
import { Stat } from "@/types/feature";

interface StatCardListProps {
  stats: Stat[];
}

export default function StatCardList({ stats }: StatCardListProps) {
  return (
    <div className="w-full stat-cards-list">
      <div className="flex stat-cards-flex">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}