import style from "./Banner.module.scss";

interface Props {
  isHomepage?: boolean;
  hasTitle: boolean;
  title?: string;
  imgWebpUrl: string;
  imgUrl: string;
}

function Banner(props: Props) {
  return (
    <div className={style.banner}>
      {props.hasTitle && <h1 className={style.title}>{props.title}</h1>}
      <picture className={style.imgContainer}>
        <source type="image/webp" srcSet={props.imgWebpUrl} />
        <img
          src={props.imgUrl}
          className={`${style.bannerImg} ${
            props.isHomepage && style.homepageBannerImg
          } `}
          alt=""
        />
      </picture>
    </div>
  );
}

export default Banner;
