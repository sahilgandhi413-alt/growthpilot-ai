import { BrainCircuit, Download, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function ForecastHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Left */}
      <div>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-500/20 p-3">
            <BrainCircuit
              size={28}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              AI Sales Forecast
            </h1>

            <p className="mt-2 text-slate-400">
              Predict future sales, demand and inventory using machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-4">
        <button
          className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-cyan-500 hover:bg-slate-800"
        >
          <RefreshCw size={18} />
          Refresh
        </button>

        <button
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          <Download size={18} />
          Export Forecast
        </button>
      </div>
    </motion.section>
  );
}