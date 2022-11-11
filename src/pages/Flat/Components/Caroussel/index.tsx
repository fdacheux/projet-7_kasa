import style from './Carousel.module.scss'

const Carousel = ({ src , alt }: any) => {
  return (
    <div className={style.carouselContainer}>
      <img src={src} alt={alt} className={style.carouselPhotos} />
    </div>
  )
}

export default Carousel
