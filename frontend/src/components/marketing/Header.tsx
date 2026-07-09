import { motion } from "framer-motion";
import {
  Megaphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function MarketingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-start gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-xl">

            <Megaphone
              size={38}
              className="text-white"
            />

          </div>

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-4xl font-bold tracking-tight text-white">
                Marketing Hub
              </h1>

              <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                AI Powered
              </span>

            </div>

            <p className="mt-3 max-w-2xl text-slate-400 leading-7">
              Optimize campaigns, monitor ad performance,
              analyze customer engagement, and let AI
              recommend the best marketing strategy to
              maximize your ROI.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 backdrop-blur">

            <div className="flex items-center gap-2 text-violet-400">

              <TrendingUp size={18} />

              <span className="text-sm font-semibold">
                Campaign ROI
              </span>

            </div>

            <h2 className="mt-3 text-3xl font-bold text-white">
              328%
            </h2>

            <p className="mt-1 text-sm text-emerald-400">
              ↑ 18% this month
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 backdrop-blur">

            <div className="flex items-center gap-2 text-cyan-400">

              <Sparkles size={18} />

              <span className="text-sm font-semibold">
                AI Score
              </span>

            </div>

            <h2 className="mt-3 text-3xl font-bold text-white">
              96%
            </h2>

            <p className="mt-1 text-sm text-cyan-400">
              Excellent Performance
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}