import { useState } from "react";
import {
  Bell,
  Mail,
  Package,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: true,
    inventory: true,
    marketing: false,
    reports: true,
  });

  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Notifications
      </h2>

      <NotificationItem
        icon={Mail}
        title="Email Notifications"
        checked={settings.email}
        onClick={() =>
          setSettings({
            ...settings,
            email: !settings.email,
          })
        }
      />

      <NotificationItem
        icon={Package}
        title="Inventory Alerts"
        checked={settings.inventory}
        onClick={() =>
          setSettings({
            ...settings,
            inventory: !settings.inventory,
          })
        }
      />

      <NotificationItem
        icon={Megaphone}
        title="Marketing Updates"
        checked={settings.marketing}
        onClick={() =>
          setSettings({
            ...settings,
            marketing: !settings.marketing,
          })
        }
      />

      <NotificationItem
        icon={Bell}
        title="Weekly AI Reports"
        checked={settings.reports}
        onClick={() =>
          setSettings({
            ...settings,
            reports: !settings.reports,
          })
        }
      />

    </div>
  );
}

function NotificationItem({
  icon: Icon,
  title,
  checked,
  onClick,
}: {
  icon: LucideIcon;
  title: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-cyan-500/20 p-3">

          <Icon
            className="text-cyan-400"
            size={20}
          />

        </div>

        <span className="font-medium text-white">
          {title}
        </span>

      </div>

      <button
        onClick={onClick}
        className={`relative h-7 w-14 rounded-full transition ${
          checked
            ? "bg-cyan-500"
            : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked
              ? "left-8"
              : "left-1"
          }`}
        />
      </button>

    </div>
  );
}

