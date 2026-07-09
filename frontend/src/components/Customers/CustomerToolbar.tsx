import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  RefreshCw,
  Calendar,
  Users,
} from "lucide-react";

export default function CustomerToolbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Search */}

        <div className="relative flex-1 max-w-xl">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search customers, email, phone..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-500"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white">

            <Users size={18} />

            Segment

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white">

            <Filter size={18} />

            Status

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white">

            <MapPin size={18} />

            Location

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white">

            <Calendar size={18} />

            This Month

          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-3 font-medium text-white transition hover:scale-105">

            <RefreshCw size={18} />

            Refresh

          </button>

        </div>

      </div>
    </motion.div>
  );
}