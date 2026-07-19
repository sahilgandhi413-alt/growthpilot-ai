import { Search } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

interface Props {
  columns: Column[];
  rows: Record<string, any>[];
}

function StatusBadge({ status }: { status: string }) {
  const value = String(status).toLowerCase();

  if (value.includes("completed") || value.includes("delivered")) {
    return (
      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
        {status}
      </span>
    );
  }

  if (value.includes("pending")) {
    return (
      <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
        {status}
      </span>
    );
  }

  if (value.includes("cancel")) {
    return (
      <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
        {status}
      </span>
    );
  }

  return (
    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
      {status}
    </span>
  );
}

export default function DataTable({
  columns,
  rows,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest customer transactions
          </p>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />

          <input
            placeholder="Search orders..."
            className="w-64 rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-white outline-none transition focus:border-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-950">

            <tr>

              {columns.map((column) => (

                <th
                  key={column.key}
                  className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  {column.label}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {rows.length === 0 ? (

              <tr>

                <td
                  colSpan={columns.length}
                  className="py-20 text-center text-slate-500"
                >
                  No records available.
                </td>

              </tr>

            ) : (

              rows.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-800 transition-all duration-200 hover:bg-slate-800/50"
                >

                  {columns.map((column) => (

                    <td
                      key={column.key}
                      className="px-6 py-5 text-sm text-white"
                    >

                      {column.key === "status" ? (
                        <StatusBadge
                          status={row[column.key]}
                        />
                      ) : (
                        row[column.key]
                      )}

                    </td>

                  ))}

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-slate-800 p-5 text-sm text-slate-400">

        <span>
          Showing {rows.length} recent orders
        </span>

        <div className="flex gap-2">

          <button className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800">
            Previous
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Next
          </button>

        </div>

      </div>

    </div>
  );
}