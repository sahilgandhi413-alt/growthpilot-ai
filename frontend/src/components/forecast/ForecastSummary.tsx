import {
  Brain,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

interface Props {
  summary: {
    summary: string;
    confidence: number;
    recommendation: string;
  };
}

export default function ForecastSummary({
  summary,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-4">

            <Brain className="text-white" size={26} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Executive Forecast
            </h2>

            <p className="mt-1 text-slate-400">
              Machine Learning Business Intelligence
            </p>

          </div>

        </div>

        <div className="rounded-xl bg-blue-600/10 px-5 py-3">

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-blue-400"
              size={18}
            />

            <span className="font-semibold text-blue-400">
              AI Generated
            </span>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="px-8 py-8">

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

          <p className="text-lg leading-9 text-slate-300">
            {summary.summary}
          </p>

        </div>

        {/* Cards */}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Confidence */}

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <div className="flex items-center gap-3">

              <ShieldCheck
                className="text-green-400"
                size={24}
              />

              <h3 className="font-semibold text-white">
                Confidence
              </h3>

            </div>

            <h1 className="mt-5 text-5xl font-bold text-green-400">
              {summary.confidence}%
            </h1>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                style={{
                  width: `${summary.confidence}%`,
                }}
              />

            </div>

          </div>

          {/* Opportunity */}

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

            <div className="flex items-center gap-3">

              <TrendingUp
                className="text-blue-400"
                size={24}
              />

              <h3 className="font-semibold text-white">
                Opportunity
              </h3>

            </div>

            <p className="mt-5 text-slate-300 leading-8">
              Sales demand is expected to increase significantly
              next month. AI recommends increasing inventory
              levels before demand peaks.
            </p>

          </div>

          {/* Risk */}

          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">

            <div className="flex items-center gap-3">

              <TriangleAlert
                className="text-orange-400"
                size={24}
              />

              <h3 className="font-semibold text-white">
                Recommendation
              </h3>

            </div>

            <p className="mt-5 text-slate-300 leading-8">
              {summary.recommendation}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}