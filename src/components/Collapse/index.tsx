import style from "./Collapse.module.scss";
import UpChevron from "../../assets/images/up-arrow.svg";
import { useState, useEffect } from "react";

const Collapse = () => {
  const [isCollapsed, setCollapse] = useState(false);

  const changeCollapse = () => setCollapse(!isCollapsed);
  useEffect(() => {
    console.log(isCollapsed);
  }, [isCollapsed]);

  return (
    <div className={style.accordion}>
      <button
        onClick={changeCollapse}
        className={style.headerButton}
        aria-expanded={isCollapsed}
      >
        <h2 className={style.headerButton__header}>Some text</h2>
        <img src={UpChevron} alt="contenu visible" className={isCollapsed ? style.headerButton__chevron : style.headerButton__chevronActive} />
      </button>
      {isCollapsed && (
        <div className={style.descriptionBox}>
          <p className={style.descriptionBox__text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            consequatur quos, delectus amet sequi pariatur sit. Maiores
            veritatis rerum nihil accusantium? Recusandae, dolorem rerum.
            Sapiente soluta minus ad consequatur quo?
          </p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
