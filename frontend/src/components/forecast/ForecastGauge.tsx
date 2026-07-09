import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Props {
  value: number;
}

export default function ForecastGauge({ value }: Props) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

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
      {/* Background Glow */}

      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <BrainCircuit
                className="text-indigo-400"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                AI Confidence
              </h2>

              <p className="text-sm text-slate-400">
                Prediction reliability
              </p>
            </div>
          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Healthy
          </div>
        </div>

        {/* Gauge */}

        <div className="relative flex justify-center">
          <svg width="220" height="220">
            <defs>
              <linearGradient
                id="confidenceGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#6366F1"
                />

                <stop
                  offset="50%"
                  stopColor="#8B5CF6"
                />

                <stop
                  offset="100%"
                  stopColor="#06B6D4"
                />
              </linearGradient>
            </defs>

            {/* Background */}

            <circle
              cx="110"
              cy="110"
              r={radius}
              stroke="#1E293B"
              strokeWidth="14"
              fill="none"
            />

            {/* Progress */}

            <motion.circle
              cx="110"
              cy="110"
              r={radius}
              stroke="url(#confidenceGradient)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset: offset,
              }}
              transition={{
                duration: 2,
              }}
              transform="rotate(-90 110 110)"
            />

            {/* Center Text */}

            <text
              x="110"
              y="105"
              textAnchor="middle"
              className="fill-white text-4xl font-bold"
            >
              {value}%
            </text>

            <text
              x="110"
              y="130"
              textAnchor="middle"
              className="fill-slate-400 text-sm"
            >
              Confidence
            </text>
          </svg>
        </div>

        {/* AI Insight */}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex items-start gap-3">
            <Sparkles
              className="text-indigo-400 mt-1"
              size={18}
            />

            <div>
              <h3 className="font-semibold text-white">
                AI Interpretation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                The prediction model is highly reliable based on
                historical sales, marketing trends, customer
                behaviour, and seasonal demand. Forecast variance
                is expected to remain below 5%.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4">
          <div>
            <p className="text-sm text-slate-500">
              Forecast Status
            </p>

            <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold text-emerald-400">
              <CheckCircle2 size={18} />
              Excellent
            </h3>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Model Version
            </p>

            <h3 className="mt-1 font-semibold text-white">
              GP-AI v2.4
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}