import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Sparkles,
  TrendingUp,
  Package,
  Megaphone,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ForecastInsightsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-indigo-950
      shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative p-7">
        {/* Header */}

        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
              <BrainCircuit
                className="text-indigo-400"
                size={28}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                AI Business Insights
              </h2>

              <p className="text-slate-400">
                Machine-generated forecast explanation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              96% Confidence
            </div>

            {open ? (
              <ChevronUp className="text-slate-300" />
            ) : (
              <ChevronDown className="text-slate-300" />
            )}
          </div>
        </div>

        {/* Summary */}

        <div className="mt-7 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">
          <div className="flex gap-3">
            <Sparkles
              className="mt-1 text-indigo-400"
              size={18}
            />

            <p className="text-slate-300 leading-7">
              Revenue is projected to grow by{" "}
              <span className="font-semibold text-white">
                18%
              </span>{" "}
              over the next month. Customer retention and
              seasonal demand are the primary growth drivers.
            </p>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden"
            >
              {/* Key Drivers */}

              <div className="mt-8">
                <h3 className="mb-5 text-xl font-semibold text-white">
                  Growth Drivers
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <TrendingUp className="mb-3 text-green-400" />
                    <h4 className="font-semibold text-white">
                      Electronics Demand
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Sales expected to increase by 24%.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Users className="mb-3 text-cyan-400" />
                    <h4 className="font-semibold text-white">
                      Repeat Customers
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Returning customer rate increased by 12%.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Package className="mb-3 text-yellow-400" />
                    <h4 className="font-semibold text-white">
                      Inventory
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Stock levels remain healthy for 12 days.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Megaphone className="mb-3 text-pink-400" />
                    <h4 className="font-semibold text-white">
                      Marketing ROI
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Campaign efficiency continues improving.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Recommendation */}

              <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Sparkles
                    className="text-indigo-400"
                    size={18}
                  />
                  AI Recommendation
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Increase inventory for Electronics by
                  <span className="font-semibold text-white">
                    {" "}
                    15%
                  </span>
                  , allocate an additional
                  <span className="font-semibold text-white">
                    {" "}
                    8%
                  </span>{" "}
                  marketing budget, and closely monitor the
                  Furniture category to maximize forecasted
                  revenue growth.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}