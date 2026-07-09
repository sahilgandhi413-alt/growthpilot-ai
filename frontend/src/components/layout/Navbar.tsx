import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-xl font-bold text-white">
          GrowthPilot AI
        </h1>

        <p className="text-sm text-slate-400">
          AI Business Intelligence Dashboard
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-white outline-none w-64"
          />
        </div>

        <button className="relative">
          <Bell className="text-slate-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <UserCircle2 size={34} className="text-indigo-400" />
      </div>
    </header>
  );
}