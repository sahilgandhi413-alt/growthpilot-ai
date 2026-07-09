import { Moon, Sun, Monitor } from "lucide-react";
import { useState } from "react";

const themes = [
  {
    name: "Dark",
    icon: Moon,
  },
  {
    name: "Light",
    icon: Sun,
  },
  {
    name: "System",
    icon: Monitor,
  },
];

const colors = [
  "#6366F1",
  "#06B6D4",
  "#10B981",
  "#8B5CF6",
  "#F97316",
];

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("Dark");
  const [accent, setAccent] = useState(colors[0]);

  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <h2 className="mb-7 text-2xl font-bold text-white">
        Appearance
      </h2>

      <p className="mb-5 text-slate-400">
        Theme
      </p>

      <div className="grid grid-cols-3 gap-4">

        {themes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setTheme(item.name)}
              className={`rounded-2xl border p-5 transition ${
                theme === item.name
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              <Icon
                className="mx-auto text-white"
                size={26}
              />

              <p className="mt-3 text-white">
                {item.name}
              </p>

            </button>
          );
        })}

      </div>

      <div className="mt-8">

        <p className="mb-4 text-slate-400">
          Accent Color
        </p>

        <div className="flex gap-4">

          {colors.map((color) => (

            <button
              key={color}
              onClick={() => setAccent(color)}
              style={{
                background: color,
              }}
              className={`h-12 w-12 rounded-full transition ${
                accent === color
                  ? "ring-4 ring-white"
                  : ""
              }`}
            />

          ))}

        </div>

      </div>

    </div>
  );
}