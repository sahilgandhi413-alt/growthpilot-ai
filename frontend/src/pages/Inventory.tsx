import { useEffect, useState } from "react";

import InventoryCards from "../components/inventory/InventoryCards";
import InventoryChart from "../components/inventory/InventoryChart";
import InventoryTable from "../components/inventory/InventoryTable";
import InventoryAlerts from "../components/inventory/InventoryAlerts";
import InventorySummary from "../components/inventory/InventorySummary";
import FloatingAI from "../components/inventory/FloatingAI";
import InventoryRecommendations from "../components/inventory/InventoryRecommendations";

import {
  getInventorySummary,
  getInventoryTable,
  getInventoryChart,
  getInventoryAlerts,
  getInventoryAISummary,
  getRestockPanel,
} from "../services/inventoryService";

export default function Inventory() {
  const [summary, setSummary] = useState<any>(null);
  const [table, setTable] = useState<any[]>([]);
  const [chart, setChart] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [aiSummary, setAiSummary] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  async function loadInventory(showRefresh = false) {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const [
        summaryData,
        tableData,
        chartData,
        alertsData,
        aiData,
        recommendationData,
      ] = await Promise.all([
        getInventorySummary(),
        getInventoryTable(),
        getInventoryChart(),
        getInventoryAlerts(),
        getInventoryAISummary(),
        getRestockPanel(),
      ]);

      setSummary(summaryData);
      setTable(tableData);
      setChart(chartData);
      setAlerts(alertsData);
      setAiSummary(aiData);
      setRecommendations(recommendationData);
    } catch (err) {
      console.error(err);
      setError("Failed to load inventory data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadInventory();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          <p className="mt-5 text-slate-400 text-lg">
            Loading Inventory...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-red-500/10 border border-red-500 p-10">
        <h2 className="text-2xl font-bold text-red-400">
          Something went wrong
        </h2>

        <p className="text-slate-300 mt-3">
          {error}
        </p>

        <button
          onClick={() => loadInventory()}
          className="mt-6 rounded-xl bg-red-500 px-6 py-3 text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Inventory Management
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor inventory health, stock levels and AI recommendations.
          </p>
        </div>

        <button
          onClick={() => loadInventory(true)}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>

      </div>

      {/* KPI Cards */}

      {summary && (
        <InventoryCards summary={summary} />
      )}

      {/* Chart + Alerts */}

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <InventoryChart data={chart} />
        </div>

        <InventoryAlerts alerts={alerts} />

      </div>

      {/* AI Recommendations */}

      <InventoryRecommendations
        recommendations={recommendations}
      />

      {/* Inventory Table */}

      <InventoryTable rows={table} />

      {/* AI Summary */}

      {aiSummary && (
        <InventorySummary summary={aiSummary} />
      )}

      {/* Export */}

      <FloatingAI/>

    </div>
  );
}