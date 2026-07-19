import {
  TrendingUp,
  ShoppingCart,
  Target,
  AlertTriangle,
} from "lucide-react";

import KPICard from "../common/KPICard";

const stats = [
  {
    title: "Projected Revenue",
    value: "₹18.4L",
    change: "+18.6%",
    color: "bg-cyan-600",
    icon: <TrendingUp size={30} className="text-white" />,
  },
  {
    title: "Predicted Orders",
    value: "1,245",
    change: "+11.2%",
    color: "bg-indigo-600",
    icon: <ShoppingCart size={30} className="text-white" />,
  },
  {
    title: "Forecast Accuracy",
    value: "92%",
    change: "+2.3%",
    color: "bg-emerald-600",
    icon: <Target size={30} className="text-white" />,
  },
  {
    title: "Restock Alerts",
    value: "14",
    change: "-3.1%",
    color: "bg-amber-500",
    icon: <AlertTriangle size={30} className="text-white" />,
  },
];

export default function ForecastStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <KPICard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </section>
  );
}