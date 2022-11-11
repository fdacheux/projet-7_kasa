import { IHost } from "../../../../models/flat.model";
import style from "./Host.module.scss";

const Host = ({ name, picture }: IHost) => {
  return (
    <div className={style.hostContainer}>
      <div className={style.hostName}>{name}</div>
      <img src={picture} alt={name} className={style.avatar} />
    </div>
  );
};

export default Host;
