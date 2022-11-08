import style from "./Collapse.module.scss";
import UpArrow from "../../assets/images/up-arrow.svg"

const Collapse = () => {
  return (
    <div className={style.accordion}>
      <button className={style.headerButton} aria-expanded='true' >
        <h2 className={style.headerButton__header}>
          Some text
        </h2>
        <img src={UpArrow} alt="contenu visible" />
          {/* <button className={style.button}></button> */}
      </button>
      <div className={style.descriptionBox}>
        <p className={style.descriptionBox__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consequatur quos, delectus amet sequi pariatur sit. Maiores veritatis
          rerum nihil accusantium? Recusandae, dolorem rerum. Sapiente soluta
          minus ad consequatur quo?
        </p>
      </div>
    </div>
  );
};

export default Collapse;
