import Card from "../../../../components/Card";
import style from "./Gallery.module.scss";
import { useFindFlats } from "../../../../utils/hooks/find-flats.hook";
import Loader from "../../../../components/Loader";
import { Link } from "react-router-dom";

function Gallery() {
  const { data, isLoading, error } = useFindFlats();

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
        </div>
      )}
    </section>
  ) : (
    <span data-testid="error">'{error}'</span>
  );
}

export default Gallery;
