import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-6xl font-bold text-white">
            GrowthPilot AI
          </h1>

          <p className="mt-6 text-xl text-slate-300 leading-8">
            AI-powered business intelligence platform
            for forecasting, inventory management,
            customer analytics and marketing.
          </p>

          <div className="mt-10 space-y-4 text-slate-300">

            <p>📈 Sales Forecasting</p>

            <p>📦 Inventory Intelligence</p>

            <p>👥 Customer Analytics</p>

            <p>🤖 AI Business Copilot</p>

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10"
        >
          {children}
        </motion.div>

      </div>

    </div>
  );
}