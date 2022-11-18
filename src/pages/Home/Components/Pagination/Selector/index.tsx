import style from "./Selector.module.scss"

const Selector = (limit: number, setLimit: any) => {
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
          <option value="6" >6</option>
          <option value="12" >
            12
          </option>
          <option value="24">24</option>
        </select>
    </div>
  )
}

export default Selector
