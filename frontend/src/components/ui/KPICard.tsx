import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Surface from "./Surface";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  positive?: boolean;
  footer?: string;
  children?: ReactNode;
}

export default function KPICard({
  title,
  value,
  icon,
  change,
  positive = true,
  footer,
  children,
}: KPICardProps) {
  return (
    <Surface className="p-6">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-400 text-sm">

            {title}

          </p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-4xl font-bold"
          >
            {value}
          </motion.h2>

        </div>

        <div className="h-14 w-14 rounded-2xl bg-indigo-600 flex items-center justify-center">

          {icon}

        </div>

      </div>

      {change && (

        <div className="mt-6 flex items-center justify-between">

          <span
            className={`text-sm font-semibold ${
              positive
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {change}
          </span>

          {footer && (

            <span className="text-xs text-slate-500">

              {footer}

            </span>

          )}

        </div>

      )}

      {children}

    </Surface>
  );
}