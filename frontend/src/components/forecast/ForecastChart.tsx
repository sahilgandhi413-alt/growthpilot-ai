import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { TrendingUp, Sparkles } from "lucide-react";

const data = [
  { month: "Jan", actual: 120, forecast: 120 },
  { month: "Feb", actual: 145, forecast: 145 },
  { month: "Mar", actual: 170, forecast: 170 },
  { month: "Apr", actual: 185, forecast: 188 },
  { month: "May", actual: 205, forecast: 214 },
  { month: "Jun", actual: 230, forecast: 242 },
  { month: "Jul", actual: null, forecast: 265 },
  { month: "Aug", actual: null, forecast: 282 },
];

type TooltipPayload = {
  color?: string;
  name?: string;
  value?: number | string;
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950/95 backdrop-blur-xl p-4 shadow-2xl">
      <p className="text-white font-semibold mb-3">{label}</p>

      {payload.map((entry, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-8 py-1"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: entry.color }}
            />
            <span className="text-slate-400 capitalize">
              {entry.name}
            </span>
          </div>

          <span className="font-semibold text-white">
            Rs {entry.value}K
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ForecastChart() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Revenue Forecast
          </h2>

          <p className="text-slate-400 mt-2">
            Historical revenue compared with AI-powered predictions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <p className="text-xs text-slate-400">
              Forecast Accuracy
            </p>

            <h3 className="text-lg font-bold text-emerald-400">
              96%
            </h3>
          </div>

          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">
            <p className="text-xs text-slate-400">
              Trend
            </p>

            <h3 className="flex items-center gap-1 text-lg font-bold text-indigo-300">
              <TrendingUp size={18} />
              Growing
            </h3>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: "Forecast Revenue", value: "Rs 3.12M" },
          { title: "Peak Month", value: "August" },
          { title: "Growth", value: "+18%" },
          { title: "Confidence", value: "96%" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="text-slate-300">
            Actual Revenue
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-indigo-400" />
          <span className="text-slate-300">
            AI Forecast
          </span>
        </div>

        <div className="flex items-center gap-2 text-indigo-400">
          <Sparkles size={16} />
          AI updates every 15 minutes
        </div>
      </div>

      <ResponsiveContainer width="100%" height={460}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="actual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="forecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="6 6" opacity={0.35} />
          <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 13 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#94A3B8", fontSize: 13 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="natural" dataKey="actual" stroke="#10B981" fill="url(#actual)" strokeWidth={3} dot={false} animationDuration={1800} />
          <Area type="natural" dataKey="forecast" stroke="#6366F1" fill="url(#forecast)" strokeWidth={3} strokeDasharray="6 6" dot={{ r: 5, fill: "#fff", stroke: "#6366F1", strokeWidth: 2 }} activeDot={{ r: 8, fill: "#6366F1" }} animationDuration={1800} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
