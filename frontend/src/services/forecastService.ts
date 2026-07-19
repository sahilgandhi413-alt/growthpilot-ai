import api from "./api";

export const getForecastSummary = async () => {
  const { data } = await api.get("/forecast/summary");
  return data;
};

export const getForecastChart = async () => {
  const { data } = await api.get("/forecast/chart");
  return data;
};

export const getForecastPredictions = async () => {
  const { data } = await api.get("/forecast/predictions");
  return data;
};

export const getForecastTrends = async () => {
  const { data } = await api.get("/forecast/trends");
  return data;
};

export const getForecastAISummary = async () => {
  const { data } = await api.get("/forecast/ai-summary");
  return data;
};