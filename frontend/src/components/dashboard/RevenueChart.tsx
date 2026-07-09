import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { getRevenueChart } from "../../services/dashboard";

interface RevenueData {
  month: string;
  revenue: number;
}

export default function RevenueChart() {
  const [data, setData] = useState<RevenueData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChart() {
      try {
        const response = await getRevenueChart();
        setData(response);
      } catch (err) {
        console.error("Revenue Chart Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadChart();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[380px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
        <p className="text-slate-400">Loading Revenue Chart...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Revenue Analytics
        </h2>

        <p className="text-slate-400">
          Monthly Revenue Performance
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
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
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            dataKey="month"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366F1"
            fill="url(#revenueGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}