import {
  CalendarClock,
  AlertTriangle,
  PackagePlus,
  Brain,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const forecast = [
  {
    product: "MacBook Pro M4",
    days: 2,
    priority: "High",
    quantity: 35,
    confidence: "98%",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  {
    product: "Gaming Mouse",
    days: 5,
    priority: "Medium",
    quantity: 60,
    confidence: "94%",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  {
    product: "Office Chair",
    days: 9,
    priority: "Low",
    quantity: 20,
    confidence: "91%",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
];

export default function InventoryRestockForecast() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-indigo-600 p-3">

            <CalendarClock
              className="text-white"
              size={22}
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Restock Forecast
            </h2>

            <p className="text-sm text-slate-400">
              Predicted inventory shortages
            </p>

          </div>

        </div>

        <div className="rounded-full bg-indigo-500/20 px-4 py-2 text-indigo-400 text-sm">

          Next 10 Days

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-8 space-y-5">

        {forecast.map((item) => (

          <motion.div
            key={item.product}
            whileHover={{
              scale: 1.01,
            }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >

            <div className="flex items-start justify-between">

              <div>

                <h3 className="text-lg font-semibold text-white">

                  {item.product}

                </h3>

                <p className="mt-1 text-sm text-slate-500">

                  Estimated stock depletion in

                  <span className="ml-1 font-semibold text-white">

                    {item.days} days

                  </span>

                </p>

              </div>

              <span
                className={`rounded-full border px-3 py-1 text-sm font-semibold ${item.color}`}
              >
                {item.priority}
              </span>

            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-slate-800 p-4">

                <div className="flex items-center gap-2 text-slate-400">

                  <PackagePlus size={16} />

                  Reorder

                </div>

                <p className="mt-2 text-xl font-bold text-white">

                  {item.quantity}

                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <div className="flex items-center gap-2 text-slate-400">

                  <AlertTriangle size={16} />

                  Priority

                </div>

                <p className="mt-2 text-xl font-bold text-white">

                  {item.priority}

                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <div className="flex items-center gap-2 text-slate-400">

                  <Brain size={16} />

                  AI Confidence

                </div>

                <p className="mt-2 text-xl font-bold text-indigo-400">

                  {item.confidence}

                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom Summary */}

      <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold text-white">

              AI Summary

            </h3>

            <p className="mt-2 text-sm text-slate-300 leading-6">

              Based on historical sales and inventory trends,
              Electronics should be replenished first.
              AI predicts a 97% probability of stock shortage
              within the next week if no purchase orders are created.

            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-700 transition">

            Create Purchase Order

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}