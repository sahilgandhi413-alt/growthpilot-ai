import type { LucideIcon } from "lucide-react";
import {
  Users,
  Crown,
  HeartHandshake,
  IndianRupee,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  change: string;
  progress: number;
}

const cards: Card[] = [
  {
    title: "Total Customers",
    value: "2,846",
    icon: Users,
    color: "bg-cyan-600",
    change: "+12.4%",
    progress: 88,
  },
  {
    title: "VIP Customers",
    value: "426",
    icon: Crown,
    color: "bg-amber-500",
    change: "+8.2%",
    progress: 74,
  },
  {
    title: "Retention Rate",
    value: "87%",
    icon: HeartHandshake,
    color: "bg-emerald-600",
    change: "+5.6%",
    progress: 87,
  },
  {
    title: "Lifetime Value",
    value: "₹1,48,00,000",
    icon: IndianRupee,
    color: "bg-indigo-600",
    change: "+18.1%",
    progress: 93,
  },
];

export default function CustomerStats() {
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
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon
                  className="text-white"
                  size={30}
                />
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
                className="text-cyan-400"
              />
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                <span>Performance</span>
                <span>{card.progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${card.progress}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}