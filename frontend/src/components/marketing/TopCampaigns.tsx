import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Target,
  IndianRupee,
} from "lucide-react";

const campaigns = [
  {
    name: "Summer Sale 2026",
    revenue: "₹12.4L",
    roi: "412%",
    budget: "₹1.2L",
    progress: 92,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Electronics Festival",
    revenue: "₹8.7L",
    roi: "365%",
    budget: "₹96K",
    progress: 81,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Fashion Week",
    revenue: "₹6.3L",
    roi: "284%",
    budget: "₹74K",
    progress: 68,
    color: "from-emerald-500 to-green-500",
  },
];

export default function TopCampaigns() {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_70px_rgba(0,0,0,.35)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Top Campaigns
        </h2>

        <p className="mt-1 text-slate-400">
          Highest performing campaigns
        </p>
      </div>

      <div className="space-y-5">
        {campaigns.map((campaign) => (
          <motion.div
            key={campaign.name}
            whileHover={{
              y: -5,
              scale: 1.01,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-5 transition hover:border-violet-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {campaign.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Premium Campaign
                </p>
              </div>

              <div
                className={`rounded-xl bg-gradient-to-r ${campaign.color} px-3 py-2 text-white`}
              >
                <TrendingUp size={20} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">

              <div>
                <p className="text-xs text-slate-500">
                  Revenue
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <IndianRupee
                    size={16}
                    className="text-emerald-400"
                  />

                  <span className="font-bold text-white">
                    {campaign.revenue}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  ROI
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <ArrowUpRight
                    size={16}
                    className="text-cyan-400"
                  />

                  <span className="font-bold text-cyan-400">
                    {campaign.roi}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Budget
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Target
                    size={16}
                    className="text-violet-400"
                  />

                  <span className="font-bold text-white">
                    {campaign.budget}
                  </span>
                </div>
              </div>

            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                <span>Performance</span>

                <span>{campaign.progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${campaign.progress}%`,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${campaign.color}`}
                />
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}