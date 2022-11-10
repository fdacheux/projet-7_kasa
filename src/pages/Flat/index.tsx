import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Collapse from "../../components/Collapse";
import Loader from "../../components/Loader";
import Ratings from "./Components/Ratings";
import Tags from "./Components/Tags";
import Host from "./Components/Host";

import useFindFlat from "../../utils/hooks/find-flat.hook";
import { toKey } from "../../utils/toKey.util";

import style from "./Flat.module.scss";
import Carousel from "./Components/Caroussel";

const Flat = () => {
  let { id } = useParams();

  const { data, isLoading, error } = useFindFlat(id || "");
  let flat = data ? { ...data[0] } : undefined;

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : !error && flat ? (
        <article className={style.flatContent}>
          <Carousel src={flat.cover} alt={flat.title} />
          <section className={style.descriptionHeaderBox}>
            <header className={style.descriptionHeader}>
              <h1 className={style.title}>{flat.title}</h1>
              <h2 className={style.subtitle}>{flat.location}</h2>
              <Tags tags={flat.tags} />
            </header>
            <aside className={style.descriptionAside}>
              <Ratings stars={flat.rating} />
              <Host host={flat.host} />
            </aside>
          </section>

          <section
            className={style.descriptionContent}
            aria-label="Description et équipements de l'appartement."
          >
            <Collapse id={flat.id} title="Description" isHalfWidth={true}>
              {flat.description}
            </Collapse>
            <Collapse id={flat.id} title="Équipements" isHalfWidth={true}>
              {
                <ul>
                  {flat.equipments.map((element) => (
                    <li
                      key={`tag-${toKey(element)}`}
                      className={style.equipmentsList}
                    >
                      {element}
                    </li>
                  ))}
                </ul>
              }
            </Collapse>
          </section>
        </article>
      ) : (
        <span data-testid="error">'{error}'</span>
      )}
    </main>
  );
};

export default Flat;
