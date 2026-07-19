import { Search, Filter, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function MarketingToolbar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="relative flex-1">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search campaign..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none focus:border-pink-500"
        />
      </div>

      <div className="flex flex-wrap gap-3">

        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-5 py-3 text-slate-300 hover:border-pink-500">
          <Filter size={18} />
          Platform
        </button>

        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-5 py-3 text-slate-300 hover:border-pink-500">
          <Calendar size={18} />
          Date Range
        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-pink-600 px-5 py-3 text-white">
          <Download size={18} />
          Export
        </button>

      </div>
    </motion.section>
  );
}