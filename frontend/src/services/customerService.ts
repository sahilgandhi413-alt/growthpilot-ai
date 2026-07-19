import api from "./api";

export const getCustomerSummary = async () => {
  const { data } = await api.get("/customers/summary");
  return data;
};

export const getCustomerChart = async () => {
  const { data } = await api.get("/customers/chart");
  return data;
};

export const getCustomerTable = async () => {
  const { data } = await api.get("/customers/table");
  return data;
};

export const getCustomerInsights = async () => {
  const { data } = await api.get("/customers/insights");
  return data;
};