import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import ChartCard from "../common/ChartCard";

const data = [
  { month: "Jan", facebook: 80, instagram: 60, google: 45 },
  { month: "Feb", facebook: 110, instagram: 82, google: 70 },
  { month: "Mar", facebook: 150, instagram: 120, google: 95 },
  { month: "Apr", facebook: 190, instagram: 145, google: 120 },
  { month: "May", facebook: 230, instagram: 170, google: 150 },
  { month: "Jun", facebook: 280, instagram: 210, google: 180 },
  { month: "Jul", facebook: 330, instagram: 250, google: 220 },
  { month: "Aug", facebook: 360, instagram: 285, google: 255 },
  { month: "Sep", facebook: 400, instagram: 320, google: 290 },
  { month: "Oct", facebook: 430, instagram: 350, google: 330 },
  { month: "Nov", facebook: 470, instagram: 390, google: 370 },
  { month: "Dec", facebook: 520, instagram: 430, google: 410 },
];

export default function CampaignPerformanceChart() {
  return (
    <ChartCard
      title="Campaign Performance"
      subtitle="Monthly marketing performance"
    >
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="facebookFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="instagramFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EC4899" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="googleFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            stroke="#94A3B8"
          />

          <YAxis stroke="#94A3B8" />

          <Tooltip
            contentStyle={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="facebook"
            stroke="#3B82F6"
            fill="url(#facebookFill)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="instagram"
            stroke="#EC4899"
            fill="url(#instagramFill)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="google"
            stroke="#10B981"
            fill="url(#googleFill)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}