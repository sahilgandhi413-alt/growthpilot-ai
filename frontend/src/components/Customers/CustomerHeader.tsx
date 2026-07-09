import { Users, Download, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Left */}

      <div className="flex items-start gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20">

          <Users className="text-white" size={30} />

        </div>

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-4xl font-bold tracking-tight text-white">
              Customer Intelligence
            </h1>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              ● LIVE
            </span>

          </div>

          <p className="mt-3 max-w-2xl text-slate-400 leading-7">
            AI-powered customer analytics, retention insights,
            lifetime value tracking and relationship management.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-4">

        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:text-white">

          <Download size={18} />

          Export

        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03]">

          <UserPlus size={18} />

          Add Customer

        </button>

      </div>
    </motion.div>
  );
}