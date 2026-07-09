import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import {
  TrendingUp,
  IndianRupee,
  Target,
} from "lucide-react";

const filters = ["7D", "30D", "90D", "1Y"] as const;

const chartData = {
  "7D": [
    { name: "Mon", spend: 24, revenue: 48 },
    { name: "Tue", spend: 30, revenue: 55 },
    { name: "Wed", spend: 28, revenue: 51 },
    { name: "Thu", spend: 36, revenue: 68 },
    { name: "Fri", spend: 42, revenue: 80 },
    { name: "Sat", spend: 38, revenue: 74 },
    { name: "Sun", spend: 46, revenue: 92 },
  ],

  "30D": [
    { name: "W1", spend: 140, revenue: 260 },
    { name: "W2", spend: 180, revenue: 330 },
    { name: "W3", spend: 220, revenue: 410 },
    { name: "W4", spend: 260, revenue: 520 },
  ],

  "90D": [
    { name: "Jan", spend: 420, revenue: 720 },
    { name: "Feb", spend: 510, revenue: 910 },
    { name: "Mar", spend: 620, revenue: 1120 },
  ],

  "1Y": [
    { name: "Jan", spend: 120, revenue: 220 },
    { name: "Feb", spend: 150, revenue: 280 },
    { name: "Mar", spend: 180, revenue: 330 },
    { name: "Apr", spend: 210, revenue: 390 },
    { name: "May", spend: 260, revenue: 480 },
    { name: "Jun", spend: 300, revenue: 560 },
    { name: "Jul", spend: 340, revenue: 640 },
    { name: "Aug", spend: 380, revenue: 720 },
    { name: "Sep", spend: 430, revenue: 810 },
    { name: "Oct", spend: 470, revenue: 910 },
    { name: "Nov", spend: 530, revenue: 1010 },
    { name: "Dec", spend: 620, revenue: 1180 },
  ],
};

export default function MarketingSpendChart() {
  const [active, setActive] =
    useState<"7D" | "30D" | "90D" | "1Y">("1Y");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Marketing Performance
          </h2>

          <p className="mt-1 text-slate-400">
            Advertising spend vs generated revenue
          </p>

        </div>

        <div className="flex gap-2">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                active === item
                  ? "bg-violet-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* KPI */}

      <div className="mt-8 grid grid-cols-3 gap-5">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-violet-400">

            <IndianRupee size={18} />

            <span className="text-sm">
              Total Spend
            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">
            ₹8.42L
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-cyan-400">

            <Target size={18} />

            <span className="text-sm">
              Revenue
            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">
            ₹27.6L
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-emerald-400">

            <TrendingUp size={18} />

            <span className="text-sm">
              ROI
            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">
            328%
          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-8 h-[420px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={chartData[active]}>

            <defs>

              <linearGradient
                id="spendGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />

              </linearGradient>

              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.8}
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

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "16px",
              }}
            />

            <Area
              type="monotone"
              dataKey="spend"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#spendGradient)"
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06B6D4"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}