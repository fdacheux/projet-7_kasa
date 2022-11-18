
import style from "./PageNumberButtons.module.scss"

const PageNumberButtons = (pageNumber: number, page: number) => {
  return (
    <div className={style.pageNumber}>
    {[...Array(pageNumber)].map((x, number) => (
      <button
        key={`pagination-page${number + 1}of${pageNumber}`}
        className={style.pageNumber__button}
            // onClick={() => goToPage(number + 1)}
            disabled={page === number+1}
      >
        {number + 1}
      </button>
    ))}
  </div>
  );
};

export default PageNumberButtons;
