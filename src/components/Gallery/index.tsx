import Card from "../Card";
import style from "./Gallery.module.scss";
import { useFindFlats } from "../../utils/hooks";
import Loader from "../Loader";
import { Link } from "react-router-dom";

function Gallery() {

  const { data, isLoading, error } = useFindFlats();

  return !error ? (
    <section>
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
