import { useContext } from "react";
import { FlatsContext } from "../../../../utils/context/flatsContext";
import style from "./Pagination.module.scss";
import SingleChevron from "./Buttons/SingleChevron";
import DoubleChevrons from "./Buttons/DoubleChevrons";
import PageSelectorButtons from "./Buttons/PageSelectorButtons";

const Pagination = () => {
  const { goToPage, page, pageCount, limit, setLimit, size } =
    useContext(FlatsContext);
  const pageNumber = Math.ceil(size / limit);

  return (
    <div className={style.paginationContainer}>
      <span className={style.total}>
        Appartements : {limit * page <= size ? limit * page : size} / {size}
      </span>
      <div className={style.buttonsContainer}>
        {page > 1 && (
          <div>
            <DoubleChevrons isLeftChevron={true} />
            <SingleChevron isLeftChevron={true} />
          </div>
        )}
        {/* <div className={style.pageNumber}>
          {[...Array(pageNumber)].map((x, number) => (
            <button
              key={`pagination-page${number + 1}of${pageNumber}`}
              className={style.pageNumber__button}
              onClick={() => goToPage(number + 1)}
              disabled={page === number + 1}
            >
              {number + 1}
            </button>
          ))}
        </div> */}
        <PageSelectorButtons  />

        {page < pageCount && (
          <div>
            <SingleChevron isLeftChevron={false} />
            <DoubleChevrons isLeftChevron={false} />
          </div>
        )}
      </div>
      <div className={style.paginationOptions}>
        <label htmlFor="limit">Résultats par page : </label>
        <select
          name="limite"
          id="limit"
          className={style.selectLimit}
          onChange={(e: any) => setLimit(parseInt(e?.target?.value))}
          defaultValue={limit}
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
