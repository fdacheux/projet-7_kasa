import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../data/data.json";

interface IFlat {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

const useFindFlat = (flatId: string) => {
  const [data, setData] = useState<IFlat[]>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const errorRedirection = useNavigate()
  
  const getFlat = useCallback(async () => {
    try {
      const response = [...Data].find(({ id }) => id === flatId);
      if (!response) {
        return errorRedirection("/error");
      } else {
        setData([response]);
      }
    } catch (err: any) {
      console.log(err.message);
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  }, [flatId, errorRedirection]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getFlat();
    }, 1800);
  }, [getFlat]);

  return { isLoading, data, error };
};

export default useFindFlat;
