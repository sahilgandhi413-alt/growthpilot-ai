import {
  TrendingUp,
  TrendingDown,
  Sparkles,
} from "lucide-react";

interface Props {
  rows: any[];
}

export default function PredictionTable({
  rows,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Monthly Forecast
          </h2>

          <p className="mt-1 text-slate-400">
            AI predicted sales and revenue
          </p>

        </div>

        <div className="rounded-xl bg-blue-600/10 px-4 py-2">

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-blue-400"
              size={18}
            />

            <span className="text-blue-400 font-semibold">
              AI Generated
            </span>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-950">

            <tr>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Product
              </th>

              <th className="px-6 py-5 text-right text-sm uppercase tracking-wider text-slate-400">
                Current Sales
              </th>

              <th className="px-6 py-5 text-right text-sm uppercase tracking-wider text-slate-400">
                Forecast
              </th>

              <th className="px-6 py-5 text-right text-sm uppercase tracking-wider text-slate-400">
                Revenue
              </th>

              <th className="px-6 py-5 text-right text-sm uppercase tracking-wider text-slate-400">
                AI Revenue
              </th>

              <th className="px-6 py-5 text-center text-sm uppercase tracking-wider text-slate-400">
                Growth
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row, index) => {

              const growth =
                (
                  ((row.predicted_sales -
                    row.current_sales) /
                    row.current_sales) *
                  100
                ).toFixed(1);

              const positive =
                Number(growth) >= 0;

              return (

                <tr
                  key={index}
                  className="border-t border-slate-800 transition hover:bg-slate-800/40"
                >

                  <td className="px-6 py-5">

                    <div>

                      <p className="font-semibold text-white">
                        {row.product}
                      </p>

                      <p className="text-sm text-slate-500">
                        AI Forecast
                      </p>

                    </div>

                  </td>

                  <td className="px-6 py-5 text-right text-white">

                    {row.current_sales}

                  </td>

                  <td className="px-6 py-5 text-right font-semibold text-blue-400">

                    {row.predicted_sales}

                  </td>

                  <td className="px-6 py-5 text-right text-white">

                    ₹
                    {row.current_revenue.toLocaleString()}

                  </td>

                  <td className="px-6 py-5 text-right font-semibold text-emerald-400">

                    ₹
                    {row.predicted_revenue.toLocaleString()}

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center">

                      <span
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                          positive
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >

                        {positive ? (
                          <TrendingUp size={16} />
                        ) : (
                          <TrendingDown size={16} />
                        )}

                        {growth}%

                      </span>

                    </div>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}