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
  previous: () => void;
  next: () => void;
  first: () => void;
  last: () => void;
  goToPage: (page: number) => void;
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
  previous: () => {},
  next: () => {},
  first: () => {},
  last: () => {},
  goToPage: (_page: number) => {},
  setLimit: (_limit: number) => {},
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

  const previous = useCallback(() => {
    fetchFlats((page - 1) * limit - limit, limit);
  }, [fetchFlats, page, limit]);

  const next = useCallback(() => {
    fetchFlats(page * limit, limit);
  }, [fetchFlats, page, limit]);

  const first = useCallback(() => {
    fetchFlats(0, limit);
  }, [fetchFlats, limit]);

  const last = useCallback(() => {
    fetch(Math.floor(size / limit) * limit, limit);
    setPage(Math.ceil(size / limit));
  }, [fetch, size, limit]);

  const goToPage = useCallback(
    (pageNumber: number) => {
      fetchFlats((pageNumber - 1) * limit, limit);
    },
    [fetchFlats, limit]
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
        previous,
        next,
        first,
        last,
        goToPage,
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
