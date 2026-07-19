import { Megaphone, RefreshCw, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function MarketingHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-pink-500/20 p-3">
          <Megaphone className="text-pink-400" size={30} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white">
            Marketing Analytics
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor campaigns, optimize ROI and receive AI marketing insights.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-white hover:border-pink-500">
          <RefreshCw size={18} />
          Refresh
        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white hover:scale-105 transition">
          <Download size={18} />
          Export Report
        </button>
      </div>
    </motion.section>
  );
}