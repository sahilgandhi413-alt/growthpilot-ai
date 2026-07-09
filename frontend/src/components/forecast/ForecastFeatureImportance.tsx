import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const data = [
  {
    name: "Sales History",
    value: 42,
  },
  {
    name: "Marketing Spend",
    value: 27,
  },
  {
    name: "Seasonality",
    value: 15,
  },
  {
    name: "Inventory",
    value: 10,
  },
  {
    name: "Customer Growth",
    value: 6,
  },
];

function getBadge(value: number) {
  if (value >= 30)
    return {
      label: "High",
      color:
        "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    };

  if (value >= 15)
    return {
      label: "Medium",
      color:
        "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    };

  return {
    label: "Low",
    color:
      "bg-slate-700/40 border-slate-600 text-slate-300",
  };
}

export default function ForecastFeatureImportance() {
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
      {/* Glow */}

      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
              <BrainCircuit
                className="text-indigo-400"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                AI Feature Importance
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Key factors influencing forecast predictions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={15} />
            ML Analysis
          </div>
        </div>

        {/* Features */}

        <div className="space-y-5">
          {data.map((item, index) => {
            const badge = getBadge(item.value);

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/50
                p-5
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Contribution to AI prediction
                    </p>
                  </div>

                  <div className="text-right">
                    <h3 className="text-xl font-bold text-white">
                      {item.value}%
                    </h3>

                    <span
                      className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${item.value}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-indigo-500
                    via-violet-500
                    to-cyan-400
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex items-center gap-3">
            <TrendingUp
              className="text-emerald-400"
              size={20}
            />

            <div>
              <h3 className="font-semibold text-white">
                Model Insight
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Historical sales data contributes the most to forecast
                accuracy, followed by marketing spend and seasonal demand
                patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}