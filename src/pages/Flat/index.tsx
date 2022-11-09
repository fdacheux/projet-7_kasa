import Loader from "../../components/Loader";
import useFindFlat from "../../utils/hooks/find-flat.hook";
import Ratings from "../../components/Ratings";
import Tags from "../../components/Tags";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./Flat.module.scss";
import Collapse from "../../components/Collapse";
import Host from "./Components/Host";

const Flat = () => {
  let { id } = useParams();

  const { data, isLoading, error } = useFindFlat(id || "");
  let flat = data ? { ...data[0] } : undefined;

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : !error && flat ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={flat.cover}
            alt=""
            style={{ height: "125px", width: "125px" }}
          />
          <h1 className={style.title}>{flat.title}</h1>
          <h2>{flat.location}</h2>
          <Tags tags={flat.tags} />
          <Ratings stars={flat.rating} />
          <Host host={flat.host} />
          <Collapse id={flat.id} title="Description">
            {flat.description}
          </Collapse>
          <Collapse id={flat.id} title="Équipements">
            {
              <ul>
                {flat.equipments.map((element) => (
                  <li key={`tag-${element}`}>{element}</li>
                ))}
              </ul>
            }
          </Collapse>
        </div>
      ) : (
        <span data-testid="error">'{error}'</span>
      )}
    </section>
  );
};

export default Flat;
