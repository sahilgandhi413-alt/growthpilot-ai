import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  TrendingUp,
  Target,
  DollarSign,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Campaign Performance",
    description:
      "Google Ads generated 42% more conversions this week than Meta Ads.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description:
      "Reduce Facebook Ads budget by 8% and allocate it to Google Search.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "Users aged 25–34 from Ahmedabad show the highest conversion rate.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function MarketingAIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Background Glow */}

      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl">

            <Bot
              size={34}
              className="text-white"
            />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-2xl font-bold text-white">
                AI Marketing Advisor
              </h2>

              <Sparkles
                className="text-yellow-400"
                size={18}
              />

            </div>

            <p className="mt-1 text-slate-400">
              Personalized recommendations powered by AI
            </p>

          </div>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2">

          <span className="font-semibold text-emerald-400">
            AI Score 96%
          </span>

        </div>

      </div>

      {/* Insight Cards */}

      <div className="relative mt-8 grid gap-5 lg:grid-cols-3">

        {insights.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-violet-500"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >

                <Icon
                  size={22}
                  className={item.color}
                />

              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

            </motion.div>

          );
        })}

      </div>

      {/* Recommendation */}

      <div className="relative mt-8 rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-600/10 via-slate-900 to-cyan-500/10 p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex gap-4">

            <div className="mt-1">

              <Lightbulb
                size={28}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Recommended Next Action
              </h3>

              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                Increase your Google Search campaign budget by
                <span className="font-semibold text-emerald-400">
                  {" "}15%
                </span>
                {" "}and launch a retargeting campaign for customers who
                visited your store in the last 30 days.

                AI predicts this can improve conversions by

                <span className="font-semibold text-cyan-400">
                  {" "}11–14%
                </span>

                over the next two weeks.
              </p>

            </div>

          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">

            Apply Recommendation

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="relative mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <CheckCircle2 className="text-emerald-400" />

          <h4 className="mt-4 text-3xl font-bold text-white">
            ₹4.2L
          </h4>

          <p className="mt-2 text-slate-400">
            Potential Extra Revenue
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <TrendingUp className="text-cyan-400" />

          <h4 className="mt-4 text-3xl font-bold text-white">
            +14%
          </h4>

          <p className="mt-2 text-slate-400">
            Expected ROI Increase
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <Target className="text-violet-400" />

          <h4 className="mt-4 text-3xl font-bold text-white">
            91%
          </h4>

          <p className="mt-2 text-slate-400">
            Campaign Health Score
          </p>

        </div>

      </div>

    </motion.div>
  );
}