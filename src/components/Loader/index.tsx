import style from "./Loader.module.scss";
import LogoLoader from "../../assets/images/logo.svg";

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logoContainer}>
        <img src={LogoLoader} className={style.logo} alt="logo loader" />
      </div>
    </div>
  );
};

export default Loader;
