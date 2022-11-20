import { useContext } from "react";
import { FlatsContext } from "../../../../../utils/context/flatsContext";
import style from "./CardsPerPageSelector.module.scss";

const CardsPerPageSelector = () => {
  const {limit, setLimit} = useContext(FlatsContext)

  return (
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
  );
};

export default CardsPerPageSelector;
