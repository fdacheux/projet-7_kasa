import Card from "../../../../components/Card";
import style from "./Gallery.module.scss";
import { useFindFlats } from "../../../../utils/hooks/find-flats.hook";
import Loader from "../../../../components/Loader";
import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import Pagination from "../Pagination";

function Gallery() {
  const { data, isLoading, fetch, size, error } = useFindFlats();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);

  const previous = useCallback(() => {
    fetch((page - 1) * limit - limit, limit);
    setPage(page - 1);
  }, [fetch, page, limit]);

  const next = useCallback(() => {
    fetch(page * limit, limit);
    setPage(page + 1);
  }, [fetch, page, limit]);

  const firstPage = useCallback(() => {
    fetch(0, limit);
    setPage(1);
  }, [fetch, limit]);

  const lastPage = useCallback(() => {
    fetch(Math.floor(size / limit) * limit, limit);
    setPage(Math.ceil(size / limit));
  }, [fetch, size, limit]);

  useEffect(() => {
    fetch(0, limit);
    setPage(1);
  }, [fetch, limit]);

  return !error ? (
    <section className={style.gallerySection}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.gallery}>
          {data &&
            data.map((flat: any) => (
              <Link
                key={`flat-${flat.id}`}
                to={`/flat/${flat.id}`}
                className={style.cardLinks}
              >
                <Card key={flat.id} title={flat.title} cover={flat.cover} />
              </Link>
            ))}
          <Pagination
            previous={previous}
            next={next}
            firstPage={firstPage}
            lastPage={lastPage}
            setLimit={setLimit}
            limit={limit}
            page={page}
          />
        </div>
      )}
    </section>
  ) : (
    <span data-testid="error">'{error}'</span>
  );
}

export default Gallery;
