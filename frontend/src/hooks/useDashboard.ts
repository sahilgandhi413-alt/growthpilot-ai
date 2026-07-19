import { useEffect, useState } from "react";

import {
  getDashboardSummary,
  getRevenueChart,
  getCategoryChart,
  getRecentOrders,
  getDashboardInsights,
} from "../services/dashboardApi";

export function useDashboard() {
  const [loading, setLoading] = useState(true);

  const [summary, setSummary] = useState<any>(null);
  const [revenue, setRevenue] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const [
          summaryData,
          revenueData,
          categoryData,
          ordersData,
          insightsData,
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
        setInsights(insightsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    loading,
    summary,
    revenue,
    category,
    orders,
    insights,
  };
}