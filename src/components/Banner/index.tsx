import style from "./Banner.module.scss";

interface Props {
  isHomepage?: boolean;
  hasTitle: boolean;
  title?: string;
  imgUrl: string;
}

function Banner(props: Props) {
  return (
    // className={`banner ${active ? "active" : ""}`}
    <div className={style.banner}>
      {props.hasTitle && <h1 className={style.title}>{props.title}</h1>}
      <div className={style.imgContainer}>
        <img
          src={props.imgUrl}
          className={`${style.bannerImg} ${
            props.isHomepage && style.homepageBannerImg
          } `}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
