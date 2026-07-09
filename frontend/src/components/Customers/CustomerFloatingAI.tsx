import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerFloatingAI() {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_35px_rgba(6,182,212,.45)]"
    >
      <Bot
        size={30}
        className="text-white"
      />
    </motion.button>
  );
}