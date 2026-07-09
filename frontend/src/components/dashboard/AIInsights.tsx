import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  TrendingUp,
  Package,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const recommendations = [
  "Increase Electronics inventory by 20%",
  "Launch promotional campaign for Home Appliances",
  "Restock Nike Shoes before weekend demand",
  "Reduce Furniture inventory by 8%",
];

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_25px_80px_rgba(0,0,0,.35)]"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative p-8">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg">

              <Bot className="text-white" size={28} />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                AI Business Intelligence
              </h2>

              <p className="mt-1 text-slate-400">
                Executive insights generated from your live business data
              </p>

            </div>

          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-center">

            <p className="text-xs uppercase tracking-wide text-emerald-400">
              Confidence
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              96%
            </h3>

          </div>

        </div>

        {/* KPI Row */}

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <TrendingUp className="mb-3 text-emerald-400" />

            <p className="text-sm text-slate-400">
              Revenue Trend
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              +18%
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <ShoppingCart className="mb-3 text-indigo-400" />

            <p className="text-sm text-slate-400">
              Demand
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              High
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <Package className="mb-3 text-amber-400" />

            <p className="text-sm text-slate-400">
              Inventory
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Stable
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <ShieldCheck className="mb-3 text-emerald-400" />

            <p className="text-sm text-slate-400">
              Risk
            </p>

            <h3 className="mt-2 text-xl font-bold text-emerald-400">
              Low
            </h3>

          </div>

        </div>

        {/* Recommendations */}

        <div className="mt-8 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-6">

          <div className="flex items-center gap-3">

            <Sparkles
              size={20}
              className="text-indigo-400"
            />

            <h3 className="text-lg font-semibold text-white">
              AI Recommendations
            </h3>

          </div>

          <div className="mt-6 space-y-4">

            {recommendations.map((item) => (

              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >

                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

                <span className="text-slate-300">
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

          <div>

            <p className="text-sm text-slate-500">
              AI Engine Status
            </p>

            <p className="mt-1 text-white">
              Last updated 2 minutes ago
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700">

            View Detailed Analysis

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </motion.div>
  );
}