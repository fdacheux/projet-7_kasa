import { IFlat } from '../../../../models/flat.model'
import style from './Carousel.module.scss'

const Carousel = ({ cover , title }: IFlat) => {
  return (
    <div className={style.carouselContainer}>
      <img src={cover} alt={title} className={style.carouselPhotos} />
    </div>
  )
}

export default Carousel
