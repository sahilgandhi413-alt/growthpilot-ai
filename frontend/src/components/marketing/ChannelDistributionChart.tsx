import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import ChartCard from "../common/ChartCard";

const data = [
  {
    name: "Facebook",
    value: 40,
  },
  {
    name: "Instagram",
    value: 28,
  },
  {
    name: "Google Ads",
    value: 20,
  },
  {
    name: "Email",
    value: 12,
  },
];

const COLORS = [
  "#3B82F6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
];

export default function ChannelDistributionChart() {
  return (
    <ChartCard
      title="Channel Distribution"
      subtitle="Marketing budget allocation"
    >
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>

          <Pie
            data={data}
            innerRadius={75}
            outerRadius={120}
            dataKey="value"
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Legend />

        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}