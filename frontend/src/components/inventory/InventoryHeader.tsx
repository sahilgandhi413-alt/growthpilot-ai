import { Boxes, Download, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function InventoryHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-indigo-500/20 p-3">
          <Boxes
            size={30}
            className="text-indigo-400"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white">
            Inventory Management
          </h1>

          <p className="mt-2 text-slate-400">
            Track inventory levels, stock movements and AI-powered replenishment
            recommendations.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-cyan-500 hover:bg-slate-800">
          <RefreshCw size={18} />
          Refresh
        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
          <Download size={18} />
          Export Inventory
        </button>
      </div>
    </motion.section>
  );
}