import ForecastHeader from "../components/forecast/ForecastHeader";
import ForecastToolbar from "../components/forecast/ForecastToolbar";
import ForecastExecutiveSummary from "../components/forecast/ForecastExecutiveSummary";
import ForecastSummary from "../components/forecast/ForecastSummary";
import ForecastTabs from "../components/forecast/ForecastTabs";
import ForecastInsightsDrawer from "../components/forecast/ForecastInsightsDrawer";
import ForecastGauge from "../components/forecast/ForecastGauge";
import ForecastScenario from "../components/forecast/ForecastScenario";
import ForecastRecommendation from "../components/forecast/ForecastRecommendation";
import ForecastAccuracy from "../components/forecast/ForecastAccuracy";
import ForecastRisk from "../components/forecast/ForecastRisk";
import ForecastFeatureImportance from "../components/forecast/ForecastFeatureImportance";
import ForecastComparisonTable from "../components/forecast/ForecastComparisonTable";
import ForecastCategoryPerformance from "../components/forecast/ForecastCategoryPerformance";
import ForecastFloatingAI from "../components/forecast/ForecastFloatingAI";

export default function Forecast() {
  return (
    <div className="min-h-screen bg-slate-950">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

      </div>

      <main className="relative mx-auto max-w-[1600px] space-y-8 px-6 py-8">

        {/* Header */}
        <ForecastHeader />

        {/* Toolbar */}
        <ForecastToolbar />

        {/* Executive Summary */}
        <ForecastExecutiveSummary />

        {/* KPI Cards */}
        <ForecastSummary />

        {/* ================= MAIN ANALYTICS ================= */}

        <section className="grid xl:grid-cols-3 gap-8">

          {/* Left */}

          <div className="xl:col-span-2 space-y-8">

            <ForecastTabs />

            <ForecastInsightsDrawer />

            <ForecastComparisonTable />

          </div>

          {/* Right */}

          <div className="space-y-8">

            <ForecastGauge value={96} />

            <ForecastScenario />

          </div>

        </section>

        {/* ================= FULL WIDTH AI RECOMMENDATION ================= */}

        <ForecastRecommendation />

        {/* ================= FULL WIDTH MODEL ACCURACY ================= */}

        <ForecastAccuracy />

        {/* ================= BOTTOM ANALYTICS ================= */}

        <section className="grid lg:grid-cols-2 gap-8">
          

          <ForecastRisk />

          <ForecastFeatureImportance />
          <ForecastCategoryPerformance />

        </section>

        

        

      </main>

      {/* Floating AI */}

      <ForecastFloatingAI />

    </div>
  );
}