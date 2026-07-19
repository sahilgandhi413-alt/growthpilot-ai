import { useMemo, useState } from "react";
import {
  Search,
  Users,
  Crown,
  Star,
  Award,
} from "lucide-react";

interface Customer {
  customer: string;
  orders: number;
  revenue: number;
  lifetime_value: number;
  tier: "Platinum" | "Gold" | "Silver";
}

interface Props {
  rows: Customer[];
}

export default function CustomerTable({ rows }: Props) {
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      row.customer
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [rows, search]);

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-300 text-sm font-semibold">
            <Crown size={15} />
            Platinum
          </span>
        );

      case "Gold":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-300 text-sm font-semibold">
            <Award size={15} />
            Gold
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-slate-300 text-sm font-semibold">
            <Star size={15} />
            Silver
          </span>
        );
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Top Customers
            </h2>

            <p className="mt-2 text-slate-400">
              View customer performance and lifetime value.
            </p>
          </div>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left text-slate-300">
                Customer
              </th>

              <th className="text-left text-slate-300">
                Orders
              </th>

              <th className="text-left text-slate-300">
                Revenue
              </th>

              <th className="text-left text-slate-300">
                Lifetime Value
              </th>

              <th className="text-left text-slate-300">
                Tier
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredRows.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-14 text-center text-slate-500"
                >

                  <Users
                    size={40}
                    className="mx-auto mb-4"
                  />

                  No customers found.

                </td>

              </tr>

            ) : (

              filteredRows.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-800 transition hover:bg-slate-800/40"
                >

                  <td className="px-6 py-5 font-semibold text-white">
                    {row.customer}
                  </td>

                  <td className="text-white">
                    {row.orders}
                  </td>

                  <td className="font-semibold text-green-400">
                    ₹{Number(row.revenue).toLocaleString()}
                  </td>

                  <td className="font-semibold text-blue-400">
                    ₹{Number(row.lifetime_value).toLocaleString()}
                  </td>

                  <td>
                    {getTierBadge(row.tier)}
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