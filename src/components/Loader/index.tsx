import style from "./Loader.module.scss";
import LogoLoader from "../../assets/images/logo.svg";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader__logoContainer}>
        <img src={LogoLoader} className={style.loader__logo} alt="logo loader" />
      </div>
    </div>
  );
};

export default Loader;
