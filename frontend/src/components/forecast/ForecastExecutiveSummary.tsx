import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  ArrowUpRight,
  ShoppingBag,
  Megaphone,
  Package,
} from "lucide-react";

const insights = [
  {
    icon: ArrowUpRight,
    title: "Revenue Growth",
    value: "+18%",
    description: "Expected increase over the next month.",
    color: "text-emerald-400",
  },
  {
    icon: ShoppingBag,
    title: "Top Category",
    value: "Electronics",
    description: "Highest projected demand.",
    color: "text-indigo-400",
  },
  {
    icon: Package,
    title: "Inventory",
    value: "12 Days",
    description: "Current stock coverage.",
    color: "text-yellow-400",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    value: "+8%",
    description: "Recommended increase in ad spend.",
    color: "text-cyan-400",
  },
];

export default function ForecastExecutiveSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-indigo-950
      p-8
      shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
              <BrainCircuit
                className="text-indigo-400"
                size={28}
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                AI Executive Summary
              </h2>

              <p className="mt-1 text-slate-400">
                Business insights generated using GrowthPilot AI
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <Sparkles size={16} />
            AI Confidence • 96%
          </div>
        </div>

        {/* Summary */}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-lg leading-8 text-slate-300">
            GrowthPilot AI predicts that revenue will increase by{" "}
            <span className="font-semibold text-white">
              18%
            </span>{" "}
            over the next month. Demand remains strongest in the{" "}
            <span className="font-semibold text-indigo-300">
              Electronics
            </span>{" "}
            category, while current inventory is expected to support operations
            for approximately{" "}
            <span className="font-semibold text-yellow-300">
              12 days
            </span>
            . Increasing marketing investment by{" "}
            <span className="font-semibold text-cyan-300">
              8%
            </span>{" "}
            could further improve forecasted revenue and customer acquisition.
          </p>
        </div>

        {/* Insight Cards */}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800">
                    <Icon
                      size={20}
                      className={item.color}
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      {item.title}
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {item.value}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}