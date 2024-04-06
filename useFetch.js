import { useEffect, useState } from "react";

export const useFetch = (api, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(api, options);
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [api, options]);

  return { data, isLoading, error };
};
