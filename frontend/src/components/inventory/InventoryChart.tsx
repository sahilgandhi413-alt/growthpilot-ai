import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  TrendingUp,
  Calendar,
  Download,
  Package,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { month: "Jan", stock: 860 },
  { month: "Feb", stock: 930 },
  { month: "Mar", stock: 910 },
  { month: "Apr", stock: 1020 },
  { month: "May", stock: 1170 },
  { month: "Jun", stock: 1248 },
];

const filters = ["7D", "30D", "90D", "1Y"];

export default function InventoryChart() {
  const [active, setActive] = useState("30D");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-xl"
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Header */}

      <div className="relative border-b border-slate-800 p-7">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Inventory Analytics
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Inventory Trend
            </h2>

            <p className="mt-2 text-slate-400">
              Monitor inventory movement and warehouse growth.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`rounded-xl px-5 py-2 font-medium transition-all ${
                  active === item
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

      {/* KPI */}

      <div className="grid gap-5 border-b border-slate-800 p-7 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-800/60 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400">
                Current Stock
              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                1,248
              </h2>

            </div>

            <Package className="text-indigo-400" size={32} />

          </div>

        </div>

        <div className="rounded-2xl bg-slate-800/60 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400">
                Monthly Growth
              </p>

              <h2 className="mt-2 text-4xl font-bold text-emerald-400">
                +18%
              </h2>

            </div>

            <TrendingUp
              className="text-emerald-400"
              size={32}
            />

          </div>

        </div>

        <div className="flex items-center justify-end gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 hover:bg-slate-700">

            <Calendar size={18} />

            Last 30 Days

          </button>

          <button className="rounded-xl bg-indigo-600 p-3 hover:bg-indigo-700">

            <Download size={18} />

          </button>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[430px] px-7 pt-6">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="inventory" x1="0" y1="0" x2="0" y2="1">

                <stop
                  offset="5%"
                  stopColor="#6366F1"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#6366F1"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: 14,
              }}
            />

            <Area
              type="monotone"
              dataKey="stock"
              stroke="#6366F1"
              strokeWidth={4}
              fill="url(#inventory)"
              dot={{
                r: 5,
                fill: "#6366F1",
              }}
              activeDot={{
                r: 8,
                fill: "#818CF8",
              }}
              isAnimationActive
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-3 border-t border-slate-800 p-6">

        <div>

          <p className="text-sm text-slate-400">
            Average Stock
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            1,023
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Peak Inventory
          </p>

          <h3 className="mt-2 text-xl font-bold text-emerald-400">
            1,248
          </h3>

        </div>

        <div className="flex items-center justify-end gap-2">

          <Activity
            className="text-indigo-400"
            size={20}
          />

          <div>

            <p className="text-sm text-slate-400">
              Utilization
            </p>

            <h3 className="font-bold text-white">
              92%
            </h3>

          </div>

        </div>

      </div>

    </motion.div>
  );
}