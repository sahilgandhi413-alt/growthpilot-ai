import {
  Warehouse,
  Package,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const warehouses = [
  {
    name: "Warehouse A",
    city: "Mumbai",
    utilization: 92,
    products: 420,
    shipments: 18,
    status: "Healthy",
  },
  {
    name: "Warehouse B",
    city: "Delhi",
    utilization: 68,
    products: 315,
    shipments: 11,
    status: "Optimal",
  },
  {
    name: "Warehouse C",
    city: "Bangalore",
    utilization: 81,
    products: 513,
    shipments: 24,
    status: "Busy",
  },
];

export default function InventoryWarehouse() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">

      <div className="flex items-center gap-3 mb-6">

        <div className="rounded-2xl bg-indigo-600 p-3">

          <Warehouse className="text-white" size={22} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Warehouse Status
          </h2>

          <p className="text-sm text-slate-400">
            Live warehouse capacity and activity
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {warehouses.map((warehouse) => (

          <motion.div
            key={warehouse.name}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold text-white">
                  {warehouse.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {warehouse.city}
                </p>

              </div>

              <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">

                {warehouse.status}

              </div>

            </div>

            <div className="mt-5">

              <div className="flex justify-between text-sm">

                <span className="text-slate-400">
                  Capacity
                </span>

                <span className="font-semibold text-white">
                  {warehouse.utilization}%
                </span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-slate-800 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${warehouse.utilization}%`,
                  }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                />

              </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-800 p-3">

                <div className="flex items-center gap-2 text-slate-400">

                  <Package size={16} />

                  Products

                </div>

                <p className="mt-2 text-xl font-bold text-white">

                  {warehouse.products}

                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-3">

                <div className="flex items-center gap-2 text-slate-400">

                  <Truck size={16} />

                  Shipments

                </div>

                <p className="mt-2 text-xl font-bold text-white">

                  {warehouse.shipments}

                </p>

              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-emerald-400 text-sm">

              <CheckCircle2 size={18} />

              Warehouse operating normally

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}