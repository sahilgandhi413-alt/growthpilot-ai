import {
  Users,
  UserCheck,
  UserPlus,
  UserX,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Props {
  summary?: {
    total_customers?: number;
    returning_customers?: number;
    new_customers?: number;
    churn_rate?: number;
  };
}

export default function CustomerCards({ summary }: Props) {
  const data = {
    total_customers: summary?.total_customers ?? 0,
    returning_customers: summary?.returning_customers ?? 0,
    new_customers: summary?.new_customers ?? 0,
    churn_rate: summary?.churn_rate ?? 0,
  };

  const cards = [
    {
      title: "Total Customers",
      value: data.total_customers.toLocaleString(),
      subtitle: "+12% this month",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      trend: "up",
    },
    {
      title: "Returning Customers",
      value: `${data.returning_customers}%`,
      subtitle: "+6% retention",
      icon: UserCheck,
      color: "from-emerald-500 to-green-600",
      trend: "up",
    },
    {
      title: "New Customers",
      value: data.new_customers.toLocaleString(),
      subtitle: "+18% acquisition",
      icon: UserPlus,
      color: "from-purple-500 to-pink-600",
      trend: "up",
    },
    {
      title: "Churn Rate",
      value: `${data.churn_rate}%`,
      subtitle: "-2% improvement",
      icon: UserX,
      color: "from-red-500 to-orange-500",
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
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${card.color}`} />

            <div className="p-6">
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
                  className={`rounded-2xl bg-gradient-to-br ${card.color} p-4 shadow-lg`}
                >
                  <Icon
                    className="text-white"
                    size={28}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                {card.trend === "up" ? (
                  <TrendingUp
                    size={18}
                    className="text-green-400"
                  />
                ) : (
                  <TrendingDown
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