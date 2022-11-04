import Card from "../Card"
import style from './Gallery.module.scss'

function Gallery() {
    return (
        <section className={style.gallery}>
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
        </section>
    )
}

export default Gallery 