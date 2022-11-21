import { useCallback, useState } from "react";
import Data from "../../data/data.json";
import { IFlat } from "../../models/flat.model";

const LIMIT = 10;

const paginate = (array: IFlat[], offset?: number, limit?: number) =>
  array.slice(offset ?? 0, (offset ?? 0) + (limit ?? LIMIT));

export const useFindFlats = () => {
  const [data, setData] = useState<IFlat[]>([]);
  const [size] = useState<number>(Data.length);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getFlats = useCallback(async (offset?: number, limit?: number) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const response = paginate([...Data], offset, limit);
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
    }, 1200);
  }, []);

  return { isLoading, data, fetch: getFlats, size, error };
};
