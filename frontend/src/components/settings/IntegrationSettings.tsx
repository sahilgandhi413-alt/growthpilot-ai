import {
  ShoppingBag,
  BarChart3,
  Bot,
  Link2,
} from "lucide-react";

const integrations = [
  {
    name: "Shopify",
    connected: true,
    icon: ShoppingBag,
  },
  {
    name: "Google Analytics",
    connected: true,
    icon: BarChart3,
  },
  {
    name: "OpenAI",
    connected: true,
    icon: Bot,
  },
  {
    name: "Meta Ads",
    connected: false,
    icon: Link2,
  },
];

export default function IntegrationSettings() {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <h2 className="mb-7 text-2xl font-bold text-white">
        Integrations
      </h2>

      <div className="space-y-4">

        {integrations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-violet-500/20 p-3">

                  <Icon
                    size={22}
                    className="text-violet-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.connected
                      ? "Connected"
                      : "Not Connected"}
                  </p>

                </div>

              </div>

              <button
                className={`rounded-xl px-5 py-2 text-sm font-semibold ${
                  item.connected
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-slate-700 text-white"
                }`}
              >
                {item.connected
                  ? "Connected"
                  : "Connect"}
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}