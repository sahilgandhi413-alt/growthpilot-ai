import type { LucideIcon } from "lucide-react";
import {
  IndianRupee,
  TrendingUp,
  MousePointerClick,
  Target,
  ArrowUpRight,
  ArrowDownRight,
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
    title: "Ad Spend",
    value: "₹8.4L",
    icon: IndianRupee,
    color: "bg-violet-600",
    change: "+14.2%",
    progress: 84,
  },
  {
    title: "ROI",
    value: "328%",
    icon: TrendingUp,
    color: "bg-emerald-600",
    change: "+21.4%",
    progress: 92,
  },
  {
    title: "Conversions",
    value: "12,846",
    icon: Target,
    color: "bg-cyan-600",
    change: "+9.8%",
    progress: 76,
  },
  {
    title: "CTR",
    value: "6.42%",
    icon: MousePointerClick,
    color: "bg-orange-500",
    change: "-1.4%",
    progress: 61,
  },
];

export default function MarketingStats() {
  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const positive = !card.change.startsWith("-");

        return (
          <motion.div
            key={card.title}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
          >
            {/* Glow */}

            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-500/10 blur-[90px] transition-all duration-500 group-hover:bg-violet-500/20" />

            {/* Header */}

            <div className="relative flex items-start justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-[38px] font-bold tracking-tight text-white">
                  {card.value}
                </h2>

              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color} shadow-xl`}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

            </div>

            {/* Trend */}

            <div className="relative mt-7 flex items-center justify-between">

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
                className="text-violet-400"
              />

            </div>

            {/* Progress */}

            <div className="relative mt-7">

              <div className="mb-2 flex justify-between text-xs text-slate-500">

                <span>Campaign Health</span>

                <span>{card.progress}%</span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${card.progress}%`,
                  }}
                  transition={{
                    duration: 1.3,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                />

              </div>

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}