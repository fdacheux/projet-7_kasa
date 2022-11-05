import style from "./Loader.module.scss";
import LogoLoader from "../../assets/images/logo-loader.png";

const Loader = () => {
  return (
    <div className="wrapper">
      <div className={style.logoContainer}>
        <img src={LogoLoader} className={style.logo} alt="logo loader" />
      </div>
    </div>
  );
};

export default Loader;
