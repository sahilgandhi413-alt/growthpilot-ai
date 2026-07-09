import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

export const getForecast = async () => {
  const { data } = await api.get("/forecast/");
  return data;
};

export const askForecastAI = async (question: string) => {
  const { data } = await api.post("/forecast/chat", {
    question,
  });

  return data;
};
