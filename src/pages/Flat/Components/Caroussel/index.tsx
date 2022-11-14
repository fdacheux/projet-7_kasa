import { IFlat } from "../../../../models/flat.model";
import style from "./Carousel.module.scss";
import LeftChevron from "../../../../assets/images/left-arrow.svg";
import RightChevron from "../../../../assets/images/right-arrow.svg";

const Carousel = ({ pictures, title }: IFlat) => {
  return (
    <div className={style.carouselContainer}>
      {pictures.map((picture: string) => (
        <img
          src={picture}
          alt={title}
          key={`carouselPicture-${picture}`}
          className={style.carouselPhotos}
        />
      ))}
      <div className={style.carouselContainer__controls}>
        <button aria-label="Image précédente" className={style.carouselContainer__leftChevron}>
          <img src={LeftChevron} alt="" className={`${style.chevrons} ${style.leftChevron}`} />
        </button>
        <button aria-label="Image suivante" className={style.carouselContainer__rightChevron}>
          <img src={RightChevron} alt="" className={`${style.chevrons} ${style.rightChevron}`}/>
        </button>
      </div>
      <div className={style.carouselContainer__imagesProgression}>
        <p>1/4</p>
      </div>
    </div>
  );
};

export default Carousel;
