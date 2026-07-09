import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  PieChart as PieIcon,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Electronics",
    value: 42,
    amount: "₹2.8M",
    color: "#6366F1",
  },
  {
    name: "Furniture",
    value: 24,
    amount: "₹1.2M",
    color: "#10B981",
  },
  {
    name: "Fashion",
    value: 20,
    amount: "₹860K",
    color: "#F59E0B",
  },
  {
    name: "Accessories",
    value: 14,
    amount: "₹560K",
    color: "#EF4444",
  },
];

export default function InventoryCategoryChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg">

            <PieIcon className="text-white" size={24} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Inventory Categories
            </h2>

            <p className="text-sm text-slate-400">
              Product distribution by category
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">

          <TrendingUp size={16} />

          +8%

        </div>

      </div>

      {/* Donut Chart */}

      <div className="mt-8 h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={78}
              outerRadius={112}
              paddingAngle={4}
              stroke="none"
            >

              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}

            </Pie>

            {/* Center Label */}

            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-4xl font-bold"
            >
              1,248
            </text>

            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-400 text-sm"
            >
              Products
            </text>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="mt-6 space-y-3">

        {data.map((item) => (

          <motion.div
            whileHover={{ scale: 1.02 }}
            key={item.name}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/60 p-4 transition"
          >

            <div className="flex items-center gap-4">

              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <div>

                <p className="font-semibold text-white">
                  {item.name}
                </p>

                <p className="text-xs text-slate-500">
                  {item.amount}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-lg font-bold text-white">
                {item.value}%
              </p>

            </div>

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}