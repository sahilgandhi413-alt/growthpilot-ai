import {
  ResponsiveContainer,
  
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

import {
  TrendingUp,
} from "lucide-react";

interface Props {
  data: any[];
}

export default function RevenueChart({ data }: Props) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/80
      backdrop-blur-xl
      p-7
      shadow-xl
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        right-0
        top-0
        h-56
        w-56
        rounded-full
        bg-blue-500/10
        blur-3xl
      "
      />

      {/* Header */}

      <div className="relative mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Revenue Analytics
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Monthly Revenue Trend
          </h2>

        </div>

        <div
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-emerald-500/10
          px-4
          py-2
        "
        >
          <TrendingUp
            size={18}
            className="text-emerald-400"
          />

          <span className="font-semibold text-emerald-400">
            +14.2%
          </span>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[330px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
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
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                borderRadius: "16px",
                border: "1px solid #334155",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              fill="url(#revenueGradient)"
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#3b82f6",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}