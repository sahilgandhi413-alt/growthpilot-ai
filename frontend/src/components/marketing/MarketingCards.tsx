import {
  Megaphone,
  IndianRupee,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface Props {
  summary?: {
    active_campaigns?: number;
    revenue?: number;
    roi?: number;
    ad_spend?: number;
  };
}

export default function MarketingCards({ summary }: Props) {
  const data = {
    active_campaigns: summary?.active_campaigns ?? 0,
    revenue: summary?.revenue ?? 0,
    roi: summary?.roi ?? 0,
    ad_spend: summary?.ad_spend ?? 0,
  };

  const cards = [
    {
      title: "Active Campaigns",
      value: data.active_campaigns.toLocaleString(),
      subtitle: "+4 this month",
      icon: Megaphone,
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      trend: "up",
    },
    {
      title: "Revenue Generated",
      value: `₹${data.revenue.toLocaleString()}`,
      subtitle: "+18.4%",
      icon: IndianRupee,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      trend: "up",
    },
    {
      title: "ROI",
      value: `${data.roi}%`,
      subtitle: "+12.8%",
      icon: TrendingUp,
      gradient: "from-blue-500 via-cyan-500 to-indigo-500",
      trend: "up",
    },
    {
      title: "Ad Spend",
      value: `₹${data.ad_spend.toLocaleString()}`,
      subtitle: "-3.2%",
      icon: Wallet,
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      trend: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/10"
          >
            {/* Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
            />

            {/* Top Border */}
            <div
              className={`h-1.5 w-full bg-gradient-to-r ${card.gradient}`}
            />

            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-4 shadow-lg`}
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                {card.trend === "up" ? (
                  <ArrowUpRight
                    size={18}
                    className="text-green-400"
                  />
                ) : (
                  <ArrowDownRight
                    size={18}
                    className="text-red-400"
                  />
                )}

                <span
                  className={`text-sm font-medium ${
                    card.trend === "up"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {card.subtitle}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}