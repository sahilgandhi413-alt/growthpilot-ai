import api from "./api";

export const getDashboardSummary = async () => {
  const { data } = await api.get("/dashboard");
  return data;
};

export const getRevenueChart = async () => {
  const { data } = await api.get("/dashboard/revenue");
  return data;
};

export const getCategoryChart = async () => {
  const { data } = await api.get("/dashboard/category");
  return data;
};

export const getRecentOrders = async () => {
  const { data } = await api.get("/dashboard/orders");
  return data;
};

export const getDashboardInsights = async () => {
  const { data } = await api.get("/dashboard/insights");
  return data;
};