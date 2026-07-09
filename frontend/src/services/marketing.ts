import api from "./api";

export async function getMarketing() {
  const res = await api.get("/marketing");
  return res.data;
}