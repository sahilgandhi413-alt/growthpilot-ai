import { motion } from "framer-motion";
import {
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const risks = [
  {
    title: "Demand Risk",
    status: "Low",
    score: 18,
    color: "bg-emerald-500",
    text: "text-emerald-400",
    icon: CheckCircle2,
  },
  {
    title: "Inventory Risk",
    status: "Medium",
    score: 46,
    color: "bg-yellow-500",
    text: "text-yellow-400",
    icon: AlertTriangle,
  },
  {
    title: "Seasonal Risk",
    status: "Low",
    score: 22,
    color: "bg-emerald-500",
    text: "text-emerald-400",
    icon: TrendingUp,
  },
  {
    title: "Marketing Risk",
    status: "High",
    score: 82,
    color: "bg-red-500",
    text: "text-red-400",
    icon: TrendingDown,
  },
];

export default function ForecastRisk() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
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
      {/* Glow */}

      <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
              <ShieldAlert
                className="text-red-400"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Risk Analysis
              </h2>

              <p className="text-sm text-slate-400">
                AI-powered business risk assessment
              </p>
            </div>
          </div>

          <div className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
            Moderate Risk
          </div>
        </div>

        {/* Risk Cards */}

        <div className="space-y-5">
          {risks.map((risk) => {
            const Icon = risk.icon;

            return (
              <motion.div
                key={risk.title}
                whileHover={{ y: -2 }}
                className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-4
                transition-all
                hover:border-indigo-500/30
                "
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={risk.text}
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {risk.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        Risk Score: {risk.score}/100
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${risk.text} bg-white/5`}
                  >
                    {risk.status}
                  </span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${risk.score}%` }}
                    transition={{ duration: 1.2 }}
                    className={`h-full ${risk.color}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overall Score */}

        <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Overall Risk Score
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                42<span className="text-lg text-slate-400">/100</span>
              </h3>
            </div>

            <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400 font-semibold">
              Stable
            </div>
          </div>

          <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "42%" }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            AI predicts overall operational risk remains
            <span className="font-semibold text-white">
              {" "}within acceptable limits
            </span>
            . Marketing performance should be monitored closely as it contributes most to forecast uncertainty.
          </p>
        </div>
      </div>
    </motion.div>
  );
}