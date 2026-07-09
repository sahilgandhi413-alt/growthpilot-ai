import api from "./api";

export async function getMonthlySales() {
  const res = await api.get("/charts/sales");
  return res.data;
}
