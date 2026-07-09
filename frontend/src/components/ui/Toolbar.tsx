import type { ReactNode } from "react";
import Surface from "./Surface";

interface Props {
  left: ReactNode;
  right?: ReactNode;
}

export default function Toolbar({
  left,
  right,
}: Props) {
  return (
    <Surface
      className="
      p-5
      flex
      justify-between
      items-center
      "
      hover={false}
    >

      <div className="flex items-center gap-4">

        {left}

      </div>

      <div className="flex items-center gap-4">

        {right}

      </div>

    </Surface>
  );
}