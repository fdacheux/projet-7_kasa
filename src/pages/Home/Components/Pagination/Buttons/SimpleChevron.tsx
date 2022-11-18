import LeftChevron from "../../../../../assets/images/left-arrow.svg"
import RightChevron from "../../../../../assets/images/right-arrow.svg"
import style from "./Chevrons.module.scss"

const SimpleChevron = (isLeftChevron: boolean) => {
  const ariaLabel = isLeftChevron
    ? "Résultats précédents"
    : "Résultats suivants";
  return (
    <button
      //   onClick={() => isLeftChevron ? previous() : next()}
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

export default SimpleChevron;
