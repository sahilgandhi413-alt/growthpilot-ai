import {api} from "./api";

export async function getForecast() {
  const res = await api.get("/forecast");
  return res.data;
}