import { TrendingUp } from "lucide-react";
import StatBadge from "./StatBadge";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  color: string;
}

export default function KPICard({
  title,
  value,
  icon,
  change,
  color,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {value}
          </h2>

          {change && (
            <div className="mt-5 flex items-center gap-3">

              <StatBadge value={change} />

              <TrendingUp
                size={18}
                className="text-cyan-400"
              />

            </div>
          )}

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}