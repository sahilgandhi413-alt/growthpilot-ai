import BusinessReport from "../components/report/BusinessReport";


import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import { toast } from "react-hot-toast";
import { Upload } from "lucide-react";



import { uploadDataset } from "../services/uploadService";
import {
  Download,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import DashboardCards from "../components/dashboard/DashboardCards";
import RevenueChart from "../components/dashboard/RevenueChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";

import DataTable from "../components/common/DataTable";
import FadeIn from "../components/common/FadeIn";
import DashboardAI from "../components/dashboard/Dashboardai";

import {
  getDashboardSummary,
  getDashboardInsights,
  getRevenueChart,
  getCategoryChart,
  getRecentOrders,
} from "../services/dashboardApi";

export default function Dashboard() {
  const [summary, setSummary] = useState<any>(null);
  const [revenue, setRevenue] = useState([]);
  const [category, setCategory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [insights, setInsights] = useState<any>(null);
const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleExportPDF = () => {
  const doc = new jsPDF();

  // ==========================
  // Header
  // ==========================

  doc.setFontSize(22);
  doc.setTextColor(37, 99, 235);
  doc.text("GrowthPilot AI", 20, 20);

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Business Intelligence Report", 20, 32);

  doc.setFontSize(10);
  doc.setTextColor(100);

  doc.text(
    `Generated : ${new Date().toLocaleString()}`,
    20,
    42
  );

  doc.line(20, 48, 190, 48);

  // ==========================
  // Dashboard Summary
  // ==========================

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Dashboard Summary", 20, 60);

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);

  doc.text(
    `Revenue : ₹${Number(summary?.revenue ?? 0).toLocaleString()}`,
    25,
    74
  );

  doc.text(
    `Orders : ${summary?.orders ?? 0}`,
    25,
    84
  );

  doc.text(
    `Products : ${summary?.products ?? 0}`,
    25,
    94
  );

  doc.text(
    `Customers : ${summary?.customers ?? 0}`,
    25,
    104
  );

  // ==========================
  // Revenue Trend
  // ==========================

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Revenue Trend", 20, 122);

  doc.setFontSize(11);
  doc.setTextColor(0);

  let y = 134;

  revenue.forEach((item: any) => {
    doc.text(
      `${item.month} : ₹${Number(item.revenue).toLocaleString()}`,
      25,
      y
    );

    y += 8;
  });

  // ==========================
  // Category Sales
  // ==========================

  y += 6;

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Category Performance", 20, y);

  y += 12;

  doc.setFontSize(11);
  doc.setTextColor(0);

  category.forEach((item: any) => {
    doc.text(
      `${item.category} : ${item.sales}`,
      25,
      y
    );

    y += 8;
  });

  // ==========================
  // Recent Orders
  // ==========================

  y += 8;

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Latest Orders", 20, y);

  y += 12;

  doc.setFontSize(10);
  doc.setTextColor(0);

  orders.slice(0, 5).forEach((order: any) => {
    doc.text(
      `${order.customer} | ${order.product} | Qty ${order.quantity} | ₹${order.amount}`,
      25,
      y
    );

    y += 8;
  });

  // ==========================
  // AI Executive Summary
  // ==========================

  y += 10;

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("AI Executive Summary", 20, y);

  y += 10;

  doc.setFontSize(11);
  doc.setTextColor(0);

  const aiSummary =
    insights?.summary ??
    "No AI summary available.";

  const splitText = doc.splitTextToSize(
    aiSummary,
    165
  );

  doc.text(splitText, 25, y);

  // ==========================
  // Footer
  // ==========================

  doc.setFontSize(10);
  doc.setTextColor(120);

  doc.text(
    "Generated automatically by GrowthPilot AI",
    20,
    285
  );

  doc.save("GrowthPilot_Report.pdf");

  toast.success("Report exported successfully!");
};
  
    async function loadDashboard() {
  try {
    const [
      summaryData,
      revenueData,
      categoryData,
      ordersData,
      insightData,
    ] = await Promise.all([
      getDashboardSummary(),
      getRevenueChart(),
      getCategoryChart(),
      getRecentOrders(),
      getDashboardInsights(),
    ]);

    setSummary(summaryData);
    setRevenue(revenueData);
    setCategory(categoryData);
    setOrders(ordersData);
    setInsights(insightData);

  } catch (err) {
    console.error(err);
    toast.error("Failed to refresh dashboard.");
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
}

useEffect(() => {
  loadDashboard();
}, []);
const handleRefresh = async () => {
  setRefreshing(true);

  toast.loading("Refreshing dashboard...");

  await loadDashboard();

  toast.dismiss();

  toast.success("Dashboard updated!");
};
const handleUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.files || e.target.files.length === 0) return;

  const file = e.target.files[0];

  toast.loading("Uploading dataset...");

  try {
    await uploadDataset(file);

    toast.dismiss();

    toast.success("Dataset uploaded successfully!");

    await loadDashboard();

  } catch (err) {
    toast.dismiss();

    toast.error("Upload failed");
  }
};
  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">

        <div className="text-center">

          <div className="mx-auto mb-6 h-20 w-20 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <h2 className="text-2xl font-bold text-white">
            Loading Dashboard...
          </h2>

          <p className="mt-3 text-slate-400">
            Preparing your business insights...
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HERO */}

      <FadeIn>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600/10 via-slate-900 to-indigo-600/10 p-8">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <Sparkles className="text-blue-400" />

                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  AI Powered Analytics
                </span>

              </div>

              <h1 className="text-5xl font-bold text-white">
                Welcome Back 👋
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                Here's a complete overview of your sales,
                inventory, customer activity and AI business
                recommendations.
              </p>

            </div>

            <div className="flex gap-4">

     <button
  onClick={handleExportPDF}
  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
