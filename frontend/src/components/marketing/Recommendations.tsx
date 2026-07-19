import {
  TrendingUp,
  PauseCircle,
  Rocket,
} from "lucide-react";

const recommendations = [
  {
    title: "Increase Budget",
    description: "Google Ads Campaign",
    impact: "+18% Expected ROI",
    color: "border-cyan-500/30 bg-cyan-500/10",
    icon: TrendingUp,
  },
  {
    title: "Pause Campaign",
    description: "Facebook Campaign #5",
    impact: "CTR 0.8%",
    color: "border-red-500/30 bg-red-500/10",
    icon: PauseCircle,
  },
  {
    title: "Scale Campaign",
    description: "Instagram Reels",
    impact: "+14% Conversion",
    color: "border-pink-500/30 bg-pink-500/10",
    icon: Rocket,
  },
];

export default function MarketingRecommendations() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          AI Recommendations
        </h2>

        <p className="text-slate-400">
          GrowthPilot AI generated actions to maximize marketing performance.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.color}`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.description}
              </p>

              <div className="mt-5 rounded-xl bg-slate-900 px-4 py-3 text-cyan-400 font-semibold">
                {item.impact}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}