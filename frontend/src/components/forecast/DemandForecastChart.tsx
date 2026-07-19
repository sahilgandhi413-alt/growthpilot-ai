import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import ChartCard from "../common/ChartCard";

const data = [
  { product: "MacBook Pro", demand: 95 },
  { product: "iPhone 16", demand: 88 },
  { product: "AirPods Pro", demand: 78 },
  { product: "iPad Air", demand: 70 },
  { product: "Magic Mouse", demand: 62 },
];

const colors = [
  "#06B6D4",
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#A855F7",
];

export default function DemandForecastChart() {
  return (
    <ChartCard
      title="Demand Forecast"
      subtitle="AI predicted demand by product"
    >
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 25,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            type="number"
            stroke="#94A3B8"
          />

          <YAxis
            dataKey="product"
            type="category"
            stroke="#94A3B8"
            width={120}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Bar
            dataKey="demand"
            radius={[0, 10, 10, 0]}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}