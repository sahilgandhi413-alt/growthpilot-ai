import {
  Bot,
  Trophy,
  FolderKanban,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface Props {
  insights: any;
}

export default function ExecutiveSummary({ insights }: Props) {
  if (!insights) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl shadow-xl">

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Header */}

      <div className="relative flex items-center gap-5">

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 shadow-lg shadow-blue-600/30">
          <Bot size={32} className="text-white" />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            GrowthPilot AI
          </h2>

          <p className="text-slate-400">
            Executive Business Intelligence Report
          </p>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-600/10 p-6">

        <div className="mb-4 flex items-center gap-3">

          <Sparkles className="text-blue-400" />

          <h3 className="text-xl font-semibold text-white">
            AI Summary
          </h3>

        </div>

        <p className="leading-8 text-slate-300">
          {insights.summary}
        </p>

      </div>

      {/* Analytics */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition hover:-translate-y-1">

          <Trophy className="mb-4 text-yellow-400" size={28} />

          <p className="text-sm text-slate-400">
            Best Selling Product
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {insights.top_product.name}
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition hover:-translate-y-1">

          <FolderKanban className="mb-4 text-indigo-400" size={28} />

          <p className="text-sm text-slate-400">
            Best Category
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {insights.top_category.name}
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition hover:-translate-y-1">

          <ShieldCheck className="mb-4 text-emerald-400" size={28} />

          <p className="text-sm text-slate-400">
            AI Confidence
          </p>

          <h3 className="mt-2 text-4xl font-bold text-emerald-400">
            {insights.confidence}%
          </h3>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-blue-600/10 p-6">

        <div className="mb-4 flex items-center gap-3">

          <TrendingUp
            className="text-emerald-400"
            size={24}
          />

          <h3 className="text-xl font-bold text-white">
            AI Recommendation
          </h3>

        </div>

        <p className="leading-8 text-slate-300">
          {insights.recommendation}
        </p>

      </div>

    </div>
  );
}