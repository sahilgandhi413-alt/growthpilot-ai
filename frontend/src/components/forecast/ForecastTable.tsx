import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const forecasts = [
  {
    product: "MacBook Pro M4",
    current: 325,
    predicted: 385,
    confidence: "96%",
    trend: "Up",
    action: "Restock",
  },
  {
    product: "iPhone 16 Pro",
    current: 460,
    predicted: 510,
    confidence: "94%",
    trend: "Up",
    action: "Increase Stock",
  },
  {
    product: "AirPods Pro",
    current: 280,
    predicted: 310,
    confidence: "91%",
    trend: "Up",
    action: "Monitor",
  },
  {
    product: "Magic Mouse",
    current: 145,
    predicted: 120,
    confidence: "88%",
    trend: "Down",
    action: "Reduce Stock",
  },
  {
    product: "iPad Air",
    current: 215,
    predicted: 255,
    confidence: "93%",
    trend: "Up",
    action: "Restock",
  },
];

export default function ForecastTable() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden"
    >
      <div className="border-b border-slate-800 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">
          Product Forecast
        </h2>

        <p className="mt-1 text-slate-400">
          AI sales prediction for the upcoming month
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-slate-400">
                Product
              </th>

              <th className="px-6 py-4 text-center text-sm text-slate-400">
                Current Sales
              </th>

              <th className="px-6 py-4 text-center text-sm text-slate-400">
                Predicted Sales
              </th>

              <th className="px-6 py-4 text-center text-sm text-slate-400">
                Confidence
              </th>

              <th className="px-6 py-4 text-center text-sm text-slate-400">
                Trend
              </th>

              <th className="px-6 py-4 text-center text-sm text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {forecasts.map((item) => (

              <tr
                key={item.product}
                className="border-t border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="px-6 py-5 font-semibold text-white">
                  {item.product}
                </td>

                <td className="text-center text-slate-300">
                  {item.current}
                </td>

                <td className="text-center font-semibold text-cyan-400">
                  {item.predicted}
                </td>

                <td className="text-center">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300">
                    {item.confidence}
                  </span>
                </td>

                <td className="text-center">
                  {item.trend === "Up" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-400">
                      <ArrowUpRight size={16} />
                      Up
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-3 py-1 text-red-400">
                      <ArrowDownRight size={16} />
                      Down
                    </span>
                  )}
                </td>

                <td className="text-center">
                  <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
                    {item.action}
                  </button>
                </td>
              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </motion.section>
  );
}