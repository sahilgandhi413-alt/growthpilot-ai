interface Props {
  height?: number;
}

export default function LoadingSkeleton({
  height = 400,
}: Props) {
  return (
    <div
      style={{
        height,
      }}
      className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900"
    />
  );
}