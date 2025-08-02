
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      const today = new Date().toISOString().split("T")[0]; // "2025-07-16"
      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${today}/v1/currencies/${currency}.json`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("API returned error " + res.status);
        const json = await res.json();
        setData(json[currency]);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setData({});
      }
    };

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
