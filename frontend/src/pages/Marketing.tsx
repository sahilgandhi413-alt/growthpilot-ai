import { useEffect, useState } from "react";
import { Megaphone, RefreshCw } from "lucide-react";

import MarketingCards from "../components/marketing/MarketingCards";
import MarketingChart from "../components/marketing/MarketingChart";
import ChannelChart from "../components/marketing/ChannelChart";
import CampaignTable from "../components/marketing/CampaignTable";
import MarketingInsights from "../components/marketing/MarketingInsights";
import FloatingAI from "../components/marketing/FloatingAI";

import {
  getMarketingSummary,
  getMarketingChart,
  getMarketingChannels,
  getCampaignTable,
  getMarketingInsights,
} from "../services/marketingService";

export default function Marketing() {

  const [summary, setSummary] = useState<any>(null);
  const [chart, setChart] = useState<any[]>([]);
  const [channels, setChannels] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  async function loadMarketing(refresh = false) {

    try {

      refresh ? setRefreshing(true) : setLoading(true);

      setError("");

      const [
        summaryData,
        chartData,
        channelData,
        campaignData,
        insightData,
      ] = await Promise.all([
        getMarketingSummary(),
        getMarketingChart(),
        getMarketingChannels(),
        getCampaignTable(),
        getMarketingInsights(),
      ]);

      setSummary(summaryData);
      setChart(chartData);
      setChannels(channelData);
      setCampaigns(campaignData);
      setInsights(insightData);

    } catch (err) {

      console.error(err);
      setError("Unable to load marketing analytics.");

    } finally {

      setLoading(false);
      setRefreshing(false);

    }

  }

  useEffect(() => {
    loadMarketing();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

          <h2 className="mt-6 text-xl font-semibold text-white">
            Loading Marketing Analytics
          </h2>

          <p className="mt-2 text-slate-400">
            Fetching campaign intelligence...
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

        <p className="mt-4 text-slate-300">
          {error}
        </p>

        <button
          onClick={() => loadMarketing()}
          className="mt-8 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
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

          <div className="rounded-2xl bg-gradient-to-br from-pink-600 to-orange-500 p-4 shadow-xl">

            <Megaphone
              size={28}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              Marketing Analytics
            </h1>

            <p className="mt-2 text-slate-400">
              AI-powered campaign performance and ROI dashboard.
            </p>

          </div>

        </div>

        <button
          onClick={() => loadMarketing(true)}
          disabled={refreshing}
          className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >

          <RefreshCw
            size={18}
            className={refreshing ? "animate-spin" : ""}
          />

          {refreshing ? "Refreshing..." : "Refresh"}

        </button>

      </div>

      {/* KPI Cards */}

      {summary && (
        <MarketingCards summary={summary} />
      )}

      {/* Charts */}

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <MarketingChart data={chart} />
        </div>

        <ChannelChart data={channels} />

      </div>

      {/* Campaign Table */}

      <CampaignTable rows={campaigns} />

      {/* AI */}

      {insights && (
        <MarketingInsights insights={insights} />
      )}

      {/* Export */}

      <FloatingAI/>

    </div>

  );

}