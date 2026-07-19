import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";

import {
  Package,
  TrendingUp,
} from "lucide-react";

interface Props {
  data: any[];
}

const COLORS = [
  "#22C55E",
  "#3B82F6",
  "#A855F7",
  "#F97316",
  "#06B6D4",
  "#EAB308",
];

export default function InventoryChart({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-green-600/20 p-4">

            <Package
              className="text-green-400"
              size={24}
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Inventory Stock Analysis
            </h2>

            <p className="mt-1 text-slate-400">
              Current stock available by product
            </p>

          </div>

        </div>

        <div className="rounded-xl bg-green-500/10 px-5 py-3">

          <div className="flex items-center gap-2">

            <TrendingUp
              className="text-green-400"
              size={18}
            />

            <span className="font-semibold text-green-400">
              Live Inventory
            </span>

          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="p-6">

        <ResponsiveContainer
          width="100%"
          height={420}
        >

          <BarChart data={data}>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="product"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "#1E293B",
              }}
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "white",
              }}
            />

            <Legend />

            <Bar
              dataKey="stock"
              name="Stock Units"
              radius={[12, 12, 0, 0]}
            >

              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}