import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface ChannelData {
  name: string;
  value: number;
}

interface Props {
  data: ChannelData[];
}

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function ChannelChart({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
      {/* Header */}

      <div className="border-b border-slate-800 px-6 py-6">
        <h2 className="text-2xl font-bold text-white">
          Revenue by Channel
        </h2>

        <p className="mt-2 text-slate-400">
          Marketing contribution across channels
        </p>
      </div>

      {/* Chart */}

      <div className="h-[430px] p-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={120}
              paddingAngle={4}
              cornerRadius={8}
              label={({ percent }) =>
                `${(((percent ?? 0) * 100)).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                `₹${Number(value ?? 0).toLocaleString()}`,
                "Revenue",
              ]}
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                color: "#CBD5E1",
                fontSize: "14px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}