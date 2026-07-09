import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MarketingFloatingAI() {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="group fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_20px_60px_rgba(99,102,241,.45)]"
    >
      <Bot
        size={30}
        className="text-white"
      />

      <Sparkles
        size={14}
        className="absolute right-2 top-2 text-yellow-300"
      />

      <div className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
        Ask Marketing AI
      </div>
    </motion.button>
  );
}