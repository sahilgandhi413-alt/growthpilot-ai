import GlassCard from "./GlassCard";
import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <GlassCard className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </GlassCard>
  );
}