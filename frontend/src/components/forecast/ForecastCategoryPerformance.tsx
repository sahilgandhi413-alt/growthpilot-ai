import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    category: "Electronics",
    revenue: 92,
  },
  {
    category: "Fashion",
    revenue: 74,
  },
  {
    category: "Furniture",
    revenue: 58,
  },
  {
    category: "Groceries",
    revenue: 47,
  },
  {
    category: "Sports",
    revenue: 36,
  },
];

const colors = [
  "#6366f1",
  "#7c3aed",
  "#06b6d4",
  "#22c55e",
  "#f59e0b",
];

export default function ForecastCategoryPerformance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 shadow-xl"
    >
      <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Category Forecast
            </h2>

            <p className="text-slate-400 mt-1">
              Expected revenue contribution
            </p>

          </div>

          <div className="rounded-xl bg-indigo-500/10 p-3">
            <TrendingUp className="text-indigo-400" />
          </div>

        </div>

        <ResponsiveContainer
          width="100%"
          height={360}
        >
          <BarChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="category"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                background: "#f3310f8c",
                border: "1px solid rgb(180, 203, 236)",
                borderRadius: "14px",
              }}
            />

            <Bar
              dataKey="revenue"
              radius={[8, 8, 0, 0]}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors[index]}
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>

      </div>
    </motion.div>
  );
}