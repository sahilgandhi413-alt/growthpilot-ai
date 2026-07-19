import {
  LayoutDashboard,
  TrendingUp,
  Boxes,
  Users,
  Megaphone,
  Bot,
  Settings,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
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
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0B1120]">

      {/* Logo */}

      <div className="border-b border-slate-800 p-7">

        <div className="flex items-center gap-4">

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            via-blue-600
            to-indigo-700
            shadow-lg
            shadow-blue-600/30
          "
          >
            <Sparkles className="text-white" size={28} />
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              GrowthPilot
            </h1>

            <p className="text-sm text-slate-400">
              AI Business Suite
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-7 space-y-3">

        {links.map(({ title, path, icon: Icon }) => (

          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              `
              group
              flex
              items-center
              justify-between
              rounded-2xl
              px-5
              py-4
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }
            `
            }
          >
            <div className="flex items-center gap-4">

              <Icon size={22} />

              <span className="font-medium">
                {title}
              </span>

            </div>

            <ChevronRight
              size={18}
              className="opacity-0 transition group-hover:opacity-100"
            />

          </NavLink>

        ))}

      </nav>

      {/* AI Card */}

      <div className="p-5">

        <div
          className="
          rounded-3xl
          border
          border-blue-600/20
          bg-gradient-to-br
          from-blue-600/20
          to-indigo-700/20
          p-6
        "
        >

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-600 p-3">

              <Bot
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <h3 className="font-bold text-white">
                AI Copilot
              </h3>

              <p className="text-xs text-slate-400">
                Online
              </p>

            </div>

          </div>

          <p className="mt-5 text-sm leading-6 text-slate-300">
            Ask AI about sales trends, inventory,
            marketing performance and forecasts.
          </p>

          

        </div>

      </div>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-4">

          <img
            src="https://ui-avatars.com/api/?name=Sahil+Gandhi&background=2563eb&color=fff"
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />

          <div>

            <h4 className="font-semibold text-white">
              Sahil Gandhi
            </h4>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}