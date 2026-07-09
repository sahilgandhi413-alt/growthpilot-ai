import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`
        rounded-3xl
        border border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        shadow-xl
        transition-all
        duration-300
        hover:border-indigo-500/60
        hover:shadow-indigo-500/10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}