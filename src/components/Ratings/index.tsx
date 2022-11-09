import FullStar from "../../assets/images/full-star.svg";
import EmptyStar from "../../assets/images/empty-star.svg";
import { useEffect } from "react";

const Ratings = ({ stars }: any) => {
  const fullStars = parseInt(stars);

  useEffect(() => console.log("stars?", stars));

  const renderStars = (count: number): React.ReactElement[] => {
    let starsElements: React.ReactElement[] = [];

    console.log("count", count);

    for (let x = 0; x < 5; x++) {
      starsElements = [
        ...starsElements,
        x < count ? <img src={FullStar} /> : <img src={EmptyStar}></img>,
      ];
    }

    return starsElements;
  };
  return <div>{stars && renderStars(fullStars)}</div>;
};

export default Ratings;
