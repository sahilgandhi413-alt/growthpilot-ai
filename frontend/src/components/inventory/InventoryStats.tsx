import {
  Boxes,
  AlertTriangle,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import KPICard from "../common/KPICard";

const stats = [
  {
    title: "Total Products",
    value: "2,846",
    change: "+8.2%",
    color: "bg-cyan-600",
    icon: <Boxes size={30} className="text-white" />,
  },
  {
    title: "Low Stock",
    value: "18",
    change: "-3.4%",
    color: "bg-red-600",
    icon: <AlertTriangle size={30} className="text-white" />,
  },
  {
    title: "Inventory Value",
    value: "₹4.82 Cr",
    change: "+11.6%",
    color: "bg-indigo-600",
    icon: <IndianRupee size={30} className="text-white" />,
  },
  {
    title: "Stock Accuracy",
    value: "98%",
    change: "+1.5%",
    color: "bg-emerald-600",
    icon: <ShieldCheck size={30} className="text-white" />,
  },
];

export default function InventoryStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <KPICard
          key={item.title}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  );
}