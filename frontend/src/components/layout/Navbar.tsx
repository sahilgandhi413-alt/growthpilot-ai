import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  Search,
  Settings,
  UserCircle2,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";

import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();

  const [search, setSearch] = useState("");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard Overview",
    "/forecast": "Sales Forecasting",
    "/inventory": "Inventory Management",
    "/customers": "Customer Analytics",
    "/marketing": "Marketing Insights",
    
    "/settings": "Application Settings",
  };

  const subtitle =
    pageTitles[location.pathname] ??
    "AI Powered Business Intelligence Platform";

  function handleSearch(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key !== "Enter") return;

    const value = search.toLowerCase().trim();

    switch (value) {
      case "dashboard":
        navigate("/dashboard");
        break;

      case "forecast":
        navigate("/forecast");
        break;

      case "inventory":
        navigate("/inventory");
        break;

      case "customers":
        navigate("/customers");
        break;

      case "marketing":
        navigate("/marketing");
        break;

      

      case "settings":
        navigate("/settings");
        break;

      default:
        toast.error("No matching page found.");
        return;
    }

    setSearch("");
  }

  function handleLogout() {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  }

  const notifications = [
    {
      id: 1,
      title: "Forecast Generated",
      desc: "Q3 Sales Forecast completed.",
    },
    {
      id: 2,
      title: "Inventory Alert",
      desc: "Wireless Mouse stock is low.",
    },
    {
      id: 3,
      title: "New Customer",
      desc: "A new customer has registered.",
    },
    {
      id: 4,
      title: "AI Insight",
      desc: "GrowthPilot generated new recommendations.",
    },
  ];

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">

  <div className="flex h-full items-center justify-between px-8">

    {/* Left */}

    <div
      onClick={() => navigate("/dashboard")}
      className="cursor-pointer select-none"
    >
      <h1 className="text-3xl font-bold tracking-tight text-white">
        GrowthPilot
        <span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          AI
        </span>
      </h1>

      <p className="mt-1 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>

    {/* Right */}

    <div className="flex items-center gap-5">

      {/* Search */}

      <div className="relative hidden lg:block">

        <Search
          size={18}
          className="absolute left-4 top-3.5 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search dashboard, forecast, inventory..."
          className="
            w-80
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/80
            py-3
            pl-11
            pr-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
          "
        />

      </div>

      
            {/* Notifications */}

      <div className="relative">

        <button
          onClick={() =>
            setShowNotifications(!showNotifications)
          }
          className="
            relative
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-3
            transition
            hover:border-blue-500
          "
        >
          <Bell className="text-slate-300" />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
        </button>

        {showNotifications && (

          <div
            className="
              absolute
              right-0
              mt-4
              w-96
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              shadow-2xl
              overflow-hidden
            "
          >

            <div className="border-b border-slate-700 px-5 py-4">

              <h3 className="font-bold text-white">
                Notifications
              </h3>

              <p className="text-xs text-slate-400">
                Latest updates
              </p>

            </div>

            {notifications.map((item) => (

              <div
                key={item.id}
                className="
                  border-b
                  border-slate-800
                  px-5
                  py-4
                  hover:bg-slate-800
                  transition
                  cursor-pointer
                "
              >

                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Settings */}

      <button
        onClick={() => navigate("/settings")}
        className="
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-3
          transition
          hover:border-indigo-500
        "
      >
        <Settings className="text-slate-300" />
      </button>

      {/* Profile */}

      <div className="relative">

        <button
          onClick={() =>
            setShowProfile(!showProfile)
          }
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            px-4
            py-2
            transition
            hover:border-blue-500
          "
        >

          <UserCircle2
            size={42}
            className="text-blue-400"
          />

          <div className="hidden xl:block text-left">

            <h3 className="font-semibold text-white">
              {user?.name ?? "Sahil Gandhi"}
            </h3>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>
                {showProfile && (

          <div
            className="
              absolute
              right-0
              mt-4
              w-72
              overflow-hidden
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              shadow-2xl
            "
          >

            <div className="border-b border-slate-700 p-5">

              <div className="flex items-center gap-4">

                <UserCircle2
                  size={50}
                  className="text-blue-400"
                />

                <div>

                  <h3 className="font-semibold text-white">
                    {user?.name ?? "Sahil Gandhi"}
                  </h3>

                  <p className="text-sm text-slate-400">
                    Administrator
                  </p>

                </div>

              </div>

            </div>

            <button
              onClick={() => {
                setShowProfile(false);
                navigate("/settings");
              }}
              className="
                flex
                w-full
                items-center
                gap-3
                px-5
                py-4
                text-left
                text-slate-300
                transition
                hover:bg-slate-800
              "
            >

              <User size={18} />

              My Profile

            </button>

            <button
              onClick={() => {
                setShowProfile(false);
                navigate("/settings");
              }}
              className="
                flex
                w-full
                items-center
                gap-3
                px-5
                py-4
                text-left
                text-slate-300
                transition
                hover:bg-slate-800
              "
            >

              <Settings size={18} />

              Settings

            </button>

            <button
              onClick={handleLogout}
              className="
                flex
                w-full
                items-center
                gap-3
                border-t
                border-slate-700
                px-5
                py-4
                text-left
                text-red-400
                transition
                hover:bg-red-500/10
              "
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        )}

      </div>

    </div>

  </div>

</header>

  );
}