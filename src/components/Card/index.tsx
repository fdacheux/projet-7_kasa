import style from "./Card.module.scss";
import Img from "../../assets/images/Img.png";

function Card() {
  return (
    <article className={style.card}>
      <img src={Img} alt="img" className={style.temporaryImg} />
      <h3 className={style.title}>Titre de location</h3>
    </article>
  );
}

export default Card;
