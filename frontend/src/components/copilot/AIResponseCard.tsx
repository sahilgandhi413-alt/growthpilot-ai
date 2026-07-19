import {
  TrendingUp,
  Boxes,
  Users,
  Megaphone,
  CheckCircle,
} from "lucide-react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  type:
    | "forecast"
    | "inventory"
    | "customer"
    | "marketing";
}

export default function AIResponseCard({
  title,
  value,
  subtitle,
  type,
}: Props) {
  const config = {
    forecast: {
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    inventory: {
      icon: Boxes,
      color: "from-green-500 to-emerald-500",
    },
    customer: {
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    marketing: {
      icon: Megaphone,
      color: "from-orange-500 to-red-500",
    },
  };

  const Icon = config[type].icon;

  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">

      <div
        className={`h-1 bg-gradient-to-r ${config[type].color}`}
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-400">
              {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {value}
            </h2>

          </div>

          <div
            className={`rounded-2xl bg-gradient-to-br ${config[type].color} p-4`}
          >
            <Icon className="text-white" size={28} />
          </div>

        </div>

        <div className="mt-6 flex items-center gap-2">

          <CheckCircle
            size={18}
            className="text-green-400"
          />

          <span className="text-slate-300">
            {subtitle}
          </span>

        </div>

      </div>

    </div>
  );
}