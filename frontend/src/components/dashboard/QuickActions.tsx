import {
  Upload,
  FileText,
  Bot,
  BarChart3,
  Package,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-2">
        ⚡ Quick Actions
      </h2>

      <p className="text-slate-400 mb-6">
        Frequently used actions
      </p>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 transition rounded-xl p-5 text-white flex flex-col items-center gap-3"
        >
          <Upload size={30} />
          <span>Upload CSV</span>
        </button>

        <button
          onClick={() => navigate("/forecast")}
          className="bg-green-600 hover:bg-green-700 transition rounded-xl p-5 text-white flex flex-col items-center gap-3"
        >
          <BarChart3 size={30} />
          <span>Forecast</span>
        </button>

        <button
          onClick={() => navigate("/copilot")}
          className="bg-purple-600 hover:bg-purple-700 transition rounded-xl p-5 text-white flex flex-col items-center gap-3"
        >
          <Bot size={30} />
          <span>AI Copilot</span>
        </button>

        <button
          onClick={() => navigate("/inventory")}
          className="bg-orange-600 hover:bg-orange-700 transition rounded-xl p-5 text-white flex flex-col items-center gap-3"
        >
          <Package size={30} />
          <span>Inventory</span>
        </button>

        <button
          className="bg-sky-600 hover:bg-sky-700 transition rounded-xl p-5 text-white flex flex-col items-center gap-3 col-span-2"
        >
          <FileText size={30} />
          <span>Export Business Report</span>
        </button>

      </div>

    </div>

  );
}