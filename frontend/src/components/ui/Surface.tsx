import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Surface({
  children,
  className,
  hover = true,
  glow = true,
}: SurfaceProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.25 }}
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        "border border-slate-800",
        "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950",
        "shadow-2xl",
        className
      )}
    >
      {glow && (
        <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-indigo-500/10 blur-[100px]" />
      )}

      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}