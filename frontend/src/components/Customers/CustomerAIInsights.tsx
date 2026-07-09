import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const insights = [
  "VIP customers increased by 12% this month.",
  "34 customers show high churn probability.",
  "Premium members generate 61% of total revenue.",
  "Launch loyalty rewards campaign for inactive users.",
];

export default function CustomerAIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_25px_80px_rgba(0,0,0,.35)]"
    >
      {/* Glow */}

      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative p-8">

        {/* Header */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg">

              <Bot
                className="text-white"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                AI Customer Intelligence
              </h2>

              <p className="mt-1 text-slate-400">
                AI-generated insights from customer behavior and purchasing trends.
              </p>

            </div>

          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-center">

            <p className="text-xs uppercase tracking-wide text-emerald-400">
              AI Confidence
            </p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              95%
            </h3>

          </div>

        </div>

        {/* KPI Cards */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <TrendingUp
              className="mb-3 text-emerald-400"
              size={22}
            />

            <p className="text-sm text-slate-400">
              Customer Growth
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              +14.6%
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <Users
              className="mb-3 text-cyan-400"
              size={22}
            />

            <p className="text-sm text-slate-400">
              Churn Risk
            </p>

            <h3 className="mt-2 text-2xl font-bold text-amber-400">
              34 Users
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <HeartHandshake
              className="mb-3 text-indigo-400"
              size={22}
            />

            <p className="text-sm text-slate-400">
              Retention
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              87%
            </h3>

          </div>

        </div>

        {/* AI Recommendations */}

        <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

          <div className="flex items-center gap-3">

            <Sparkles
              className="text-cyan-400"
              size={20}
            />

            <h3 className="text-lg font-semibold text-white">
              AI Recommendations
            </h3>

          </div>

          <div className="mt-6 space-y-4">

            {insights.map((item) => (

              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >

                <CheckCircle2
                  className="text-emerald-400"
                  size={18}
                />

                <span className="text-slate-300">
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-3">

            <ShieldCheck
              className="text-emerald-400"
              size={22}
            />

            <div>

              <p className="text-sm text-slate-500">
                AI Engine Status
              </p>

              <p className="text-white">
                Updated 2 minutes ago • Live Customer Analysis
              </p>

            </div>

          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">

            View Full Report

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </motion.div>
  );
}