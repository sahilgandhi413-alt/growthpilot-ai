import {
  TrendingUp,
  DollarSign,
  Brain,
  Target,
} from "lucide-react";

interface Props {
  summary: {
    current_revenue: number;
    predicted_revenue: number;
    growth: number;
    confidence: number;
  };
}

export default function ForecastCards({ summary }: Props) {
  const cards = [
    {
      title: "Current Revenue",
      value: summary.current_revenue,
      prefix: "₹",
      icon: DollarSign,
      color: "from-emerald-500 to-green-600",
      subtitle: "Current month",
    },
    {
      title: "Predicted Revenue",
      value: summary.predicted_revenue,
      prefix: "₹",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-600",
      subtitle: "Next month",
    },
    {
      title: "Expected Growth",
      value: summary.growth,
      suffix: "%",
      icon: Target,
      color: "from-orange-500 to-red-500",
      subtitle: "Forecast increase",
    },
    {
      title: "AI Confidence",
      value: summary.confidence,
      suffix: "%",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      subtitle: "Prediction accuracy",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition"
          >
            <div
              className={`absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-3xl`}
            />

            <div className="relative flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {card.prefix}
                  {Number(card.value).toLocaleString()}
                  {card.suffix}
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div
                className={`rounded-2xl bg-gradient-to-br ${card.color} p-4`}
              >
                <Icon className="text-white" size={24} />
              </div>
            </div>

            <div className="mt-6 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${card.color}`}
                style={{
                  width:
                    card.title === "AI Confidence"
                      ? `${summary.confidence}%`
                      : card.title === "Expected Growth"
                      ? `${summary.growth}%`
                      : "100%",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}