import {
  Lock,
  ShieldCheck,
  KeyRound,
  Monitor,
  ChevronRight,
} from "lucide-react";

const securityItems = [
  {
    title: "Change Password",
    description: "Update your account password",
    icon: Lock,
    color: "bg-red-500/20 text-red-400",
  },
  {
    title: "Two-Factor Authentication",
    description: "Extra layer of account security",
    icon: ShieldCheck,
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    title: "API Keys",
    description: "Manage API access tokens",
    icon: KeyRound,
    color: "bg-violet-500/20 text-violet-400",
  },
  {
    title: "Active Devices",
    description: "Manage logged in devices",
    icon: Monitor,
    color: "bg-cyan-500/20 text-cyan-400",
  },
];

export default function SecuritySettings() {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Security
      </h2>

      <div className="space-y-4">

        {securityItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-violet-500 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">

                <div className={`rounded-2xl p-3 ${item.color}`}>
                  <Icon size={22} />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>

              </div>

              <ChevronRight
                className="text-slate-500"
                size={20}
              />
            </button>
          );
        })}

      </div>

    </div>
  );
}