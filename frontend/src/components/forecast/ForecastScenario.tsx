import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  TrendingUp,
} from "lucide-react";

const scenarios = [
  {
    title: "Best Case",
    value: "₹3.45M",
    probability: "22%",
    progress: 22,
    icon: ArrowUpRight,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    title: "Expected",
    value: "₹3.12M",
    probability: "64%",
    progress: 64,
    icon: Minus,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Worst Case",
    value: "₹2.84M",
    probability: "14%",
    progress: 14,
    icon: ArrowDownRight,
    color: "text-red-400",
    bg: "bg-red-500/10",
    gradient: "from-red-500 to-orange-500",
  },
];

export default function ForecastScenario() {
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
      p-6
      shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Prediction Scenarios
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              AI-generated revenue outcomes
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
            <TrendingUp
              className="text-indigo-400"
              size={24}
            />
          </div>
        </div>

        {/* Scenario Cards */}

        <div className="space-y-5">
          {scenarios.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-5
                transition-all
                hover:border-indigo-500/30
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-white">
                      {item.value}
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                  >
                    <Icon
                      className={item.color}
                      size={22}
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Probability
                  </span>

                  <span className={`font-semibold ${item.color}`}>
                    {item.probability}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${item.progress}%`,
                    }}
                    transition={{
                      duration: 1.3,
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Insight */}

        <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-5">
          <p className="text-sm leading-7 text-slate-300">
            The
            <span className="font-semibold text-white">
              {" "}Expected Scenario
            </span>
            {" "}has the highest probability based on historical sales,
            seasonal demand, marketing performance, and customer retention
            patterns. The model estimates a
            <span className="font-semibold text-emerald-400">
              {" "}64% likelihood
            </span>
            {" "}of achieving this outcome.
          </p>
        </div>
      </div>
    </motion.div>
  );
}