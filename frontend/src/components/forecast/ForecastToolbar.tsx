import { useState } from "react";
import {
  Download,
  FileText,
  RefreshCw,
  CalendarRange,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const filters = [
  "7 Days",
  "30 Days",
  "90 Days",
  "1 Year",
];

export default function ForecastToolbar() {
  const [active, setActive] = useState("30 Days");

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
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
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        {/* Filters */}

        <div>
          <p className="mb-3 text-sm font-medium text-slate-400">
            Forecast Period
          </p>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(filter)}
                className={`
                flex items-center gap-2 rounded-2xl px-5 py-3
                transition-all duration-300
                ${
                  active === filter
                    ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white shadow-lg"
                    : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-indigo-500 hover:bg-slate-800"
                }
                `}
              >
                <CalendarRange size={18} />
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Side */}

        <div className="flex flex-col items-end gap-4">
          {/* AI Status */}

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            <Sparkles size={16} />
            AI Forecast Updated
          </div>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
              flex items-center gap-2
              rounded-2xl
              border border-slate-700
              bg-slate-900
              px-5 py-3
              text-slate-300
              transition
              hover:border-indigo-500
              hover:bg-slate-800
              "
            >
              <RefreshCw size={18} />
              Refresh
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
              flex items-center gap-2
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              px-5 py-3
              font-medium
              text-white
              shadow-lg
              "
            >
              <Download size={18} />
              Export CSV
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
              flex items-center gap-2
              rounded-2xl
              border border-violet-500/30
              bg-violet-500/10
              px-5 py-3
              font-medium
              text-violet-300
              transition
              hover:bg-violet-500/20
              "
            >
              <FileText size={18} />
              Export PDF
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}