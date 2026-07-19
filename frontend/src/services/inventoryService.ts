import api from "./api";

export const getInventorySummary = async () => {
  const { data } = await api.get("/inventory/summary");
  return data;
};

export const getInventoryTable = async () => {
  const { data } = await api.get("/inventory/table");
  return data;
};

export const getInventoryChart = async () => {
  const { data } = await api.get("/inventory/chart");
  return data;
};

export const getInventoryAlerts = async () => {
  const { data } = await api.get("/inventory/alerts");
  return data;
};

export const getInventoryRecommendations = async () => {
  const { data } = await api.get("/inventory/recommendations");
  return data;
};

export const getInventoryAISummary = async () => {
  const { data } = await api.get("/inventory/ai-summary");
  return data;
};

export const getRestockPanel = async () => {
  const { data } = await api.get("/inventory/restock");
  return data;
};