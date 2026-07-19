import {
  Bot,
  PackagePlus,
  Sparkles,
  ArrowUpCircle,
} from "lucide-react";

interface Recommendation {
  product: string;
  current_stock: number;
  recommended_order: number;
  reason: string;
}

interface Props {
  recommendations: Recommendation[];
}

export default function InventoryRecommendations({
  recommendations,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4">

            <Bot
              className="text-white"
              size={24}
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Restock Recommendations
            </h2>

            <p className="mt-1 text-slate-400">
              Smart inventory optimization suggestions
            </p>

          </div>

        </div>

        <div className="rounded-xl bg-blue-500/10 px-5 py-3">

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-blue-400"
              size={18}
            />

            <span className="font-semibold text-blue-400">
              AI Powered
            </span>

          </div>

        </div>

      </div>

      {/* Empty State */}

      {recommendations.length === 0 ? (
        <div className="p-12 text-center">

          <PackagePlus
            className="mx-auto text-green-400"
            size={48}
          />

          <h3 className="mt-4 text-xl font-semibold text-white">
            Inventory Looks Great 🎉
          </h3>

          <p className="mt-2 text-slate-400">
            No restocking recommendations at the moment.
          </p>

        </div>
      ) : (

        <div className="grid gap-5 p-6 md:grid-cols-2">

          {recommendations.map((item, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.product}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Current Stock
                  </p>

                  <h2 className="text-3xl font-bold text-yellow-400">
                    {item.current_stock}
                  </h2>

                </div>

                <div className="rounded-2xl bg-blue-600/20 p-3">

                  <ArrowUpCircle
                    className="text-blue-400"
                    size={26}
                  />

                </div>

              </div>

              {/* Recommendation */}

              <div className="mt-6 rounded-xl bg-blue-500/5 p-4">

                <p className="text-sm text-slate-400">
                  Recommended Order
                </p>

                <h2 className="mt-2 text-4xl font-bold text-green-400">
                  +{item.recommended_order}
                </h2>

              </div>

              {/* Reason */}

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">

                <p className="text-sm font-semibold text-blue-400">
                  AI Insight
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.reason}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}