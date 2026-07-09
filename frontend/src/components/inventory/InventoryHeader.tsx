import { motion } from "framer-motion";
import {
  Boxes,
  CalendarDays,
  PackageCheck,
} from "lucide-react";

export default function InventoryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-800 bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-blue-600
      p-8 shadow-xl"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4">

            <Boxes
              size={36}
              className="text-white"
            />

            <div>

              <h1 className="text-4xl font-bold text-white">
                Inventory Management
              </h1>

              <p className="mt-3 text-lg text-indigo-100">
                Monitor inventory, stock levels, warehouse performance and
                AI-powered inventory insights.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3">

            <PackageCheck
              size={22}
              className="text-white"
            />

            <div>

              <p className="text-sm text-indigo-100">
                Warehouse Status
              </p>

              <p className="font-semibold text-white">
                Healthy
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3">

            <CalendarDays
              size={20}
              className="text-white"
            />

            <div>

              <p className="text-sm text-indigo-100">
                Last Updated
              </p>

              <p className="font-semibold text-white">
                Today • 11:48 AM
              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}