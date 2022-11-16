import style from "./Collapse.module.scss";
import UpChevron from "../../assets/images/up-arrow.svg";
import { useState } from "react";
import IAboutData from "../../models/about.model";

const Collapse = (props: IAboutData) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [isActive, setActive] = useState(false);

  const changeCollapse = () => { !isActive && setCollapse(true); setActive(!isActive)};
  return (
    <article
      className={`${style.accordion}${
        props.isHalfWidth ? ` ${style.accordionHalfWidth}` : ""
      }`}
    >
      <button
        onClick={changeCollapse}
        className={style.headerButton}
        aria-expanded={isCollapsed}
      >
        <h2 className={style.headerButton__header}>{props.title}</h2>
        <img
          src={UpChevron}
          alt="contenu visible"
          className={
            isActive
              ? style.headerButton__chevron
              : style.headerButton__chevronActive
          }
        />
      </button>
      {isCollapsed && (
        <div
          onAnimationEnd={() => { !isActive && setCollapse(false) } }
          className={`${style.descriptionBox} ${
            props.isHalfWidth && style.halfWidthBox
          } ${isActive? style.activeBox : style.unactiveBox}`}
        >
          {props.children}
        </div>
      )}
    </article>
  );
};

export default Collapse;
