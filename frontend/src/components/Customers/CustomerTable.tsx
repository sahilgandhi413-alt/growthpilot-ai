import { motion } from "framer-motion";
import {
  Search,
  MoreVertical,
  Crown,
  Star,
  User,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    orders: 128,
    spend: "₹2,84,000",
    status: "Active",
    segment: "VIP",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    phone: "+91 9876501234",
    orders: 84,
    spend: "₹1,72,500",
    status: "Active",
    segment: "Premium",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    phone: "+91 9898989898",
    orders: 32,
    spend: "₹64,900",
    status: "Inactive",
    segment: "Regular",
  },
  {
    id: 4,
    name: "Neha Shah",
    email: "neha@example.com",
    phone: "+91 9988776655",
    orders: 14,
    spend: "₹28,200",
    status: "New",
    segment: "New",
  },
];

export default function CustomerTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 border-b border-slate-800 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Customer Directory
          </h2>

          <p className="mt-1 text-slate-400">
            Manage customers and relationships
          </p>

        </div>

        <div className="relative w-full max-w-sm">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search customers..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-900/80">

            <tr className="text-left text-sm text-slate-400">

              <th className="px-8 py-5">Customer</th>
              <th className="px-6 py-5">Orders</th>
              <th className="px-6 py-5">Spend</th>
              <th className="px-6 py-5">Segment</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-t border-slate-800 transition hover:bg-slate-800/40"
              >
                {/* Customer */}

                <td className="px-8 py-6">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-lg font-bold text-white">

                      {customer.name.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">

                        {customer.name}

                      </h3>

                      <p className="text-sm text-slate-500">

                        {customer.email}

                      </p>

                      <p className="text-xs text-slate-600">

                        {customer.phone}

                      </p>

                    </div>

                  </div>

                </td>

                {/* Orders */}

                <td className="px-6 py-6 font-medium text-white">

                  {customer.orders}

                </td>

                {/* Spend */}

                <td className="px-6 py-6 font-semibold text-cyan-400">

                  {customer.spend}

                </td>

                {/* Segment */}

                <td className="px-6 py-6">

                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1">

                    {customer.segment === "VIP" && (
                      <Crown size={15} className="text-amber-400" />
                    )}

                    {customer.segment === "Premium" && (
                      <Star size={15} className="text-indigo-400" />
                    )}

                    {(customer.segment === "Regular" ||
                      customer.segment === "New") && (
                      <User size={15} className="text-cyan-400" />
                    )}

                    <span className="text-sm text-white">
                      {customer.segment}
                    </span>

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-6">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      customer.status === "Active"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : customer.status === "Inactive"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {customer.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-6 text-right">

                  <button className="rounded-xl p-2 transition hover:bg-slate-800">

                    <MoreVertical
                      size={18}
                      className="text-slate-400"
                    />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </motion.div>
  );
}