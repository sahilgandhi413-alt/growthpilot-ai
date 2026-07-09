import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Users, UserPlus, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const chartData = {
  "7D": [
    { name: "Mon", customers: 24 },
    { name: "Tue", customers: 31 },
    { name: "Wed", customers: 29 },
    { name: "Thu", customers: 38 },
    { name: "Fri", customers: 42 },
    { name: "Sat", customers: 51 },
    { name: "Sun", customers: 58 },
  ],

  "30D": [
    { name: "W1", customers: 140 },
    { name: "W2", customers: 185 },
    { name: "W3", customers: 230 },
    { name: "W4", customers: 298 },
  ],

  "90D": [
    { name: "Jan", customers: 450 },
    { name: "Feb", customers: 620 },
    { name: "Mar", customers: 820 },
  ],

  "1Y": [
    { name: "Jan", customers: 220 },
    { name: "Feb", customers: 260 },
    { name: "Mar", customers: 310 },
    { name: "Apr", customers: 390 },
    { name: "May", customers: 470 },
    { name: "Jun", customers: 560 },
    { name: "Jul", customers: 620 },
    { name: "Aug", customers: 710 },
    { name: "Sep", customers: 790 },
    { name: "Oct", customers: 910 },
    { name: "Nov", customers: 1080 },
    { name: "Dec", customers: 1240 },
  ],
};

const filters = ["7D", "30D", "90D", "1Y"] as const;

export default function CustomerGrowthChart() {
  const [active, setActive] =
    useState<"7D" | "30D" | "90D" | "1Y">("1Y");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Customer Growth
          </h2>

          <p className="mt-1 text-slate-400">
            Customer acquisition over time
          </p>

        </div>

        <div className="flex gap-2">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                active === item
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* KPI Cards */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-slate-800/60 p-5">

          <Users className="text-cyan-400" />

          <p className="mt-3 text-sm text-slate-400">
            Total Customers
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            2,846
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-800/60 p-5">

          <UserPlus className="text-indigo-400" />

          <p className="mt-3 text-sm text-slate-400">
            New This Month
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            214
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-800/60 p-5">

          <TrendingUp className="text-emerald-400" />

          <p className="mt-3 text-sm text-slate-400">
            Growth Rate
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-400">
            +14.6%
          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-10 h-[360px]">

        <ResponsiveContainer>

          <AreaChart data={chartData[active]}>

            <defs>

              <linearGradient
                id="customerGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.9}
                />

                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="name"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "16px",
              }}
            />

            <Area
              type="monotone"
              dataKey="customers"
              stroke="#06B6D4"
              strokeWidth={4}
              fill="url(#customerGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}