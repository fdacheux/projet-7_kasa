import FullStar from "../../../../assets/images/full-star.svg";
import EmptyStar from "../../../../assets/images/empty-star.svg";
import style from "./Ratings.module.scss"

interface Iratings {
  stars: string;
}

const Ratings = ({ stars }: Iratings) => {
  const fullStars = parseInt(stars);

  const renderStars = (count: number): React.ReactElement[] => {
    let starsElements: React.ReactElement[] = [];

    for (let x = 0; x < 5; x++) {
      starsElements = [
        ...starsElements,
        x < count ? (
          <img src={FullStar} alt={`étoile pleine ${x + 1} sur 5`} />
        ) : (
          <img src={EmptyStar} alt="étoile vide" />
        ),
      ];
    }

    return starsElements;
  };
  return (
    <div aria-label={`Cette location a reçu une note de ${stars} sur 5`} className={style.ratingContainer}>
      {stars && renderStars(fullStars)}
    </div>
  );
};

export default Ratings;
