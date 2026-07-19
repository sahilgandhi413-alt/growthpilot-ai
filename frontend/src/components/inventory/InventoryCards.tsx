import {
  DollarSign,
  Boxes,
  Package,
  AlertTriangle,
} from "lucide-react";

interface Props {
  summary: {
    inventory_value: number;
    total_products: number;
    total_stock: number;
    low_stock_products: number;
    health: string;
  };
}

export default function InventoryCards({ summary }: Props) {
  const cards = [
    {
      title: "Inventory Value",
      value: summary.inventory_value,
      prefix: "₹",
      icon: DollarSign,
      subtitle: "Total inventory worth",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Products",
      value: summary.total_products,
      icon: Boxes,
      subtitle: "Active SKUs",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Stock Units",
      value: summary.total_stock,
      icon: Package,
      subtitle: "Available quantity",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Low Stock",
      value: summary.low_stock_products,
      icon: AlertTriangle,
      subtitle: "Requires attention",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl"
            >
              <div
                className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-3xl`}
              />

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    {card.prefix}
                    {Number(card.value).toLocaleString()}
                  </h2>

                  <p className="mt-3 text-sm text-slate-500">
                    {card.subtitle}
                  </p>
                </div>

                <div
                  className={`rounded-2xl bg-gradient-to-br ${card.color} p-4 shadow-lg`}
                >
                  <Icon
                    className="text-white"
                    size={24}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inventory Health */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              Inventory Health
            </h3>

            <p className="mt-2 text-slate-400">
              Overall warehouse health based on AI analysis
            </p>
          </div>

          <span
            className={`rounded-full px-5 py-2 font-semibold ${
              summary.health === "Good"
                ? "bg-green-500/10 text-green-400"
                : summary.health === "Average"
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {summary.health}
          </span>
        </div>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              summary.health === "Good"
                ? "bg-gradient-to-r from-green-500 to-emerald-400"
                : summary.health === "Average"
                ? "bg-gradient-to-r from-yellow-500 to-orange-400"
                : "bg-gradient-to-r from-red-500 to-red-400"
            }`}
            style={{
              width:
                summary.health === "Good"
                  ? "92%"
                  : summary.health === "Average"
                  ? "70%"
                  : "40%",
            }}
          />
        </div>
      </div>
    </div>
  );
}