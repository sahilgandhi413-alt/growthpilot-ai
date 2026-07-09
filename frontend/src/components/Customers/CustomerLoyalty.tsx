import { motion } from "framer-motion";
import {
  Crown,
  Medal,
  Award,
  TrendingUp,
} from "lucide-react";

const tiers = [
  {
    title: "VIP",
    customers: 426,
    growth: "+12%",
    icon: Crown,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Premium",
    customers: 812,
    growth: "+8%",
    icon: Award,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Regular",
    customers: 1608,
    growth: "+4%",
    icon: Medal,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function CustomerLoyalty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white">
        Loyalty Program
      </h2>

      <p className="mt-1 text-slate-400">
        Customer loyalty distribution
      </p>

      <div className="mt-8 space-y-5">

        {tiers.map((tier) => {
          const Icon = tier.icon;

          return (
            <div
              key={tier.title}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tier.bg}`}
                >
                  <Icon
                    className={tier.color}
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {tier.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {tier.customers.toLocaleString()} Customers
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">

                <TrendingUp size={16} />

                {tier.growth}

              </div>

            </div>
          );
        })}

      </div>
    </motion.div>
  );
}