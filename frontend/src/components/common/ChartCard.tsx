import SectionHeader from "./SectionHeader";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-7 shadow-xl">

      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      {children}

    </div>
  );
}