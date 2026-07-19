import {
  ResponsiveContainer,
  
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
} from "recharts";

import { TrendingUp } from "lucide-react";

interface Props {
  data: any[];
}

export default function ForecastChart({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-600/20 p-3">
              <TrendingUp className="text-blue-400" size={22} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Revenue Forecast
              </h2>

              <p className="mt-1 text-slate-400">
                Actual vs AI Predicted Revenue
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-xl bg-emerald-500/10 px-4 py-2">

          <span className="font-semibold text-emerald-400">
            Confidence 94%
          </span>

        </div>

      </div>

      {/* Chart */}

      <div className="p-6">

        <ResponsiveContainer width="100%" height={420}>

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="forecastGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#22C55E"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#22C55E"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
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
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "white",
              }}
            />

            <Legend />

            {/* Actual Revenue */}

            <Line
              type="monotone"
              dataKey="actual"
              name="Actual Revenue"
              stroke="#3B82F6"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#3B82F6",
              }}
              activeDot={{
                r: 8,
              }}
            />

            {/* Forecast Area */}

            <Area
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke="#22C55E"
              strokeWidth={4}
              fill="url(#forecastGradient)"
              dot={{
                r: 5,
                fill: "#22C55E",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}