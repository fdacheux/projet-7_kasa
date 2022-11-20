import { useContext } from "react";
import LeftChevron from "../../../../../assets/images/left-arrow-primarycolour.svg"
import RightChevron from "../../../../../assets/images/right-arrow-primarycolour.svg"
import { FlatsContext } from "../../../../../utils/context/flatsContext";
import style from "./Chevrons.module.scss"

interface ISingleChevron {
  isLeftChevron?: boolean;
}

const SingleChevron = ({isLeftChevron}: ISingleChevron) => {
  const { next, previous } = useContext(FlatsContext);
  const ariaLabel = `Résulats ${isLeftChevron
    ? "précédents"
    : "suivants"}`;
  return (
    <button
        onClick={() => isLeftChevron ? previous() : next()}
      aria-label={ariaLabel}
        className={style.paginationButtons}
    >
      <img
        src={isLeftChevron ? LeftChevron : RightChevron}
        alt=""
        className={style.paginationButtons__icon}
      />
    </button>
  );
};

export default SingleChevron;
