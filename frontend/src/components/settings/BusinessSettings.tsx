import {
  Building2,
  Globe,
  Clock3,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export default function BusinessSettings() {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Business Settings
      </h2>

      <div className="space-y-5">

        <SettingItem
          icon={Building2}
          label="Business Name"
          value="GrowthPilot AI"
        />

        <SettingItem
          icon={Landmark}
          label="Industry"
          value="E-Commerce"
        />

        <SettingItem
          icon={Globe}
          label="Currency"
          value="Indian Rupee (â‚¹)"
        />

        <SettingItem
          icon={Clock3}
          label="Timezone"
          value="Asia/Kolkata"
        />

      </div>

    </div>
  );
}

function SettingItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-violet-600/20 p-3">

          <Icon
            size={20}
            className="text-violet-400"
          />

        </div>

        <div>

          <p className="text-sm text-slate-400">
            {label}
          </p>

          <h4 className="font-semibold text-white">
            {value}
          </h4>

        </div>

      </div>

      <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white">
        Edit
      </button>

    </div>
  );
}

