  import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import KPIGrid from "../components/dashboard/KPIGrid";
import RevenueChart from "../components/dashboard/RevenueChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentOrders from "../components/dashboard/RecentOrders";
import InventoryAlerts from "../components/dashboard/InventoryAlert";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import FileUpload from "../components/common/FileUpload";
import ExportReport from "../components/common/ExportReport";

import { getDashboard } from "../services/dashboard";

interface DashboardData {
  revenue: number;
  orders: number;
  products: number;
  growth: number;
}

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardData>({
    revenue: 0,
    orders: 0,
    products: 0,
    growth: 0,
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  async function fetchDashboard() {
    try {
      setLoading(true);

      const data = await getDashboard();

      setDashboard({
        revenue: data.revenue ?? 0,
        orders: data.orders ?? 0,
        products: data.products ?? 0,
        growth: data.growth ?? 0,
      });

      setError("");
    } catch (err) {
      console.error(err);

      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>

          <p className="mt-5 text-lg text-slate-400">
            Loading Dashboard...
          </p>

        </div>

      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[80vh] items-center justify-center">

        <div className="rounded-3xl border border-red-500 bg-red-500/10 p-10">

          <h2 className="text-2xl font-bold text-red-400">
            Dashboard Error
          </h2>

          <p className="mt-3 text-slate-300">
            {error}
          </p>

          <button
            onClick={fetchDashboard}
            className="mt-6 rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
          >
            Retry
          </button>

        </div>

      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .45 }}
      className="mx-auto max-w-[1700px] space-y-8 px-8 py-8"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <DashboardHeader />

        <button
          onClick={fetchDashboard}
          className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          <RefreshCw size={18} />

          Refresh Dashboard

        </button>

      </div>

      {/* Upload */}

      <div className="grid gap-6 lg:grid-cols-2">

        <FileUpload />

        <ExportReport />

      </div>

      {/* KPI */}

      <KPIGrid data={dashboard} />

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <RevenueChart />

        </div>

        <CategoryChart />

      </div>

      {/* AI */}

      <AIInsights />

      {/* Tables */}

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentOrders />

        <InventoryAlerts />

      </div>

      {/* Activity */}

      <ActivityFeed />

    </motion.div>
  );
}         



