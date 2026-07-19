import { useEffect, useState } from "react";

import ForecastCards from "../components/forecast/ForecastCards";
import ForecastChart from "../components/forecast/ForecastChart";
import PredictionTable from "../components/forecast/PredictionTable";
import ForecastSummary from "../components/forecast/ForecastSummary";
import ForecastFloatingAI from "../components/forecast/ForecastFloatingAI";
import {
  getForecastSummary,
  getForecastChart,
  getForecastPredictions,
  getForecastAISummary,
} from "../services/forecastService";

export default function Forecast() {
  const [summary, setSummary] = useState<any>(null);
  const [chart, setChart] = useState<any[]>([]);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [aiSummary, setAiSummary] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  async function loadForecast(showRefresh = false) {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const [
        summaryData,
        chartData,
        predictionData,
        aiData,
      ] = await Promise.all([
        getForecastSummary(),
        getForecastChart(),
        getForecastPredictions(),
        getForecastAISummary(),
      ]);

      setSummary(summaryData);
      setChart(chartData);
      setPredictions(predictionData);
      setAiSummary(aiData);
    } catch (err) {
      console.error(err);
      setError("Failed to load forecast data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadForecast();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          <p className="mt-5 text-slate-400 text-lg">
            Loading Forecast...
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

        <p className="mt-3 text-slate-300">{error}</p>

        <button
          onClick={() => loadForecast()}
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
            Sales Forecast
          </h1>

          <p className="mt-2 text-slate-400">
            AI-powered revenue and demand prediction dashboard.
          </p>
        </div>

        <button
          onClick={() => loadForecast(true)}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>

      </div>

      {/* KPI Cards */}

      {summary && <ForecastCards summary={summary} />}

      {/* Forecast Chart */}

      <ForecastChart data={chart} />

      {/* Prediction Table */}

      <PredictionTable rows={predictions} />

      {/* AI Summary */}

      {aiSummary && (
        <ForecastSummary summary={aiSummary} />
      )}
      <ForecastFloatingAI/>

    </div>
  );
}