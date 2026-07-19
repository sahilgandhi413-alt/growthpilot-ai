import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface MarketingData {
  month: string;
  revenue: number;
  spend: number;
}

interface Props {
  data: MarketingData[];
}

export default function MarketingChart({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 px-8 py-6">

        <h2 className="text-2xl font-bold text-white">
          Marketing Performance
        </h2>

        <p className="mt-2 text-slate-400">
          Revenue generated versus advertising spend.
        </p>

      </div>

      {/* Chart */}

      <div className="h-[430px] p-6">

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
                  offset="5%"
                  stopColor="#10B981"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#10B981"
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
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Legend />

            {/* Revenue */}

            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#10B981"
              fill="url(#revenueGradient)"
              strokeWidth={4}
            />

            {/* Ad Spend */}

            <Line
              type="monotone"
              dataKey="spend"
              name="Ad Spend"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{
                r: 5,
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