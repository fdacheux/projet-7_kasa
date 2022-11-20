import { useContext } from "react";
import LeftChevron from "../../../../assets/images/left-arrow-primarycolour.svg";
import RightChevron from "../../../../assets/images/right-arrow-primarycolour.svg";
import { FlatsContext } from "../../../../utils/context/flatsContext";
import style from "./Pagination.module.scss";
import SingleChevron from "./Buttons/SingleChevron";

const Pagination = () => {
  const { first, last, goToPage, page, limit, setLimit, size } =
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
            <button
              onClick={() => first()}
              className={style.paginationButtons}
              aria-label="Aller à la première page"
            >
              <img
                src={LeftChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
              <img
                src={LeftChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
            </button>
            <SingleChevron isLeftChevron={true} />
          </div>
        )}
        <div className={style.pageNumber}>
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
        </div>

        {page < pageNumber && (
          <div>
            <SingleChevron isLeftChevron={false} />
            <button
              onClick={() => last()}
              className={style.paginationButtons}
              aria-label="Aller à la dernière page"
            >
              <img
                src={RightChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
              <img
                src={RightChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
            </button>
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
