import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  Filter,
  Download,
  Plus,
} from "lucide-react";

export default function MarketingToolbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-5 shadow-xl"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-1 flex-col gap-4 lg:flex-row">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              size={18}
            />

            <input
              type="text"
              placeholder="Search campaigns..."
              className="h-12 w-full rounded-2xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500"
            />

          </div>

          {/* Date */}

          <button className="flex h-12 items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-5 text-slate-300 transition hover:border-violet-500">

            <CalendarDays size={18} />

            Last 30 Days

          </button>

          {/* Filter */}

          <button className="flex h-12 items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-5 text-slate-300 transition hover:border-cyan-500">

            <Filter size={18} />

            All Platforms

          </button>

        </div>

        {/* Right */}

        <div className="flex gap-3">

          <button className="flex h-12 items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-5 text-slate-300 transition hover:border-cyan-500">

            <Download size={18} />

            Export

          </button>

          <button className="flex h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 font-semibold text-white shadow-lg transition hover:scale-105">

            <Plus size={18} />

            Create Campaign

          </button>

        </div>

      </div>
    </motion.div>
  );
}