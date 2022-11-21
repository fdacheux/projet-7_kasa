import { useContext } from "react";
import { FlatsContext } from "../../../../../utils/context/flatsContext";
import style from "./PageSelectorButtons.module.scss";


const PageSelectorButtons = () => {
  const { page, pageCount, goToPage } = useContext(FlatsContext);
  return (
    <div className={style.pageCount}>
      {[...Array(pageCount)].map((x, number) => (
        <button
          key={`pagination-page${number + 1}of${pageCount}`}
          className={style.pageCount__button}
          onClick={() => goToPage(number + 1)}
          disabled={page === number + 1}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default PageSelectorButtons;
