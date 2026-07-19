import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { PieChart as PieChartIcon } from "lucide-react";

interface Props {
  data: any[];
}

const COLORS = [
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function CategoryChart({ data }: Props) {
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
        -left-20
        bottom-0
        h-52
        w-52
        rounded-full
        bg-indigo-500/10
        blur-3xl
      "
      />

      {/* Header */}

      <div className="relative mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Category Analytics
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Revenue Distribution
          </h2>

        </div>

        <div className="rounded-2xl bg-indigo-500/10 p-3">
          <PieChartIcon
            className="text-indigo-400"
            size={22}
          />
        </div>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              cornerRadius={8}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                borderRadius: "16px",
                border: "1px solid #334155",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                color: "#CBD5E1",
                paddingTop: "20px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-2xl bg-slate-800/60 p-4">

        <p className="text-sm text-slate-400">
          AI Insight
        </p>

        <p className="mt-2 text-white">
          Electronics continue to contribute the highest
          revenue share this month. Consider increasing
          inventory before the next demand cycle.
        </p>

      </div>

    </div>
  );
}