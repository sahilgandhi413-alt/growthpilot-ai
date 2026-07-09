import { motion } from "framer-motion";
import {
  ShoppingBag,
  UserPlus,
  CreditCard,
  Star,
} from "lucide-react";

const activity = [
  {
    icon: ShoppingBag,
    color: "text-cyan-400",
    title: "Rahul Sharma placed an order",
    time: "2 min ago",
  },
  {
    icon: UserPlus,
    color: "text-green-400",
    title: "New customer registered",
    time: "10 min ago",
  },
  {
    icon: CreditCard,
    color: "text-indigo-400",
    title: "Payment received",
    time: "28 min ago",
  },
  {
    icon: Star,
    color: "text-yellow-400",
    title: "Priya Patel became VIP",
    time: "1 hour ago",
  },
];

export default function CustomerActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <p className="mt-1 text-slate-400">
        Latest customer events
      </p>

      <div className="mt-8 space-y-5">

        {activity.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800">

                <Icon
                  className={item.color}
                  size={22}
                />

              </div>

              <div className="flex-1">

                <p className="font-medium text-white">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </motion.div>
  );
}