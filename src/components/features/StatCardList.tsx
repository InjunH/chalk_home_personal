import StatCard from "./StatCard";
import { Stat } from "@/types/feature";

interface StatCardListProps {
  stats: Stat[];
}

export default function StatCardList({ stats }: StatCardListProps) {
  return (
    <div className="w-full" style={{ minHeight: "542px" }}>
      <div
        className="flex"
        style={{
          flexDirection: "row",
          gap: "28px",
          justifyContent: "center", // 중앙 정렬
          flexWrap: "wrap", // 반응형 대응
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}