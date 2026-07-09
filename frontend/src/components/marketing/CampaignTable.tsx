import { motion } from "framer-motion";
import {
  MoreVertical,
  Search,
  PlayCircle,
  PauseCircle,
  TrendingUp,
} from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2026",
    platform: "Google Ads",
    budget: "₹1,20,000",
    conversions: 1240,
    roi: "412%",
    audience: "148K",
    status: "Running",
  },
  {
    id: 2,
    name: "Monsoon Fashion",
    platform: "Meta Ads",
    budget: "₹92,000",
    conversions: 845,
    roi: "286%",
    audience: "102K",
    status: "Running",
  },
  {
    id: 3,
    name: "Furniture Festival",
    platform: "Instagram",
    budget: "₹76,000",
    conversions: 492,
    roi: "194%",
    audience: "74K",
    status: "Paused",
  },
  {
    id: 4,
    name: "Electronics Week",
    platform: "Email",
    budget: "₹42,000",
    conversions: 338,
    roi: "161%",
    audience: "58K",
    status: "Completed",
  },
];

export default function CampaignTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[0_20px_70px_rgba(0,0,0,.35)] overflow-hidden"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 border-b border-slate-800 p-7 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Campaign Performance
          </h2>

          <p className="mt-1 text-slate-400">
            Monitor all active marketing campaigns
          </p>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search campaign..."
            className="h-11 w-72 rounded-xl border border-slate-800 bg-slate-950 pl-11 pr-4 text-white outline-none focus:border-violet-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr className="text-left text-sm text-slate-400">

              <th className="px-6 py-4">Campaign</th>
              <th>Platform</th>
              <th>Budget</th>
              <th>Conversions</th>
              <th>ROI</th>
              <th>Audience</th>
              <th>Status</th>
              <th></th>

            </tr>

          </thead>

          <tbody>

            {campaigns.map((item) => (

              <tr
                key={item.id}
                className="border-t border-slate-800 transition hover:bg-slate-900/60"
              >

                <td className="px-6 py-5">

                  <div>

                    <p className="font-semibold text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Campaign #{item.id}
                    </p>

                  </div>

                </td>

                <td>

                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
                    {item.platform}
                  </span>

                </td>

                <td className="font-medium text-white">
                  {item.budget}
                </td>

                <td className="text-slate-300">
                  {item.conversions.toLocaleString()}
                </td>

                <td>

                  <div className="flex items-center gap-2 text-emerald-400">

                    <TrendingUp size={16} />

                    {item.roi}

                  </div>

                </td>

                <td className="text-slate-300">
                  {item.audience}
                </td>

                <td>

                  {item.status === "Running" && (

                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">

                      <PlayCircle size={15} />

                      Running

                    </span>

                  )}

                  {item.status === "Paused" && (

                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-3 py-1 text-sm text-yellow-400">

                      <PauseCircle size={15} />

                      Paused

                    </span>

                  )}

                  {item.status === "Completed" && (

                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-400">

                      Completed

                    </span>

                  )}

                </td>

                <td>

                  <button className="rounded-lg p-2 hover:bg-slate-800">

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