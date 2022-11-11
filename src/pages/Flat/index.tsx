// import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import Carousel from "./Components/Caroussel/index";
import DescriptionHeader from "./Components/DescriptionHeader";
import DescriptionContent from "./Components/DescriptionContent";

import useFindFlat from "../../utils/hooks/find-flat.hook";

import style from "./Flat.module.scss";

const Flat = () => {
  let { id } = useParams();

  const { data, isLoading, error } = useFindFlat(id || "");
  let flat = data ? { ...data[0] } : undefined;

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : !error && flat ? (
        <article className={style.flatContent}>
          <Carousel {...flat} />
          <DescriptionHeader {...flat} />
          <DescriptionContent {...flat} />
        </article>
      ) : (
        <span data-testid="error">'{error}'</span>
      )}
    </main>
  );
};

export default Flat;
