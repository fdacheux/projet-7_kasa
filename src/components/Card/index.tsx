import style from "./Card.module.scss";
import Img from "../../assets/images/Img.png";

interface CardProps {
  title: string;
  cover: string;
}

function Card({ title = 'Titre de location', cover = `${Img}` }: CardProps) {
  return (
    <article className={style.card}>
      <div className={style.imgBox}>
        <img src={cover} alt="img" className={style.temporaryImg} />
      </div>
      <h2 className={style.title}>{title}</h2>
    </article>
  );
}

export default Card;
