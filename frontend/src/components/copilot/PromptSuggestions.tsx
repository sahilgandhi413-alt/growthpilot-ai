import {
  BarChart3,
  Package,
  Megaphone,
  Users,
  Brain,
  TrendingUp,
} from "lucide-react";

const prompts = [
  {
    icon: BarChart3,
    text: "Analyze Revenue",
  },
  {
    icon: Package,
    text: "Inventory Report",
  },
  {
    icon: Users,
    text: "Customer Insights",
  },
  {
    icon: Megaphone,
    text: "Marketing ROI",
  },
  {
    icon: TrendingUp,
    text: "Sales Forecast",
  },
  {
    icon: Brain,
    text: "Business Health",
  },
];

export default function PromptSuggestions() {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Suggested Prompts
      </h2>

      <div className="flex flex-wrap gap-4">

        {prompts.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.text}
              className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
            >

              <Icon size={18}/>

              {item.text}

            </button>

          );

        })}

      </div>

    </div>
  );
}