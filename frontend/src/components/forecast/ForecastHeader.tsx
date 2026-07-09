import { motion } from "framer-motion";
import {
  BrainCircuit,
  CalendarDays,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ForecastHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

        {/* Left */}

        <div>

          <div className="flex items-center gap-3">

            <div className="
            h-14
            w-14
            rounded-2xl
            bg-indigo-500/20
            border
            border-indigo-500/30
            flex
            items-center
            justify-center
            ">

              <BrainCircuit
                size={30}
                className="text-indigo-300"
              />

            </div>

            <div>

              <h1 className="text-4xl font-black text-white">

                AI Sales Forecast

              </h1>

              <p className="text-slate-400 mt-1">

                Predictive analytics powered by GrowthPilot AI

              </p>

            </div>

          </div>

          <p className="
          mt-6
          max-w-3xl
          leading-7
          text-slate-300
          ">

            Generate intelligent sales forecasts using machine learning,
            historical trends, seasonal demand, and inventory behaviour to
            help optimize business planning and revenue growth.

          </p>

        </div>

        {/* Right */}

        <div className="grid sm:grid-cols-2 gap-4">

          {/* Accuracy */}

          <div className="
          rounded-2xl
          border
          border-indigo-500/20
          bg-white/5
          backdrop-blur-xl
          p-5
          ">

            <div className="flex items-center gap-3">

              <Sparkles
                className="text-indigo-400"
              />

              <div>

                <p className="text-sm text-slate-400">

                  Model Accuracy

                </p>

                <h3 className="text-2xl font-bold text-white">

                  96.2%

                </h3>

              </div>

            </div>

          </div>

          {/* Updated */}

          <div className="
          rounded-2xl
          border
          border-emerald-500/20
          bg-white/5
          backdrop-blur-xl
          p-5
          ">

            <div className="flex items-center gap-3">

              <CalendarDays
                className="text-emerald-400"
              />

              <div>

                <p className="text-sm text-slate-400">

                  Last Updated

                </p>

                <h3 className="font-semibold text-white">

                  Today • 11:48 AM

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Badge */}

      <div className="
      relative
      mt-8
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-emerald-500/20
      bg-emerald-500/10
      px-5
      py-4
      ">

        <ShieldCheck
          className="text-emerald-400"
        />

        <div>

          <p className="font-semibold text-white">

            Forecast Status: Healthy

          </p>

          <p className="text-sm text-slate-400">

            AI confidence is high. Predictions are based on the latest
            business data and historical trends.

          </p>

        </div>

      </div>

    </motion.div>
  );
}