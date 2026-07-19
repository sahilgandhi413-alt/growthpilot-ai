import {
  Bot,
  BrainCircuit,
  Sparkles,
  Target,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

interface Props {
  insights: {
    summary: string;
    confidence: number;
    recommendation: string;
    best_channel: string;
    expected_roi: number;
  };
}

export default function MarketingInsights({
  insights,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 p-4 shadow-lg">

            <Bot
              size={24}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Marketing Intelligence
            </h2>

            <p className="mt-1 text-slate-400">
              GrowthPilot AI Recommendations
            </p>

          </div>

        </div>

        <div className="rounded-xl bg-pink-500/10 px-5 py-3">

          <div className="flex items-center gap-2">

            <Sparkles
              size={18}
              className="text-pink-400"
            />

            <span className="font-semibold text-pink-400">
              AI Powered
            </span>

          </div>

        </div>

      </div>

      <div className="space-y-8 p-8">

        {/* Summary */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

          <div className="mb-4 flex items-center gap-3">

            <BrainCircuit
              size={22}
              className="text-blue-400"
            />

            <h3 className="text-xl font-semibold text-white">
              Executive Summary
            </h3>

          </div>

          <p className="leading-8 text-slate-300">
            {insights.summary}
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-6">

            <Target
              className="mb-4 text-pink-400"
              size={26}
            />

            <p className="text-slate-400">
              Best Channel
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {insights.best_channel}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-6">

            <BadgeDollarSign
              className="mb-4 text-green-400"
              size={26}
            />

            <p className="text-slate-400">
              Expected ROI
            </p>

            <h3 className="mt-3 text-3xl font-bold text-green-400">
              {insights.expected_roi}%
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-6">

            <TrendingUp
              className="mb-4 text-blue-400"
              size={26}
            />

            <p className="text-slate-400">
              AI Confidence
            </p>

            <h3 className="mt-3 text-3xl font-bold text-blue-400">
              {insights.confidence}%
            </h3>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-700">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{
                  width: `${insights.confidence}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Recommendation */}

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">

          <h3 className="text-xl font-semibold text-emerald-400">
            AI Recommendation
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            {insights.recommendation}
          </p>

        </div>

      </div>

    </div>
  );
}