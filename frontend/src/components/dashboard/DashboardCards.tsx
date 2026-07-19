import {
  IndianRupee,
  ShoppingCart,
  Package,
  Layers,
  TrendingUp,
} from "lucide-react";

interface Props {
  summary: {
    total_revenue: number;
    total_orders: number;
    total_products: number;
    total_categories: number;
    average_order_value: number;
    growth: number;
  };
}

const cards = [
  {
    key: "total_revenue",
    title: "Revenue",
    valuePrefix: "₹",
    icon: IndianRupee,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    trend: "+12.8%",
  },
  {
    key: "total_orders",
    title: "Orders",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    trend: "+8.4%",
  },
  {
    key: "total_products",
    title: "Products",
    icon: Package,
    color: "from-violet-500 to-indigo-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    trend: "+5.2%",
  },
  {
    key: "total_categories",
    title: "Categories",
    icon: Layers,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    trend: "+2.1%",
  },
];

export default function DashboardCards({ summary }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className={`
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              ${card.border}
              ${card.bg}
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            `}
          >
            {/* Glow */}

            <div
              className={`
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-gradient-to-r
                ${card.color}
                opacity-10
                blur-3xl
              `}
            />

            {/* Header */}

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">

                  {card.valuePrefix}

                  {summary[
                    card.key as keyof typeof summary
                  ]?.toLocaleString()}

                </h2>

              </div>

              <div
                className={`
                  rounded-2xl
                  bg-gradient-to-br
                  ${card.color}
                  p-4
                  shadow-lg
                `}
              >
                <Icon
                  className="text-white"
                  size={26}
                />
              </div>

            </div>

            {/* Footer */}

            <div className="relative mt-8 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <TrendingUp
                  className="text-emerald-400"
                  size={18}
                />

                <span className="font-semibold text-emerald-400">
                  {card.trend}
                </span>

              </div>

              <span className="text-sm text-slate-500">
                vs last month
              </span>

            </div>

          </div>
        );
      })}
    </div>
  );
}