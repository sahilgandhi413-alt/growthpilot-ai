import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Google Ads",
    value: 38,
    color: "#8B5CF6",
  },
  {
    name: "Meta Ads",
    value: 26,
    color: "#06B6D4",
  },
  {
    name: "Instagram",
    value: 18,
    color: "#10B981",
  },
  {
    name: "LinkedIn",
    value: 10,
    color: "#F59E0B",
  },
  {
    name: "Email",
    value: 8,
    color: "#EF4444",
  },
];

export default function MarketingChannelChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="mb-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600">

            <Globe
              className="text-white"
              size={22}
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Marketing Channels
            </h2>

            <p className="text-sm text-slate-400">
              Traffic Source Distribution
            </p>

          </div>

        </div>

      </div>

      {/* Donut */}

      <div className="relative h-[280px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={4}
              strokeWidth={0}
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
                borderRadius: "16px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

        {/* Center */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <p className="text-sm text-slate-500">
            Total Reach
          </p>

          <h2 className="mt-1 text-4xl font-bold text-white">
            2.4M
          </h2>

          <span className="mt-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
            +18.4%
          </span>

        </div>

      </div>

      {/* Channel List */}

      <div className="mt-6 space-y-4">

        {data.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 transition hover:border-violet-500"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <span className="text-slate-300">
                {item.name}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="font-semibold text-white">
                {item.value}%
              </span>

              <TrendingUp
                size={16}
                className="text-emerald-400"
              />

            </div>

          </div>

        ))}

      </div>
    </motion.div>
  );
}