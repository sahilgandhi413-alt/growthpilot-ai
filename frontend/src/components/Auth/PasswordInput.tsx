import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PasswordInput({
  label,
  ...props
}: Props) {

  const [show, setShow] = useState(false);

  return (

    <div className="space-y-2">

      <label className="text-sm text-slate-300">
        {label}
      </label>

      <div className="relative">

        <input
          {...props}
          type={show ? "text" : "password"}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 pr-12 text-white outline-none transition focus:border-cyan-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
        >
          {show ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

    </div>

  );
}