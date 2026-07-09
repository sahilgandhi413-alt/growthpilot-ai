import {
  Sparkles,
  TrendingUp,
  Megaphone,
  Package,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const recommendations = [
  {
    icon: Package,
    title: "Increase Inventory",
    description: "Restock Electronics inventory by 15% before demand peaks.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Megaphone,
    title: "Boost Marketing",
    description: "Increase Google Ads budget by 8% for higher conversions.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: TrendingUp,
    title: "Expected Growth",
    description: "Revenue is projected to grow by 18% over the next month.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function ForecastRecommendation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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

      <div className="relative">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">

              <Sparkles className="text-indigo-400" size={24} />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                AI Recommendations
              </h2>

              <p className="text-sm text-slate-400">
                Suggested actions from the AI model
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            3 Insights
          </span>

        </div>

        {/* Recommendation Cards */}

        <div className="mt-8 space-y-4">

          {recommendations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all hover:border-indigo-500/30 hover:bg-slate-900"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon className={item.color} size={22} />
                </div>

                <div className="flex-1">

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* Footer */}

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={20}
              className="text-emerald-400"
            />

            <p className="text-sm leading-6 text-slate-300">
              Following these recommendations could improve forecast accuracy
              and increase expected monthly revenue by approximately
              <span className="font-semibold text-white"> 18%</span>.
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}