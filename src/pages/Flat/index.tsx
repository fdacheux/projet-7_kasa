import Loader from "../../components/Loader";
import useFindFlat from "../../utils/hooks/find-flat.hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
      ) : !error ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{flat?.title}</span>
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
