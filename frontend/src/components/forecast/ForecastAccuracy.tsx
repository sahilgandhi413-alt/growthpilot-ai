import { BrainCircuit, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ForecastAccuracy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
      p-8
      shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20">

              <BrainCircuit
                size={28}
                className="text-indigo-400"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                Model Accuracy
              </h2>

              <p className="text-slate-400 mt-1">
                Machine Learning Performance Metrics
              </p>

            </div>

          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <span className="text-sm font-semibold text-emerald-400">
              Excellent
            </span>

          </div>

        </div>

        {/* Main Content */}

        <div className="mt-12 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div className="text-center">

            <h1 className="text-7xl font-extrabold text-emerald-400">
              94.8%
            </h1>

            <p className="mt-4 text-lg text-slate-400">
              Overall Forecast Accuracy
            </p>

            <div className="mt-10">

              <div className="mb-2 flex justify-between text-sm text-slate-500">

                <span>Model Performance</span>

                <span>95%</span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                />

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

              <p className="text-sm text-slate-400">
                Model
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Linear Regression
              </h3>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

              <p className="text-sm text-slate-400">
                MAE
              </p>

              <h3 className="mt-3 text-2xl font-bold text-indigo-400">
                2.1%
              </h3>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

              <p className="text-sm text-slate-400">
                RMSE
              </p>

              <h3 className="mt-3 text-2xl font-bold text-cyan-400">
                3.4%
              </h3>

            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

              <p className="text-sm text-slate-300">
                Status
              </p>

              <h3 className="mt-3 text-2xl font-bold text-emerald-400">
                Excellent
              </h3>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={22}
              className="text-emerald-400"
            />

            <p className="text-slate-300 leading-7">
              The forecasting model has exceeded the target accuracy threshold.
              Predictions remain highly reliable based on recent sales trends,
              seasonal demand, customer behaviour and inventory signals.
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}