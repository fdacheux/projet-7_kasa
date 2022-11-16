import { useFindFlats } from "../../../../utils/hooks/find-flats.hook";
import style from "./Pagination.module.scss";
import LeftChevron from "../../../../assets/images/left-arrow-primarycolour.svg";
import RightChevron from "../../../../assets/images/right-arrow-primarycolour.svg";

interface PaginationProps {
  previous: () => void;
  next: () => void;
  firstPage: () => void;
  lastPage: () => void;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  page: number;
}

const Pagination = ({
  previous,
  next,
  firstPage,
  lastPage,
  setLimit,
  limit,
  page,
}: PaginationProps) => {
  console.log(page);
  const { size } = useFindFlats();

  return (
    <div className={style.paginationContainer}>
      <span className={style.total}>Appartements : {size}</span>
      <div className={style.buttonsContainer}>
        {page > 1 && (
          <>
            <button
              onClick={() => firstPage()}
              className={style.paginationButtons}
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
            <button
              onClick={() => previous()}
              aria-label="Résultats précédents"
              className={style.paginationButtons}
            >
              <img
                src={LeftChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
            </button>
          </>
        )}
        {page < size / limit && (
          <>
            <button onClick={() => next()} className={style.paginationButtons}>
              <img
                src={RightChevron}
                alt=""
                className={style.paginationButtons__icon}
              />
            </button>
            <button
              onClick={() => lastPage()}
              className={style.paginationButtons}
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
          </>
        )}
      </div>
      <div className={style.paginationOptions}>
        <label htmlFor="limit">Résultats par page : </label>
        <select
          name="limite"
          id="limit"
          className={style.selectLimit}
          onChange={(e: any) => setLimit(parseInt(e?.target?.value))}
        >
          <option value={limit}>---</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
