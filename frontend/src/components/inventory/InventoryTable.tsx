import { useMemo, useState } from "react";
import {
  Search,
  Package,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Boxes,
} from "lucide-react";

interface InventoryRow {
  product: string;
  category: string;
  stock: number;
  sold: number;
  revenue: number;
  status: "Healthy" | "Low" | "Critical";
}

interface Props {
  rows: InventoryRow[];
}

export default function InventoryTable({
  rows,
}: Props) {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const filteredRows = useMemo(() => {

    return rows.filter((row) => {

      const searchMatch =
        row.product
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        row.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" ||
        row.status === statusFilter;

      return searchMatch && statusMatch;

    });

  }, [rows, search, statusFilter]);

  const stats = useMemo(() => {

    return {

      total: rows.length,

      healthy: rows.filter(
        (r) => r.status === "Healthy"
      ).length,

      low: rows.filter(
        (r) => r.status === "Low"
      ).length,

      critical: rows.filter(
        (r) => r.status === "Critical"
      ).length,

    };

  }, [rows]);

  function badge(status: string) {

    switch (status) {

      case "Healthy":

        return (

          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">

            <CheckCircle2 size={16} />

            Healthy

          </span>

        );

      case "Low":

        return (

          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-4 py-2 text-sm font-semibold text-yellow-400">

            <AlertTriangle size={16} />

            Low

          </span>

        );

      default:

        return (

          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-400">

            <XCircle size={16} />

            Critical

          </span>

        );

    }

  }

  return (

    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 px-8 py-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4">

              <Boxes
                size={28}
                className="text-white"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Inventory Management

              </h2>

              <p className="mt-2 text-slate-400">

                Search products, monitor stock levels and manage inventory.

              </p>

            </div>

          </div>

          <div className="flex flex-col gap-3 md:flex-row">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />

              <input
                type="text"
                value={search}
                placeholder="Search products or category..."
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-72 rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500"
              />

            </div>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-white outline-none"
            >

              <option>All</option>
              <option>Healthy</option>
              <option>Low</option>
              <option>Critical</option>

            </select>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">

              Total Products

            </p>

            <h3 className="mt-3 text-3xl font-bold text-blue-400">

              {stats.total}

            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">

              Healthy

            </p>

            <h3 className="mt-3 text-3xl font-bold text-green-400">

              {stats.healthy}

            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">

              Low Stock

            </p>

            <h3 className="mt-3 text-3xl font-bold text-yellow-400">

              {stats.low}

            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">

              Critical

            </p>

            <h3 className="mt-3 text-3xl font-bold text-red-400">

              {stats.critical}

            </h3>

          </div>

        </div>

      </div>
            {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 z-10 bg-slate-800">

            <tr>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Product
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Category
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Stock
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Sold
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Revenue
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredRows.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-16 text-center"
                >

                  <Package
                    size={48}
                    className="mx-auto mb-4 text-slate-500"
                  />

                  <h3 className="text-xl font-semibold text-white">
                    No Matching Products
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Try changing your search or filter.
                  </p>

                </td>

              </tr>

            ) : (

              filteredRows.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-800 transition-all duration-300 hover:scale-[1.005] hover:bg-slate-800/60"
                >

                  <td className="px-6 py-5">

                    <div>

                      <h3 className="font-semibold text-white">
                        {row.product}
                      </h3>

                    </div>

                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.category}
                  </td>

                  <td className="px-6 py-5">

                    <span className="font-semibold text-white">
                      {row.stock}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <span className="font-semibold text-white">
                      {row.sold}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <span className="font-bold text-emerald-400">
                      ₹{Number(row.revenue).toLocaleString()}
                    </span>

                  </td>

                  <td className="px-6 py-5">
                    {badge(row.status)}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}