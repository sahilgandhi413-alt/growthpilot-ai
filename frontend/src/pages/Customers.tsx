import CustomerHeader from "../components/Customers/CustomerHeader";
import CustomerToolbar from "../components/Customers/CustomerToolbar";
import CustomerStats from "../components/Customers/CustomerStats";
import CustomerGrowthChart from "../components/Customers/CustomerGrowthChart";
import CustomerSegmentChart from "../components/Customers/CustomerSegmentChart";
import CustomerAIInsights from "../components/Customers/CustomerAIInsights";
import CustomerTable from "../components/Customers/CustomerTable";
import CustomerLoyalty from "../components/Customers/CustomerLoyalty";
import CustomerActivity from "../components/Customers/CustomerActivity";
import CustomerFloatingAI from "../components/Customers/CustomerFloatingAI";

export default function Customers() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Glow */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-24 -left-24 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />

      </div>

      <main className="relative mx-auto max-w-[1700px] px-8 py-8 space-y-8">

        {/* Header */}

        <CustomerHeader />

        {/* Toolbar */}

        <CustomerToolbar />

        {/* KPI Cards */}

        <CustomerStats />

        {/* Charts */}

        <section className="grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <CustomerGrowthChart />
          </div>

          <CustomerSegmentChart />

        </section>

        {/* AI Insights */}

        <CustomerAIInsights />

        {/* Customer Directory */}

        <CustomerTable />

        {/* Bottom Section */}

        <section className="grid gap-8 lg:grid-cols-2">

          <CustomerLoyalty />

          <CustomerActivity />

        </section>

      </main>

      {/* Floating AI */}

      <CustomerFloatingAI />
    </div>
  );
}