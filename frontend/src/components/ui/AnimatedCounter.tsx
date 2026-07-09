import { useEffect, useState } from "react";

interface Props {
  value: number;
  prefix?: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
}: Props) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {

    let current = 0;

    const increment = value / 50;

    const timer = setInterval(() => {

      current += increment;

      if (current >= value) {

        setDisplay(value);

        clearInterval(timer);

      } else {

        setDisplay(Math.floor(current));

      }

    }, 20);

    return () => clearInterval(timer);

  }, [value]);

  return (
    <span>

      {prefix}

      {display.toLocaleString()}

    </span>
  );
}