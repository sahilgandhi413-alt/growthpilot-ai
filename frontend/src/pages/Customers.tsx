import { useEffect, useState } from "react";
import { Users, RefreshCw } from "lucide-react";

import CustomerCards from "../components/Customers/CustomerCards";
import CustomerChart from "../components/Customers/CustomerChart";
import CustomerTable from "../components/Customers/CustomerTable";
import CustomerInsights from "../components/Customers/CustomerInsights";
import CustomerFloatingAI from "../components/Customers/CustomerFloatingAI";
import {
  getCustomerSummary,
  getCustomerChart,
  getCustomerTable,
  getCustomerInsights,
} from "../services/customerService";

export default function Customers() {
  const [summary, setSummary] = useState<any>(null);
  const [chart, setChart] = useState<any[]>([]);
  const [table, setTable] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  async function loadCustomers(refresh = false) {
    try {
      if (refresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const [
        summaryData,
        chartData,
        tableData,
        insightData,
      ] = await Promise.all([
        getCustomerSummary(),
        getCustomerChart(),
        getCustomerTable(),
        getCustomerInsights(),
      ]);

      setSummary(summaryData);
      setChart(chartData);
      setTable(tableData);
      setInsights(insightData);
    } catch (err) {
      console.error(err);
      setError("Unable to load customer analytics.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

          <h2 className="mt-6 text-xl font-semibold text-white">
            Loading Customer Analytics
          </h2>

          <p className="mt-2 text-slate-400">
            Fetching customer intelligence...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500 bg-red-500/10 p-10">
        <h2 className="text-3xl font-bold text-red-400">
          Failed to Load Data
        </h2>

        <p className="mt-4 text-slate-300">{error}</p>

        <button
          onClick={() => loadCustomers()}
          className="mt-8 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 shadow-lg">
            <Users className="text-white" size={28} />
          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              Customer Analytics
            </h1>

            <p className="mt-2 text-slate-400">
              Analyze customer behaviour, loyalty and lifetime value using AI.
            </p>

          </div>

        </div>

        <button
          onClick={() => loadCustomers(true)}
          disabled={refreshing}
          className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
        >
          <RefreshCw
            size={18}
            className={refreshing ? "animate-spin" : ""}
          />

          {refreshing ? "Refreshing..." : "Refresh"}
        </button>

      </div>

      {/* KPI Cards */}

      {summary && <CustomerCards summary={summary} />}

      {/* Customer Growth */}

      <CustomerChart data={chart} />

      {/* Customer Table */}

      <CustomerTable rows={table} />

      {/* AI Insights */}

      {insights && (
        <CustomerInsights insights={insights} />
      )}
      <CustomerFloatingAI/>

    </div>
  );
}