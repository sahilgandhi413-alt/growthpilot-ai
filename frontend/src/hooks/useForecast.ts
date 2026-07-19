import { useEffect, useState } from "react";
import { getForecastChart } from "../services/forecastService";

export default function useForecast() {
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadForecast();
  }, []);

  async function loadForecast() {
    try {
      const data = await getForecastChart();
      setForecast(data);
    } catch (err) {
      console.error(err);
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