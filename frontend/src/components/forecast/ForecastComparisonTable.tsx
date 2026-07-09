import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

const rows = [
  {
    metric: "Revenue",
    current: "₹2.76M",
    forecast: "₹3.12M",
    growth: "+18%",
  },
  {
    metric: "Orders",
    current: "1,504",
    forecast: "1,760",
    growth: "+17%",
  },
  {
    metric: "Customers",
    current: "865",
    forecast: "930",
    growth: "+8%",
  },
  {
    metric: "Profit",
    current: "₹610K",
    forecast: "₹725K",
    growth: "+19%",
  },
];

export default function ForecastComparisonTable() {
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

      <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Forecast Comparison
            </h2>

            <p className="mt-1 text-slate-400">
              Compare current business metrics with AI predictions
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
            <BarChart3
              size={26}
              className="text-indigo-400"
            />
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="pb-3 text-left text-sm font-medium text-slate-500">
                  Metric
                </th>

                <th className="pb-3 text-left text-sm font-medium text-slate-500">
                  Current
                </th>

                <th className="pb-3 text-left text-sm font-medium text-slate-500">
                  AI Forecast
                </th>

                <th className="pb-3 text-right text-sm font-medium text-slate-500">
                  Growth
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <motion.tr
                  key={row.metric}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.01 }}
                  className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  transition-all
                  hover:bg-slate-800/70
                  "
                >
                  <td className="rounded-l-2xl px-5 py-5">
                    <div className="font-semibold text-white">
                      {row.metric}
                    </div>
                  </td>

                  <td className="px-5 text-slate-300 font-medium">
                    {row.current}
                  </td>

                  <td className="px-5 font-semibold text-white">
                    {row.forecast}
                  </td>

                  <td className="rounded-r-2xl px-5 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-400">
                      <ArrowUpRight size={15} />
                      {row.growth}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4">
          <div>
            <p className="text-sm text-slate-500">
              Average Forecast Growth
            </p>

            <h3 className="mt-1 text-2xl font-bold text-emerald-400">
              +15.5%
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-indigo-300">
            <TrendingUp size={18} />
            AI Trend Positive
          </div>
        </div>
      </div>
    </motion.div>
  );
}