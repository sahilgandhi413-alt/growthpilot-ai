export const theme = {
  page: {
    width: "max-w-[1800px]",
    padding: "px-10 py-10",
    gap: "space-y-10",
  },

  surface: {
    radius: "rounded-3xl",
    border: "border border-slate-800/80",
    background:
      "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950",
    shadow:
      "shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
    hover:
      "hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300",
  },

  section: {
    title: "text-2xl font-bold tracking-tight text-white",
    subtitle: "mt-1 text-sm text-slate-400",
  },

  card: {
    padding: "p-6",
    gap: "space-y-6",
  },

  icon: {
    wrapper:
      "h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-white/10",
  },

  chart: {
    height: "h-[360px]",
  },

  table: {
    padding: "p-6",
  },
};