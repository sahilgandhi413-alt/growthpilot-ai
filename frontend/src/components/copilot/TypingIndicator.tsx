import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="mb-8 flex justify-start">

      <div className="flex max-w-4xl gap-4">

        {/* AI Avatar */}

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">

          <Bot
            size={22}
            className="text-white"
          />

        </div>

        {/* Bubble */}

        <div className="rounded-3xl border border-slate-700 bg-slate-800 px-6 py-5 shadow-xl">

          <div className="mb-3 font-semibold text-cyan-400">
            GrowthPilot AI
          </div>

          <div className="flex items-center gap-2">

            {[0, 1, 2].map((i) => (

              <motion.div
                key={i}
                className="h-3 w-3 rounded-full bg-cyan-400"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}