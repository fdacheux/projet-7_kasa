import { IFlat } from "../../../../models/flat.model";
import style from "./Carousel.module.scss";
import LeftChevron from "../../../../assets/images/left-arrow.svg";
import RightChevron from "../../../../assets/images/right-arrow.svg";
import { useState, useEffect } from "react";

const Carousel = ({ pictures, title }: IFlat) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(pictures.length);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setLength(pictures.length);
  }, [pictures]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex === length - 1) {
      setCurrentIndex(0);
    }
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        if (currentIndex < length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }
    }, 4000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={style.carouselContainer}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {pictures.map((picture: string, index: number) => (
        <img
          src={picture}
          alt={title}
          key={`carouselPicture-${picture}`}
          className={`${style.carouselPhotos} ${
            index === currentIndex ? `${style.active}` : ""
          }`}
        />
      ))}
      {length > 2 && (
        <div className={style.carouselContainer__controls}>
          <button
            aria-label="Image précédente"
            className={style.carouselContainer__leftChevron}
            onClick={previous}
          >
            <img
              src={LeftChevron}
              alt=""
              className={`${style.chevrons} ${style.leftChevron}`}
            />
          </button>
          <button
            aria-label="Image suivante"
            className={`${style.carouselContainer__rightChevron} ${style.carouselButton}`}
            onClick={next}
          >
            <img
              src={RightChevron}
              alt=""
              className={`${style.chevrons} ${style.rightChevron}`}
            />
          </button>
        </div>
      )}
      <div className={style.carouselContainer__imagesProgression}>
        <p>{`${currentIndex + 1}/${length}`}</p>
      </div>
    </div>
  );
};

export default Carousel;
