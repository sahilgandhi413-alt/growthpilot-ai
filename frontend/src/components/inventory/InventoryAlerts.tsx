import {
  AlertTriangle,
  AlertCircle,
  Package,
  TrendingDown,
} from "lucide-react";

interface Props {
  alerts: {
    product: string;
    stock: number;
    priority: string;
  }[];
}

export default function InventoryAlerts({
  alerts,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-red-500/20 p-3">

            <AlertTriangle
              className="text-red-400"
              size={22}
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Inventory Alerts
            </h2>

            <p className="text-sm text-slate-400">
              AI detected critical stock issues
            </p>

          </div>

        </div>

        <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
          {alerts.length} Active
        </span>

      </div>

      {/* Alerts */}

      <div className="space-y-4 p-6">

        {alerts.length === 0 && (
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">

            <Package
              className="mx-auto text-green-400"
              size={42}
            />

            <h3 className="mt-4 text-lg font-semibold text-white">
              No Inventory Alerts 🎉
            </h3>

            <p className="mt-2 text-slate-400">
              All products are currently healthy.
            </p>

          </div>
        )}

        {alerts.map((item, index) => {
          const critical =
            item.priority === "Critical";

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-red-500 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    {critical ? (
                      <AlertCircle
                        className="text-red-400"
                        size={18}
                      />
                    ) : (
                      <TrendingDown
                        className="text-yellow-400"
                        size={18}
                      />
                    )}

                    <h3 className="font-semibold text-white">
                      {item.product}
                    </h3>

                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Remaining Stock
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {item.stock} Units
                  </h2>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    critical
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {item.priority}
                </span>

              </div>

              {/* Progress */}

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className={`h-full rounded-full ${
                    critical
                      ? "bg-gradient-to-r from-red-500 to-red-400"
                      : "bg-gradient-to-r from-yellow-500 to-orange-400"
                  }`}
                  style={{
                    width: critical ? "20%" : "45%",
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}