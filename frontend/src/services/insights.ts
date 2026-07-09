import api from "./api";

export async function getInsights() {
  const res = await api.get("/insights");
  return res.data;
}