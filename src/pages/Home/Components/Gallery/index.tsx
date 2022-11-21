import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card";
import Loader from "../../../../components/Loader";
import { FlatsContext } from "../../../../utils/context/flatsContext";
import Pagination from "../Pagination";
import style from "./Gallery.module.scss";

function Gallery() {
  const { flats: data, error, isLoading } = useContext(FlatsContext);

  return !error ? (
    <section className={style.gallerySection}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.gallery}>
          {data &&
            data.map((flat: any, x: number) => (
              <Link
                key={`flat-${flat.id}`}
                to={`/flat/${flat.id}`}
                className={style.cardLinks}
              >
                <Card key={flat.id} title={flat.title} cover={flat.cover} />
              </Link>
            ))}
          <Pagination />
        </div>
      )}
    </section>
  ) : (
    <span data-testid="error">'{error}'</span>
  );
}

export default Gallery;
