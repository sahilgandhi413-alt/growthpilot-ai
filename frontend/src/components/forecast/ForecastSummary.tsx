import {
  TrendingUp,
  BadgeIndianRupee,
  Brain,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Current Revenue",
    value: "₹2.76M",
    icon: BadgeIndianRupee,
    gradient: "from-emerald-500 to-green-400",
    progress: 82,
    change: "+12.4%",
  },
  {
    title: "Forecast Revenue",
    value: "₹3.12M",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-violet-500",
    progress: 91,
    change: "+18%",
  },
  {
    title: "AI Confidence",
    value: "96%",
    icon: Brain,
    gradient: "from-cyan-500 to-blue-500",
    progress: 96,
    change: "+2%",
  },
  {
    title: "Expected Growth",
    value: "+18%",
    icon: Target,
    gradient: "from-orange-500 to-red-500",
    progress: 74,
    change: "+5%",
  },
];

export default function ForecastSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-slate-900
            p-6
            shadow-2xl"
          >
            {/* Glow */}
            <div
              className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-r ${card.gradient} opacity-15 blur-3xl`}
            />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-black text-white">
                  {card.value}
                </h2>

                <div className="mt-3 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    <ArrowUpRight size={13} />
                    {card.change}
                  </span>

                  <span className="text-xs text-slate-500">
                    vs previous forecast
                  </span>
                </div>
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient}`}
              >
                <Icon className="text-white" size={30} />
              </div>
            </div>

            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-500">
                  <Sparkles size={13} />
                  AI Confidence
                </span>

                <span className="text-slate-400">
                  {card.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${card.progress}%` }}
                  transition={{ duration: 1.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}