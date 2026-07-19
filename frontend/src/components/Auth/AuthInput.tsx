import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({
  label,
  ...props
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
      />

    </div>
  );
}