import { Bot, Sparkles } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

      {/* AI Icon */}

      <div className="relative mb-8">

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/30">

          <Bot
            size={42}
            className="text-white"
          />

        </div>

      </div>

      {/* Badge */}

      <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">

        <Sparkles
          size={16}
          className="text-cyan-400"
        />

        <span className="text-sm font-medium text-cyan-300">
          AI Powered Business Intelligence
        </span>

      </div>

      {/* Heading */}

      <h1 className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent">
        GrowthPilot AI
      </h1>

      {/* Description */}

      <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">

        Your intelligent business assistant for
        <span className="text-white font-semibold"> Forecasting</span>,
        <span className="text-white font-semibold"> Inventory</span>,
        <span className="text-white font-semibold"> Customers</span>,
        <span className="text-white font-semibold"> Marketing</span>,
        and strategic business insights.

      </p>

      {/* Divider */}

      <div className="mt-12 h-px w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

    </div>
  );
}