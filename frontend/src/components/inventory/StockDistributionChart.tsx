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
  { name: "Electronics", value: 42 },
  { name: "Accessories", value: 24 },
  { name: "Furniture", value: 18 },
  { name: "Office", value: 16 },
];

const COLORS = [
  "#06B6D4",
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
];

export default function StockDistributionChart() {
  return (
    <ChartCard
      title="Stock Distribution"
      subtitle="Inventory by category"
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
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
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