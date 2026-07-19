interface Props {
  value: string;
  type?: "success" | "danger" | "warning";
}

export default function StatBadge({
  value,
  type = "success",
}: Props) {

  const colors = {
    success:
      "bg-emerald-500/20 text-emerald-400",

    danger:
      "bg-red-500/20 text-red-400",

    warning:
      "bg-amber-500/20 text-amber-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${colors[type]}`}
    >
      {value}
    </span>
  );
}