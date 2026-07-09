import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  AlertTriangle,
  PackageX,
  IndianRupee,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  change: string;
  progress: number;
}

const cards: Card[] = [
  {
    title: "Total Products",
    value: 1248,
    icon: Boxes,
    color: "bg-indigo-600",
    change: "+8.4%",
    progress: 82,
  },
  {
    title: "Low Stock",
    value: 38,
    icon: AlertTriangle,
    color: "bg-yellow-500",
    change: "-4.1%",
    progress: 35,
  },
  {
    title: "Out of Stock",
    value: 12,
    icon: PackageX,
    color: "bg-red-500",
    change: "-12%",
    progress: 15,
  },
  {
    title: "Inventory Value",
    value: 5420000,
    icon: IndianRupee,
    color: "bg-emerald-600",
    change: "+15.8%",
    progress: 88,
  },
];

export default function InventoryStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const positive = !card.change.startsWith("-");

        return (
          <motion.div
            key={card.title}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white">
                  {card.title === "Inventory Value"
                    ? `₹${card.value.toLocaleString()}`
                    : card.value.toLocaleString()}
                </h2>
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon size={30} className="text-white" />
              </div>
            </div>

            {/* Trend */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
                    positive
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {positive ? (
                    <ArrowUpRight size={15} />
                  ) : (
                    <ArrowDownRight size={15} />
                  )}

                  {card.change}
                </div>

                <span className="text-xs text-slate-500">
                  vs last month
                </span>
              </div>

              <TrendingUp
                size={18}
                className="text-indigo-400"
              />
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                <span>Inventory Health</span>
                <span>{card.progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${card.progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}