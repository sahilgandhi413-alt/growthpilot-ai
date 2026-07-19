import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    month: string;
    customers: number;
  }[];
}

export default function CustomerChart({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 px-8 py-6">

        <h2 className="text-2xl font-bold text-white">
          Customer Growth
        </h2>

        <p className="mt-2 text-slate-400">
          Monthly customer acquisition trend powered by AI.
        </p>

      </div>

      {/* Chart */}

      <div className="h-[420px] p-6">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

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
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
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
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "#fff",
              }}
              cursor={{
                stroke: "#3B82F6",
                strokeWidth: 1,
              }}
            />

            <Area
              type="monotone"
              dataKey="customers"
              stroke="#3B82F6"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#customerGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}