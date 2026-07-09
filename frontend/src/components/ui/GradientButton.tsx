import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      rounded-2xl
      bg-gradient-to-r
      from-indigo-600
      to-violet-600
      px-6
      py-3
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      hover:shadow-indigo-500/30
      "
    >
      {children}
    </button>
  );
}