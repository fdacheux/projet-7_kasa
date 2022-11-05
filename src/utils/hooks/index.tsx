import { useCallback, useEffect, useState } from "react";
import Data from "../../data/data.json";

export const useFindFlats = () => {
  const [data, setData] = useState<any[]>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getFlats = useCallback(async () => {
    try {
      const response = [ ...Data ];
      if (!response) {
        throw new Error("No data found !");
      } else {
        setData(response);
      }
    } catch (err: any) {
      console.log(err.message);
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getFlats();
    }, 1800);
  }, [getFlats]);

  return { isLoading, data, error };
};
