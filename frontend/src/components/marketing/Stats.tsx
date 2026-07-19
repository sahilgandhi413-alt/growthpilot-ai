import {
  Megaphone,
  Target,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

import KPICard from "../common/KPICard";

const stats = [
  {
    title: "Campaigns",
    value: "18",
    change: "+3",
    color: "bg-pink-600",
    icon: <Megaphone size={30} className="text-white" />,
  },
  {
    title: "Active Ads",
    value: "42",
    change: "+12%",
    color: "bg-indigo-600",
    icon: <Target size={30} className="text-white" />,
  },
  {
    title: "Marketing Spend",
    value: "₹12.8L",
    change: "+8%",
    color: "bg-cyan-600",
    icon: <IndianRupee size={30} className="text-white" />,
  },
  {
    title: "ROI",
    value: "318%",
    change: "+24%",
    color: "bg-emerald-600",
    icon: <TrendingUp size={30} className="text-white" />,
  },
];

export default function MarketingStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <KPICard
          key={item.title}
          title={item.title}
          value={item.value}
          change={item.change}
          color={item.color}
          icon={item.icon}
        />
      ))}
    </section>
  );
}