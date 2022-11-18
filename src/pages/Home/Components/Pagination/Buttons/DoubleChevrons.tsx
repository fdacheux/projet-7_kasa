import LeftChevron from "../../../../../assets/images/left-arrow.svg";
import RightChevron from "../../../../../assets/images/right-arrow.svg";
import style from "./Chevrons.module.scss";

const DoubleChevrons = (isLeftChevron: boolean) => {

  const ariaLabel = `Aller à la ${
    isLeftChevron ? "première" : "dernière"
    } page`;
  
  const imageSrc = isLeftChevron ? LeftChevron : RightChevron;
  
  return (
    <button
      // onClick={() => isLeftChevron ? firstPage() : lastPage()}
      className={style.paginationButtons}
      aria-label={ariaLabel}
    >
      <img src={imageSrc} alt="" className={style.paginationButtons__icon} />
      <img src={imageSrc} alt="" className={style.paginationButtons__icon} />
    </button>
  );
};

export default DoubleChevrons;
