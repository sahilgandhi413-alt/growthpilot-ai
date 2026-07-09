import {
  LayoutDashboard,
  TrendingUp,
  Boxes,
  Users,
  Megaphone,
  Bot,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Forecast",
    path: "/forecast",
    icon: TrendingUp,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Boxes,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    title: "Marketing",
    path: "/marketing",
    icon: Megaphone,
  },
  {
    title: "AI Copilot",
    path: "/copilot",
    icon: Bot,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold text-indigo-400">
          GrowthPilot
        </h1>
      </div>

      <nav className="flex-1 p-5 space-y-2">
        {links.map(({ title, path, icon: Icon }) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={20} />
            {title}
          </NavLink>
        ))}
      </nav>

      <div className="p-5 border-t border-slate-800">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-white font-semibold">
            GrowthPilot Pro
          </p>

          <p className="text-slate-400 text-sm mt-2">
            AI powered analytics platform
          </p>
        </div>
      </div>
    </aside>
  );
}