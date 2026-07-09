import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Crown,
  Star,
  User,
  UserPlus,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const data = [
  {
    name: "VIP",
    value: 22,
    color: "#06B6D4",
    icon: Crown,
  },
  {
    name: "Premium",
    value: 31,
    color: "#6366F1",
    icon: Star,
  },
  {
    name: "Regular",
    value: 35,
    color: "#10B981",
    icon: User,
  },
  {
    name: "New",
    value: 12,
    color: "#F59E0B",
    icon: UserPlus,
  },
];

export default function CustomerSegmentChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Glow */}

      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="relative p-8">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Customer Segments
            </h2>

            <p className="mt-1 text-slate-400">
              Distribution by customer type
            </p>

          </div>

          <div className="rounded-xl bg-cyan-500/10 p-3">

            <Sparkles
              size={20}
              className="text-cyan-400"
            />

          </div>

        </div>

        {/* Donut */}

        <div className="mt-8 h-[280px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                innerRadius={72}
                outerRadius={104}
                paddingAngle={4}
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
                  borderRadius: "16px",
                }}
              />

              <text
                x="50%"
                y="47%"
                textAnchor="middle"
                className="fill-slate-400 text-sm"
              >
                Customers
              </text>

              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                className="fill-white text-3xl font-bold"
              >
                2,846
              </text>

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}

        <div className="space-y-3">

          {data.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${item.color}20`,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: item.color,
                      }}
                    />
                  </div>

                  <div>

                    <p className="font-semibold text-white">
                      {item.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      Customer Segment
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h3 className="text-lg font-bold text-white">
                    {item.value}%
                  </h3>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}