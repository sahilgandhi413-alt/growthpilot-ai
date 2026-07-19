import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {
  const location = useLocation();

  const isCopilot = location.pathname === "/copilot";

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex flex-1 flex-col overflow-hidden">

        <Navbar />

        {isCopilot ? (
          <main className="flex-1 overflow-hidden bg-[#020617]">
            <Outlet />
          </main>
        ) : (
          <main className="relative flex-1 overflow-y-auto bg-[#020617] p-8">

            {/* Background */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

              <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

              <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

            </div>

            <div className="relative z-10">
              <Outlet />
            </div>

          </main>
        )}

      </div>

    </div>
  );
}