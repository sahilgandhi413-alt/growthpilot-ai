import { type ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export default function ActionButton({
  icon,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      flex items-center gap-2
      rounded-xl
      bg-indigo-600
      px-5
      py-3
      font-medium
      text-white
      transition
      hover:bg-indigo-700
      active:scale-95
      "
    >
      {icon}
      {children}
    </button>
  );
}