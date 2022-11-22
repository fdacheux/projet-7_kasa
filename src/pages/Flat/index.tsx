import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import Carousel from "./Components/Carousel/index";
import DescriptionHeader from "./Components/DescriptionHeader";
import DescriptionContent from "./Components/DescriptionContent";

import useFindFlat from "../../utils/hooks/find-flat.hook";

import style from "./Flat.module.scss";
import ErrorMessage from "../../components/ErrorMessage";

const Flat = () => {
  let { id } = useParams();

  const { data, isLoading, error } = useFindFlat(id || "");
  let flat = data ? { ...data[0] } : undefined;

  const render = () => {
    return !error && flat ? (
      <article className={style.flatContent}>
        <Carousel {...flat} />
        <DescriptionHeader {...flat} />
        <DescriptionContent {...flat} />
      </article>
    ) : (
      <ErrorMessage />
    );
  };

  return <main>{isLoading ? <Loader /> : render()}</main>;
};

export default Flat;
