import style from "./Banner.module.scss";

interface Props {
  hasTitle: boolean;
  title?: string;
  imgUrl: string;
}

function Banner({ ...props }: Props) {
  return (
    <div className={style.banner}>
      {props.hasTitle ? <h1 className={style.title}>{props.title}</h1> : null}
      <div className={style.imgContainer}>
        <img src={props.imgUrl} className={style.bannerImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
