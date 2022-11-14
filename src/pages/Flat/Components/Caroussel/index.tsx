import { IFlat } from "../../../../models/flat.model";
import style from "./Carousel.module.scss";

const Carousel = ({ pictures, title }: IFlat) => {
  return (
    <div className={style.carouselContainer}>
      {pictures.map((picture: string) => 
        (<img
          src={picture}
          alt={title}
          key={`carouselPicture-${picture}`}
          className={style.carouselPhotos}
        />)
      )}
    </div>
  );
};

export default Carousel;
