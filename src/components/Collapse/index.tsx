import style from "./Collapse.module.scss";
import UpChevron from "../../assets/images/up-arrow.svg";
import { useState, useEffect } from "react";
import IProps from "../../models/about.model";

const Collapse = (props: IProps) => {
  const [isCollapsed, setCollapse] = useState(false);

  const changeCollapse = () => setCollapse(!isCollapsed);
  useEffect(() => {
    console.log(isCollapsed);
  }, [isCollapsed]);

  return (
    <article
      className={`${style.accordion} ${
        props.isHalfWidth && style.accordionHalfWidth
      }`}
      key={props.id}
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
            isCollapsed
              ? style.headerButton__chevron
              : style.headerButton__chevronActive
          }
        />
      </button>
      {isCollapsed && (
        <div
          className={`${style.descriptionBox} ${
            props.isHalfWidth && style.halfWidthBox
          }`}
        >
          <p className={style.descriptionBox__text}>{props.children}</p>
        </div>
      )}
    </article>
  );
};

export default Collapse;
