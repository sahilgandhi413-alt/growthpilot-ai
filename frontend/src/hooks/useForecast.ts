import { useEffect, useState } from "react";
import { getForecast } from "../services/api";

export default function useForecast() {
  const [forecast, setForecast] = useState<unknown>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadForecast();
  }, []);

  async function loadForecast() {
    try {
      const data = await getForecast();
      setForecast(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    forecast,
    loading,
    refresh: loadForecast,
  };
}
