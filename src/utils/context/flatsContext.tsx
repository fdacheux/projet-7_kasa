import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IFlat } from "../../models/flat.model";
import { useFindFlats } from "../hooks/find-flats.hook";

interface FlatsContextProps {
  children: ReactNode;
}

interface FlatsContextProviderProps {
  flats: IFlat[];
  isLoading: boolean;
  fetchFlats: (offset: number, limit: number) => void;
  size: number;
  error: boolean;
  page: number;
  limit: number;
  setLimit: (limit: number) => void;
}

const FlatsContext = createContext<FlatsContextProviderProps>({
  flats: [],
  isLoading: false,
  size: 0,
  error: false,
  page: 1,
  limit: 12,
  fetchFlats: (offset: number, limit: number) => {},
  setLimit: (limit: number) => {},
});

const FlatsContextProvider = ({ children }: FlatsContextProps) => {
  const { data: flats, isLoading, fetch, size, error } = useFindFlats();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);

  const fetchFlats = useCallback(
    (offset: number, limit: number) => {
      setPage((offset + limit) / limit);
      fetch(offset, limit);
    },
    [fetch]
  );

  // fetch a user from a fake backend API
  useEffect(() => {
    fetchFlats(0, limit);
  }, [fetchFlats, limit]);

  return (
    // the Provider gives access to the context to its children
    <FlatsContext.Provider
      value={{
        flats,
        isLoading,
        fetchFlats,
        size,
        error,
        page,
        limit,
        setLimit,
      }}
    >
      {children}
    </FlatsContext.Provider>
  );
};

export { FlatsContext, FlatsContextProvider };
