import style from "./Pagination.module.scss";
import { useContext } from "react";
import { FlatsContext } from "../../../../utils/context/flatsContext";
import SingleChevron from "./Buttons/SingleChevron";
import DoubleChevrons from "./Buttons/DoubleChevrons";
import PageSelectorButtons from "./Buttons/PageSelectorButtons";
import CardsPerPageSelector from "./CardsPerPageSelector/index";

const Pagination = () => {
  const { page, pageCount, limit, size } = useContext(FlatsContext);

  return (
    <div className={style.paginationContainer}>
      <span className={style.totalDisplay}>
        Propriétés : {limit * page <= size ? limit * page : size} / {size}
      </span>
      <div className={style.buttonsContainer}>
        {page > 1 && (
          <div>
            <DoubleChevrons isLeftChevron={true} />
            <SingleChevron isLeftChevron={true} />
          </div>
        )}

        <PageSelectorButtons />

        {page < pageCount && (
          <div>
            <SingleChevron isLeftChevron={false} />
            <DoubleChevrons isLeftChevron={false} />
          </div>
        )}
      </div>
      <CardsPerPageSelector />
    </div>
  );
};

export default Pagination;
