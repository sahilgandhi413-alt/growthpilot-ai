interface Props {
  text: string;
  color?: "green" | "yellow" | "red" | "blue";
}

export default function StatusBadge({
  text,
  color = "green",
}: Props) {
  const colors = {
    green:
      "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",

    yellow:
      "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",

    red:
      "bg-red-500/20 text-red-400 border-red-500/20",

    blue:
      "bg-indigo-500/20 text-indigo-400 border-indigo-500/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${colors[color]}`}
    >
      {text}
    </span>
  );
}