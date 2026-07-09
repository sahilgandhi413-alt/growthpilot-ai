import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingCart,
  BadgeIndianRupee,
  Users,
  Download,
  Sparkles,
} from "lucide-react";

import ForecastChart from "./ForecastChart";

const tabs = [
  {
    label: "Revenue",
    icon: BadgeIndianRupee,
  },
  {
    label: "Orders",
    icon: ShoppingCart,
  },
  {
    label: "Profit",
    icon: TrendingUp,
  },
  {
    label: "Customers",
    icon: Users,
  },
];

export default function ForecastTabs() {
  const [active, setActive] = useState("Revenue");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-indigo-950
      p-6
      shadow-2xl
      "
    >
      {/* Header */}

      <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Forecast Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Compare predictions across key business metrics
          </p>

        </div>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-indigo-500/20
          bg-indigo-500/10
          px-5
          py-3
          text-base
          font-semibold
          text-indigo-300
          transition
          hover:bg-indigo-500/20
          "
        >
          <Download size={18} />
          Export Report
        </button>

      </div>

      {/* Tabs */}

      <div className="mb-8 flex flex-wrap gap-3">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`
              flex
              items-center
              gap-2
              rounded-2xl
              px-5
              py-3
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active === tab.label
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-700 bg-slate-900/60 text-slate-400 hover:border-indigo-500/40 hover:text-white"
              }
              `}
            >
              <Icon size={18} />

              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Chart */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
        <ForecastChart />
      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-2">
          <Sparkles
            size={16}
            className="text-indigo-400"
          />

          AI updates every 15 minutes
        </div>

        <div className="flex items-center gap-6">

          <span>
            Last Updated • 11:48 AM
          </span>

          <span className="text-emerald-400">
            ● Live Forecast
          </span>

        </div>

      </div>

    </motion.div>
  );
}