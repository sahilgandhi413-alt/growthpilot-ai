import {
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Package,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    value: "+18.4%",
    color: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Forecast Confidence",
    value: "92%",
    color: "text-cyan-400",
  },
  {
    icon: Package,
    title: "Top Product",
    value: "MacBook Pro",
    color: "text-indigo-400",
  },
  {
    icon: AlertTriangle,
    title: "Risk Level",
    value: "Low",
    color: "text-amber-400",
  },
];

export default function ForecastAIInsights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-500/20 p-3">
          <BrainCircuit
            size={28}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Forecast Insights
          </h2>

          <p className="text-slate-400">
            Machine learning powered business recommendations
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Icon
                  size={22}
                  className={item.color}
                />
              </div>

              <p className="text-sm text-slate-400">
                {item.title}
              </p>

              <h3
                className={`mt-2 text-2xl font-bold ${item.color}`}
              >
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
        <h3 className="mb-3 text-lg font-semibold text-cyan-300">
          AI Recommendation
        </h3>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Increase MacBook Pro inventory by 18% before next month.</li>
          <li>✅ Launch a promotional campaign for AirPods Pro to maximize cross-selling.</li>
          <li>✅ Reduce overstock of accessories with low demand.</li>
          <li>✅ Maintain current pricing strategy to sustain projected revenue growth.</li>
        </ul>
      </div>
    </motion.section>
  );
}