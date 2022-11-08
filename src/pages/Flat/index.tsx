import Loader from "../../components/Loader";
import useFindFlat from "../../utils/hooks/find-flat.hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from './Flat.module.scss'

const Flat = () => {
  let { id } = useParams();

  const { data, isLoading, error } = useFindFlat(id || "");
  let flat = data ? { ...data[0] } : undefined;
  // const 

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className={style.title}>{flat?.title}</h1>
          <span>{flat?.rating}</span>
          <img
            src={flat?.cover}
            alt=""
            style={{ height: "125px", width: "125px" }}
          />
        </div>
      ) : (
        <span data-testid="error">'{error}'</span>
      )}
    </section>
  );
};

export default Flat;
