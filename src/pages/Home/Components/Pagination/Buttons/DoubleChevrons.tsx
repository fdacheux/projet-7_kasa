import { useContext } from "react";
import LeftChevron from "../../../../../assets/images/left-arrow-primarycolour.svg";
import RightChevron from "../../../../../assets/images/right-arrow-primarycolour.svg";
import { FlatsContext } from "../../../../../utils/context/flatsContext";
import style from "./Chevrons.module.scss";

interface IDoubleChevrons {
  isLeftChevron: boolean;
}

const DoubleChevrons = ({ isLeftChevron }: IDoubleChevrons) => {
  const { first, last } = useContext(FlatsContext);

  const ariaLabel = `Aller à la ${
    isLeftChevron ? "première" : "dernière"
  } page`;

  const imageSrc = isLeftChevron ? LeftChevron : RightChevron;

  return (
    <button
      onClick={() => (isLeftChevron ? first() : last())}
      className={style.paginationButtons}
      aria-label={ariaLabel}
    >
      <img src={imageSrc} alt="" className={style.paginationButtons__icon} />
      <img src={imageSrc} alt="" className={style.paginationButtons__icon} />
    </button>
  );
};

export default DoubleChevrons;
