import {
  BrainCircuit,
  Package,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const insights = [
  {
    title: "Inventory Health",
    value: "Excellent",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "Low Stock Items",
    value: "18",
    icon: AlertTriangle,
    color: "text-amber-400",
  },
  {
    title: "Overstock Items",
    value: "5",
    icon: Package,
    color: "text-cyan-400",
  },
  {
    title: "Inventory Growth",
    value: "+12%",
    icon: TrendingUp,
    color: "text-indigo-400",
  },
];

export default function InventoryAIInsights() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl">
      <div className="flex items-center gap-3">
        <BrainCircuit className="text-cyan-400" size={30} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Inventory Insights
          </h2>

          <p className="text-slate-400">
            Smart recommendations powered by GrowthPilot AI
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <Icon
                size={28}
                className={item.color}
              />

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>

              <h3 className={`mt-2 text-2xl font-bold ${item.color}`}>
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">
        <h3 className="font-semibold text-cyan-300">
          AI Recommendation
        </h3>

        <ul className="mt-4 space-y-2 text-slate-300">
          <li>✅ Order 120 additional MacBooks</li>
          <li>✅ Bundle low-moving accessories</li>
          <li>✅ Reduce overstock in Office category</li>
          <li>✅ Maintain current smartphone inventory levels</li>
        </ul>
      </div>
    </section>
  );
}