import { useMemo, useState } from "react";
import {
  Search,
  Megaphone,
  CheckCircle2,
  PauseCircle,
  XCircle,
  MoreVertical,
} from "lucide-react";

interface Campaign {
  campaign: string;
  channel: string;
  spend: number;
  revenue: number;
  roi: number;
  ctr: number;
  status: "Active" | "Paused" | "Completed";
}

interface Props {
  rows?: Campaign[];
}

export default function CampaignTable({
  rows = [],
}: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const campaign = row.campaign ?? "";
      const channel = row.channel ?? "";

      const matchSearch =
        campaign.toLowerCase().includes(search.toLowerCase()) ||
        channel.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        status === "All" || row.status === status;

      return matchSearch && matchStatus;
    });
  }, [rows, search, status]);

  function badge(value: Campaign["status"]) {
    switch (value) {
      case "Active":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
            <CheckCircle2 size={15} />
            Active
          </span>
        );

      case "Paused":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
            <PauseCircle size={15} />
            Paused
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-sm font-medium text-slate-300">
            <XCircle size={15} />
            Completed
          </span>
        );
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
      {/* Header */}

      <div className="border-b border-slate-800 p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Campaign Performance
            </h2>

            <p className="mt-2 text-slate-400">
              Track marketing campaign ROI and conversions.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search campaign..."
                className="rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            >
              <option>All</option>
              <option>Active</option>
              <option>Paused</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-slate-300">
                Campaign
              </th>

              <th className="text-left text-slate-300">
                Channel
              </th>

              <th className="text-left text-slate-300">
                Spend
              </th>

              <th className="text-left text-slate-300">
                Revenue
              </th>

              <th className="text-left text-slate-300">
                ROI
              </th>

              <th className="text-left text-slate-300">
                CTR
              </th>

              <th className="text-left text-slate-300">
                Status
              </th>

              <th className="text-center text-slate-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-14 text-center text-slate-500"
                >
                  <Megaphone
                    size={40}
                    className="mx-auto mb-3"
                  />

                  No campaigns found.
                </td>
              </tr>
            ) : (
              filteredRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-800 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 font-semibold text-white">
                    {row.campaign}
                  </td>

                  <td className="text-slate-300">
                    {row.channel}
                  </td>

                  <td className="text-white">
                    ₹{Number(row.spend).toLocaleString()}
                  </td>

                  <td className="font-semibold text-green-400">
                    ₹{Number(row.revenue).toLocaleString()}
                  </td>

                  <td className="font-bold text-blue-400">
                    {row.roi}%
                  </td>

                  <td className="text-white">
                    {row.ctr}%
                  </td>

                  <td>{badge(row.status)}</td>

                  <td className="text-center">
                    <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-700 hover:text-white">
                      <MoreVertical size={18} />
                    </button>
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