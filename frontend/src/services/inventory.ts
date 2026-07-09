import api from "./api";

export async function getInventory() {
  const res = await api.get("/inventory");
  return res.data;
}