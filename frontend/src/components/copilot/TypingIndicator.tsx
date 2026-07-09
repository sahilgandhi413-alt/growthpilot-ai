import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500">

        <Bot
          size={22}
          className="text-white"
        />

      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-4">

        <div className="flex gap-2">

          {[0, 1, 2].map((dot) => (

            <motion.div
              key={dot}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: dot * 0.2,
              }}
              className="h-2.5 w-2.5 rounded-full bg-violet-400"
            />

          ))}

        </div>

      </div>

    </div>
  );
}