import style from "./Collapse.module.scss";
import UpChevron from "../../assets/images/up-arrow.svg";
import { useCallback, useState } from "react";
import IAboutData from "../../models/about.model";

const Collapse = (props: IAboutData) => {
  const [isCollapsed, setCollapse] = useState(true);
  const [isActive, setActive] = useState(false);

  const changeCollapse = useCallback(() => {
    !isActive && setCollapse(false);
    setActive((prevStatus) => !prevStatus);
  }, [isActive]);

  return (
    <article
      className={`${style.accordion}${
        props.isHalfWidth ? ` ${style.accordionHalfWidth}` : ""
      }`}
    >
      <button
        onClick={changeCollapse}
        className={style.accordionButton}
        aria-expanded={!isCollapsed}
      >
        <h2 className={style.accordion__title}>{props.title}</h2>
        <img
          src={UpChevron}
          alt=""
          className={
            isActive
              ? style.accordionButton__chevron
              : style.accordionButton__chevronActive
          }
        />
      </button>
      {!isCollapsed && (
        <div
          onAnimationEnd={() => {
            !isActive && setCollapse(true);
          }}
          className={`${style.accordionBody} ${
            props.isHalfWidth && style.halfWidthBox
          } ${isActive ? style.expanded : style.collapsed}`}
        >
          {props.children}
        </div>
      )}
    </article>
  );
};

export default Collapse;
