import { api } from "./api";

export const getDashboard = async () => {
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

export const getInventoryAlerts = async () => {
  const { data } = await api.get("/dashboard/inventory-alerts");
  return data;
};

export const getActivityFeed = async () => {
  const { data } = await api.get("/dashboard/activity");
  return data;
};

export const getAIInsights = async () => {
  const { data } = await api.get("/dashboard/insights");
  return data;
};