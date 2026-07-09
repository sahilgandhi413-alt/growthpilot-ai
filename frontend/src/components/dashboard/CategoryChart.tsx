import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  ShoppingBag,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const data = [
  {
    name: "Electronics",
    value: 45,
    color: "#6366F1",
  },
  {
    name: "Fashion",
    value: 30,
    color: "#10B981",
  },
  {
    name: "Furniture",
    value: 25,
    color: "#F59E0B",
  },
];

export default function CategoryChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_25px_80px_rgba(0,0,0,.35)]"
    >
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-[90px]" />

      <div className="relative p-8">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Category Distribution
            </h2>

            <p className="mt-1 text-slate-400">
              Revenue contribution by category
            </p>

          </div>

          <div className="rounded-xl bg-indigo-500/10 p-3">

            <ShoppingBag
              className="text-indigo-400"
              size={22}
            />

          </div>

        </div>

        {/* Donut */}

        <div className="mt-8 h-[320px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                innerRadius={78}
                outerRadius={112}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "14px",
                }}
              />

              <text
                x="50%"
                y="48%"
                textAnchor="middle"
                className="fill-slate-400 text-sm"
              >
                Total Revenue
              </text>

              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                className="fill-white text-3xl font-bold"
              >
                ₹25.8L
              </text>

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}

        <div className="space-y-4">

          {data.map((item) => (

            <motion.div
              key={item.name}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >

              <div className="flex items-center gap-3">

                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: item.color,
                  }}
                />

                <span className="font-medium text-white">
                  {item.name}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="font-semibold text-slate-300">
                  {item.value}%
                </span>

                <TrendingUp
                  size={16}
                  className="text-emerald-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

        {/* AI Insight */}

        <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">

          <div className="flex items-center gap-2">

            <Sparkles
              size={18}
              className="text-indigo-400"
            />

            <h3 className="font-semibold text-white">
              AI Insight
            </h3>

          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">

            Electronics contributes the largest share of revenue
            at <span className="font-semibold text-indigo-400">45%</span>,
            making it your strongest-performing category.
            Consider increasing inventory and promotional campaigns
            for this segment to maximize revenue growth.

          </p>

        </div>

      </div>

    </motion.div>
  );
}