>
  <Download size={18} />
  Export Report
</button>       
<button
    onClick={() => fileInputRef.current?.click()}
    className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
>
    <Upload size={18} />
    Upload Dataset
</button>

<input
    ref={fileInputRef}
    type="file"
    hidden
    accept=".csv,.xlsx,.xls"
    onChange={handleUpload}
/>

              <button
  onClick={handleRefresh}
  disabled={refreshing}
  className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-white transition hover:bg-slate-800 disabled:opacity-50"
>
  <RefreshCw
    size={18}
    className={refreshing ? "animate-spin" : ""}
  />

  {refreshing ? "Refreshing..." : "Refresh"}
</button>

            </div>

          </div>

        </div>

      </FadeIn>

      {/* KPI */}

      <FadeIn delay={0.1}>
        <DashboardCards summary={summary} />
      </FadeIn>

      {/* CHARTS */}

      <FadeIn delay={0.2}>

        <div className="grid gap-8 lg:grid-cols-2">

          <RevenueChart data={revenue} />

          <CategoryChart data={category} />

        </div>

      </FadeIn>

      {/* AI */}

      <FadeIn delay={0.3}>
        <ExecutiveSummary insights={insights} />
      </FadeIn>

      {/* TABLE */}

      <FadeIn delay={0.4}>

        <DataTable
          columns={[
            {
              key: "id",
              label: "ID",
            },
            {
              key: "customer",
              label: "Customer",
            },
            {
              key: "product",
              label: "Product",
            },
            {
              key: "quantity",
              label: "Quantity",
            },
            {
              key: "amount",
              label: "Amount",
            },
            {
              key: "status",
              label: "Status",
            },
          ]}
          rows={orders}
        />

      </FadeIn>

      {/* EXPORT */}

      <DashboardAI/>
    <div
  style={{
    position: "absolute",
    left: "-9999px",
    top: 0,
  }}
>
  <BusinessReport
    summary={summary}
    revenue={revenue}
    category={category}
    insights={insights}
  />
  </div>
  

    </div>
  );
}  
