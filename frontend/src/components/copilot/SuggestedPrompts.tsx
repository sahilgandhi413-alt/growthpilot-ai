import {
  TrendingUp,
  Boxes,
  Users,
  Megaphone,
  BarChart3,
  Sparkles,
} from "lucide-react";

interface Props {
  onSelect: (prompt: string) => void;
}

export default function SuggestedPrompts({ onSelect }: Props) {
  const prompts = [
    {
      title: "Forecast Sales",
      prompt: "Predict next month's sales",
      icon: TrendingUp,
    },
    {
      title: "Inventory",
      prompt: "Show inventory alerts",
      icon: Boxes,
    },
    {
      title: "Customers",
      prompt: "Analyze customer behaviour",
      icon: Users,
    },
    {
      title: "Marketing",
      prompt: "Show marketing performance",
      icon: Megaphone,
    },
    {
      title: "Dashboard",
      prompt: "Give business summary",
      icon: BarChart3,
    },
    {
      title: "Growth Tips",
      prompt: "How can I improve my business?",
      icon: Sparkles,
    },
  ];

  return (
    <div className="mt-12">

      <h3 className="mb-6 text-center text-lg font-semibold text-slate-300">
        Try asking GrowthPilot AI
      </h3>

      <div className="flex flex-wrap justify-center gap-4">

        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => onSelect(item.prompt)}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-slate-700
                bg-slate-900
                px-6
                py-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500
                hover:bg-slate-800
                hover:shadow-xl
                hover:shadow-cyan-500/20
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">

                <Icon
                  size={18}
                  className="text-white"
                />

              </div>

              <div className="text-left">

                <p className="font-semibold text-white">
                  {item.title}
                </p>

                <p className="text-xs text-slate-400">
                  {item.prompt}
                </p>

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}