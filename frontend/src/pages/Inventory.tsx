import InventoryHeader from "../components/inventory/InventoryHeader";
import InventoryToolbar from "../components/inventory/InventoryToolbar";
import InventoryStats from "../components/inventory/InventoryStats";
import InventoryChart from "../components/inventory/InventoryChart";
import InventoryTable from "../components/inventory/InventoryTable";
import InventoryRecommendations from "../components/inventory/InventoryRecommendations";
import InventoryWarehouse from "../components/inventory/InventoryWarehouse";
import InventoryCategoryChart from "../components/inventory/InventoryCategoryChart";
import InventoryRestockForecast from "../components/inventory/InventoryRestockForecast";
import InventoryFloatingAI from "../components/inventory/InventoryFloatingAI";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Animated Background */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[170px]" />

        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[170px]" />

        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[170px]" />

      </div>

      <main className="relative mx-auto max-w-[1700px] px-8 py-8 pb-32 space-y-8">

        {/* Header */}

        <InventoryHeader />

        {/* Toolbar */}

        <InventoryToolbar />

        {/* KPI Cards */}

        <InventoryStats />

        {/* Main Analytics */}

        <section className="grid grid-cols-12 gap-8">

          {/* Left */}

          <div className="col-span-12 xl:col-span-8 space-y-8">

            <InventoryChart />

            <InventoryTable />

          </div>

          {/* Right */}

          <div className="col-span-12 xl:col-span-4 space-y-8">

            <InventoryRecommendations />

            <InventoryWarehouse />

          </div>

        </section>

        {/* Bottom Analytics */}

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <InventoryCategoryChart />

          <InventoryRestockForecast />

        </section>

      </main>

      {/* Floating AI */}

      <InventoryFloatingAI />

    </div>
  );
}